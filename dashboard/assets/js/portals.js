const arrowBtn = document.querySelector('.expand-arrow');
const expandBox = document.querySelector('.expand-box');

arrowBtn.addEventListener('click', function(){
    expandBox.classList.toggle('close-box');
    arrowBtn.classList.toggle('rotate');
});