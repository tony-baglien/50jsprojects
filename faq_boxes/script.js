const buttons = document.querySelectorAll('.faq-toggle');


buttons.forEach((toggle) => {
    toggle.addEventListener('click',() => {
        toggle.parentNode.classList.toggle('active');
    })
})