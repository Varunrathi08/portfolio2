var parallax = document.querySelector('.parallax');
var front = document.querySelector('.front-layer');
var back = document.querySelector('.back-layer');

var sFront =150;
var sBack = 400;

parallax.addEventListener('mousemove', e => {


    var x = e.clientX;
    var y = e.clientY;

front.style.transform = `
translate(

    ${x / sFront}%,
    ${y / sFront}%
)`;

back.style.transform = `

translate(

    ${x/ sBack}%,
    ${y/ sBack}%
)`;
});


