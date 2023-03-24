/*
SECTION ARRAYS
*/
const allTasks = [];
const uncompletedTasks = [];
const completedTasks = [];

/* 
TASK INPUT, SUBMIT AND CREATE TASK
*/
const allTasksContainer = document.getElementById('all-tasks');
const uncompletedTasksContainer = document.getElementById('uncompleted-tasks');
const completedTasksContainer = document.getElementById('completed-tasks');

document.getElementById('task-submit').addEventListener('click', () => {
    let input = document.getElementById('task-input');
    if(input.value && allTasks.length === 0) {
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

function createTask() {
    let newTask = document.createElement('span');
    let taskWrapper = document.createElement('div');
    let newCheckbox = createCheckbox();
    taskWrapper.classList.add('task-wrapper');
    newTask.classList.add('task');
    newTask.innerText = allTasks[allTasks.length - 1];
    displayTask();
    function displayTask() {
        taskWrapper.append(newCheckbox);
        taskWrapper.append(newTask);
        allTasksContainer.append(taskWrapper);
        let taskWrapperClone = taskWrapper.cloneNode(true);
        //Have to create a clone of taskWrapper as the original can only be appeneded to 1 container.
        uncompletedTasksContainer.append(taskWrapperClone);
    }
    function createCheckbox () {
        let checkboxWrapper = document.createElement('div');
        checkboxWrapper.classList = 'checkbox-wrapper';
        let checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        checkbox.setAttribute('id', 'selected-checkbox');
        checkboxWrapper.append(checkbox)
        return checkboxWrapper;
    }
}

/* 
SECTION SELECTOR
*/
const clearButton = document.getElementById('clear-btn');
const allSection = document.getElementById('all');
const uncompletedSection = document.getElementById('uncompleted');
const completedSection = document.getElementById('completed');

clearButton.addEventListener('click', clearTasks);
allSection.addEventListener('click', changeSection);
uncompletedSection.addEventListener('click', changeSection);
completedSection.addEventListener('click', changeSection);

function changeSection() {
    if(event.target.id === 'all') { 
        allTasksContainer.style.display = 'block';
        uncompletedTasksContainer.style.display = 'none';
        completedTasksContainer.style.display = 'none';
        changeSelected(event.target.id);
    } else if (event.target.id === 'uncompleted') {
        uncompletedTasksContainer.style.display = 'block';
        allTasksContainer.style.display = 'none';
        completedTasksContainer.style.display = 'none';
        changeSelected(event.target.id);
    } else if (event.target.id === 'completed') {
        completedTasksContainer.style.display = 'block';
        allTasksContainer.style.display = 'none';
        uncompletedTasksContainer.style.display = 'none';
        changeSelected(event.target.id);
    }
    function changeSelected(section) {
        allSection.classList.remove('selected');
        uncompletedSection.classList.remove('selected');
        completedSection.classList.remove('selected');
        if(section === 'all') {
            allSection.classList.add('selected');
        } else if (section === 'uncompleted') {
            uncompletedSection.classList.add('selected');
        } else if (section === 'completed') {
            completedSection.classList.add('selected');
        }
        section.classList.add('selected');
    }
}

/*
CLEAR CONTAINER SECTIONS
*/
function clearTasks() {
    while (allTasksContainer.firstChild) {
        allTasksContainer.removeChild(allTasksContainer.firstChild);
    }
    while (uncompletedTasksContainer.firstChild) {
        uncompletedTasksContainer.removeChild(uncompletedTasksContainer.firstChild);
    }
    while (completedTasksContainer.firstChild) {
        completedTasksContainer.removeChild(completedTasksContainer.firstChild);
    }
}

/* 
MOVE TASK FROM UNCOMPLETED TO COMPLETED 
*/

let checkbox = document.getElementById('completedCheckbox');
console.log(checkbox);

function addListenerToCheckbox () {
    
}