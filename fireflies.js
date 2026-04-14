// Tworzymy kontener na świetliki
const container = document.createElement("div");
container.className = "fireflies";
document.body.appendChild(container);

// Ile świetlików ma latać
const FIREFLY_COUNT = 40;

for (let i = 0; i < FIREFLY_COUNT; i++) {
    const f = document.createElement("div");
    f.className = "firefly";

    // Losowa pozycja startowa
    f.style.left = Math.random() * 100 + "vw";

    // Losowy czas animacji
    const duration = 6 + Math.random() * 10;
    f.style.animationDuration = `${duration}s, ${2 + Math.random() * 3}s`;

    // Losowe przesunięcie w bok podczas lotu
    f.style.setProperty("--x-shift", (Math.random() * 200 - 100) + "px");

    // Losowy rozmiar
    const size = 4 + Math.random() * 8;
    f.style.width = size + "px";
    f.style.height = size + "px";

    container.appendChild(f);
}