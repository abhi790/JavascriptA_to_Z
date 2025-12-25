let masterList = JSON.parse(localStorage.getItem("todos")) || [];
displayTodo();

function displayTodo() {
  let container = document.querySelector(".todo-container");

  let finalElement = " ";
  for (let i = 0; i < masterList.length; i++) {
    let { item, date } = masterList[i];
    finalElement += `<span>${item} ${date}</span> <button id="delete-button" onclick="deleteItem(${i})">Delete</button> <br>`;
  }
  container.innerHTML = finalElement;
}

function enterToDos() {
  let doc = document;
  let item = doc.querySelector("#input-todo");
  let date = doc.querySelector("#input-date");
  let data = {
    item: item.value || "Empty todo",
    date: date.value || `Enter date`,
  };
  masterList.push(data);
  localStorage.setItem("todos", JSON.stringify(masterList));

  item.value = "";
  date.value = "";
  displayTodo();
}

function deleteItem(i) {
  masterList.splice(i, 1);
  localStorage.setItem("todos", JSON.stringify(masterList));
  displayTodo();
}

function clearTodo() {
  localStorage.clear();
  masterList = [];
  displayTodo();
}
