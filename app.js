

const Auth = require('./auth');

// //client
const ioClient = require("socket.io-client");
const socket = ioClient("[url]", { // 
  reconnectionDelayMax: 10000,
  transportOptions: {
      polling: {
          extraHeaders: {
              access_token: Auth.getAccessTokens(),
          },
      },
  },
});

socket.on('connect_error', error => {
  console.log(error);
});

socket.on('connect', () => {
  socket.emit("writeICC");
});


