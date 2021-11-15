const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const myKeyboard = document.getElementById("myKeyboard");
const petName = document.getElementById("petName")
const petList = [
    "crevette",
    "pingouin",
    "ecureuil",
    "babouin",
    "galinette",
    "sanglier"
];
// console.log(petList[3])
let pet = petList[aleaNb(0, petList.length)];
console.log(pet);
const arrayPet = pet.split("")


arrayPet.forEach((element, index) => {
    
    let myIndex = index;
    let myCase = `<div class="border border-dark col-lg-1 col-1 rounded text-center myLetter" id="indexLetter${myIndex}"></div>`
    petName.innerHTML += myCase;
});

alphabet.forEach(element => {
    let myKey = element;
    myKey = myKey.toUpperCase();
    let myKeyButton = `<button class="m-2 btn btn-outline-primary col-2 " id="myKey${myKey}">${myKey}</button>`;
    myKeyboard.innerHTML += myKeyButton;
});

function aleaNb(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
};




























// var petsLists = ["dauphin",
//     "baleine",
//     "poule",
//     "vache",
//     "mouton",
//     "cochon",
//     "tortue",
//     "canard",
//     "hippopotame",
//     "coq"
// ];


// function selectionAleatoire(liste) {
//     return liste[Math.floor(Math.random() * liste.length)];
// }

// function position(word, letter) {
//     console.log(word)
//     let indexChar = new Array()
//     arrayLetterWorld = word.split("")
//     arrayLetterWorld.forEach((element, index) => {
//         if (letter === element) {
//             indexChar.push(index)
//         }
//     })

//     if (indexChar.length === 0) {
//         return -1
//     } else {
//         return indexChar
//     }
// }

// // console.log(selectionAleatoire(petsLists))
// // console.log(position("mouton", "p"))
// console.log(position(selectionAleatoire(petsLists), "p"))

// // let display = document.getElementById("affichage")
// // button.addEventListener("click", function (searchLetter) {
// //     display.value += searchLetter
// // })

// const buttonStartGame = document.getElementById("newGame")
// const letterButton = document.getElementById("letter")