const btn = document.querySelector('#nav-toggle');
const list = document.querySelector('.list');

btn.addEventListener('click', () => {
    list.classList.toggle('is-visible');
});