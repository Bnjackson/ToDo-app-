let allTasks = [];
let uncompletedTasks = [];
let completedTasks = [];
let allTasksContainer = document.getElementById('all-tasks');
let uncompletedTasksContainer = document.getElementById('uncompleted-tasks');
let completedTasksContainer = document.getElementById('completed-tasks');

document.getElementById('task-submit').addEventListener('click', () => {
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


document.getElementById('clear-btn').addEventListener('click', clearTasks);
document.getElementById('all').addEventListener('click', changeSection);
document.getElementById('uncompleted').addEventListener('click', changeSection);
document.getElementById('completed').addEventListener('click', changeSection);

function changeSection() {
    if(event.target.id === 'all') {
        allTasksContainer.style.display = 'block';
        uncompletedTasksContainer.style.display = 'none';
        completedTasksContainer.style.display = 'none';
    } else if (event.target.id === 'uncompleted') {
        uncompletedTasksContainer.style.display = 'block';
        allTasksContainer.style.display = 'none';
        completedTasksContainer.style.display = 'none';
    } else if (event.target.id === 'completed') {
        completedTasksContainer.style.display = 'block';
        allTasksContainer.style.display = 'none';
        uncompletedTasksContainer.style.display = 'none';
    }
}