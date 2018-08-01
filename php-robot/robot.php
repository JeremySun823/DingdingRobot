<?php
# php D:\fuhc\blackFish\php-robot\robot.php
// require_once __DIR__.'./Util.php';

$jitang = [
    '1'=>"你的脸是为了呈现上帝赐给人类最贵重的礼物——微笑，一定要成为你工作最大的资产。",
    '2'=>"目标的坚定是性格中最必要的力量源泉之一，也是成功的利器之一。没有它，天才也会在矛盾无定的迷径中徒劳无功。",
    '3'=>'男人可以心痛，但无需沉沦;男人可以霸气，但无需霸道;男人可以柔情，但无需缠绵',
    '4'=>'莫找借口失败，只找理由成功。(不为失败找理由，要为成功找方法) ',
    '5'=>'昨晚多几分钟的准备，今天少几小时的麻烦。 ',
    '6'=>'只要路是对的，就不怕路远。',
    '7'=>'不管心情如何，不论今天过得怎么样，无论身在何方，请记得…微笑。人生没有彩排，只有现场直播，所以每一件事都要努力做得最好! ',
    '8'=>'用快乐去奔跑，用心去倾听，用思维去发展，用努力去奋斗，用目标去衡量，用爱去生活。',
    '9'=>'我们的团队具有互联网企业的开放与竞争，也拥有金融机构的严谨与细致。
    在这里，既有80后的创业领袖，也有从业逾20年的沙场老将；在这里，来自途牛、平安、宜信、华为、招商银行、高盛，摩根士丹利 等知名企业的高管团队引路护航；在这里，拥有名校背景的员工比例远超同业。我们相信，给员工最好的福利，就是让他与最优秀的同事们并肩作战。',
];


function request_by_curl($remote_server, $post_string) {  
    $ch = curl_init();  
    curl_setopt($ch, CURLOPT_URL, $remote_server);
    curl_setopt($ch, CURLOPT_POST, 1); 
    curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 5); 
    curl_setopt($ch, CURLOPT_HTTPHEADER, array ('Content-Type: application/json;charset=utf-8'));
    curl_setopt($ch, CURLOPT_POSTFIELDS, $post_string);  
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);  
    // 线下环境不用开启curl证书验证, 未调通情况可尝试添加该代码
    curl_setopt ($ch, CURLOPT_SSL_VERIFYHOST, 0); 
    curl_setopt ($ch, CURLOPT_SSL_VERIFYPEER, 0);
    $data = curl_exec($ch);
    curl_close($ch);  
    // Util::writeLog('send',$post_string);           
    // Util::writeLog('respon',$data); 
    return $data;  
}  
// $webhook = "https://oapi.dingtalk.com/robot/send?access_token=08ce299e558cd69bcd2af63b6884b30ba93280fe4f84d9205af83c32f88b86e3";
// $webhook = "https://oapi.dingtalk.com/robot/send?access_token=bdc62a70e024b0a16fde7e4cdf7cf6c09188fcd447191dd0ffb19831e22ffa81";
$webhook = "https://oapi.dingtalk.com/robot/send?access_token=d0f3bb769ba5a3472ef147a850952e44232adad787a421520994cb212bc6466a";
$data = array ('msgtype' => 'text','text' => array ('content' => $message));
$text = $jitang[rand(1,8)];
$weekarray=array("日","一","二","三","四","五","六");
$week = '星期'.$weekarray[date("w")];
$title =  date('Y-m-d').'【'.$week.'】';
if($week == "星期六" || $week == "星期日"){
    // Util::writeLog('week','today is '.$week);
    die;
}

$data = [
    "msgtype"=>"link",
    "link"=>[
        "text"=>$text,
        "title"=> $title."加班餐订饭提醒",
        "picUrl"=>"https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=137601743,3755973576&fm=58&bpow=900&bpoh=500",
        "messageUrl"=>"https://blackfish.jinshuju.com/f/53HDTq",
    ],
    "isAtAll"=>true,
];


$data_string = json_encode($data);
$result = request_by_curl($webhook, $data_string);  
echo $result;