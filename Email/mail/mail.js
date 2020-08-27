const nodemailer = require('nodemailer')
const fs = require('fs')


function handleEmail() {

    var text, count = 1;
    fs.readFile('index.html', 'utf-8', (err, data) => {
        if (err) throw err;

        //DADOS DA CONTA DE EMAIL
        const user = 'marcossilvatl2@gmail.com'
        const password = 'marcossennin'

        //OBJETO COM OS DADOS DO ENVIO DO EMAIL
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: user,
                pass: password
            }
        })

        //ENVIA O EMAIL
        transporter.sendMail({
            from: 'Marcolino <marcossilvatl2@gmail.com>',
            to: 'marcossilvatl2@hotmail.com',
            subject: "Teste template",
            text: data
        })
    })




}
handleEmail()