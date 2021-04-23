let addToDoButton = document.querySelector('#addToDo')
let toDoContainer = document.querySelector('#toDoContainer')
let inputField = document.querySelector('#inputField')
let ToDoList = document.querySelector('#ToDoList')

addToDoButton.addEventListener('click',addListItem)
    function addListItem() {
        if (inputField.value) {
            let listItem = document.createElement('li')
            listItem.classList.add('list-item')
            ToDoList.appendChild(listItem)
            listItem.innerHTML =
                `<p class='paragraph-styling'>${inputField.value}</p><button id="delete" class="deletebtn">X</button>`

            inputField.value = ""
            let paragraph = listItem.querySelector('.paragraph-styling')

            paragraph.addEventListener('click',paragraphStyling)
            function paragraphStyling() {
                if (paragraph.classList.contains("line-through")) {
                    paragraph.classList.remove("line-through")
                } else {
                    paragraph.classList.add("line-through")
                }
            }
            
            let deletebtn = listItem.querySelector('.deletebtn')

            deletebtn.addEventListener('click',removeConfirmation)
            function removeConfirmation() {
                if (window.confirm('Deseja deletar este item?')) {
                    ToDoList.removeChild(listItem)
                }
            }
        }
}