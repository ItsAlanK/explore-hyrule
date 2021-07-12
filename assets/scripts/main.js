/* scroll to top button function found at https://css-tricks.com/how-to-make-an-unobtrusive-scroll-to-top-button/ 
    variable gets button by id to listen for click. on click runs function to scroll back to top of page*/
var scrollToTopBtn = document.getElementById("scroll-to-top-button")
var rootElement = document.documentElement

function scrollToTop() {
    rootElement.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}

scrollToTopBtn.addEventListener("click", scrollToTop)

/* mobile menu icon script repurposed from w3schools toggle hide lesson:
 https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp */
function hideMenu() {
    var x = document.getElementById("nav-menu");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

/* code from w3schools js slideshow lesson https://www.w3schools.com/howto/howto_js_slideshow.asp
script assigns index value to class and adds to the counter every 4.5 seconds toggling the display 
of the next image from none to block to none again as it goes*/
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("slideshow");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 4500);
}