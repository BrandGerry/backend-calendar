const express = require("express");
const cors = require("cors");
const { dbConnection } = require("./database/config");
require("dotenv").config();

//CREAR EL SERVIDOR DE EXPRESS
const app = express();

//BASE DE DATOS
dbConnection();

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

//DIRECTORIO PUBLICO
app.use(express.static("public"));

//LECTURA Y PARSEO DEL BODY
app.use(express.json());

//RUTAS
app.use("/api/auth", require("./routes/auth"));
app.use("/api/events", require("./routes/events"));

//ESCUCHAR PETICIONES
app.listen(
  process.env.PORT,
  console.log(`SERVIDOR CORRIENDO EN ${process.env.PORT}`)
);
