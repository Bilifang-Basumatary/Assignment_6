    
        // Sticky header
        window.addEventListener('scroll', () => {
            const header = document.getElementById('header');
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Fade in sections on scroll
        const faders = document.querySelectorAll('.fade-in-section');
        const appearOptions = {
            threshold: 0.3,
            rootMargin: "0px 0px -100px 0px"
        };

        const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
            entries.forEach(entry => {
                if (!entry.isIntersecting) {
                    return;
                } else {
                    entry.target.classList.add('is-visible');
                    appearOnScroll.unobserve(entry.target);
                }
            });
        }, appearOptions);

        faders.forEach(fader => {
            appearOnScroll.observe(fader);
        });

        // Contact form validation and shake animation
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            const submitBtn = document.getElementById('submitBtn');
            
            if (!name || !email || !message) {
                submitBtn.classList.add('shake');
                setTimeout(() => {
                    submitBtn.classList.remove('shake');
                }, 500);
            } else {
                // Simulate form submission
                submitBtn.innerHTML = 'Message Sent!';
                submitBtn.style.background = 'linear-gradient(45deg, #00c851, #00ff00)';
                setTimeout(() => {
                    submitBtn.innerHTML = 'Send Message';
                    submitBtn.style.background = 'linear-gradient(45deg, #6c63ff, #ff6b6b)';
                    document.getElementById('contactForm').reset();
                }, 2000);
            }
        });

        // Add ripple effect to CTA button
        document.querySelector('.cta-button').addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
