let addToDoButton = document.getElementById("addToDo")
let toDoContainer = document.getElementById("toDoContainer")
let inputField = document.getElementById("inputField")
let ToDoList = document.getElementById("ToDoList")

addToDoButton.addEventListener('click', function () {
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
})