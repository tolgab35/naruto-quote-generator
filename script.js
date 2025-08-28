async function loadQuotes() {
  const url = "quotes.json";
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

document.getElementById("new-quote").addEventListener("click", async () => {
  const quotes = await loadQuotes();

  const random = quotes[Math.floor(Math.random() * quotes.length)];

  document.getElementById("quote").textContent = random.quote;
  document.getElementById("author").textContent = random.author;
});
