document.addEventListener('DOMContentLoaded', function() {
            // --- Initialize AOS (Animate on Scroll) ---
            AOS.init({
                duration: 800,
                once: true,
                offset: 50,
            });

            // --- Initialize Swiper for Hero Slider ---
            const heroSwiper = new Swiper('.swiper-hero', {
                loop: true,
                effect: 'fade',
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: false,
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            });

            // --- Initialize Swiper for Testimonials ---
            const testimonialsSwiper = new Swiper('.swiper-testimonials', {
                loop: true,
                slidesPerView: 1,
                spaceBetween: 30,
                autoplay: {
                    delay: 6000,
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
            });

            // --- Initialize GLightbox for Portfolio ---
            const lightbox = GLightbox({
                selector: '.glightbox'
            });

            // --- Portfolio Filtering Logic ---
            const filterButtons = document.querySelectorAll('.filter-btn');
            const portfolioItems = document.querySelectorAll('.portfolio-item');

            // Show all items by default
            portfolioItems.forEach(item => item.classList.add('show'));

            filterButtons.forEach(button => {
                button.addEventListener('click', () => {
                    filterButtons.forEach(btn => btn.classList.remove('active'));
                    button.classList.add('active');

                    const filterValue = button.getAttribute('data-filter');

                    portfolioItems.forEach(item => {
                        item.classList.remove('show');
                        if (filterValue === 'all' || item.dataset.category === filterValue) {
                            item.classList.add('show');
                        }
                    });
                });
            });

            // --- Mobile Menu Toggle ---
            const menuToggle = document.querySelector('.menu-toggle');
            const navLinks = document.querySelector('.nav-links');
            menuToggle.addEventListener('click', () => {
                navLinks.classList.toggle('active');
            });
            // Close menu when a link is clicked
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.addEventListener('click', () => {
                    navLinks.classList.remove('active');
                });
            });

            // --- Active Navigation Link on Scroll ---
            const sections = document.querySelectorAll('section[id]');
            window.addEventListener('scroll', () => {
                let current = '';
                sections.forEach(section => {
                    const sectionTop = section.offsetTop;
                    if (pageYOffset >= sectionTop - 150) {a
                        current = section.getAttribute('id');
                    }
                });

                document.querySelectorAll('.nav-links a').forEach(a => {
                    a.classList.remove('active');
                    if (a.getAttribute('href').includes(current)) {
                        a.classList.add('active');
                    }
                });
            });

        });
