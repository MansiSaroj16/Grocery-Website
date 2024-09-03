let SearchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>
{
    SearchForm.classList.toggle('active');
    ShoppingCart.classList.remove('active');
    LoginForm.classList.remove('active');
    navbar.classList.remove('active');}

let ShoppingCart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () =>
{
    ShoppingCart.classList.toggle('active');
    SearchForm.classList.remove('active');
    LoginForm.classList.remove('active');
    navbar.classList.remove('active');
}

let LoginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>
{
    LoginForm.classList.toggle('active');
    SearchForm.classList.remove('active');
    ShoppingCart.classList.remove('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>
{
    navbar.classList.toggle('active');
    SearchForm.classList.remove('active');
    ShoppingCart.classList.remove('active');
    LoginForm.classList.remove('active');
        
}

window.onscroll = () =>
    {
        SearchForm.classList.remove('active');
        ShoppingCart.classList.remove('active');
        LoginForm.classList.remove('active');
        navbar.classList.remove('active');
        
    }
    
    
var swiper = new Swiper(".product-slider", {
    loop:true,
    spaceBetween: 20,

    autoplay:{
        delay:7500,
        disableOnInteraction: false,
    },
    
    breakpoints: {
    0: {
        slidesPerView: 1,
    },
    768: {
        slidesPerView: 2,
    },
    1020: {
        slidesPerView: 3,
    },
    },
});

var swiper = new Swiper(".review-slider", {
    loop:true,
    spaceBetween: 20,

    autoplay:{
        delay:7500,
        disableOnInteraction: false,
    },
    
    breakpoints: {
    0: {
        slidesPerView: 1,
    },
    768: {
        slidesPerView: 2,
    },
    1020: {
        slidesPerView: 3,
    },
    },
});
document.querySelectorAll(".btn").forEach((button) => {
    button.onclick = () => {
        alert("Hello, Welcome To Our Grocery Shop!");
    }
});
