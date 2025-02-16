// Récupération des éléments HTML
const taskInput = document.getElementById('userInput');
const taskList = document.getElementById('list');
const taskForm = document.getElementById('addtodo');
const searchBar = document.getElementById('searchbar');

// Chargement des tâches depuis le localStorage
let tasks = JSON.parse(localStorage.getItem('todos')) || ["play mariokart", "defeat ganon in zelda", "make a veggie pie"];

// Fonction pour mettre à jour l'affichage des tâches
function updateTaskList(list) {
    taskList.innerHTML = "";
    list.forEach((task, idx) => {
        let taskItem = document.createElement('li');
        taskItem.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');

        let taskText = document.createElement("span");
        taskText.textContent = task;

        let deleteIcon = document.createElement('i');
        deleteIcon.classList.add("far", "fa-trash-alt", "delete");

        deleteIcon.addEventListener('click', function () {
            deleteTask(idx);
        });

        taskItem.appendChild(taskText);
        taskItem.appendChild(deleteIcon);
        taskList.appendChild(taskItem);
    });
};

// Fonction pour ajouter une tâche
function addTask(task) {
    tasks.push(task);
    localStorage.setItem('todos', JSON.stringify(tasks));
    updateTaskList(tasks);
};

// Fonction pour supprimer une tâche
function deleteTask(index) {
    tasks.splice(index, 1);
    localStorage.setItem('todos', JSON.stringify(tasks));
    updateTaskList(tasks);
};

// Gestionnaire d'événement pour l'ajout de tâches
taskForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const newTask = taskInput.value.trim();
    if (newTask !== "") {
        addTask(newTask);
        taskInput.value = "";
    }
});

// Gestionnaire d'événement pour la recherche de tâches
searchBar.addEventListener('input', function (event) {
    event.preventDefault();
    const searchTerm = event.target.value.toLowerCase();
    const filteredTasks = tasks.filter(task => task.toLowerCase().startsWith(searchTerm));
    updateTaskList(filteredTasks);
});

// Affichage initial des tâches
updateTaskList(tasks);
