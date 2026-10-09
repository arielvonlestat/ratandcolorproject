document.querySelector("#rat-name").textContent = foundRat.name;

const params = new URLSearchParams(window.location.search);

let ratName = params.get("name");

const rats = [
  {
    name: "Timothy",
    color: "Black",
    image: "images/blacktimothy.jpg",
  },
  {
    name: "Jeremiah",
    color: "Brown",
    image: "images/brownjeremiah.jpg",
  },
  {
    name: "Gregory",
    color: "White",
    image: "images/whitegregory.jpg",
  },
  {
    name: "Stephen",
    color: "Striped",
    image: "images/strippedstephen.jpg",
  },
  {
    name: "Walter",
    color: "Spotted",
    image: "images/spottedwalter.jpeg",
  },
];

const foundRat = rats.find(
  (rat) => rat.name.toLowerCase() === ratName.toLowerCase(),
);
