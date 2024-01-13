
//Toggle MENU
function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

  const observer = new IntersectionObserver ((entries) => {
  entries.forEach((entry) => {
  console.log(entry)
  if (entry.isIntersecting) {
  entry.target.classList.add('show');
  } else {
    entry.target.classList.remove('show');
  }
    });
  });
  
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));


// First set of slides
var slides1 = document.querySelectorAll('#slider1 .slide');
var btns1 = document.querySelectorAll('#slider1 .btn');
let currentSlide1 = 0;

// Function to update the active slide for the first set
var updateSlide1 = function (index) {
    slides1.forEach((slide, i) => {
        slide.classList.remove('active');
        btns1[i].classList.remove('active');
    });

    slides1[index].classList.add('active');
    btns1[index].classList.add('active');
}

// JavaScript for image slider autoplay navigation for the first set
var repeat1 = function () {
    var repeater = () => {
        setTimeout(function () {
            updateSlide1(currentSlide1);

            currentSlide1++;

            if (currentSlide1 >= slides1.length) {
                currentSlide1 = 0;
            }

            repeater();
        }, 3000);
    }
    repeater();
}

repeat1();


// Second set of slides
var slides2 = document.querySelectorAll('#slider2 .slide');
var btns2 = document.querySelectorAll('#slider2 .btn');
let currentSlide2 = 0;

// Function to update the active slide for the second set
var updateSlide2 = function (index) {
    slides2.forEach((slide, i) => {
        slide.classList.remove('active');
        btns2[i].classList.remove('active');
    });

    slides2[index].classList.add('active');
    btns2[index].classList.add('active');
}

// JavaScript for image slider autoplay navigation for the second set
var repeat2 = function () {
    var repeater = () => {
        setTimeout(function () {
            updateSlide2(currentSlide2);

            currentSlide2++;

            if (currentSlide2 >= slides2.length) {
                currentSlide2 = 0;
            }

            repeater();
        }, 3000);
    }
    repeater();
}

repeat2();






