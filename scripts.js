
let text = document.querySelector('.textwork')
let innerText = document.querySelector('.innerText')
window.addEventListener('scroll', function(){
    let value = window.scrollY;
    section.style.clipPath = "circle("+ value + "px at center center)";
    text.style.left = 100 - value / 5 + '%';
    innerText.style.left = 100 - value / 5 + '%';
}) 