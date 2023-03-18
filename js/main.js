let allTasks = [];
let uncompletedTasks = [];
let completedTasks = [];
let submitButton = document.getElementById('task-submit');
let allTasksContainer = document.getElementById('all-tasks');
let uncompletedTasksContainer = document.getElementById('uncompleted-tasks');
let completedTasksContainer = document.getElementById('completedTasks');

submitButton.addEventListener('click', () => {
    let input = document.getElementById('task-input');
    if(allTasks.length === 0) {
        clearTasks();
    }
    if(input.value) {
        allTasks.push(input.value);
        uncompletedTasks.push(input.value);
        input.value = "";
        createTask();
    }else {
        alert("You need to enter a task before submitting");
    }
})

function clearTasks() {
    while (allTasksContainer.firstChild) {
        allTasksContainer.removeChild(allTasksContainer.firstChild);
    }
    
}

function createTask() {
    let newTask = document.createElement('span');
    let taskWrapper = document.createElement('div');
    taskWrapper.classList.add('task-wrapper');
    newTask.classList.add('task');
    newTask.innerText = allTasks[allTasks.length - 1];
    displayTask();
    function displayTask() {
        taskWrapper.append(newTask);
        allTasksContainer.append(taskWrapper);
        let taskWrapperClone = taskWrapper.cloneNode(true);
        uncompletedTasksContainer.append(taskWrapperClone);
    }
}