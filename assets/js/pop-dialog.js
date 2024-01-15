
function openPopup(project, action){
    action.onclick = function(){
        project.showModal()
    }

} 

function closePopup(project, action){
    action.onclick = function(){
        project.close()
    }
}

const button1 = document.querySelector(".open-popup-1")
const modal_project1 = document.querySelector(".project-1")
const buttonClose1 = document.querySelector(".project-1 button")

const button2 = document.querySelector(".open-popup-2")
const modal_project2 = document.querySelector(".project-2")
const buttonClose2 = document.querySelector(".project-2 button")

const button3 = document.querySelector(".open-popup-3")
const modal_project3 = document.querySelector(".project-3")
const buttonClose3 = document.querySelector(".project-3 button")

const button4 = document.querySelector(".open-popup-4")
const modal_project4 = document.querySelector(".project-4")
const buttonClose4 = document.querySelector(".project-4 button")

const button5 = document.querySelector(".open-popup-5")
const modal_project5 = document.querySelector(".project-5")
const buttonClose5 = document.querySelector(".project-5 button")

openPopup(modal_project1, button1)
closePopup(modal_project1, buttonClose1 )

openPopup(modal_project2, button2)
closePopup(modal_project2, buttonClose2 )

openPopup(modal_project3, button3)
closePopup(modal_project3, buttonClose3 )

openPopup(modal_project4, button4)
closePopup(modal_project4, buttonClose4 )

openPopup(modal_project5, button5)
closePopup(modal_project5, buttonClose5 )

