// Criando uma constante com a instância do express
const express = require("express");

// Instanciando o express
const app = express();

// Middleware para receber requisições do tipo JSON
app.use(express.json());

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

// Rota de GET
// Retorna uma lista de cursos
app.get("/courses", (request, response) => {
  // Criando uma constante para buscar os Query Params
  const query = request.query;

  // Retornando no console a lista de query params
  console.log(query);

  return response.json([
    { id: 1, name: "Curso 01" },
    { id: 2, name: "Curso 02" },
    { id: 3, name: "Curso 03" },
  ]);
});

// Rota de POST
// Cria um novo curso
// No exemplo abaixo incluimos o Curso 04
app.post("/courses", (request, response) => {
  // Criando uma constante para buscar os Body Params
  const body = request.body;

  // Retornando o body
  console.log(body);

  return response.json([
    { id: 1, name: "Curso 01" },
    { id: 2, name: "Curso 02" },
    { id: 3, name: "Curso 03" },
    { id: 4, name: "Curso 04" },
  ]);
});

// Rota de PUT
// Altera um curso
// No exemplo abaixo altera o curso com ID 2
app.put("/courses/:id", (request, response) => {
  // Criando uma constante para buscar os Route Params
  const routeParams = request.params;

  // Retornando o routeParams
  console.log(routeParams);

  // Criando uma constante para buscar os Route Params
  // Pegando apenas o ID
  const { id } = request.params;

  // Retornando o id
  console.log(id);

  return response.json([
    { id: 1, name: "Curso 01" },
    { id: 2, name: "Curso 02 Alterado" },
    { id: 3, name: "Curso 03" },
    { id: 4, name: "Curso 04" },
  ]);
});

// Rota de PUT
// Altera um curso
// No exemplo abaixo altera o curso com ID 2
app.patch("/courses/:id", (request, response) => {
  return response.json([
    { id: 1, name: "Curso 01" },
    { id: 2, name: "Curso 02" },
    { id: 3, name: "Curso 03 Alterado" },
    { id: 4, name: "Curso 04" },
  ]);
});

// Rota de DELETE
// Deleta um curso
// No exemplo abaixo deleta o curso com ID 1
app.delete("/courses/:id", (request, response) => {
  return response.json([
    { id: 2, name: "Curso 02" },
    { id: 3, name: "Curso 03" },
    { id: 4, name: "Curso 04" },
  ]);
});

// Adicionando um listen para execução do express na porta 3333
app.listen(3333);
