const home = document.querySelector('.home');
const work = document.querySelector('.work');
const blog = document.querySelector('.blog');
const about = document.querySelector('.about');
const iconArr = ['home','work','blog','about'];

let idx;
const imageContainer = document.querySelector('.image-container');
const images = document.querySelectorAll('.image-container img');



home.addEventListener('click', () => {
    idx = 0;
    showPhoto(idx);
})
work.addEventListener('click', () => {
    idx = 1;
    showPhoto(idx);
})
blog.addEventListener('click', () => {
    idx = 2;
    showPhoto(idx);
})
about.addEventListener('click', () => {
    idx = 3;
    showPhoto(idx);
})



function showPhoto (idx) {
    images.forEach((elem) => {
        elem.classList.remove('show')
        console.log(idx)
        const name = iconArr[idx];
        if (elem.alt === name) {
            elem.classList.add('show');
            console.log(elem);
            }
        }
    )  
}

