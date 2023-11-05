import express from "express";
import mongoose from "mongoose";
import { adminRouter } from "./routes/admin";
import { storeRouter } from "./routes/store";

const app = express();

app.use(express.json({ limit: "10mb" }));

app.get("/", (req, res) => {
  res.json({ message: "Hola, mundo" });
});

app.use("/admin", adminRouter);
app.use("/store", storeRouter);

const port = 4500;

async function init() {
  console.log("Conectando a la base de datos...");
  await mongoose.connect("mongodb://localhost:27017", { dbName: "tiendita" });
  console.log("Conexión exitosa a la base de datos.");

  app.listen(port, () => {
    console.log("El servidor se está ejecutando en el puerto", port);
  });
}

init();
