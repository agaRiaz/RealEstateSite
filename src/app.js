const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");


require("./db/conn");
const User = require("./models/users");

const port = process.env.PORT || 3000;

const static_path = path.join(__dirname, "../public");

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(express.static(static_path ));
app.set("view engine", "hbs");
app.get("/",(req,res) => {
    res.render("index");
});

app.post("/",async(req,res) => {
   try {
    const userDetails = new User({
        name:req.body.name,
        phone:req.body.phone,
        email:req.body.email,
        text:req.body.text
    })
    const gotUser = await userDetails.save();
    res.status(201).render("index");
   }catch (error){
       res.status(400).send("already registered");
       
   }
});

app.listen(port,() => {
    console.log(`server is running at port no ${port}`)
});