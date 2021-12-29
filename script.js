let dayNight = document.querySelector('.rightSide-btn__night');
let menuToggle = document.querySelector('.rightSide-btn__menuToggle');
let body = document.querySelector('body');
let navigation = document.querySelector('.navigation');

dayNight.onclick = function() {
    body.classList.toggle('dark');
    dayNight.classList.toggle('active');
}

menuToggle.onclick = function () {
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
}