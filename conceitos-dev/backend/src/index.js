const express = require("express");
const { uuid, isUuid } = require("uuidv4");

// /**
//  * Métodos HTTP
//  *
//  * GET: Buscar informações do back-end
//  * POST: Criar uma informação no back-end
//  * PUT/PATCH: Alterar uma informação no back-end
//  * DELETE: Deletar uma informação no back-end
//  */

// /**
//  * Tipos de parâmetros
//  *
//  * Query Params: Filtros e paginação (?title=React&Owner=Jose)
//  *     back-end: const(title, owner) = request.query;
//  *
//  * Route Params: Identificar recursos (atualizar, deletar)
//  *     back-end: identificado na criação da rota como ":id"
//  *               utiliza-se do mesmo modo que o query params
//  *
//  * Request Body: Conteúdo na hora de criar ou editar um recurso (JSON)
//  *     back-end: const body = request.body;
//  */

/**
 * Midleware:
 *
 * Insterceptador de requisições que interrompe totalmente a requisição ou alterar dados da requisição
 *
 *
 *
 */

const app = express();
app.use(express.json()); //Para o express reconhecer o conteudo em formato json que vem através de Request Body

const projects = [];

function logRequest(request, response, next) {
  const { method, url } = request;

  const logLabel = `[${method.toUpperCase()}] ${url}`;

  console.time(logLabel);

  next();

  console.timeEnd(logLabel);
}

function validateProjectId(request, response, next) {
  const { id } = request.params;

  if (!isUuid(id)) {
    return response.status(400).json({ error: "Invalid project ID." });
  }

  return next();
}

//Aplicando midleware para funcionamento em todos as rotas
app.use(logRequest);

//Aplicando midleware para funcionamento em rotas que tenham um formato específico
app.use("/projects/:id", validateProjectId);

//Aplicando midleware para funcionamento em apenas uma rota específica
//app.delete("/projects/:id", validateProjectId, (request, response) => {

app.get("/projects", (request, response) => {
  const { title } = request.query;

  const results = title
    ? projects.filter((project) => project.title.includes(title))
    : projects;

  return response.json(results);
});

app.post("/projects", (request, response) => {
  const { title, owner } = request.body;

  const project = { id: uuid(), title, owner };
  projects.push(project);

  return response.json(project);
});

app.put("/projects/:id", (request, response) => {
  const { id } = request.params;
  const { title, owner } = request.body;

  const projectIndex = projects.findIndex((project) => project.id == id);

  if (projectIndex < 0) {
    return response.status(400).json({ error: "Project not found" });
  }

  const project = {
    id,
    title,
    owner,
  };

  projects[projectIndex] = project;

  return response.json(project);
});

app.delete("/projects/:id", (request, response) => {
  const { id } = request.params;

  const projectIndex = projects.findIndex((project) => project.id == id);

  if (projectIndex < 0) {
    return response.status(400).json({ error: "Project not found" });
  }

  projects.splice(projectIndex, 1);

  return response.status(204).send();
});

app.listen(3333, () => {
  console.log("🚀 Back-end started! ");
});
