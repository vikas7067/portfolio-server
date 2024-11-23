const express = require("express");
const app =  express();
const bodyParser = require("body-parser");


app.get("/" ,(req, res)=>{     //this method sends the data from databse when request is recieved from  / router
  res.send("Hello Server");
  console.log("request recieved at main route");
});

// Parse JSON-formatted request bodies
app.use(bodyParser.json());

// Parse URL-encoded request bodies (from HTML forms)
app.use(bodyParser.urlencoded({ extended: true }));


const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

const projectsRouter = require("./router/AllProjectRouter");
const formRouter = require('./router/ContactRouter')


const cors = require('cors');
app.use(cors());

const port = process.env.PORT || 8080;

app.listen(port, ()=>
{
  console.log(`app is listening at port ${port}`)
});




app.use('/Project', projectsRouter);
app.use('/Form' , formRouter)
