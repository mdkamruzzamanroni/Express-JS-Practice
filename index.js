var express=require('express');
let app=express();

// app.post('/',function(req,res){

//     let firstName=req.query.firstName;
//     let lastName=req.query.lastName;

//     res.send(firstName+"  "+lastName)
// });


app.post('/',function(req,res){
   
 let userName= req.header('userName');
  let password= req.header('password');

  res.send("User Name:" +userName+"Password:"+password)
});

app.listen(5035,function(){
    console.log("server run success")
})