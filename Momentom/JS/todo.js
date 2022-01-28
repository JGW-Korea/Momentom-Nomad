const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

let toDos = [];
const TODOS_KEY = "todos";

function saveToDoList(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDos) => toDos.id !== parseInt(li.id));
    saveToDoList();
}

function paintToDo(newToDo){
    const liTag = document.createElement("li");
    liTag.id = newToDo.id;
    const spanTag = document.createElement("span");
    spanTag.innerText = newToDo.text;
    const buttonTag = document.createElement("button");
    buttonTag.innerText = "❌";
    liTag.appendChild(spanTag);
    liTag.appendChild(buttonTag);
    toDoList.appendChild(liTag);
    buttonTag.addEventListener("click", deleteToDo);
}

function handleToDoSumbmit(event){
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    const newToDoObj = {
        id: Date.now(),
        text: newToDo,
    };
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDoList();
}

toDoForm.addEventListener("submit", handleToDoSumbmit);

const savedToDo = localStorage.getItem(TODOS_KEY);

if(savedToDo !== null){
    const parsedToDos = JSON.parse(savedToDo);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}