const addBtn = document.getElementById('add');
const clearAll = document.getElementById('clear');

const notes = JSON.parse(localStorage.getItem('notes'));

addBtn.addEventListener('click', () => addNewNote())

clearAll.addEventListener('click', () => clearAllNotes());
if (notes) {
    notes.forEach(note => addNewNote(note));
}

function addNewNote(text = '') {
    const note = document.createElement('div');
    note.classList.add('note');

    note.innerHTML = `
        <div class="tools">
            <button class="edit"><i class="fas fa-edit"></i></button>
            <button class="delete"><i class="fas fa-trash-alt"></i></button>
        </div>

        <div class="main ${text ? "" : 'hidden'}"></div>
            <textarea class="${text ? 'hidden' : ""}"></textarea>

    `

    const editBtn = note.querySelector('.edit');
    const deleteBtn = note.querySelector('.delete');
    const main = note.querySelector('.main');
    const textArea = note.querySelector('textarea');

    textArea.value = text;
    main.innerHTML = marked(text)

    deleteBtn.addEventListener('click', () => {
        note.remove();
        updateLS();
    })

    editBtn.addEventListener('click', () => {
        main.classList.toggle('hidden');
        textArea.classList.toggle('hidden');
    })

    textArea.addEventListener('input', (e) => {
        const {value} = e.target;
        main.innerHTML = marked(value);

        updateLS()
    })

    document.body.appendChild(note);
}

function updateLS() {
    const notesText = document.querySelectorAll('textarea');

    const notes = [];


    notesText.forEach(note => notes.push(note.value))
   

    localStorage.setItem('notes', JSON.stringify(notes))
}

function clearAllNotes() {
    let confirmDelete = confirm('Are you sure you want to clear all of your notes? \n This Action Can not be Undone')

    if (confirmDelete) {
        const notes = [];
        console.log(notes)
        localStorage.setItem('notes', JSON.stringify(notes))

    }
}