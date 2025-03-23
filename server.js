const express = require("express");
const cors = require("cors");
const WebSocket = require("ws");

const app = express();
const PORT = 5000; // Puerto en el que correrá el backend

// Habilitar CORS y recibir JSON
app.use(cors());
app.use(express.json());

// Ruta de prueba HTTP
app.get("/", (req, res) => {
  res.send("¡Backend de Perrito activo con WebSockets!");
});

// Iniciar servidor HTTP con Express
const server = app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

// Iniciar WebSocket Server
const wss = new WebSocket.Server({ server });

wss.on("connection", (ws) => {
  console.log("Cliente WebSocket conectado");

  ws.on("message", (message) => {
    console.log("Mensaje recibido:", message.toString());

    // Responder al cliente WebSocket
    ws.send(`Mensaje recibido: ${message}`);
  });

  ws.on("close", () => {
    console.log("Cliente WebSocket desconectado");
  });
});
