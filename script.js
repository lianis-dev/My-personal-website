const menuBtn = document.getElementById('menuButton');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const contactBtn = document.getElementById('contact-me-btn');
const contactSection = document.getElementById('contact-section');

function toggleMenu(){
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
}

menuBtn.addEventListener('click', toggleMenu);
overlay.addEventListener('click', toggleMenu);

contactBtn.addEventListener('click', function() {
    contactSection.scrollIntoView({behavior: 'smooth'});
});