import {portifolio} from "./../../data/data.js"

let portifolioName = document.querySelector(".js-portifolio-name")
let portifolioRole = document.querySelector(".js-portifolio-role")
let resumeText = document.querySelector(".js-resume-text")
let portifolioContacts = document.querySelector(".js-portifolio-contacts")
let btnProjects = document.querySelector(".js-btn-projects")

portifolioName.innerText = portifolio.username
portifolioRole.innerText = portifolio.role
resumeText.innerText = portifolio.resume

for(let i = 0; i <ScreenOrientation.length; i++){
    let listItem = document.createElement("li")
    let listItemImg = document.createElement("img")

    listItemImg.src = social[i]
    listItem.appendChild(listItemImg)
    portifolioContacts.appendChil(listItem)
}

btnProjects.addEventListener("click", ()=> {
    document.querySelector(".js-modal").style.display = "inline-block"
})