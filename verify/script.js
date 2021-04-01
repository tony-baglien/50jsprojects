const boxes = document.querySelectorAll('.number');
const n1 = document.getElementById('n1');
const n2 = document.getElementById('n2');
const n3 = document.getElementById('n3');

n1.addEventListener('keyup', shiftFocus(n1))

function shiftFocus (e) {
    console.log(e)
    if (e.nextSibling != null && e.length === 1)
    e.nextSibling.focus();

}