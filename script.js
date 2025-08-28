let lastIndex = -1;

async function loadQuotes() {
  const url = "quotes.json";
  const response = await fetch(url);
  const data = await response.json();
  return data;
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
