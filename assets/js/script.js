const button = document.querySelector(".card-content");
const button1 = document.querySelector(".card-content1");
const modal = document.getElementById("mymodal");
const modal1 = document.getElementById("mymodal1");
const close = document.querySelector(".close");
const close1 = document.querySelector(".close1");

button.addEventListener('click', () => {
    modal.classList.add('modal-active');
})

close.addEventListener('click', () => {
    modal.classList.remove('modal-active');
})

button1.addEventListener('click', () => {
    modal1.classList.add('modal-active');
})

close1.addEventListener('click', () => {
    modal1.classList.remove('modal-active');
})