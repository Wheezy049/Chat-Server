const socket = io('http://localhost:3000');

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