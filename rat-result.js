const params = new URLSearchParams(window.location.search);

let ratName = params.get("name");

let ratColor = params.get("color");

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

let foundRat;

if (ratName) {
  foundRat = rats.find(
    (rat) => rat.name.toLowerCase() === ratName.toLowerCase(),
  );
} else if (ratColor) {
  foundRat = rats.find(
    (rat) => rat.color.toLowerCase() === ratColor.toLowerCase(),
  );
}

document.querySelector("#rat-name").textContent = foundRat.name;

document.querySelector("#rat-color").textContent = foundRat.color;

document.querySelector("#rat-image").src = foundRat.image;
