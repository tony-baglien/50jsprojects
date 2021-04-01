const password = document.getElementById('password');
const background = document.getElementById('background');
const container = document.getElementById('container');

password.addEventListener('input', (e) => {
    const input = e.target.value;
    const length = input.length;
    const blurValue = 20 - length;
    background.style.filter = `blur(${blurValue}px)`
    console.log(length)

    const maxLimit = document.createElement('h1');
    maxLimit.classList.add('text-3xl','message');
    maxLimit.innerText = "You have reach the proper charter length!"

    if (length > 20 && container.querySelector('.message') == null) {
        container.appendChild(maxLimit);
    }
    else if (length <= 20 && container.querySelector('.message') != null) {
        container.querySelector('.message').remove()
    
        }
    }
)

