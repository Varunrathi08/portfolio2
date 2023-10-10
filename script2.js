/*---------------------------------scroll to start on-----------------------*/
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

/*---------------------------------new image divs-----------------------*/

for (var i = 0; i < 10; i++) {
	var newDiv = document.createElement('div');
	newDiv.setAttribute('class', `slide slide${i}`);
	newDiv.style.backgroundImage = `url('images/asset ${i}.jpeg')`
	document.querySelector('.slides').appendChild(newDiv);

/*---------------------------------text divs into image divs-----------------------*/
	var text = document.querySelector(`.text${i}`)
	document.querySelector(`.slide${i}`).appendChild(text);
}


/*--------------horizontal scroll----left/right arrow opacity------------------*/
var arrowLeft = document.querySelector('.left');
var moreLeft = document.querySelector('.more-left');

var arrowRight = document.querySelector('.right');
var moreRight = document.querySelector('.more-right');

var width = document.querySelector('.slide').offsetWidth;

// window.onwheel = function (event) {
//
// 	   if ((event.wheelDelta || event.detail) > 0){
//       document.body.scrollLeft -= 25;
// 	   } else {
//     	document.body.scrollLeft +=25;
//       }
// 	if (document.body.scrollLeft<=(width/2)){
// 		arrowLeft.style.opacity = '0.2';
// 		moreLeft.style.visibility = 'hidden';
// 	}
// 	else {
// 		arrowLeft.style.opacity = '1';
// 		moreLeft.style.visibility = 'visible';
// 	}
// 	if (document.body.scrollLeft>=(width*7)){
// 		arrowRight.style.opacity = '0.2';
// 		moreRight.style.visibility = 'hidden';
// 	}
// 	else {
// 		arrowRight.style.opacity = '1';
// 		moreRight.style.visibility = 'visible';
// 	}
// }

window.onwheel = function (event) {

	   if ((event.wheelDelta || event.detail) > 0){
          scrolled = 0;
          var scrolling = setInterval(function() {
            scrolled -= 1;
            document.body.scrollLeft -= 1;
            if (scrolled <= -600) {

              window.clearInterval(scrolling);
            }
            console.log(scrolled)

          }, 2);

	   } else if ((event.wheelDelta || event.detail) < 0){
       scrolled2 = 0;
       var scrolling2 = setInterval(function() {
         scrolled2 += 1;
         document.body.scrollLeft += 1;
         if (scrolled2 >= 600) {
           window.clearInterval(scrolling2);
         }
         console.log(scrolled2)
       }, 2);

}

}

// window.onwheel = function (event) {
// var slides = document.querySelector('.slides');
// 	   if (event.wheelDelta > 0){
//        console.log(event.wheelDelta)
//        console.log(event.detail)
//         slides.classList.add('scroll-right')
//         slides.addEventListener('transitionend', function() {
//           slides.classList.remove('scroll-right');
//         })
// 	   } else {
//        console.log(event.wheelDelta)
//        console.log(event.detail)
//        slides.classList.add('scroll-left')
//        slides.addEventListener('transitionend', function() {
//          slides.classList.remove('scroll-left');
//        })
// }
// }


/*----------------------------scroll on arrow click--------------------------*/
arrowRight.addEventListener('click', scrollRight);
arrowLeft.addEventListener('click', scrollLeft);

var container = document.querySelector('.slides');
var allSlides = [...document.querySelectorAll('.slide')];
var current = 3;
var move = 0;
var count = allSlides.length;
var leftOver = count%current;

function scrollRight() {
  if (current < count) {
    if (current === count-leftOver) {
      move += width*leftOver;
      current-=2;
    }else{
      move += width*3
    }
      container.style.transform = `translateX(-${move}px)`;
      current = current+3;
  } else {
    move=0;
    current=3;
    container.style.transform = `translateX(${move}px)`;
  }
}

function scrollLeft() {
  if (current >= 3) {
    if (current===3+leftOver) {
      move -= width*leftOver;
    }else {
    move -=  width*3;
    }
    container.style.transform = `translateX(-${move}px)`;
    current = current-3;
  }else{
    move=0;
    current=3;
  }

}
// function scrollRight() {
//
//   scrollAmount = 0;
//   var scrollTimer = setInterval(function() {
//     scrollAmount += 10;
//     document.body.scrollLeft += 10;
//       if(scrollAmount >= (width*2.9)) {
//         document.body.scrollLeft = (document.body.scrollLeft + (width-(document.body.scrollLeft%width)));
//         window.clearInterval(scrollTimer);
//       }
//   }, 1.5)
//   if (document.body.scrollLeft < (width*3)) {
//     arrowLeft.style.opacity = '1';
//     moreLeft.style.visibility = 'visible';
//   }
//   if (document.body.scrollLeft >= (width*6)) {
//     arrowRight.style.opacity = '0.2';
//     moreRight.style.visibility = 'hidden';
//   }
// }

// function scrollLeft() {
//   scrollAmount = 0;
//   var scrollTimer = setInterval(function() {
//     scrollAmount -= 10;
//     document.body.scrollLeft -= 10;
//     console.log(scrollAmount)
//       if(scrollAmount <= (-(width*2.9))) {
//         console.log(document.body.scrollLeft)
//         console.log(scrollAmount)
//         document.body.scrollLeft = (document.body.scrollLeft + (width-(document.body.scrollLeft%width))-width);
//         window.clearInterval(scrollTimer);
//       }
//   }, 1.5)
//
//   if (document.body.scrollLeft < (width*3)) {
//     arrowLeft.style.opacity = '0.2';
//     moreLeft.style.visibility = 'hidden';
//   }
//   if (document.body.scrollLeft >= (width*6)) {
//     arrowRight.style.opacity = '1';
//     moreRight.style.visibility = 'visible';
//   }
// }

/*-----------------------------menu show/hide-------------------------------*/

