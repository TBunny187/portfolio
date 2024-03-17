function openForm() {
    document.getElementById('myForm').style.display = 'block';
}

function closeForm() {
    document.getElementById('myForm').style.display = 'none';
}

let slideIndex = 1;

function showSlides(n) {
    let slides = document.getElementsByClassName('mySlides');
    let dots = document.getElementsByClassName('dot');
    if(n > slides.length) {slideIndex = 1};
    if(n < 1) {slideIndex = slides.length};
    for(let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    };
    for(let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active', '');
    };
    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].className += ' active';
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

showSlides(slideIndex);

document.addEventListener('click', function(event) {
    if(event.target.matches('.cancel') || !event.target.closest('.form-popup') && !event.target.closest('.popUpButton') && !event.target.closest('.contact')) {
        closeForm();
    }
}, false);