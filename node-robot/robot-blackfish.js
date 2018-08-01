require('./config/property');
var request = require('request');
var constObj = require('./config/const-blackfish')
function rand(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}
class Robot {
    constructor(){
        this.webhook = constObj.paramsUrl.webhook;
    }
    httpPost (params, callback) {
        request({
            url: this.webhook,
            method: 'post',
            headers:{
            //'Content-Type':'application/x-www-form-urlencoded',  
            'Content-Type':'application/json; charset=UTF-8',
            },
            body: JSON.stringify(params)
        }, (error, response, body)=>{
            return callback(error, response, body);  //在回调里处理结果
        });
    }
    getAnyParams(type = 1){
        var msg = {};
        if(type == 1){
            var text = constObj.jiTang[rand(0,Object.keys(constObj.jiTang).length)];
            var d = new Date();
            var title = `${d.dateFormat('yyyy-MM-dd')}  ${d.dateFormat('HH:mm:ss')} 【${d.dateFormat('EEE')}】`;
            msg = {
                "msgtype": "link",
                "link":{
                    "text":text,
                    "title":`${title}加班餐订饭提醒`,
                    picUrl:constObj.paramsUrl.picUrl,
                    messageUrl:constObj.paramsUrl.messageUrl
                },
                "at": {
                    "isAtAll": true
                }
            };
        }else{
            msg = {
                "msgtype": "text",
                "text": {
                    "content": "开始订餐了"
                },
                "at": {
                    "isAtAll": true
                }
            }
        }
        return msg;
    }
    sendPost(type){
        var params = this.getAnyParams(type);
        this.httpPost(params,(error, response, body)=>{
            if (error) {
                console.log('http post error info: ' + error);
            }
            if (response.statusCode != 200) {
                console.log('response status Code: ' + response.statusCode)
                return ;
            }
            var message = JSON.parse(body);
            console.log(message)
        })
    }
}
var robot = new Robot();

robot.sendPost(2)
setTimeout(()=>{
    robot.sendPost(1)
},1000)