function addCloseButton(li) {
  const span = document.createElement("SPAN");
  span.className = "close";
  span.textContent = "\u00D7";
  li.appendChild(span);

  span.addEventListener("click", () => {
    li.remove();
    saveListToStorage();
  });
}

function saveListToStorage() {
  const listItems = document.querySelectorAll("li");
  const todos = [];

  listItems.forEach((li) => {
    todos.push({
      text: li.textContent.slice(0, -1), 
      checked: li.classList.contains("checked"),
    });
  });

  localStorage.setItem("todos", JSON.stringify(todos));
}

function loadListFromStorage() {
  const storedTodos = localStorage.getItem("todos");
  if (storedTodos) {
    const todos = JSON.parse(storedTodos);

    todos.forEach((todo) => {
      const li = document.createElement("li");
      li.textContent = todo.text;

      if (todo.checked) {
        li.classList.add("checked");
      }

      addCloseButton(li);
      document.getElementById("myUl").appendChild(li);
    });
  }
}

function newElement() {
  const input = document.getElementById("myInput");
  const inputValue = input.value.trim();

  if (!inputValue) {
    alert("You must write something!");
    return;
  }

  const li = document.createElement("li");
  li.textContent = inputValue;
  addCloseButton(li);
  document.getElementById("myUl").appendChild(li);

  input.value = "";
  saveListToStorage(); 
}

document.addEventListener("DOMContentLoaded", () => {
  loadListFromStorage();

  const myNodelist = document.querySelectorAll("li");
  myNodelist.forEach((li) => addCloseButton(li));

  const list = document.querySelector("ul");
  if (list) {
    list.addEventListener("click", (ev) => {
      if (ev.target.tagName === "LI") {
        ev.target.classList.toggle("checked");
        saveListToStorage();
      }
    });
  }
});
