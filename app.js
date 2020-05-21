let godBtn = document.getElementById("god-btn")
let mainContainer = document.getElementById("main-container")
let godAnswer = document.getElementById("god-answer")

godBtn.addEventListener("click", randomGenerator)

function randomGenerator(){
    mainContainer.classList.add("hide")
    let randomNumber = Math.round(Math.random() * 10)

   if( randomNumber <= 5) {
     godAnswer.innerText = `YES, God Exists`
   }else {
       godAnswer.innerText = `No, God Doesn't Exists`
   }
}