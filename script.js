const photos = [
  "img/2.jpg",
  "img/3.jpg",
  "img/4.jpg"
];

const verses = [
  "O amor é paciente, o amor é bondoso... — 1 Coríntios 13:4",
  "Assim, eles já não são dois, mas sim uma só carne... — Mateus 19:6",
  "Acima de tudo, revistam-se do amor, que é o elo perfeito. — Colossenses 3:14"
];

let index = 0;

function nextPhoto() {
  index = (index + 1) % photos.length;
  document.getElementById("photo").src = photos[index];
  typeVerse(verses[index]);
}

function typeVerse(text) {
  const verseElement = document.getElementById("verse");
  verseElement.textContent = "";
  let i = 0;
  const interval = setInterval(() => {
    verseElement.textContent += text[i];
    i++;
    if (i >= text.length) clearInterval(interval);
  }, 50);
}

function likePhoto() {
  alert("Você curtiu essa lembrança! ❤️");
}

document.getElementById("themeToggle").addEventListener("change", function () {
  document.body.classList.toggle("dark");
});

// Inicializa com o primeiro versículo
typeVerse(verses[0]);