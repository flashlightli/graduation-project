var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    service: '163',
    auth: {
        user: 'liyanzhevip@163.com',
        pass: 'lizhe1841' //授权码,通过QQ获取

    }
});
var mailOptions = {
    from: 'liyanzhevip@163.com', // 发送者
    to: '576961950@qq.com', // 接受者,可以同时发送多个,以逗号隔开
    subject: 'Exchanged-House', // 标题
    html: "<h4>您发布的信息被关注，赶紧去联系用户576961950@qq.com吧</h4>", // text：文本
    // html: "你好"
};

transporter.sendMail(mailOptions, function (err, info) {
    if (err) {
        console.log(err);
        return;
    }
    console.log('发送成功');
});