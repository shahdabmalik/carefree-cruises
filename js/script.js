// -------------------NavBar-Links-Active-State-onscroll---------

let navLinks = document.querySelectorAll('.nav-link');
function navbarLinkUpdate() {
    let position = window.scrollY + 200;
    navLinks.forEach(navLink => {
        let section = document.querySelector(navLink.hash)
        if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
            navLink.classList.add('active')
        } else {
            navLink.classList.remove('active')
        }
        navLink.addEventListener('click', () => {
            headerUl.classList.remove('active')
        })
    })
}
window.addEventListener('load', navbarLinkUpdate)
document.addEventListener('scroll', navbarLinkUpdate)

// ----Navbar-Links-Active-State-On-Scroll-End----

//------------------------------Navbar-on-Small-Screens-------------------------------

let menuBtn = document.querySelector('.menu-btn');
let headerUl = document.querySelector('header ul');

menuBtn.addEventListener('click', () => {
    headerUl.classList.toggle('active')
})
document.querySelector('main').addEventListener('click', function () {
    headerUl.classList.remove('active');
})


// ---------------------SearchBar------------------

let headerSearchBtn = document.querySelector('.header-search-btn');
let SearchbarBtn = document.querySelector('.search-bar-btn');
let searchBar = document.querySelector('.search-bar');
headerSearchBtn.addEventListener('click', function () {
    searchBar.classList.toggle('active');
});
SearchbarBtn.addEventListener('click', () => {
    searchBar.classList.remove('active');
});
document.querySelector('main').addEventListener('click', function () {
    searchBar.classList.remove('active');

})
// ------Searchbar-End----

//--------------------LogIn-Menu---------
let loginCont = document.querySelector('.login-container');
let userBtn = document.querySelector('.user-menu');
let loginBtn = document.querySelector('.login-btn');
let crossBtn = document.querySelector('.login-x-btn');

userBtn.addEventListener('click', () => {
    loginCont.classList.toggle('active')
})
crossBtn.addEventListener('click', () => {
    loginCont.classList.remove('active')
})
// ---Login-Menu-End-----

// -----------Swiper-Slider---------

var swiper = new Swiper(".testimonial-container", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    breakpoints: {
        2000: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        1300: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        0: {
            slidesPerView: 1
        }
    }
});
// --------Swipe-Slider-End--------

// -----------------Background-Image-Autoplay------------
let imagesCont = document.querySelectorAll('.image-container');
let images = document.querySelectorAll('.image-container img');
let imagesNumber = images.length;
let imageIndex = 1

let imagedTimer = setInterval(() => {
    autoPlay()
}, 7000);

function autoPlay() {
    imageIndex++
    imagesAutoPlay();
}

function imagesAutoPlay() {

    if (imageIndex > imagesNumber) {
        imageIndex = 1;
    }
    if (imageIndex == 0) {
        imageIndex = imagesNumber
    }
    images.forEach(image => {
        image.style.display = "none"
    })

    images[imageIndex - 1].style.display = "block"
}
// ---Background-AutoPlay-End---

// --------------AOS-Initiate-----------

AOS.init({
    duration: 1000,
    once: true,
    mirror: false,
    easing: 'ease-in-out',
    offset: 140
});

