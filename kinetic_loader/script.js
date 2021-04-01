const kinetic = document.querySelector('.kinetic');

let initial = true;

function toggleColors() {
    const root = document.documentElement;

    if(initial) {
        root.style.setProperty('--color-change', 'white');
        initial = false;
    } else {
        root.style.setProperty('--color-change', 'black');
        initial = true
    }
}

setInterval(toggleColors, 1000);
 