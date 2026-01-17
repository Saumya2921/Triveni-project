// ===== EMAILJS INIT =====
(function(){
    emailjs.init("YOUR_PUBLIC_KEY"); // replace with your public key
})();

// ===== SCROLL TO CONTACT =====
function scrollToContact(){
    document.getElementById("contact").scrollIntoView({behavior:"smooth"});
}

// ===== FIXED GALLERY JS =====
document.addEventListener("DOMContentLoaded", function(){

    const slides = document.querySelectorAll(".gallery-slide");
    let gIndex = 0;
    const totalSlides = slides.length;

    // Show first slide initially
    slides.forEach((slide, idx) => {
        slide.style.display = (idx === 0) ? "block" : "none";
    });

    // Function to show the current slide
    function showSlide(index){
        slides.forEach((slide, idx) => {
            slide.style.display = (idx === index) ? "block" : "none";
        });
    }

    // Next / Previous buttons
    window.changeGallery = function(n){
        gIndex = (gIndex + n + totalSlides) % totalSlides;
        showSlide(gIndex);
    }

    // Auto-rotate every 6 seconds
    setInterval(() => { changeGallery(1); }, 6000);

    // ===== EMAILJS FORM SUBMISSION =====
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function(event){
        event.preventDefault(); // prevent page reload

        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this, 'YOUR_PUBLIC_KEY')
        .then(function(){
            alert('Message Sent Successfully!');
            form.reset();
        }, function(error){
            alert('Failed to send message. Error: ' + JSON.stringify(error));
        });
    });

});
