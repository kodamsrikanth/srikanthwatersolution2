// memu btn js code starts here

let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.menu');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

// memu btn js code ends here

// header menu section starts here    

// search-btn-container section starts here

let cart = document.querySelector('.search-btn-container');

document.querySelector('#cart-btn').onclick = () =>{
    cart.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

function filterOptions() {
    const input = document.getElementById('searchBox').value.toLowerCase();
    const optionsContainer = document.getElementById('optionsContainer');
    const options = optionsContainer.getElementsByClassName('option-item');

    for (let i = 0; i < options.length; i++) {
      const optionText = options[i].textContent.toLowerCase();
      if (optionText.includes(input)) {
        options[i].style.display = 'block';
      } else {
        options[i].style.display = 'none';
      }
    }

    if (input === '') {
      optionsContainer.classList.remove('show');
    } else {
      optionsContainer.classList.add('show');
    }

  }

  // search-btn-container section ends here
  //  social popup box  section starts (This code for when we click on social meidia button in header section. then this box will open in popup effect) 

        // JavaScript code
        const openFormButton = document.getElementById('OpenLocationPopup');
        const formPopup = document.getElementById('popup');

        openFormButton.addEventListener('click', () => {
            formPopup.classList.add('visible');
        });

        formPopup.addEventListener('click', (event) => {
            if (event.target.id === 'popup' || event.target.classList.contains('social-close-btn')) {
                formPopup.classList.remove('visible');
            }
        });

 // social popup box  section ends

//  ro-service-popup section starts here 

  window.onload = function() {
    // Wait 15 seconds before showing the popup
    setTimeout(function() {
        document.getElementById('ro-service-popup').style.display = 'flex';
    }, 15000);

    // Close the popup when the user clicks outside of it
    document.addEventListener('click', function(event) {
        if (event.target.id === 'ro-service-popup' || event.target.classList.contains('popup-close-btn')) {
            document.getElementById('ro-service-popup').style.display = 'none';
        }
    });

    // Open the popup when the whatsapp button is clicked
    document.getElementById('ro-service-expert-btn').addEventListener('click', function(event) {
        event.preventDefault();  // Prevent default behavior
        document.getElementById('ro-service-popup').style.display = 'flex';
    });
};

//  ro-service-popup section ends here 

//  contact-popup section starts

const openContactPopupButton = document.getElementById('openContactPopupButton');
const contactPopup = document.getElementById('contactPopup');

openContactPopupButton.addEventListener('click', () => {
    contactPopup.classList.add('visible');
});

contactPopup.addEventListener('click', (event) => {
    if (event.target.id === 'contactPopup' || event.target.classList.contains('close-popup-btn')) {
        contactPopup.classList.remove('visible');
    }
});

//  contact-popup section starts



// read more btn starts here

document.addEventListener('DOMContentLoaded', function() {
  const readMoreBtn = document.querySelector('.read-more-btn');
  const readLessBtn = document.querySelector('.read-less-btn');
  const moreContent = document.querySelector('.more-content');

  readMoreBtn.addEventListener('click', function() {
    moreContent.style.display = 'block';
    readMoreBtn.style.display = 'none';
    readLessBtn.style.display = 'inline-block';
  });

  readLessBtn.addEventListener('click', function() {
    moreContent.style.display = 'none';
    readMoreBtn.style.display = 'inline-block';
    readLessBtn.style.display = 'none';
  });

  // Toggle content visibility when clicking on the content itself
  moreContent.addEventListener('click', function() {
    if (moreContent.style.display === 'block') {
      moreContent.style.display = 'none';
      readMoreBtn.style.display = 'inline-block';
      readLessBtn.style.display = 'none';
    }
  });
});

// read more btn ends here

// page-loader section starts here 

document.addEventListener("DOMContentLoaded", function () {
  let loader = document.querySelector('.loader');
  let progress = 0;
  let interval = setInterval(function () {
      progress += 20;
      loader.textContent = `Loading... ${progress}%`;
      if (progress >= 100) {
          clearInterval(interval);
          document.querySelector('.page-loader').style.display = 'none';
      }
  }, 1000); // Adjust the interval as needed
});

// page-loader section ends here 


// blogs starts here 
var swiper = new Swiper(".blogs-slider123", {
  slidesPerView: "auto",
  spaceBetween: 10,

  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
   pagination: {
       el: ".swiper-pagination",
       clickable: true,
   },

breakpoints: {
          2500: {
              slidesPerView: 1,
          },
          2500: {
              slidesPerView: 2,
          },
          2500: {
              slidesPerView: 3,
          },
      },
});

// blogs ends here 






