const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const profile_img = document.getElementById('profile-img');
const name = document.getElementById('name');
const date = document.getElementById('date');

const animated_bg = document.querySelectorAll('.animated-bg') 
const animated_bg_texts = document.querySelectorAll('.animated-bg-text') 

setTimeout(getData,2500);


function getData () {
    header.innerHTML = `
    <img src="https://images.unsplash.com/photo-1615887023516-9b6bcd559e87?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60" alt =""/>`

    title.innerHTML = `Lorem ipsum dolor sit amet`

    excerpt.innerHTML = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia, ipsum?'

    profile_img.innerHTML = `
    <img src="https://randomuser.me/api/portraits/men/45.jpg" alt=""/>`

    name.innerHTML = `John Doe`;
    date.innerHTML = 'Oct 08,2020';

    animated_bg.forEach(bg => bg.classList.remove('animated-bg'));
    animated_bg_texts.forEach(bg => bg.classList.remove('animated-bg-text'));
}