//const { createServer } = require("http");
const port = process.env.PORT || 3000;

const  io  = require("socket.io")(port,{cors:{origin:"http://localhost:3000",methods:["GET","POST"]},})



io.on("connection", (socket) => {
  // ...
  console.log("connected");
setInterval(() => {
  //io.on('input-change' => {
        socket.broadcast.emit('6641c4f4f8d9ac3563fdef01', "from server this msg 😊😊")
        console.log("send");
     // })
  }, 5000);
});

// httpServer.listen(5000);
