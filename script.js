const qouteContainer = document.getElementById("qoute-container");
const qouteText = document.getElementById("qoute");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQouteBtn = document.getElementById("new-qoute");

let apiQoutes = [];
function newQoutes() {
  const qoute = apiQoutes[Math.floor(Math.random() * apiQoutes.length)];

  if (!qoute.author) {
    authorText.textContent = "Unknown";
  } else {
    authorText.textContent = qoute.author;
  }

  if (qoute.text.length > 50) {
    qouteText.classList.add("long-qoute");
  } else {
    qouteText.classList.remove("long-qoute");
  }
  qouteText.textContent = qoute.text;
}
async function getQoutes() {
  const apiUrl = "https://jacintodesign.github.io/quotes-api/data/quotes.json";
  try {
    const response = await fetch(apiUrl);
    apiQoutes = await response.json();
    newQoutes();
  } catch (error) {
    //catch error
    console.log("erroe in the program");
  }
}

function tweetQoute() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${qouteText.textContent} - ${authorText.textContent}`;
  window.open(twitterUrl, "_blank");
}

newQouteBtn.addEventListener("click", newQoutes);
twitterBtn.addEventListener("click", tweetQoute);

getQoutes();

m;
