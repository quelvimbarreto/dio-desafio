import { MongoConnection } from "./database/MongoConnection";
import express from "express";
import { URLController } from "./controller/URLController";

const api = express();

//CONFIGURAÇÕES DA API
api.use(express.json());

//CONFIGURAÇÕES DE BANCO DE DADOS
const database = new MongoConnection()
database.connect()

//CONFIGURAÇÕES DAS ROTAS
const urlController = new URLController();
api.post("/shorten", urlController.shorten);

api.get("/:hash", urlController.redirect
)
//INICIA O SERVIDOR NA PORTA 5000
api.listen(5000, () => {
  console.log("Server executando na porta 5000");
});
