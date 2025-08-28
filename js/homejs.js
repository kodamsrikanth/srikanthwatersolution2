// header menu section starts here

// Function to get user's location and display relevant content
function displayLocationBasedContent() {
  if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
  } else {
      document.getElementById("location-content").innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;

  // Here, you could use lat and lon to get the city name via a reverse geocoding API.
  // For simplicity, let's assume we got the city as "Godavarikhani".
  const city = "Godavarikhani";

  document.getElementById("location-content").innerHTML = `
      <h2>Welcome to ${city}</h2>
      <p>We offer the best RO water purifier service and sales in ${city}. Contact us for more details.</p>
  `;
}

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

// document.addEventListener("DOMContentLoaded", function () {
//   let loader = document.querySelector('.loader');
//   let progress = 0;
//   let interval = setInterval(function () {
//       progress += 20;
//       loader.textContent = `Loading... ${progress}%`;
//       if (progress >= 100) {
//           clearInterval(interval);
//           document.querySelector('.page-loader').style.display = 'none';
//       }
//   }, 1000); // Adjust the interval as needed
// });

// page-loader section ends here 

// header-water-purifiers starts here 
// var swiper = new Swiper(".header-water-purifiers-slider", {
//   slidesPerView: "auto",
//   spaceBetween: 10,
//   loop: true, // Enable continuous loop mode
//   autoplay: {
//     delay: 0, // No delay for continuous scrolling
//     disableOnInteraction: false,
//   },
//   speed: 5000, // Adjust the speed of the marquee effect
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   breakpoints: {
//     2500: {
//         slidesPerView: 1,
//     },
//     2501: {
//         slidesPerView: 1,
//     },
//     2502: {
//         slidesPerView: 1,
//     },
//   },
// });


// recommanded-water-purifiers section starts here

var swiper = new Swiper(".recommanded-water-purifiers-slider", {
  slidesPerView: "auto",
  spaceBetween: 15,
  // autoplay: {
  //     delay: 2500,
  //     disableOnInteraction: true,
  // },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
},
 pagination: {
     el: ".swiper-pagination",
     clickable: true,
 },
  breakpoints: {
      540: {
          slidesPerView: 1,
      },
      768: {
          slidesPerView: 2,
      },
      1024: {
          slidesPerView: 3,
      },
  },
});

// recommanded-water-purifiers section ends here


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

// JavaScript to dynamically add the Map Location Section to the HTML

// Function to change the Google Map iframe source
function changeMapLocation(newSrc) {
  // Get the iframe element by its ID
  const mapIframe = document.getElementById('googleMap');
  
  // Change the src attribute to the new Google Maps embed URL
  mapIframe.src = newSrc;
}

// Example usage: Change the map to a different location
const newMapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3778.036724357705!2d79.51074827503142!3d18.751896582387115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a32ceffb017d2f9%3A0xd272e3b8e642855b!2sGodavarikhani%20Chowrasta%2C%20Godavarikhani%2C%20Ramagundam%2C%20Telangana%20505211!5e0!3m2!1sen!2sin!4v1723572476324!5m2!1sen!2sin";
changeMapLocation(newMapSrc);

// JavaScript to dynamically add the Map Location Section to the HTML ends
