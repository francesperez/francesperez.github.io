"use strict";

let rotateMe = {x:10,y:12,z:16};

ScrollReveal().reveal('.reveal', {
    delay: 600,
    duration: 1600

});

ScrollReveal().reveal('.card1', {
    origin: 'left',
    delay: 800,
    duration: 1600,
    distance: '1000px',
    rotate: rotateMe
})

ScrollReveal().reveal('.card2', {
    origin: 'left',
    delay: 700,
    duration: 1600,
    distance: '1000px',
    rotate: rotateMe
})

ScrollReveal().reveal('.card3', {
    origin: 'left',
    delay: 600,
    duration: 1600,
    distance: '1000px',
    rotate: rotateMe
})


ScrollReveal().reveal('.card4', {
    origin: 'right',
    delay: 600,
    duration: 1600,
    distance: '1000px',
    rotate: rotateMe
})

ScrollReveal().reveal('.card5', {
    origin: 'right',
    delay: 700,
    duration: 1600,
    distance: '1000px'
})

ScrollReveal().reveal('.card6', {
    origin: 'right',
    delay: 800,
    duration: 1600,
    distance: '1000px'
})



