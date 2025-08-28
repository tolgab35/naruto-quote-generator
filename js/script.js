let lastIndex = -1;
let cachedQuotes = null;

async function loadQuotes() {
  if (!cachedQuotes) {
    const response = await fetch("data/quotes.json");
    cachedQuotes = await response.json();
  }
  return cachedQuotes;
}

async function showQuotes() {
  const quotes = await loadQuotes();
  const quoteElement = document.getElementById("quote");
  const authorElement = document.getElementById("author");

  // Fade out
  quoteElement.classList.add("fade-out");
  authorElement.classList.add("fade-out");

  // Wait for fade out animation to complete
  await new Promise((resolve) => setTimeout(resolve, 300));

  let randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * quotes.length);
  } while (randomIndex === lastIndex);

  lastIndex = randomIndex;

  const random = quotes[randomIndex];
  quoteElement.textContent = random.quote;
  authorElement.textContent = random.author;

  // Fade in
  quoteElement.classList.remove("fade-out");
  authorElement.classList.remove("fade-out");
}

document.addEventListener("DOMContentLoaded", async () => {
  showQuotes();

  document.getElementById("new-quote").addEventListener("click", async () => {
    showQuotes();
  });
});
