const params = new URLSearchParams(window.location.search);

let ratName = params.get("name");

let ratColor = params.get("color");

const rats = [
  {
    name: "Timothy",
    color: "Black",
    textColor: "#202020",
    image: "images/blacktimothy.jpg",
  },
  {
    name: "Jeremiah",
    color: "Brown",
    textColor: "#5e503f",
    image: "images/brownjeremiah.jpg",
  },
  {
    name: "Gregory",
    color: "White",
    textColor: "#ffffff",
    image: "images/whitegregory.jpg",
  },
  {
    name: "Stephen",
    color: "Striped",
    textColor: "#adb5bd",
    colorText: "#6c757d",
    image: "images/strippedstephen.jpg",
  },
  {
    name: "Walter",
    color: "Spotted",
    textColor: "#6c757d",
    colorText: "#adb5bd",
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
document.querySelector("#rat-name").style.color = foundRat.textColor;

document.querySelector("#rat-color").textContent = foundRat.color;
document.querySelector("#rat-color").style.color = foundRat.textColor;
document.querySelector("#rat-color").style.color = foundRat.colorText;

document.querySelector("#rat-image").src = foundRat.image;
