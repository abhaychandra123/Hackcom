//Selectors
const todoInput=document.querySelector(".todo-input")
const todoButton=document.querySelector(".todo-button")
const todoList=document.querySelector(".todo-list")
const filterOption=document.querySelector(".filter-todo")

//Event Listeners
todoButton.addEventListener('click',addTodo);
todoList.addEventListener('click',deleteCheck);
filterOption.addEventListener('click',filterTodo);
document.addEventListener('DOMContentLoaded',getTodos);

//Functions
//function to create structure:>>
function addTodo(Event){
//the "event" in brackets of function should be same as the "event" used for event.preventDefault() , inorder to prevent submission
//for preventing form from submitting
Event.preventDefault();
//todo Div

const todoDiv=document.createElement("div");
todoDiv.classList.add("todo")

//Create Li
const newTodo=document.createElement("li");
newTodo.innerText=todoInput.value;
newTodo.classList.add("todo-item");
todoDiv.appendChild(newTodo);
//add local storage
saveLocalTodos(todoInput.value);

//CHECKMARK BUTTON
const completedButton=document.createElement("button");
completedButton.innerHTML='<i class="fas fa-check"></i>';
completedButton.classList.add("complete-btn");
todoDiv.appendChild(completedButton);
//we need to use innerHTML here as we want to enter <i> tag
//check trash button
const trashbutton=document.createElement("button")
trashbutton.classList.add("trash-btn")
trashbutton.innerHTML='<i class="fas fa-trash"></i>';
todoDiv.appendChild(trashbutton);

//Append to list
todoList.appendChild(todoDiv);
//clear todoinput value
todoInput.value="";
}

//function to delete item from list
function deleteCheck(e){
    //to get the target i.e. the tag on which we are clicking.
    // console.log(e.target);
    const item=e.target;
    //delete todo
    if(item.classList[0]=="trash-btn"){//therefore trash-btn=the first thing we click in the div container having a class todo and thats why also we are using e.target on item
        const todo=item.parentElement;
        todo.classList.add("fall")
        removeLocalTodos(todo);
        todo.addEventListener('transitionend',function(){
            todo.remove(); //we added a function here so that first transition effects could take place and the the todo i.e. class of the div container i.e. a list item is removed
        });
        
    }
    if(item.classList[0]=="complete-btn"){
        const todo=item.parentElement;
        todo.classList.toggle("completed");

    }

}
//functions related select tag
//for this to function , it is required that there is no space between ul start and end tags , or we shuld give some necessary conditions
function filterTodo(e){
    const todos= [...todoList.childNodes];
    todos.forEach(function(todo){
    switch(e.target.value){
        case "all" :
        todo.style.display="flex";
            break;
        case "completed":
            if(todo.classList.contains("completed")){
                todo.style.display="flex";
            }
            else{
                todo.style.display="none";
            }
            break;
        case "uncompleted":
            if(!todo.classList.contains("completed")){
                todo.style.display="flex";
            }
            else{
                todo.style.display="none"
            }
            break;
         }
    });
}
function saveLocalTodos(todo){
    let todos;
    if (localStorage.getItem('todos')==null){
        todos=[];
    }
    else{
        todos=JSON.parse(localStorage.getItem("todos"))
    }
    todos.push(todo);
    localStorage.setItem("todos",JSON.stringify(todos))
}

function getTodos(){
    let todos;
    if(localStorage.getItem("todos")==null){
        todos=[];
    }
    else{
        todos=JSON.parse(localStorage.getItem("todos"))
    }
    todos.forEach(function(todo){
        //todo Div

        const todoDiv=document.createElement("div");
        todoDiv.classList.add("todo")
        
        //Create Li
        const newTodo=document.createElement("li");
        newTodo.innerText=todo;
        newTodo.classList.add("todo-item");
        todoDiv.appendChild(newTodo);
        
        //CHECKMARK BUTTON
        const completedButton=document.createElement("button");
        completedButton.innerHTML='<i class="fas fa-check"></i>';
        completedButton.classList.add("complete-btn");
        todoDiv.appendChild(completedButton);
        //we need to use innerHTML here as we want to enter <i> tag
        //check trash button
        const trashbutton=document.createElement("button")
        trashbutton.classList.add("trash-btn")
        trashbutton.innerHTML='<i class="fas fa-trash"></i>';
        todoDiv.appendChild(trashbutton);
        
        //Append to list
        todoList.appendChild(todoDiv);

        
    })
}

function removeLocalTodos(todo){
    let todos;
    if (localStorage.getItem("todos")==null){
        todos=[];
    }
    else{
        todos=JSON.parse(localStorage.getItem("todos"));
    }

    const todoIndex=todo.children[0].innerText;
    todos.splice(todos.indexOf(todoIndex),1);
    localStorage.setItem("todos",JSON.stringify(todos));
}
