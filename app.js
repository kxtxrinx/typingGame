const generatedPhrase = document.getElementById('generatedPhrase')
const writtenPhrase = document.getElementById('writtenWord')
const gamezone = document.getElementById('gameZone')
const gameBtn = document.getElementById('gameBtn')

gameBtn.addEventListener(onclick, genRandomPhrase())

const phrasesList = ["This is a test", "Dont ever give up", "Good memories to remain"]

function genRandomPhrase(){
    var randomPos = Math.trunc(Math.random()*phrasesList.length)
    generatedPhrase.innerHTML = phrasesList[randomPos]
}