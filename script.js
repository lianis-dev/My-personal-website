const menuBtn = document.getElementById('menuButton');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const contactBtn = document.getElementById('contact-me-btn');
const contactSection = document.getElementById('contact-section');

//Pages
const homepage = document.getElementById('homePage');
const portfolioPage = document.getElementById('portfolioPage');

//Navigation triggers
const portfolioBtnSidebar = document.getElementById('portfolioBtnSidebar');
const homeBtnSidebar = document.getElementById('homeBtnSidebar');

function toggleMenu() {
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
}

menuBtn.addEventListener('click', toggleMenu);
overlay.addEventListener('click', toggleMenu);

//Scroll
if (contactBtn) {
    contactBtn.addEventListener('click', function() {
        contactSection.scrollIntoView({ behavior: 'smooth' });
    });
}

//Switch to Portfolio Page
if (portfolioBtnSidebar) {
    portfolioBtnSidebar.addEventListener('click', (e) => {
        e.preventDefault(); //Prevents the browser from refreshing the page
        
        homepage.classList.add('hidden');
        portfolioPage.classList.remove('hidden');
        
        toggleMenu(); //Automatically closes sidebar
    });
}

//Switch to Homepage
if (homeBtnSidebar) {
    homeBtnSidebar.addEventListener('click', (e) => {
        e.preventDefault(); 
        
        portfolioPage.classList.add('hidden');
        homepage.classList.remove('hidden');
        
        
        toggleMenu(); 
    });
}