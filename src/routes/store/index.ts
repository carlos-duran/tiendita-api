import { Router } from "express";

export const storeRouter = Router();

storeRouter.get("/", (req, res) => {
  res.json({ message: "Bienvenido a mi tienda!" });
});
