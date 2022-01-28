const quotes = [
    {
        quote : "Do not accustom yourself to use big words for little matters.",
        author : "Samuel Johnson",
    },
    {
        quote : "Patterning your life around other's opinions is nothing more than slavery.",
        author : "Lawana Blackwell",
    },
    {
        quote : "Life is not fair, get used to it.",
        author : "Bill gates",
    },
    {
        quote : "Only I can change my life, No one can do it for me.",
        author : "Carol Burnett Award",
    },
    {
        quote : "No pain no gain.",
        author : "Thomas",
    },
    {
        quote : "Slow and steady win the race.",
        author : "Proverb",
    },
    {
        quote : "Rome is not built in a day.",
        author : "Proverb",
    },
    {
        quote : "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author : "Nelson Mandela",
    },
    {
        quote : "Life is either a great adventure or nothing. ",
        author : "Helen Keller",
    },
    {
        quote : "Success is not final; failure is not fatal: It is the courage to continue that counts.",
        author : "Winston S. Churchill",
    },    
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;