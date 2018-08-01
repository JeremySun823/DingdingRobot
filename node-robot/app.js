// var express = require('express');
// var app = express();
// app.get('/',(req,res)=>{
//     res.send('hello world');
// })

// // https://oapi.dingtalk.com/robot/send?access_token=08ce299e558cd69bcd2af63b6884b30ba93280fe4f84d9205af83c32f88b86e3
// var server = app.listen(3000,()=>{
//     var host = server.address().address;
//     var port = server.address().port;
//     console.log('host='+host);
//     console.log('Example app listening at http://%s:%s',host,port);
// })


var request = require('request')


var jitang = {
    '1':"你的脸是为了呈现上帝赐给人类最贵重的礼物——微笑，一定要成为你工作最大的资产。",
    '2':"目标的坚定是性格中最必要的力量源泉之一，也是成功的利器之一。没有它，天才也会在矛盾无定的迷径中徒劳无功。",
    '3':'男人可以心痛，但无需沉沦;男人可以霸气，但无需霸道;男人可以柔情，但无需缠绵',
    '4':'莫找借口失败，只找理由成功。(不为失败找理由，要为成功找方法) ',
    '5':'昨晚多几分钟的准备，今天少几小时的麻烦。 ',
    '6':'只要路是对的，就不怕路远。',
    '7':'不管心情如何，不论今天过得怎么样，无论身在何方，请记得…微笑。人生没有彩排，只有现场直播，所以每一件事都要努力做得最好! ',
    '8':'用快乐去奔跑，用心去倾听，用思维去发展，用努力去奋斗，用目标去衡量，用爱去生活。',
    '9':`我们的团队具有互联网企业的开放与竞争，也拥有金融机构的严谨与细致。
    在这里，既有80后的创业领袖，也有从业逾20年的沙场老将；在这里，来自途牛、平安、宜信、华为、招商银行、高盛，摩根士丹利 等知名企业的高管团队引路护航；在这里，拥有名校背景的员工比例远超同业。我们相信，给员工最好的福利，就是让他与最优秀的同事们并肩作战。`
};

function rand(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}
 // busda robot var url = 'https://oapi.dingtalk.com/robot/send?access_token=08ce299e558cd69bcd2af63b6884b30ba93280fe4f84d9205af83c32f88b86e3'
 var url = f_robot_webhook = 'https://oapi.dingtalk.com/robot/send?access_token=87e96b8ea06d73a850f29f2224b49a58044b96600885a1bed1a7dfe90f726e26';
 var text = jitang[rand(1,8)];
var weekarray=["日","一","二","三","四","五","六"];
var week = `星期${weekarray[new Date().getDay()]}`;
var title =  '';
if(week == "星期六" || week == "星期日"){
    return;
}
var param = {
    "msgtype":"link",
    "link":{
        "text":text,
        "title": title+"加班餐订饭提醒",
        "picUrl":"https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=137601743,3755973576&fm=58&bpow=900&bpoh=500",
        "messageUrl":"https://blackfish.jinshuju.com/f/53HDTq",
    },
    "isAtAll":true,
}
request({
    url: url,
    method: "POST",
    // json: true,
    headers: {
        "content-type": "application/json;charset=UTF-8",
    },
    body: JSON.stringify(param)
    // form:param
}, function(error, response, body) {

    if (!error && response.statusCode == 200) {
        console.log('success fuhc');
        console.log(response);
    }else{
        console.log('error fuhc')
        console.log(error)
    }
}); 