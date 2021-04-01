const ratings = document.querySelectorAll('.rating');
const ratingsContainer = document.querySelector('.ratings-container')
const sendBtn  = document.querySelector('#send');
const panel  = document.querySelector('#panel');
let selectedRating = 'satisfied'

ratingsContainer.addEventListener('click', (e) => {
    if (e.target.parentNode.classList.contains('rating')) {
        removeClasslist();
        e.target.parentNode.classList.add('active');
        selectedRating = e.target.nextElementSibling.innerHTML
        console.log(selectedRating);
    }
})

sendBtn.addEventListener('click', () => {
    panel.innerHTML= `
        <div class="thankyou-container" id="thankyou">
            <i class="fas fa-heart"></i>
            <strong>Thank You!</br></strong>
            <h3>Feedback: ${selectedRating}</h3>
            <p>We'll use Your Feedback to Improve Our </br> Customer Support</p>
        </div>`
})

function removeClasslist() {
    for (let i = 0; i < ratings.length; i++) {
        ratings[i].classList.remove('active');
    }
}