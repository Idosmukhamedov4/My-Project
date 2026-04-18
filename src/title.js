import { optionData } from "../data/optiondata"

const choice = document.getElementById("choice")
const title = document.getElementById("title")
const question = document.getElementById("question")
const options = document.getElementById("options")
const youMay = document.getElementById("you-may")
const inputContainer = document.getElementById("input-container")
const text = document.getElementById("text")
const toolTip = document.getElementById("tooltip")

let currentData = optionData["title"]
let currentTextIndex = 0

function loadGame() {
    for (const op of currentData.options) {
        const li = document.createElement("li")
        li.textContent = op.prompt 
        options.appendChild(li)
    }
}



function loadUI() {
    removeUI()
    currentTextIndex = 0

    if(currentData.title) {
        title.textContent = "Zombie Trail"
    }

    if (currentData.text.length > 0) {
        text.textContent = currentData.text[0]
    }

    if (currentData.tooltip) {
        toolTip.textContent = currentData.tooltip
    }
}

function removeUI() {
    title.textContent = ""
    question.textContent = ""
    youMay.textContent = ""
    options.innerHTML = ""
    inputContainer.innerHTML = ""
    text.textContent = ""
}

choice.addEventListener("keydown", (event) => {
    let input = choice.value

    if (input && event.key == "Enter") {

        const destination = currentData.options[input - 1].dest

        currentData = optionData[destination]

        loadUI()
    }
})

document.addEventListener("keydown", (event) => {
    if (event.code != "Space") return

    event.preventDefault()

    if (currentTextIndex < currentData.text.length - 1) {
        currentTextIndex++ 
        text.textContent = currentData.text[currentTextIndex]
    }


})

loadGame()