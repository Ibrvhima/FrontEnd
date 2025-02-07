// Sélection des éléments
const taskInput = document.getElementById("task");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// Fonction pour ajouter une tâche
function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") return; // Vérifie que l'input n'est pas vide

  // Crée un nouvel élément <li>
  const li = document.createElement("li");
  li.innerHTML = `
        <span>${taskText}</span>
        <div class="options">
        <button class="updateBtn"><ion-icon name="pencil-outline"></ion-icon></button>
        <button class="deleteBtn"><ion-icon name="trash-outline"></ion-icon></button></div>
    `;
  taskList.appendChild(li);
  //convertir la premiere lettre en majuscule

  li.querySelector("span").textContent = li.querySelector("span").textContent.charAt(0).toUpperCase() + li.querySelector("span").textContent.slice(1);
  

  // Efface l'input
  taskInput.value = "";

  // Ajouter les événements : Marquer comme terminé et Supprimer
  li.querySelector("span").addEventListener("click", () => {
    li.querySelector("span").classList.toggle("completed");
  });

  li.querySelector(".deleteBtn").addEventListener("click", () => {
    taskList.removeChild(li);


  });
  li.querySelector(".updateBtn").addEventListener("click", () => {
      const newText = prompt("Entrez le nouveau texte de la tâche", li.querySelector("span").textContent);
      if (newText) {
        li.querySelector("span").textContent = newText.charAt(0).toUpperCase() + newText.slice(1);
        saveTasks();
      }
    });

  saveTasks(); // Sauvegarde dans le local storage
}

// Sauvegarde les tâches dans le local storage
function saveTasks() {
  const tasks = [];
  document.querySelectorAll("#taskList li").forEach((li) => {
    tasks.push({
      text: li.querySelector("span").textContent,
      completed: li.querySelector("span").classList.contains("completed"),
    });
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Charge les tâches depuis le local storage
function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
  tasks.forEach((task) => {
    const li = document.createElement("li");
    li.innerHTML = `
            <span class="${task.completed ? "completed" : ""}">${
      task.text
    }</span>
            <button class="deleteBtn">Supprimer</button>
        `;
    taskList.appendChild(li);

    // Ajouter les événements
    li.querySelector("span").addEventListener("click", () => {
      li.querySelector("span").classList.toggle("completed");
      saveTasks();
    });
    li.querySelector(".deleteBtn").addEventListener("click", () => {
      taskList.removeChild(li);
      saveTasks();
    });
  });
}

// Événement : Ajouter une tâche
addTaskBtn.addEventListener("click", addTask);

// Charger les tâches au démarrage
window.addEventListener("load", loadTasks);
