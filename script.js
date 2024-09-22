const addButton = document.querySelector(".input-container_button");
const taskInput = document.querySelector(".input-container_input");
const clearButton = document.querySelector(".clearButton-container_button");
const taskList = document.querySelector(".list-container");
const errorMessage = document.querySelector(".error");
const noTasksText = document.querySelector(".no-tasks");
let tasks = [];

function loadOrSetTasks(...el) {
  for (let i = 0; i < el.length; i++) {
    let task = document.createElement("div");
    task.classList.add("task");
    task.innerHTML = `<span>${el[i]}</span><input type="checkbox" />`;
    taskList.appendChild(task);
    clearButton.disabled = false;
    errorMessage.style.display = "none";
    noTasksText.style.display = "none";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  let todos = JSON.parse(localStorage.getItem("task"));
  if (todos != null) {
    tasks = todos;
    loadOrSetTasks(...tasks);
  }
  {
    return;
  }
});

addButton.addEventListener("click", function () {
  if (taskInput.value.trim() !== "") {
    loadOrSetTasks(taskInput.value);
    tasks.push(taskInput.value);
    localStorage.setItem("task", JSON.stringify(tasks));
    taskInput.value = "";
  } else {
    errorMessage.textContent = "Вы не ввели задачу!";
    errorMessage.style.display = "block";
  }
});

clearButton.addEventListener("click", function () {
  document.querySelectorAll(".task").forEach((el) => el.remove());
  noTasksText.style.display = "block";
  clearButton.disabled = true;
  localStorage.clear();
});

//как сохранять состояния чекбоксов и выводить их также вместе со списком задач, я вообще не понимаю и не знаю как это сделать
