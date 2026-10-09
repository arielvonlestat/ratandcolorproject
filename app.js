const ratNameInput = document.querySelector(".ratName");

ratNameInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    searchRat(ratNameInput.value);
  }
});

const ratColorInput = document.querySelector(".ratColor");

ratColorInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    searchColor(ratColorInput.value);
  }
});

const ratRandom = document.querySelector(".random");

ratRandom.addEventListener("click", () => {
  feelingLucky(ratRandom.value);
});

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

const searchRat = (name) => {
  const foundRat = rats.find(
    (rat) => rat.name.toLowerCase() === name.toLowerCase(),
  );

  if (!foundRat) {
    console.log(
      "You silly sausage, that isn't the name of one of your rats! Learn your rats!",
    );
  } else {
    console.log(
      `Your rat ${foundRat.name} is ${foundRat.color} and a handsome boy!`,
    );
  }
};

const searchColor = (color) => {
  const foundColor = rats.find(
    (colors) => colors.color.toLowerCase() === color.toLowerCase(),
  );

  if (!foundColor) {
    console.log(
      "You silly sausage, that isn't the color of one of your rats! Learn your rats!",
    );
  } else {
    console.log(
      `Your rat is a gorgeous ${foundColor.color} color and I think their name may be ${foundColor.name}, right?`,
    );
  }
};

const feelingLucky = () => {
  const random = Math.floor(Math.random() * 5);
  const randomRat = rats[random];
  console.log(
    `Your magical, mythical, randomized rat is none other that the great ${randomRat.name}, he's ${randomRat.color} by the way, in case you bothered to even ask! Sheesh!`,
  );
};
