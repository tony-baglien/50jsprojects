const button = document.getElementById('button');

const toasts = document.getElementById('toasts');

const messageArray = [
    'Error',
    'Invalid',
    'Incorrect Data type'
]

const types = ['info', 'success', 'error'];


button.addEventListener('click', () => createNotification());

function createNotification (message = null, type = null) {

        const newElem = document.createElement('div');
        newElem.classList.add('toast');
        newElem.classList.add(type ? type : types[Math.floor(Math.random() * types.length)])
        newElem.innerText = message ? message : messageArray[Math.floor(Math.random() * messageArray.length)]
        toasts.appendChild(newElem);

        setTimeout(() => {
            toasts.remove()
        }, 1500);
    }


