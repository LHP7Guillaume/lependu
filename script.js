let play = true;
const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const myKeyboard = document.getElementById("myKeyboard");
const petName = document.getElementById("petName")
const petList = [
    "crevette",
    "pingouin",
    "ecureuil",
    "babouin",
    "canard",
    "pigeon",
    "belette",
    "renard",
    "saumon",
    "autruche",
    "dauphin",
    "galinette",
    "sanglier"
];
// console.log(petList[3])
let pet = petList[aleaNb(0, petList.length)];
console.log(pet);

const arrayPet = pet.split("")
// console log pour tricher
console.log(arrayPet);


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

let nbLetter = 0;
let life = 8;



myKeyboard.addEventListener("click", (e) => {
    if (e.target.nodeName == "BUTTON" && play === true) {

        let myScore = nbLetter
        console.log(e.target.textContent);
        e.target.className = "m-2 btn btn-primary col-2 ";
        e.target.disabled = true;

        arrayPet.forEach((element, index) => {
            if (e.target.innerText.toLowerCase() == element) {
                document.getElementById(`indexLetter${index}`).innerText = element
                nbLetter++;
            }
        });

        if (nbLetter == arrayPet.length) {
            if (confirm("You Win Jeune Padawan, Veux tu rejouer?")) {
                location.reload();
            }
            play = false
        }

        if (myScore == nbLetter) {
            life--
        }

        switch (life) {
            case 0:
                document.getElementById("myLife").innerHTML = ""
                if (confirm("You loose Jeune Padawan, Veux tu rejouer?")) {
                    location.reload();
                };
                play = false;
                break;

            case 7:
                document.getElementById("myLife").innerHTML = "❤️❤️❤️❤️❤️❤️❤️💔"
                break;

            case 6:
                document.getElementById("myLife").innerHTML = "❤️❤️❤️❤️❤️❤️💔💔"
                break;

            case 5:
                document.getElementById("myLife").innerHTML = "❤️❤️❤️❤️❤️💔💔💔"
                break;
            case 4:
                document.getElementById("myLife").innerHTML = "❤️❤️❤️❤️💔💔💔💔"
                break;

            case 3:
                document.getElementById("myLife").innerHTML = "❤️❤️❤️💔💔💔💔💔"
                break;

            case 2:
                document.getElementById("myLife").innerHTML = "❤️❤️💔💔💔💔💔💔"
                break;

            case 1:
                document.getElementById("myLife").innerHTML = "❤️💔💔💔💔💔💔💔"
                break;

                // case 7:
                //     document.getElementById("myLife").innerHTML = "☠️❤️❤️❤️❤️❤️🚙"
                //     break;

                //     case 6:
                //     document.getElementById("myLife").innerHTML = "☠️❤️❤️❤️❤️🚙"
                //     break;

                //     case 5:
                //     document.getElementById("myLife").innerHTML = "☠️❤️❤️❤️🚙"
                //     break;

                //     case 4:
                //     document.getElementById("myLife").innerHTML = "☠️❤️❤️❤️🚙"
                //     break;

                //     case 3:
                //     document.getElementById("myLife").innerHTML = "☠️❤️❤️🚙"
                //     break;

                //     case 2:
                //     document.getElementById("myLife").innerHTML = "☠️❤️🚙"
                //     break;

                //     case 1:
                //     document.getElementById("myLife").innerHTML = "☠️🚙"
                //     break;

            default:
                break;
        }
    }
});
























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