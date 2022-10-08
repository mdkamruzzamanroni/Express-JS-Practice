var express=require('express');
app=express();

// app.post('/',function(req,res){

//     let firstName=req.query.firstName;
//     let lastName=req.query.lastName;

//     res.send(firstName+"  "+lastName)
// });


app.post('/',function(req,res){
   
 let userName= req.header('userName');
  let password= req.header('password');

  res.send("User Name:" +userName,+"Password:"+password)
});

app.listen(5029,function(){
    console.log("server run success")
})