const express=require('express');
const app=express();
const hbs=require('hbs');
const path=require("path");
const port=process.env.PORT || 9000 ;

const staticPath=path.join(__dirname,"../Public");
const templatePath=path.join(__dirname,'../templates/views');
const partialsPath=path.join(__dirname,"../templates/partials")

app.set("view engine", "hbs");
app.set("views", templatePath);
app.use(express.static(staticPath));
hbs.registerPartials(partialsPath);



app.get("",(req,res)=>{
    res.render("index");
});

app.get("/about",(req,res)=>{
    res.render("about");
});

app.get("/weather",(req,res)=>{
    res.render("weather");
});

app.get("*",(req,res)=>{
    res.render("404error");
});

app.listen(port,()=>{
console.log(`listening to the ${port}`)}
);