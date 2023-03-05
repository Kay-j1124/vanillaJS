const todoForm = document.querySelector("#js-todoForm");
const todoInput = document.querySelector("#js-todoForm input");
const todoList = document.querySelector("#js-todoList");

const TODOS_KEY = "todos";
let todos = [];

const saveTodos = () => {
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

const deleteTodo = (e) => {
  const li = e.target.parentElement;
  li.remove();
  todos = todos.filter((todo) => todo.id !== parseInt(li.id));
  saveTodos();
}

const paintTodo = (newTodo) => {
  const li = document.createElement("li");
  li.id = newTodo.id;

  const span = document.createElement("span");
  const button = document.createElement("button");

  button.innerText = "🗑️";
  button.addEventListener("click", deleteTodo);
  li.appendChild(span);
  li.appendChild(button);
  span.innerText = newTodo.text;
  todoList.appendChild(li);

  localStorage.setItem(TODOS_KEY, newTodo);
}

const handleTodoSubmit = (e) => {
  e.preventDefault();

  const newTodo = todoInput.value;

  todoInput.value = "";

  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  }

  todos.push(newTodoObj);
  paintTodo(newTodoObj);
  saveTodos();
}

todoForm.addEventListener("submit", handleTodoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);

if (savedTodos !== null) {
  const parseTodos = JSON.parse(savedTodos);
  todos = parseTodos;
  parseTodos.forEach(paintTodo);
}