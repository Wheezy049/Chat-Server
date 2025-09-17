const socket = io('http://localhost:3000');

function registerUser(){
  const privateUsername = document.getElementById("privateUsername").value;

  socket.emit("registerUser", {
    username: privateUsername
  })
}

function sendPrivateMsg(){
   const msg = document.getElementById("privateMsg").value;
   const toUsername = document.getElementById("toUsername").value;
   socket.emit("privateMessage", {
     to: toUsername,
     message: msg
   })
}

function joinRoom(){
  const username = document.getElementById("username").value;
  const room = document.getElementById("room").value;

  socket.emit("joinRoom", {
    username,
    room
  })
}

function sendMsg(){
   const room = document.getElementById("room").value;
   const msg  = document.getElementById("msg").value;
   socket.emit("sendMessage", {
    room,
    message: msg
   })
}

   socket.on("receiveMessage", (data) => {
    const li = document.createElement("li");
    li.textContent = `${data.username}: ${data.message}`;
    document.getElementById("messages").appendChild(li);
  });

  socket.on("receivePrivateMessage", (data) => {
  const li = document.createElement("li");
  li.textContent = `Message from ${data.from}: ${data.message}`;
  document.getElementById("privateMessages").appendChild(li);
});

