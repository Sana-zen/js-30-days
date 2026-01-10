const newQuoteBtn = document.getElementById("newQuoteBtn");
const quoteText = document.getElementById("quoteText");
const quoteAuthor = document.getElementById("quoteAuthor");

const quotes = [
    {
        quote: "“Success is the sum of small efforts repeated day in and day out.”",
        author: "Robert Collier"
    },
    {
        quote: "“We suffer more often in imagination than in reality.”",
        author: "Seneca"
    },
    {
        quote: "“It is not that I’m so smart. It’s just that I stay with problems longer.”",
        author: "Albert Einstein"
    },
    {
        quote: "“The only way to do great work is to love what you do.”",
        author: "Steve Jobs"
    },
    {
        quote: "“First, solve the problem. Then, write the code.”",
        author: "John Johnson"
    }
]

let currentIndex = 3;

function quoteDisplay (index) {
    quoteText.textContent = quotes[index].quote;
    quoteAuthor.textContent = quotes[index].author;
  }


newQuoteBtn.addEventListener("click", () => {
    currentIndex++;

    if(currentIndex >= quotes.length) {
        currentIndex = 0;
    }

quoteDisplay(currentIndex);
});
