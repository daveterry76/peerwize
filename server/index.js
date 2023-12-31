// api/socket.js

const { Server } = require("socket.io");

module.exports = (req, res) => {
  if (!res.socket.server.io) {
    console.log("First use, starting socket.io");

    const httpServer = res.socket.server;
    const io = new Server(httpServer, {
      cors: {
        origin: "*",
      },
    });

    io.on("connection", (socket) => {
      console.log(`Socket id is ${socket.id} AND IS CONNECTED!`);

      const { roomId } = socket.handshake.query;
      socket.join(roomId);

      socket.on("newChatMessage", (data) => {
        io.in(roomId).emit("newChatMessage", data);
      });

      socket.on("disconnect", () => {
        console.log(`Client ${socket.id} has disconnected`);
        socket.leave(roomId);
      });
    });

    res.socket.server.io = io;
  }

  return res.socket.server.io;
};



// const server = require("http").createServer();

// const io = require("socket.io")(server, {
//   cors: {
//     origin: "*",
//   },
// });

// const PORT = 4000;
// const NEW_CHAT_MESSAGE_EVENT = "newChatMessage";

// io.on("connection", (socket) => {
//   console.log(`Socket id is ${socket.id} AND IS CONNECTED!`);


//   // Join a community using id

//   const { roomId } = socket.handshake.query;
//   socket.join(roomId);


//   // Listen for new messages

//   socket.on(NEW_CHAT_MESSAGE_EVENT, (data) => {
//     io.in(roomId).emit(NEW_CHAT_MESSAGE_EVENT, data);
//   })

//   socket.on("disconnect", () => {
//     console.log(`Client ${socket.id} has disconnected`);
//     socket.leave(roomId);
//   })

// });

// server.listen(PORT, () => {
//     console.log("Server started on port 4000")
// })