const initialFacts = [
  {
    id: 1,
    text: "React is being developed by Meta (formerly facebook)",
    source: "https://opensource.fb.com/",
    category: "technology",
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
    source:
      "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
    category: "society",
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: "Lisbon is the capital of Portugal",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "society",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
];

const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];

//Selecting DOM Elements

const btn = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");
const factsList = document.querySelector(".facts-list");

//Create DOM Elements: Render facts in list
factsList.innerHTML = "";

//Load Data from supabse
loadFacts();

async function loadFacts() {
  const res = await fetch(
    "https://vkrfcpgwtskrhlhgnrta.supabase.co/rest/v1/facts?",
    {
      headers: {
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZrcmZjcGd3dHNrcmhsaGducnRhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ0MTQ0MTksImV4cCI6MjAyOTk5MDQxOX0.YLJbcaPSwSOZ_5ghzmOvk4xBYkD95yd2mgoHwPvCxYg",
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZrcmZjcGd3dHNrcmhsaGducnRhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ0MTQ0MTksImV4cCI6MjAyOTk5MDQxOX0.YLJbcaPSwSOZ_5ghzmOvk4xBYkD95yd2mgoHwPvCxYg",
      },
    }
  );
  const data = await res.json();
  // const filteredData = data.filter(fact)=>fact.category == "society";

  createFactsList(data);
}

// createFactsList(initialFacts);

function createFactsList(dataArray) {
  const htmlArr = dataArray.map(
    (fact) => `<li class="fact"> 
    <p>
    ${fact.text} 
      <a class="source" href=${fact.source} 
      >(Source)</a>
    </p>
    <span class="tag" style="background-color: ${
      CATEGORIES.find((cat) => cat.name === fact.category).color
    }" ; >${fact.category}</span>
  </li>`
  );
  const html = htmlArr.join("");
  factsList.insertAdjacentHTML("afterbegin", html);
}
// factsList.insertAdjacentHTML("afterbegin", "<li>Jonas</li>");
// factsList.insertAdjacentHTML("afterbegin", "<li>mike</li>");

///Toggle form visibility

btn.addEventListener("click", function () {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    btn.textContent = "Close";
  } else {
    form.classList.add("hidden");
    btn.textContent = "Share a fact";
  }
});

// let votesInteresting = 20;
// let votesMindblowing = 5;

// if (votesInteresting === votesMindblowing) {
//   alert("This fact is equally interesting and mindblowing");
// } else if (votesInteresting > votesMindblowing) {
//   console.log("Interesting fact!");
// } else if (votesMindblowing > votesInteresting) {
//   console.log("Mindblowing fact!!");
// }

// falsy values: 0, " ", bull, undefined
// truthy value: everything else

// function calcFactAge(year) {
//   const currentYear = new Date().getFullYear();
//   const age = currentYear - year;

//   if (age >= 0) return age;
//   else return "Impossible year.";
// }

// const calcFactAge2 = (year) =>
//   year <= new Date().getFullYear()
//     ? new Date().getFullYear() - year
//     : `Impossible year. Your year needs to be less or equal to ${new Date().getFullYear()}`;

// if (votesMindblowing) {
//   console.log("Mind blowingfact!");
// } else {
//   console.log("Not so special..");
// }
// let votesFalse = 40;
// const totalUpvotes = votesInteresting + votesMindblowing;

// const message =
//   totalUpvotes > votesFalse
//     ? "The fact is true"
//     : "Might be false. Check more sources.";

// const text = "Lisbon is great.";
// const upperText = text.toUpperCase();

// const str = `The current fact is ${text}. Itis ${calcFac}`;

// const fact = ["Lisbon is the capital of Portugal.", 2015, true];
// // console.log(fact);
// console.log(fact[2]);
// console.log(fact.length);
// console.log(fact[fact.length - 1]);

// const [text, createdIn] = fact;
// // console.log(text);

// const newFact = [...fact, "society"]; // the ... are spreading operator to unpack the elements inside
// console.log(newFact);

// const factObj = {
//   text: "Lisbon is the capital of Portugal.",
//   category: "society",
//   createdIn: 2015,
//   isCorrect: true,
//   createSummary: function () {
//     return `The fact "${
//       this.text
//     }" is from the category ${this.category.toUpperCase()}`;
//   },
// };

// console.log(factObj.text);
// console.log(factObj["text"]);

// const { category, isCorrect } = factObj;
// console.log(category);
// console.log(factObj.createSummary());

// [2, 4, 6, 8].forEach(function (el) {
//   console.log(el);
// });

// const times10 = [2, 4, 6, 8].map(function (el) {
//   return el * 10;
// });
// const times10 = [2, 4, 6, 8].map((el) => el * 10);
// console.log(times10);

// const CATEGORIES = [
//   { name: "technology", color: "#3b82f6" },
//   { name: "science", color: "#16a34a" },
//   { name: "finance", color: "#ef4444" },
//   { name: "society", color: "#eab308" },
//   { name: "entertainment", color: "#db2777" },
//   { name: "health", color: "#14b8a6" },
//   { name: "history", color: "#f97316" },
//   { name: "news", color: "#8b5cf6" },
// ];

// const allCategories = CATEGORIES.map((el) => el.name);
// console.log(allCategories);

// const initialFacts = [
//   {
//     id: 1,
//     text: "React is being developed by Meta (formerly facebook)",
//     source: "https://opensource.fb.com/",
//     category: "technology",
//     votesInteresting: 24,
//     votesMindblowing: 9,
//     votesFalse: 4,
//     createdIn: 2021,
//   },
//   {
//     id: 2,
//     text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
//     source:
//       "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
//     category: "society",
//     votesInteresting: 11,
//     votesMindblowing: 2,
//     votesFalse: 0,
//     createdIn: 2019,
//   },
//   {
//     id: 3,
//     text: "Lisbon is the capital of Portugal",
//     source: "https://en.wikipedia.org/wiki/Lisbon",
//     category: "society",
//     votesInteresting: 8,
//     votesMindblowing: 3,
//     votesFalse: 1,
//     createdIn: 2015,
//   },
// ];

// const factAges = initialFacts.map((el) => calcFactAge(el.createdIn));
// console.log(factAges);
