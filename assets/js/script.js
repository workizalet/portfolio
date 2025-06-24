'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "todos") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });

  
}

// document.addEventListener( 'DOMContentLoaded', function () {
//     new Splide( '#image-carousel' ).mount();
//   } );

//   document.addEventListener( 'DOMContentLoaded', function () {
//   new Splide( '#fullscreen-carousel', {
// 		width : '100vw',
// 		height: '100vh',
//   } ).mount();
// } );

// document.addEventListener( 'DOMContentLoaded', function () {
//   new Splide( '#thumbnail-carousel', {
// 		fixedWidth : 100,
//     fixedHeight: 60,
// 		gap        : 10,
// 		rewind     : true,
// 		pagination : false,
//   } ).mount();
// } );


// new Splide( '.splide', {
//   type    : 'loop',
//   autoplay: 'pause',
//   perPage : 3,
// } );

document.addEventListener('DOMContentLoaded', function () {

    // Configuración del carrusel principal
    var main = new Splide( '#main-carousel', {
        type        : 'fade',
        rewind      : true,
        heightRatio: 0.5, // esto controla la relación alto/ancho
        pagination  : false,
        arrows      : false,
        cover: false, // importante: NO cubrir
        
    });

    // Configuración del carrusel de miniaturas
    var thumbnails = new Splide( '#thumbnail-carousel', {
        gap         : 10,
        rewind      : true,
        pagination  : false,
        isNavigation: true,
        perMove     : 1,
        focus       : 'center',
        breakpoints : {
          2048: {
                perPage: 5,
                 fixedWidth: 120,
                 fixedHeight: 70,
            },
            992: {
                perPage: 4,
                 fixedWidth: 120,
                 fixedHeight: 70,
            },
            768: {
                perPage: 3,
                 fixedWidth: 100,
                 fixedHeight: 60,
            },
            600: {
                perPage: 2,
                 fixedWidth: 100,
                 fixedHeight: 60,
                // gap: 5,
            },
            // 480: {
            //     perPage: 1, 
            //     fixedWidth: 80,
            //      fixedHeight: 47,
            // },
        },
    });

    main.sync( thumbnails );
    main.mount();
    thumbnails.mount();


    // Configuración del carrusel principal
    var main2 = new Splide( '#main-carousel2', {
        type        : 'fade',
        rewind      : true,
        heightRatio: 0.5, // esto controla la relación alto/ancho
        pagination  : false,
        arrows      : false,
        cover: false, // importante: NO cubrir
        
    });

    // Configuración del carrusel de miniaturas
    var thumbnails2 = new Splide( '#thumbnail-carousel2', {
        gap         : 10,
        rewind      : true,
        pagination  : false,
        isNavigation: true,
        perMove     : 1,
        focus       : 'center',
        breakpoints : {
          2048: {
                perPage: 5,
                 fixedWidth: 120,
                 fixedHeight: 70,
            },
            992: {
                perPage: 4,
                 fixedWidth: 120,
                 fixedHeight: 70,
            },
            768: {
                perPage: 3,
                 fixedWidth: 100,
                 fixedHeight: 60,
            },
            600: {
                perPage: 2,
                 fixedWidth: 100,
                 fixedHeight: 60,
                // gap: 5,
            },
            // 480: {
            //     perPage: 1, 
            //     fixedWidth: 80,
            //      fixedHeight: 47,
            // },
        },
    });

    main2.sync( thumbnails2 );
    main2.mount();
    thumbnails2.mount();
});