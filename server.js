var express=require("express");
var app=express();

app.get("/",function(request,response){
    response.send("Welcome");
})

app.post("/",function(request,response){
response.send("in post");

app.listen("4000",function(err,res){
    res.send("Hi");
console.log("hii");
})
