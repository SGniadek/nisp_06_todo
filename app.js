const input = document.getElementById("name");
const button = document.getElementById("button");
const list = document.getElementById("task-list");

button.addEventListener("click", () => {
    const text = input.value.trim();
    if (!text) return;

    const li = document.createElement("li");

    // Tworzymy checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "task-check";

    // Tekst zadania
    const span = document.createElement("span");
    span.className = "task-text";
    span.textContent = text;

    // Przycisk usuwania
    const del = document.createElement("button");
    del.className = "delete-btn";
    del.textContent = "";

    // Dodajemy do li
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(del);

    list.appendChild(li);
    input.value = "";

    // Obsługa checkboxa
    checkbox.addEventListener("change", () => {
        li.classList.toggle("done");

        // animacja błysku przy zaznaczeniu
        li.classList.add("flash");
        setTimeout(() => li.classList.remove("flash"), 450);
    });

    // Usuwanie
    del.addEventListener("click", () => {
        li.style.animation = "taskRemove 0.35s ease forwards";
        setTimeout(() => li.remove(), 350);
    });
});
