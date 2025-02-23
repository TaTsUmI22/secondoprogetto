// Import the framework and instantiate it
import Fastify from "fastify";
import cors from "@fastify/cors";

const fastify = Fastify({
  logger: true,
});
await fastify.register(cors, {
  // put your options here
});

let id = 0;
let todoList = [];

function addTodo(text) {
  todoList.push({
    id: id,
    text: text,
  });

  id++;
  return todoList;
}

function deleteTodo(id) {
  todoList = todoList.filter((todo) => todo.id !== +id);
  return todoList;
}

// Declare a route
fastify.get("/todo", async function handler() {
  return {
    todo: todoList,
  };
});

fastify.post("/todo", async function handler(request) {
  addTodo(request.body);
  return {
    todo: todoList,
  };
});

fastify.delete("/todo", async function handler(request) {
  deleteTodo(request.body);

  return {
    todo: todoList,
  };
});

// Run the server!
try {
  // 0.0.0.0 is listening to all addresses
  // localhost listen only to localhost, so no 192.168..
  await fastify.listen({ port: 3000, host: "0.0.0.0" });
} catch (err) {
  fastify.log.error(err);
  process.exit(1);
}
