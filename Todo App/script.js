//Variables
let form = document.querySelector(".form");
let input = document.querySelector("#todo");
let addTodo = document.querySelector("#submit");
let section = document.querySelector("#main");
let collectionList = document.querySelector(".collection");
let sort = document.querySelector("#sort");
let todosArray = [];

// *Display Message
let displayMessage = (message) => {
  let msgEl = document.createElement("p");
  msgEl.innerText = message;
  msgEl.className = "message";
  form.appendChild(msgEl);

  setTimeout(() => {
    msgEl.remove();
  }, 2000);
};

//* Todo Function
let todo = (input) => {
  section.style.display = "block";
  let todos = document.createElement("li");
  todos.className = "todos";
  todosArray.push(todos);

  todosArray.forEach(() => {
    todos.innerHTML = `<span class="todo">${input}</span><i class="fas fa-trash fa-fw fa-1x delete-icon"></i>`;
  });
  collectionList.appendChild(todos);
};

// *Clear Inputs
let clearField = () => {
  input.value = "";
};

//? Click Handler Function
let clickHandler = (e) => {
  let userInput = input.value;
  if (userInput == "") {
    displayMessage("Please enter some text");
  } else {
    todo(userInput);
  }

  e.preventDefault();
  input.value = "";
};

//* Delete Single Todo
let deleteTodo = (e) => {
  if (e.target.classList.contains("delete-icon")) {
    if (e.target.parentElement.classList.contains("todos")) {
      if (confirm("Are you sure you want to delete")) {
        e.target.parentElement.remove();
        displayMessage("Todo completed!");
      } else {
        displayMessage("Oops! changed my mind");
      }
    }
  }
};

//!EventListener Function
addTodo.addEventListener("click", clickHandler);
collectionList.addEventListener("click", deleteTodo);
