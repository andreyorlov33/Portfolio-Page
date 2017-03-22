// ******************************************************************************
// *** Dependencies
// =============================================================
const express = require("express");
const path = require('path');

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 8080;


// Static directory
app.use(express.static("./public"));

app.get('/', (request,response)=>{
    response.sendFile(path.join(__dirname, `./public/index.html`))
})

app.get('/projects', (request,response)=>{
    response.sendFile(path.join(__dirname, `./public/projects.html`))
})


app.get('/about', (request,response)=>{
    response.sendFile(path.join(__dirname, `./public/about.html`))
})



app.get('/resume', (request,response)=>{
    response.sendFile(path.join(__dirname, `./public/resume.html`))
})
// Syncing our sequelize models and then starting our express app
app.listen(PORT, ()=> {
    console.log(`App listening on PORT  ${PORT}`);
});
