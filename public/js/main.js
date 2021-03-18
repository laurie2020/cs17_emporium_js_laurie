// bouton noir/blanc
let btnWhite = document.querySelector('.white');
let btnBlack = document.querySelector('.black');
let body = document.querySelector('body');
let navbar = document.querySelector('header');
navbar.style.backgroundColor = "white";
btnWhite.addEventListener('click', () => {
    body.style.backgroundColor = "white";
    navbar.style.backgroundColor = "white";
})
btnBlack.addEventListener('click', () => {
    body.style.backgroundColor = "black";
    navbar.style.backgroundColor = "black";
})
// fin bouton noir/blanc
// section signup
let connexion = document.querySelector('#connexion');
let signup = document.querySelector('.sign-up-parent');
let close = document.querySelector('#close');
connexion.addEventListener('click', () => {
    signup.classList.remove('d-none');
})
close.addEventListener('click', () => {
    signup.classList.add('d-none');
})
// fin section signup
// carousel
let cards = document.querySelectorAll('.carousel-card');
let indicators = document.querySelectorAll('#slider-indicators li');

indicators.forEach((element, index) => {
    element.addEventListener('click', () => {
        cards.forEach((e) => {
            e.style.transition = "transform 0.8s ease-in-out"
            if(window.matchMedia("(max-width: 400px)")){
                e.style.transform = "translateX(" + (-210*index) + "px)";
            }else if(window.matchMedia("(max-width: 1024px)")){
                e.style.transform = "translateX(" + (-220*index*3) + "px)";
                indicators[3].remove();
            }else{
                e.style.transform = "translateX(" + (-220*index) + "px)";
            }
            
        });
    })
});

// fin carousel

// navbar

window.addEventListener('scroll', ()=> {
    if(window.scrollY >= 60 ){
        navbar.style.paddingTop = "0";
        navbar.style.position = "fixed";
        navbar.style.width = "100%";
        navbar.style.display = "flex";
        navbar.style.backgroundColor = "white";
        navbar.style.zIndex = "20";
        if(window.matchMedia("(max-width: 992px)")){
            navbar.style.position = "static";
        }
    }else {
        navbar.style.paddingTop = "50px";
        navbar.style.height = "auto";
        navbar.style.position = "static";
        navbar.style.width = "100%";
        navbar.style.display = "block";
        navbar.style.backgroundColor = "white";
    }
})
// fin navbar
let register = document.querySelector("#register");
let signUp = document.querySelector("#sign-up");
let btnRegister = document.querySelector("#register-title");
let btnSignUp = document.querySelector("#sign-up-title");
btnRegister.addEventListener('click', () => {
    register.classList.remove('d-none');
    signUp.classList.add('d-none');
})
btnSignUp.addEventListener('click', () => {
    register.classList.add('d-none');
    signUp.classList.remove('d-none');
})
