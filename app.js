var express=require("express");
var app=express();
var http=require("http").Server(app);
var io=require("socket.io")(http);

app.get('/',function(req,res){
  res.json({"messgae":"connected"});
});

io.on('connection',function(socket){
  console.log("user connected");
  socket.on('disconnect',function(){
    console.log("user disconnected");
  })
});
http.listen(80);
