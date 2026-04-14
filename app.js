const taskList = document.getElementById("task-list");
const name = document.getElementById("name");
const button = document.getElementById("button");

button.addEventListener("click", () => {
    taskList.innerHTML += `<li>${name.value}</li>`;
});