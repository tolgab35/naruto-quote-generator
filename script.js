let lastIndex = -1;
let cachedQuotes = null;

async function loadQuotes() {
  if (!cachedQuotes) {
    const response = await fetch("quotes.json");
    cachedQuotes = await response.json();
  }
  return cachedQuotes;
}

async function showQuotes() {
  const quotes = await loadQuotes();

  let randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * quotes.length);
  } while (randomIndex === lastIndex);

  lastIndex = randomIndex;

  const random = quotes[randomIndex];
  document.getElementById("quote").textContent = random.quote;
  document.getElementById("author").textContent = random.author;
}

document.addEventListener("DOMContentLoaded", async () => {
  showQuotes();

  document.getElementById("new-quote").addEventListener("click", async () => {
    showQuotes();
  });
});
