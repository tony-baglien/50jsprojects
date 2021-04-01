const form = document.getElementById('todo');
const input = document.getElementById('input');
const todosUL = document.getElementById('todos');

const storage = window.localStorage;
window.addEventListener('load',() => {
    const todos = JSON.parse(storage.getItem('todos'))
    if (todos) {
        todos.forEach(todo => addItem(todo))
}})


form.addEventListener('submit', (e) => {
    e.preventDefault();
    addItem();
})


//functions
function addItem(todo) {
    let todoText = input.value;
    if (todo) {
        todoText = todo.text;
    }
    if (todoText) {
        const todoEl = document.createElement('li')
        if (todo && todo.completed) {
            todoEl.classList.add('completed');
    }

    todoEl.innerText = todoText;
    todoEl.addEventListener('click', () => {
        todoEl.classList.toggle('completed');
        updateLS();
    })

    todoEl.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        todoEl.remove();
        updateLS()
    })
    todosUL.appendChild(todoEl);
    input.value = '';

    updateLS();
}}

function updateLS() {
    const todosEl = document.querySelectorAll('li');

    const todos = [];

    todosEl.forEach(todoEl => {
        todos.push({
            text: todoEl.innerText,
            completed: todoEl.classList.contains('completed')

        })
    })
    storage.setItem('todos', JSON.stringify(todos)
    )
}









    

