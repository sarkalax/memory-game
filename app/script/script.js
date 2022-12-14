let gameDiv = document.querySelector("#game")

let picArray = [{
    name: "donut",
    img: "pictures/donut.png"
},
{
    name: "fox",
    img: "pictures/foxie.png"
},
{
    name: "jigglypuff",
    img: "pictures/jigglypuff.png"
},
{
    name: "donut",
    img: "pictures/donut.png"
},
{
    name: "fox",
    img: "pictures/foxie.png"
},
{
    name: "jigglypuff",
    img: "pictures/jigglypuff.png"
}]

picArray.sort(() => 0.5 - Math.random())

function gameDesk() {
    for (let i = 0; i < picArray.length; i++) {
        const card = document.createElement("img")
        card.setAttribute("src", "pictures/blank.jpg")
        card.setAttribute("data-id", i)

        gameDiv.appendChild(card)

        card.addEventListener("click", flipCard)

    }
}

gameDesk()

let cardIds = [],
    cardNames = [];

let cards = document.querySelectorAll("img")

function flipCard() {
    let cardId = this.getAttribute("data-id")


    cardIds.push(cardId)
    cardNames.push(picArray[cardId].name)

    this.setAttribute("src", picArray[cardId].img)

    if (cardIds.length == 2) {
        setTimeout(checkMatch, 1000)
    }
}
const scoreDisplay = document.querySelector("#score span")
let score = 0

function checkMatch() {
    let firstOption = cards[cardIds[0]],
        secondOption = cards[cardIds[1]];


    if (cardNames[0] == cardNames[1] && cardIds[0] != cardIds[1]) {
        firstOption.setAttribute("src", "pictures/white.jpg")
        secondOption.setAttribute("src", "pictures/white.jpg")

        firstOption.removeEventListener("click", flipCard)
        secondOption.removeEventListener("click", flipCard)

        score++
    }
    else if (cardIds[0] == cardIds[1]) {
        console.log("vyber jinou kartu")
        firstOption.setAttribute("src", "pictures/blank.jpg")
    }
    else {
        console.log("beze shody")
        firstOption.setAttribute("src", "pictures/blank.jpg")
        secondOption.setAttribute("src", "pictures/blank.jpg")
    }

    cardIds = []
    cardNames = []
    scoreDisplay.innerHTML = score

    gameScore()
}
const againBttn = document.querySelector("#playAgain")

againBttn.addEventListener("click", () => {
    window.location.reload()
})

function gameScore() {
    if (score === picArray.length/2) {
        scoreDisplay.innerHTML = "You win!"

        againBttn.classList.toggle("hidden")
    }
}