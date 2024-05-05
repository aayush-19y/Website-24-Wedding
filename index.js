let menu = document.querySelector('#menu-bar');
let head = document.querySelector('.head .navbar');

menu.onclick = () => {
    head.classList.toggle('active');
};

window.onscroll = () => {
    head.classList.remove('active');
    if (window.scrollY > 60) {
        document.querySelector('#menu-bar').classList.add('active');
    } else {
        document.querySelector('#menu-bar').classList.remove('active');
    }
};






var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    // centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    grabCursor : true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });