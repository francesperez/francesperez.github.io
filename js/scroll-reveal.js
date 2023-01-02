"use strict";

let rotateMe = {x:10,y:12,z:16};

ScrollReveal().reveal('.reveal', {
    delay: 600,
    duration: 1600,
    reset: true
});

ScrollReveal().reveal('.card1', {
    origin: 'left',
    delay: 800,
    duration: 1600,
    distance: '1000px',
    rotate: rotateMe,
    reset: true
})

ScrollReveal().reveal('.card2', {
    origin: 'left',
    delay: 700,
    duration: 1600,
    distance: '1000px',
    rotate: rotateMe,
    reset: true
})

ScrollReveal().reveal('.card3', {
    origin: 'left',
    delay: 600,
    duration: 1600,
    distance: '1000px',
    rotate: rotateMe,
    reset: true
})

ScrollReveal().reveal('.headshot', {
    origin: 'left',
    delay: 800,
    duration: 1600,
    distance: '1000px',
    reset: true
})


ScrollReveal().reveal('.bio', {
    origin: 'right',
    delay: 800,
    duration: 1600,
    distance: '1000px',
    reset: true
})



