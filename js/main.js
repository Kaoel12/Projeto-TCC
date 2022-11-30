/*-----------------------------------------------------------------------------------*/
//Tab - Catalogo
function openPage(pageName, elmnt, color) {
  // Hide all elements with class="tabcontent" by default */
  var i, prodcontent, tablinks;
  prodcontent = document.getElementsByClassName("prod-tab");
  for (i = 0; i < prodcontent.length; i++) {
    prodcontent[i].style.display = "none";
  }

  // Remove the background color of all tablinks/buttons
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.borderColor = "";

  }

  // Show the specific tab content
  document.getElementById(pageName).style.display = "block";

  // Add the specific color to the button used to open the tab content
  elmnt.style.borderColor = color;
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();



/*-----------------------------------------------------------------------------------*/
//Timeline


var timelineSwiper = new Swiper ('.timeline .swiper-container', {
  direction: 'vertical',
  loop: false,
  speed: 1600,
  pagination: '.swiper-pagination',
  paginationBulletRender: function (swiper, index, className) {
    var year = document.querySelectorAll('.swiper-slide')[index].getAttribute('data-year');
    return '<span class="' + className + '">' + year + '</span>';
  },
  paginationClickable: true,
  nextButton: '.swiper-button-next',
  prevButton: '.swiper-button-prev',
  breakpoints: {
    768: {
      direction: 'horizontal',
    }
  }
});

/*------------------------------------------NavBar----------------------------------------------*/
      const burger = document.querySelector(".animation-burger");
      const nav = document.querySelector(".navbar-nav");
      const links = document.querySelector(".nav-item");

      burger.addEventListener("click", () => {
        nav.classList.toggle("open");
      });
