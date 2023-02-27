const input = document.getElementById("input");
const lists = document.getElementById("lists");
const addBtn = document.getElementById("addBtn");

let newList = [];

addBtn.addEventListener("click", addToTask);

function addToTask() {
  const task = input.value;

  if (task) {
    newList.push(task);

    lists.innerHTML = newList
      .map(
        (item) =>
          `<div class="task-container">
            <div class="dot"></div>
            <p class="task">${item}</p>
            <div>
            <button class="done">DONE</button>
            <button class="dlt">DEL</button>
            </div>
          </div>`
      )
      .join("");
  }
  input.value = "";
}
