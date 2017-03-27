// ******************************************************************************
// *** Dependencies
// =============================================================
const express = require("express"),
      path = require('path'),
      bodyParser = require('body-parser'),
      fs = require('fs'),
      nodemailer = require('nodemailer'),
      app = express(),
      PORT = process.env.PORT || 8080;




// bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));



let transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'andreyorlov33',
        pass: 'acscvb04'
    }
});

app.post('/mail', (req, res) => {
    let mailOptions = {
        to: 'andreyorlov33@gmail.com',
        subject: `Email from your website ${req.body.email}`,
        text: req.body.message
    };

    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            console.log(error);
        }else{
            console.log('Message sent: ' + info.response);
            res.redirect('/contact')
        };
    });
});


// Static directory
app.use(express.static("./public"));

app.get('/', (request,response)=>{
    response.sendFile(path.join(__dirname, `./public/index.html`))
})

app.get('/projects', (request,response)=>{
    response.sendFile(path.join(__dirname, `./public/projects.html`))
})

app.get('/contact', (request,response)=>{
    response.sendFile(path.join(__dirname, `./public/contact.html`))
})

app.get('/resume', (request,response)=>{
    response.sendFile(path.join(__dirname, `./public/assets/images/resume.pdf`))
})
// Syncing our sequelize models and then starting our express app
app.listen(PORT, ()=> {
    console.log(`App listening on PORT  ${PORT}`);
});
