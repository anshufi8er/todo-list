// Important DOM elements
const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');
const taskCounter = document.getElementById('taskCounter');

// tracking of tasks in an array
let tasks = [];

//  updating the task counter
function updateTaskCounter() {
  taskCounter.textContent = tasks.length;
}

// adding a task to the list
function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText !== '') {
    tasks.push({ text: taskText, completed: false });
    renderTasks();
    taskInput.value = '';
  }
}

// deleting a task from the list
function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

// toggle the task completion status
function toggleCompleted(index) {
  tasks[index].completed = !tasks[index].completed;
  renderTasks();
}

// rendering the tasks in the list
function renderTasks() {
  taskList.innerHTML = '';
  tasks.forEach((task, index) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      <input type="checkbox" ${task.completed ? 'checked' : ''}     
       onchange="toggleCompleted(${index})">
      <span class="${task.completed ? 'completed' : ''}">${task.text}</span>
      <button onclick="deleteTask(${index})"><img src="images/deleteico.png" class="icon1">    
      </button>
    `;
    taskList.appendChild(listItem);
  });
  updateTaskCounter();
}

// adding listener to the Add btton
addButton.addEventListener('click', addTask);

// Initial rwendering of tasks
renderTasks();
