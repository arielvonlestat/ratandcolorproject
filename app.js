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

ratNameInput.addEventListener("input", () => {
  document.querySelector("#name-error").textContent = "";
});

ratColorInput.addEventListener("input", () => {
  document.querySelector("#color-error").textContent = "";
});

const ratRandom = document.querySelector(".random");

ratRandom.addEventListener("click", () => {
  const randomRat = feelingLucky();
  window.location.href = `rat-results.html?name=${randomRat.name}`;
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
    const randomName = feelingLucky();

    const errorMessages = [
      "You silly sausage, that's not a real rat! No offense but perhaps you should see a doctor.",
      "Aww poor rats, you don't even care enough about them to learn their names & colors (˃̣̣̥ᯅ˂̣̣̥)",
      "How do you live with yourself? Not knowing their names or colors?",
      `${randomName.name} is trying not to cry but he'll get over it, probably.`,
    ];

    const randomIndex = Math.floor(Math.random() * errorMessages.length);

    document.querySelector("#name-error").textContent =
      errorMessages[randomIndex];
  } else {
    window.location.href = `rat-results.html?name=${foundRat.name}`;
  }
};

const searchColor = (color) => {
  const foundColor = rats.find(
    (colors) => colors.color.toLowerCase() === color.toLowerCase(),
  );

  if (!foundColor) {
    const errorMessages = [
      "You silly sausage, that's not a real rat! No offense but perhaps you should see a therapist.",
      "Aww poor rats, you don't even care enough about them to learn their names & colors (╥﹏╥)",
      "How do you sleep at night? Not knowing their names or colors?",
      "I mean spotted & striped are probably not colors either but at least they're in the database.",
    ];

    const randomIndex = Math.floor(Math.random() * errorMessages.length);

    document.querySelector("#color-error").textContent =
      errorMessages[randomIndex];
  } else {
    window.location.href = `rat-results.html?color=${foundColor.color}`;
  }
};

const feelingLucky = () => {
  const random = Math.floor(Math.random() * rats.length);
  const randomRat = rats[random];
  return randomRat;
};
