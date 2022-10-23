// Criando uma constante com a instância do express
const express = require("express");

// Instanciando o express
const app = express();

// Criando uma rota de Get
app.get("/", (req, res) => {
  return res.send("Hello World Ignite - Fundamentos NodeJS");
});

// Criando uma rota de Get
app.get("/json", (req, res) => {
  return res.json({
    message: "Hello World Ignite - Fundamentos NodeJS",
  });
});

// Adicionando um listen para execução do express na porta 3333
app.listen(3333);