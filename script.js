async function loadQuotes() {
  const url = "quotes.json";

  const response = await fetch(url);
  const data = await response.json();

  console.log(data);
}

loadQuotes();
