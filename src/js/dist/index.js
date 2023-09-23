"use strict";
const newTodo = document.querySelector("#newTodo"), timeDiv = document.querySelector(".watch .time"), dateDiv = document.querySelector(".watch .date"), rightInputs = document.querySelector(".form-edit-todo .right-inputs");
const formAddTodoContainer = document.querySelector(".form-add-todo"), formAddTodo = document.querySelector("#formAddTodo"), backHome = document.querySelector("#backHome"), todoTitle = document.querySelector("#todoTitle"), todoTime = document.querySelector("#todoTime"), todoContent = document.querySelector("#todoContent"), todoColor = document.querySelector("#todoColor"), choseColorLabel = document.querySelector(".chose-color"), colorDivValue = document.querySelector(".color-value"), addMoreItem = document.querySelector("#addMoreItem"), itemsContainer = document.querySelector(".items-container");
const todoTasksContainer = document.querySelector(".todo-tasks"), closeTodoTask = document.querySelector(".close-todo-task"), todoTaskForm = document.querySelector("#todoTaskForm"), todoEditTaskForm = document.querySelector("#todoEditTaskForm"), todoTaskInput = document.querySelector("#todoTaskInput"), editTodoTaskInput = document.querySelector("#editTodoTaskInput"), todoTaskTimeInput = document.querySelector("#todoTaskTimeInput"), todoEditTaskTimeInput = document.querySelector("#todoEditTaskTimeInput");
const formEdiTodoContainer = document.querySelector(".form-edit-todo"), formEditTodo = document.querySelector("#formeEditTodo"), editBackHome = document.querySelector("#editBackHome"), editTodoTitle = document.querySelector("#editTodoTitle"), editTodoTime = document.querySelector("#editTodoTime"), editTodoContent = document.querySelector("#editTodoContent"), editTodoColor = document.querySelector("#editTodoColor"), editChoseColorLabel = document.querySelector(".chose-color-edit"), editColorDivValue = document.querySelector(".color-value-edit"), addMoreItemEdit = document.querySelector("#addMoreItemEdit"), editItemsContainer = document.querySelector(".edit-items-container");
const editTodoTasksContainer = document.querySelector(".todo-tasks_edit"), editCloseTodoTask = document.querySelector(".close-todo-task_edit"), todoTaskForm_edit = document.querySelector("#todoTaskForm_edit"), todoEditTaskForm_edit = document.querySelector("#todoEditTaskForm_edit"), todoTaskInput_edit = document.querySelector("#todoTaskInput_edit"), todoTaskTimeInput_edit = document.querySelector("#todoTaskTimeInput_edit"), editTodoTaskInput_edit = document.querySelector("#editTodoTaskInput_edit"), todoEditTaskTimeInput_edit = document.querySelector("#todoEditTaskTimeInput_edit");
const todoDetails = document.querySelector(".todo-details"), todoDetailsContainer = document.querySelector(".todo-details-container"), todoDetailsTasksContainer = document.querySelector(".todo-details-tasks-container"), todoDetailsHeading = document.querySelector(".todo-details-heading"), todoDetailsCtrl = document.querySelector(".todo-details-container .ctrl"), closeTodo = document.querySelector("#closeTodo");
const leftCardsContainer = document.querySelector(".left-container .cards");
const activityCards = document.querySelector(".activity-cards");
function getCurrentTime() {
    let getDate = new Date();
    let date = getDate.toDateString();
    let h = getDate.toLocaleString().split(",")[1].split(":")[0].trim();
    let m = getDate.toLocaleString().split(",")[1].split(":")[1];
    let pm_am = getDate
        .toLocaleString()
        .split(",")[1]
        .split(":")[2]
        .split(" ")[1];
    h = h <= "9" ? `0${h}` : h;
    let time = `${h}:${m} ${pm_am}`;
    return { date, time };
}
const currentTime = getCurrentTime();
timeDiv.innerHTML = currentTime.time;
dateDiv.innerHTML = currentTime.date;
setInterval(() => {
    const currentTime = getCurrentTime();
    timeDiv.innerHTML = currentTime.time;
    dateDiv.innerHTML = currentTime.date;
}, 1000);
let allTodo = [
    {
        id: 1,
        title: "1-First todo title added to the list of todo",
        content: "1-First todo content added to the list of todo",
        time: "01:00 PM",
        color: "#ffffff",
        tasks: [
            {
                id: 1,
                task: "1. task item",
                time: "12:00 PM",
                done: false,
            },
            {
                id: 2,
                task: "2. task item",
                time: "02:09 AM",
                done: false,
            },
            {
                id: 3,
                task: "3. task item",
                time: "03:10 PM",
                done: false,
            },
            {
                id: 4,
                task: "4. task item",
                time: "04:55 PM",
                done: false,
            },
            {
                id: 5,
                task: "5. task item",
                time: "05:59 AM",
                done: false,
            },
            {
                id: 6,
                task: "6. task item",
                time: "06:13 AM",
                done: false,
            },
            {
                id: 7,
                task: "7. task item",
                time: "07:22 PM",
                done: false,
            },
            {
                id: 8,
                task: "8. task item",
                time: "08:08 AM",
                done: false,
            },
            {
                id: 9,
                task: "9. task item",
                time: "09:34 PM",
                done: false,
            },
            {
                id: 10,
                task: "10. task item",
                time: "10:50 AM",
                done: false,
            },
            {
                id: 11,
                task: "11. task item",
                time: "11:02 PM",
                done: false,
            },
            {
                id: 12,
                task: "12. task item",
                time: "12:30 AM",
                done: false,
            },
        ],
    },
    {
        id: 2,
        title: "2-second todo title added to the list of todo",
        content: "2-second todo content added to the list of todo",
        time: "11:00 PM",
        color: "#029e02",
        tasks: [
            {
                id: 1,
                task: "1. task item",
                time: "12:00 PM",
                done: false,
            },
            {
                id: 2,
                task: "2. task item",
                time: "02:09 AM",
                done: false,
            },
            {
                id: 3,
                task: "3. task item",
                time: "03:10 PM",
                done: false,
            },
            {
                id: 4,
                task: "4. task item",
                time: "04:55 PM",
                done: false,
            },
        ],
    },
    {
        id: 3,
        title: "3-third todo title added to the list of todo",
        content: "3-third todo content added to the list of todo",
        time: "11:00 PM",
        color: "",
        tasks: [
            {
                id: 1,
                task: "1. task item",
                time: "12:00 PM",
                done: false,
            },
            {
                id: 2,
                task: "2. task item",
                time: "02:09 AM",
                done: false,
            },
            {
                id: 3,
                task: "3. task item",
                time: "03:10 PM",
                done: false,
            },
        ],
    },
    {
        id: 4,
        title: "4-forth todo title added to the list of todo",
        content: "4-forth todo content added to the list of todo",
        time: "11:00 PM",
        color: "#f90",
        tasks: [
            {
                id: 1,
                task: "1. task item",
                time: "12:00 PM",
                done: false,
            },
            {
                id: 2,
                task: "2. task item",
                time: "02:09 AM",
                done: false,
            },
            {
                id: 3,
                task: "3. task item",
                time: "03:10 PM",
                done: false,
            },
            {
                id: 4,
                task: "4. task item",
                time: "04:55 PM",
                done: false,
            },
        ],
    },
];
let todoWithoutTasks = [
    {
        id: 1,
        title: "1-First todo title added to the list of todo",
        content: "1-First todo content added to the list of todo",
        time: "01:00 PM",
    },
    {
        id: 2,
        title: "2-second todo title added to the list of todo",
        content: "2-second todo content added to the list of todo",
        time: "11:00 PM",
    },
    {
        id: 3,
        title: "3-third todo title added to the list of todo",
        content: "3-third todo content added to the list of todo",
        time: "11:00 PM",
    },
];
let todoItemsTask = [];
let color;
let currentTaskItem;
function openForm() {
    formAddTodoContainer.classList.add("open");
}
function clearTodoForm() {
    todoTitle.value = "";
    todoContent.value = "";
    todoTime.value = "";
    itemsContainer.innerHTML = "";
    color = "";
    todoItemsTask = [];
}
function closeForm() {
    formAddTodoContainer.classList.add("close");
    setTimeout(() => {
        formAddTodoContainer.classList.remove("open");
        formAddTodoContainer.classList.remove("close");
    }, 200);
    clearTodoForm();
    showLeftCards();
    showRightCards();
}
function openTodoDetails() {
    todoDetails.classList.add("open");
}
function closeTodoDetails() {
    todoDetails.classList.add("close");
    setTimeout(() => {
        todoDetails.classList.remove("open");
        todoDetails.classList.remove("close");
    }, 200);
    showLeftCards();
    showRightCards();
}
function displayTodoTaskItems() {
    itemsContainer.innerHTML = "";
    todoItemsTask.length > 0 &&
        todoItemsTask.map((t) => {
            itemsContainer.innerHTML += `
      <div class="item-box task-item flex align-center space-between gap-10" data-task=${t.id}>
          <div class="item-box-left task-item flex align-center gap-5" data-task=${t.id}>
            <span class="circle task-item" data-task=${t.id}></span>
            <p class="item-text task-item" data-task=${t.id}>${t.task}</p>
          </div>
          <div class="item-box-date task-item flex align-center gap-10" data-task=${t.id}>
            <p class="task-item" data-task=${t.id}>${t.time}</p>
            <i class="icon-trash" id="deleteTaskItem" data-task=${t.id}></i>
          </div>
      </div>
      `;
        });
}
function showLeftCards() {
    leftCardsContainer.innerHTML = "";
    todoWithoutTasks.map((t) => {
        const title = t.title.length > 40 ? `${t.title.slice(0, 40)}...` : t.title;
        const content = t.content.length > 40 ? `${t.content.slice(0, 40)}...` : t.content;
        leftCardsContainer.innerHTML += `<div class="card card-style flex align-center gap-10 show-todo" data-task=${t.id}>
   
      <div class="image show-todo" data-task=${t.id}>
        <img
        class="show-todo"
          src="assets/logo.png"
          width="30"
          height="30"
          alt="image"
          data-task=${t.id}
        />
      </div>

    <div class="content show-todo" data-task=${t.id}>
      <div class="task-heading flex align-center space-between show-todo" data-task=${t.id}>
         <h5 class="title show-todo" data-task=${t.id}>
          ${title}
         </h5>
         <p class="time show-todo" data-task=${t.id}>${t.time}</p>
      </div>
      <p class="text show-todo" data-task=${t.id}>${content}</p>
      
    </div>
   
  </div>`;
    });
}
function getDoneTasks(tasks) {
    let doneTasks = 0;
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].done) {
            doneTasks++;
        }
    }
    return doneTasks;
}
function showRightCards() {
    activityCards.innerHTML = "";
    allTodo.map((t) => {
        const doneDiv = getDoneTasks(t.tasks) - t.tasks.length === 0;
        const title = t.title.length > 40 ? `${t.title.slice(0, 40)}...` : t.title;
        const content = t.content.length > 40 ? `${t.content.slice(0, 40)}...` : t.content;
        activityCards.innerHTML += `
  <div class="activity-card card-style show-task" data-task=${t.id}>
    <div class="color show-task" ${t.color && `style="background: ${t.color}"`} data-task=${t.id}></div>
    <h5 class="title show-task" data-task=${t.id}>${title}</h5>
    <p class="text show-task" data-task=${t.id}>${content}</p>

    <div class="card-ctrl show-task flex align-center space-between" 
     data-task=${t.id}>
      <div class="card-status show-task flex align-center gap-10"
       data-task=${t.id}>

       ${getDoneTasks(t.tasks) !== 0
            ? `<div class="check show-task flex align-center gap-10"
       data-task=${t.id}>
        <i class="icon-check show-task" data-task=${t.id}></i>
        <span class="check-number show-task" data-task=${t.id}>${getDoneTasks(t.tasks)}</span>
      </div>`
            : ""} 

        <div class="done-or-not show-task flex align-center gap-15" 
        data-task=${t.id}>

        ${t.tasks.length - getDoneTasks(t.tasks) === 0
            ? `<span class="done show-task" data-task=${t.id}>done</span>`
            : ""}

        ${t.tasks.length - getDoneTasks(t.tasks) !== 0
            ? ` <div class="not-done show-task flex align-center gap-5" 
        data-task=${t.id}>
          <span class="circle show-task" data-task=${t.id}></span>
          <span class="not-done-number show-task" data-task=${t.id}>
             ${t.tasks.length - getDoneTasks(t.tasks)}
          </span>
        </div>`
            : ""}
        </div>
      </div>

      <div class="card-setting 
        show-task flex 
        align-center gap-10" 
        data-task=${t.id}>
          <div class="date show-task" data-task=${t.id}>
            ${t.time}
          </div>                                        
      </div>
      </div>
    </div>
  </div>
  `;
    });
}
function showTodoDetails(todo) {
    var _a, _b;
    todoDetailsHeading.innerHTML = "";
    todoDetailsTasksContainer.innerHTML = "";
    todoDetailsHeading.innerHTML = `
    <h4 class="todo-title">${todo.title}</h4>

    <p class="todo-content">${todo.content}</p>
  `;
    (_a = todo.tasks) === null || _a === void 0 ? void 0 : _a.map((t) => {
        const span = t.done
            ? `<span class="icon-check done-item"  data-task=${t.id} data-todo=${todo.id} style="color:green"></span>`
            : `<span class="circle done-item"  data-task=${t.id} data-todo=${todo.id}></span>`;
        todoDetailsTasksContainer.innerHTML += `
      <div class="task-item-box done-item flex align-center space-between"  data-task=${t.id} data-todo=${todo.id}>
      <div class="left flex align-center gap-10 done-item"  data-task=${t.id} data-todo=${todo.id}>
        ${span}
        <h4 class="task-title done-item"  data-task=${t.id} data-todo=${todo.id}>${t.task}</h4>
      </div>

      <div class="right done-item"  data-task=${t.id} data-todo=${todo.id}>
        <p class="todo-time done-item"  data-task=${t.id} data-todo=${todo.id}>${t.time}</p>
      </div>
    </div>
    `;
    });
    ((_b = todo.tasks) === null || _b === void 0 ? void 0 : _b.length) > 0
        ? (todoDetailsCtrl.innerHTML = `
    <i class="icon-pencil edit-todo" id="editTodoTasks" data-task=${todo.id}></i>
    <i class="icon-trash delete-todo" id="deleteTodoTasks" data-task=${todo.id}></i>
    `)
        : (todoDetailsCtrl.innerHTML = `
    <i class="icon-pencil edit-todo" id="editLeftTodo" data-task=${todo.id}></i>
    <i class="icon-trash delete-todo" id="deleteLeftTodo" data-task=${todo.id}></i>
    `);
}
function openEditForm() {
    formEdiTodoContainer.classList.add("open");
}
function closeEditForm() {
    formEdiTodoContainer.classList.add("close");
    setTimeout(() => {
        formEdiTodoContainer.classList.remove("open");
        formEdiTodoContainer.classList.remove("close");
    }, 200);
    clearEditForm();
}
function clearEditForm() {
    editTodoTitle.value = "";
    editTodoContent.value = "";
    editTodoTime.value = "";
    editItemsContainer.innerHTML = "";
    color = "";
    todoItemsTask = [];
}
function setTodoDate(todo) {
    var _a;
    todoItemsTask = todo.tasks;
    editChoseColorLabel.style.borderColor = todo.color;
    editChoseColorLabel.style.color = todo.color;
    editColorDivValue.style.background = todo.color;
    editTodoTitle.value = todo.title;
    editTodoContent.value = todo.content;
    editTodoTitle.value = todo.title;
    editTodoTime.value = todo.time.split(" ")[0];
    (_a = todo.tasks) === null || _a === void 0 ? void 0 : _a.map((t) => {
        editItemsContainer.innerHTML += `
      <div class="item-box task-edit-item flex align-center space-between gap-10" data-task=${t.id}>
      <div class="item-box-left task-edit-item flex align-center gap-5" data-task=${t.id}>
        <span class="circle task-edit-item" data-task=${t.id}></span>
        <p class="item-text task-edit-item" data-task=${t.id}>${t.task}</p>
      </div>
      <div class="item-box-date task-edit-item flex align-center gap-10" data-task=${t.id}>
        <p class="task-edit-item" data-task=${t.id}>${t.time}</p>
        <i class="icon-trash deleteTaskItem" id="deleteEditTaskItem" data-task=${t.id}></i>
      </div>
  </div>
      `;
    });
}
function showItems() {
    rightInputs.style.display = "block";
    addMoreItemEdit.style.display = "flex";
    editChoseColorLabel.style.display = "flex";
}
function hiddenItems() {
    rightInputs.style.display = "none";
    addMoreItemEdit.style.display = "none";
    editChoseColorLabel.style.display = "none";
}
backHome.addEventListener("click", closeForm);
editBackHome.addEventListener("click", closeEditForm);
newTodo.addEventListener("click", openForm);
closeTodo.addEventListener("click", closeTodoDetails);
todoColor.addEventListener("change", (e) => {
    color = e.target.value;
    choseColorLabel.style.borderColor = color;
    choseColorLabel.style.color = color;
    colorDivValue.style.background = color;
});
editTodoColor.addEventListener("change", (e) => {
    color = e.target.value;
    editChoseColorLabel.style.borderColor = color;
    editChoseColorLabel.style.color = color;
    editColorDivValue.style.background = color;
});
function getTime(val) {
    let t;
    let currentTime;
    if (+val.split(":")[0] > 12) {
        t = +val.split(":")[0] - 12;
        currentTime = `${t}:${val.split(":")[1]} PM`;
    }
    else {
        if (+val.split(":")[0] === 0) {
            t = 12;
            currentTime = `${t}:${val.split(":")[1]} PM`;
        }
        else {
            currentTime = `${val} AM`;
        }
    }
    return currentTime;
}
function deleteTask(taskId) {
    todoItemsTask = todoItemsTask.filter((item) => item.id !== taskId);
}
function deleteTodo(todoId) {
    allTodo = allTodo.filter((t) => t.id !== todoId);
    showRightCards();
}
function deleteLeftTodo(todoId) {
    todoWithoutTasks = todoWithoutTasks.filter((t) => t.id !== todoId);
    showLeftCards();
}
function openAddTaskForm() {
    todoTasksContainer.classList.add("open");
    todoTaskForm.style.display = "block";
    todoEditTaskForm.style.display = "none";
}
function openEditTaskForm() {
    todoTasksContainer.classList.add("open");
    todoEditTaskForm.style.display = "block";
    todoTaskForm.style.display = "none";
}
function closeAddTaskForm() {
    todoTasksContainer.classList.remove("open");
    todoTaskInput.value = "";
    todoTaskTimeInput.value = "";
    todoEditTaskForm.value = "";
    todoEditTaskTimeInput.value = "";
}
addMoreItem.addEventListener("click", openAddTaskForm);
closeTodoTask.addEventListener("click", closeAddTaskForm);
todoTaskForm.addEventListener("submit", submitTodoTask);
function submitTodoTask(e) {
    e.preventDefault();
    let taskVal;
    if (todoTaskInput.value !== "" && todoTaskTimeInput.value !== "") {
        let currentTime = getTime(todoTaskTimeInput.value);
        taskVal = {
            id: todoItemsTask.length + 1,
            task: todoTaskInput.value,
            time: currentTime,
            done: false,
        };
        todoItemsTask.push(taskVal);
        closeAddTaskForm();
        displayTodoTaskItems();
    }
    else {
        alert("Please enter a task");
    }
}
function openAddTaskFormEdit() {
    editTodoTasksContainer.classList.add("open");
    todoTaskForm_edit.style.display = "block";
    todoEditTaskForm_edit.style.display = "none";
}
function openEditTaskFormEdit() {
    editTodoTasksContainer.classList.add("open");
    todoEditTaskForm_edit.style.display = "block";
    todoTaskForm_edit.style.display = "none";
}
function closeAddTaskFormEdit() {
    editTodoTasksContainer.classList.remove("open");
    todoTaskInput_edit.value = "";
    todoTaskTimeInput_edit.value = "";
    todoEditTaskForm_edit.value = "";
    todoEditTaskTimeInput_edit.value = "";
}
function displayTodoTaskItemsEdit() {
    editItemsContainer.innerHTML = "";
    todoItemsTask.length > 0 &&
        todoItemsTask.map((t) => {
            editItemsContainer.innerHTML += `
      <div class="item-box task-edit-item flex align-center space-between gap-10" data-task=${t.id}>
      <div class="item-box-left task-edit-item flex align-center gap-5" data-task=${t.id}>
        <span class="circle task-edit-item" data-task=${t.id}></span>
        <p class="item-text task-edit-item" data-task=${t.id}>${t.task}</p>
      </div>
      <div class="item-box-date task-edit-item flex align-center gap-10" data-task=${t.id}>
        <p class="task-edit-item" data-task=${t.id}>${t.time}</p>
        <i class="icon-trash deleteTaskItem" id="deleteEditTaskItem" data-task=${t.id}></i>
      </div>
  </div>`;
        });
}
addMoreItemEdit.addEventListener("click", openAddTaskFormEdit);
editCloseTodoTask.addEventListener("click", closeAddTaskFormEdit);
todoTaskForm_edit.addEventListener("submit", submitTodoTaskEdit);
function submitTodoTaskEdit(e) {
    e.preventDefault();
    let taskVal;
    if (todoTaskInput_edit.value !== "" && todoTaskTimeInput_edit.value !== "") {
        let currentTime = getTime(todoTaskTimeInput_edit.value);
        taskVal = {
            id: todoItemsTask.length + 1,
            task: todoTaskInput_edit.value,
            time: currentTime,
            done: false,
        };
        todoItemsTask.push(taskVal);
        closeAddTaskFormEdit();
        displayTodoTaskItemsEdit();
    }
    else {
        alert("Please enter a task");
    }
}
todoEditTaskForm_edit.addEventListener("submit", submitTodoEditTaskEdit);
function submitTodoEditTaskEdit(e) {
    e.preventDefault();
    if (editTodoTaskInput_edit.value !== "" &&
        todoEditTaskTimeInput_edit.value !== "") {
        let currentTime = getTime(todoEditTaskTimeInput_edit.value);
        todoItemsTask.find((t) => {
            if (t.id === currentTaskItem.id) {
                t.task = editTodoTaskInput_edit.value;
                t.time = currentTime;
            }
        });
        closeAddTaskFormEdit();
        displayTodoTaskItemsEdit();
    }
    else {
        alert("Please enter a Task");
    }
}
let editTodo;
document.addEventListener("click", (e) => {
    if (e.target.classList.contains("task-item")) {
        const itemId = e.target.dataset.task;
        currentTaskItem =
            itemId && todoItemsTask.find((item) => item.id === +itemId);
        openEditTaskForm();
        editTodoTaskInput.value = currentTaskItem.task;
    }
    if (e.target.classList.contains("task-edit-item")) {
        const itemId = e.target.dataset.task;
        currentTaskItem =
            itemId && todoItemsTask.find((item) => item.id === +itemId);
        openEditTaskFormEdit();
        editTodoTaskInput_edit.value = currentTaskItem.task;
    }
    if (e.target.id === "deleteTaskItem") {
        const itemId = +e.target.dataset.task;
        deleteTask(itemId);
        displayTodoTaskItems();
    }
    if (e.target.id === "deleteEditTaskItem") {
        const itemId = +e.target.dataset.task;
        deleteTask(itemId);
        displayTodoTaskItemsEdit();
    }
    if (e.target.classList.contains("show-task")) {
        const todoId = e.target.dataset.task;
        const targetTodo = todoId && allTodo.find((t) => t.id === +todoId);
        openTodoDetails();
        showTodoDetails(targetTodo);
    }
    if (e.target.classList.contains("show-todo")) {
        const todoId = e.target.dataset.task;
        const targetTodo = todoId && todoWithoutTasks.find((t) => t.id === +todoId);
        openTodoDetails();
        showTodoDetails(targetTodo);
    }
    if (e.target.id === "deleteTodoTasks") {
        const todoId = +e.target.dataset.task;
        todoDetails.classList.remove("open");
        deleteTodo(todoId);
    }
    if (e.target.id === "deleteLeftTodo") {
        const todoId = +e.target.dataset.task;
        todoDetails.classList.remove("open");
        deleteLeftTodo(todoId);
    }
    if (e.target.id === "editTodoTasks") {
        const todoId = e.target.dataset.task;
        editTodo = todoId && allTodo.find((t) => t.id === +todoId);
        todoDetails.classList.remove("open");
        openEditForm();
        showItems();
        setTodoDate(editTodo);
    }
    if (e.target.id === "editLeftTodo") {
        const todoId = e.target.dataset.task;
        editTodo = todoId && todoWithoutTasks.find((t) => t.id === +todoId);
        todoDetails.classList.remove("open");
        hiddenItems();
        openEditForm();
        setTodoDate(editTodo);
    }
    if (e.target.classList.contains("todo-details")) {
        closeTodoDetails();
    }
    if (e.target.classList.contains("done-item")) {
        const todoId = e.target.dataset.todo;
        const taskId = e.target.dataset.task;
        const getTodo = todoId && allTodo.find((t) => t.id === +todoId);
        const getTask = taskId && getTodo.tasks.find((t) => t.id === +taskId);
        addDone(getTask);
        showTodoDetails(getTodo);
    }
});
function addDone(getTask) {
    if (getTask.done) {
        getTask.done = false;
    }
    else {
        getTask.done = true;
    }
}
todoEditTaskForm.addEventListener("submit", submitTodoEditTask);
function submitTodoEditTask(e) {
    e.preventDefault();
    if (editTodoTaskInput.value !== "" && todoEditTaskTimeInput.value !== "") {
        let currentTime = getTime(todoEditTaskTimeInput.value);
        todoItemsTask.find((t) => {
            if (t.id === currentTaskItem.id) {
                t.task = editTodoTaskInput.value;
                t.time = currentTime;
            }
        });
        closeAddTaskForm();
        displayTodoTaskItems();
    }
    else {
        alert("Please enter a Task");
    }
}
formAddTodo.addEventListener("submit", (e) => {
    e.preventDefault();
    if (todoTitle.value !== "" &&
        todoContent.value !== "" &&
        todoTime.value !== "") {
        const time = getTime(todoTime.value);
        const todo = {
            id: allTodo.length + 1,
            title: todoTitle.value,
            time,
            content: todoContent.value,
            color,
            tasks: todoItemsTask,
        };
        let newTodo;
        if (todo.tasks.length <= 0) {
            newTodo = {
                id: todoWithoutTasks.length + 1,
                time: todo.time,
                title: todo.title,
                content: todo.content,
            };
            todoWithoutTasks.push(newTodo);
        }
        else {
            allTodo.push(todo);
        }
        closeForm();
        showLeftCards();
        showRightCards();
    }
    else {
        alert("please add all Todo information");
    }
});
formEditTodo.addEventListener("submit", (e) => {
    e.preventDefault();
    if (editTodoTitle.value !== "" &&
        editTodoContent.value !== "" &&
        editTodoTime.value !== "") {
        const time = getTime(editTodoTime.value);
        const todo = {
            id: editTodo.id,
            title: editTodoTitle.value,
            time,
            content: editTodoContent.value,
            color,
            tasks: todoItemsTask,
        };
        if (todo.tasks === undefined) {
            todoWithoutTasks.find((t) => {
                if (t.id === editTodo.id) {
                    t.id = todo.id;
                    t.title = todo.title;
                    t.time = todo.time;
                    t.content = todo.content;
                }
            });
        }
        else {
            allTodo.find((t) => {
                if (t.id === editTodo.id) {
                    t.id = todo.id;
                    t.title = todo.title;
                    t.time = todo.time;
                    t.content = todo.content;
                    t.color = todo.color;
                    t.tasks = todo.tasks;
                }
            });
        }
        closeEditForm();
        showLeftCards();
        showRightCards();
    }
    else {
        alert("please add all Todo information");
    }
});
window.addEventListener("load", () => {
    showLeftCards();
    showRightCards();
});
