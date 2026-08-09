// Slider functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const totalSlides = slides.length;

function showSlide(index) {
    if (index >= totalSlides) currentSlide = 0;
    else if (index < 0) currentSlide = totalSlides - 1;
    else currentSlide = index;

    const slider = document.querySelector('.slider');
    if(slider) {
        slider.style.transform = `translateX(-${currentSlide * 33.333}%)`;
    }

    dots.forEach((dot, idx) => {
        dot.classList.toggle('active', idx === currentSlide);
    });
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

function setSlide(index) {
    showSlide(index);
}

// Auto slide
setInterval(() => {
    if(slides.length > 0) nextSlide();
}, 5000);

// Cart badge counter
let cartCount = 2;
function addToCart(productName, price) {
    cartCount++;
    const badge = document.getElementById('cartCount');
    if(badge) badge.innerText = cartCount;
    alert(`"${productName}" successfully added to your cart!`);
}

// Modal popup
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if(modal) modal.style.display = 'flex';
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if(modal) modal.style.display = 'none';
}

// Handle prescription upload
function handlePrescriptionSubmit(e) {
    e.preventDefault();
    alert('Thank you! Your doctor prescription has been uploaded. Our HealthBuddy pharmacist will contact you shortly.');
    closeModal('uploadModal');
}

// Handle contact form
function handleContactSubmit(e) {
    e.preventDefault();
    alert('Thank you for contacting Manoj Store! We will get back to you within 24 hours.');
}

// Filter Categories
function filterCat(category) {
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    const products = document.querySelectorAll('.product-card');
    products.forEach(prod => {
        if (category === 'all' || prod.classList.contains(`item-${category}`)) {
            prod.style.display = 'flex';
        } else {
            prod.style.display = 'none';
        }
    });
}

// Remove item from cart
function removeItem(btn) {
    const row = btn.closest('tr');
    row.remove();
    cartCount--;
    const badge = document.getElementById('cartCount');
    if(badge) badge.innerText = cartCount;
}

function checkoutAlert() {
    alert('Proceeding to Manoj Store Secure Checkout payment gateway...');
}