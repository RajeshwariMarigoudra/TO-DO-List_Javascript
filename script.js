var todoList = [];
let userInput = '';

function addTodoItem(item){
    todoList.push(item);
    userInput = '';
     renderTodoList();
}

function renderTodoList(){
   const todoListElement = document.getElementById('todo-list');
   todoListElement.innerHTML = '';
   todoList.forEach((item, index) => {
   const listItem = document.createElement('li');
   listItem.textContent = item;
   todoListElement.appendChild(listItem);
   });
}

function calculateTotalItems(){
    const totalItems = todoList.length;
    console.log(`you have ${totalItems} to-do list items`);
}

function incrementTotalItems(){
       todoList.length++;
       calculateTotalItems();
}

function handleUserInput(Input){
    if(input.trim() !== '') {
        addTodoItem(input);
    }
}
