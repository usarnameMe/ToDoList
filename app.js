const input = document.getElementById("input");
const lists = document.getElementById("lists");
const addBtn = document.getElementById("addBtn");
const completedList = document.getElementById("complitedItem");

let newList = [];
let completedItems = [];

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

  const doneButtons = document.querySelectorAll(".done");
  const deleteButtons = document.querySelectorAll(".dlt");

  doneButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      const task = newList[index];
      completedItems.push(task);
      newList.splice(index, 1);

      completedList.innerHTML = completedItems
        .map((item) => `<li>${item}</li>`)
        .join("");

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
    });
  });

  deleteButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      newList.splice(index, 1);
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
    });
  });
}
