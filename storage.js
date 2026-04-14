// Klucz pod którym zapisujemy dane
const STORAGE_KEY = "todo-list-data";

// Funkcja zapisująca aktualną listę do localStorage
function saveTasks() {
    const tasks = [];

    document.querySelectorAll("#task-list li").forEach(li => {
        tasks.push({
            text: li.querySelector(".task-text").textContent,
            done: li.classList.contains("done")
        });
    });

    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

// Funkcja wczytująca listę z localStorage
function loadTasks() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return;

    const tasks = JSON.parse(saved);

    tasks.forEach(task => {
        const li = document.createElement("li");

        // checkbox
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className = "task-check";
        checkbox.checked = task.done;

        // tekst
        const span = document.createElement("span");
        span.className = "task-text";
        span.textContent = task.text;

        // delete
        const del = document.createElement("button");
        del.className = "delete-btn";

        // dodajemy do li
        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(del);

        if (task.done) li.classList.add("done");

        // eventy
        checkbox.addEventListener("change", () => {
            li.classList.toggle("done");

            li.classList.add("flash");
            setTimeout(() => li.classList.remove("flash"), 450);

            saveTasks();
        });

        del.addEventListener("click", () => {
            li.style.animation = "taskRemove 0.35s ease forwards";
            setTimeout(() => {
                li.remove();
                saveTasks();
            }, 350);
        });

        document.getElementById("task-list").appendChild(li);
    });
}

// Uruchamiamy wczytywanie przy starcie
loadTasks();

// Nasłuchujemy zmian w liście (dodawanie z app.js)
document.getElementById("button").addEventListener("click", () => {
    setTimeout(saveTasks, 50);
});
