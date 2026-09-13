// ==========================================
// 1. Lenis Smooth Inertia Scroll
// ==========================================
const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smooth: true,
    mouseMultiplier: 1,
});

// Dynamic Parallax Hook
const parallaxBg = document.getElementById('parallax-backdrop');
lenis.on('scroll', (e) => {
    if (parallaxBg) {
        parallaxBg.style.transform = `translate3d(0, ${e.scroll * 0.15}px, 0)`;
    }
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// ==========================================
// 2. Telemetry Clock
// ==========================================
setInterval(() => {
    const timeEl = document.getElementById('time-display');
    if(timeEl) {
        timeEl.innerText = new Date().toLocaleTimeString('en-US', { hour12: false });
    }
}, 1000);

// ==========================================
// 3. Interactive Modal Logic (Transit Framework)
// ==========================================
const transitBtn = document.getElementById('transit-modal-btn');
const transitModal = document.getElementById('transit-modal');
const closeTransitBtn = document.getElementById('close-transit-modal');

if (transitBtn && transitModal && closeTransitBtn) {
    
    // Open Framework
    transitBtn.addEventListener('click', (e) => {
        e.preventDefault();
        transitModal.classList.add('active');
        
        // Stop Lenis background scrolling so the user is locked into the modal
        lenis.stop(); 
        
        // Optional: Change btn text briefly for tactile feedback
        const originalText = transitBtn.innerHTML;
        transitBtn.innerHTML = `Initializing... <i class="fa-solid fa-spinner fa-spin"></i>`;
        setTimeout(() => {
            transitBtn.innerHTML = originalText;
        }, 1000);
    });

    // Close Framework
    closeTransitBtn.addEventListener('click', () => {
        transitModal.classList.remove('active');
        
        // Restart Lenis background scrolling
        lenis.start(); 
    });
}


// ==========================================
// 4. Interactive Modal Logic (Water Framework)
// ==========================================
const waterBtn = document.getElementById('water-modal-btn');
const waterModal = document.getElementById('water-modal');
const closeWaterBtn = document.getElementById('close-water-modal');

if (waterBtn && waterModal && closeWaterBtn) {
    
    waterBtn.addEventListener('click', (e) => {
        e.preventDefault();
        waterModal.classList.add('active');
        document.body.style.overflow = 'hidden'; 
        
        const originalText = waterBtn.innerHTML;
        waterBtn.innerHTML = `Initializing... <i class="fa-solid fa-spinner fa-spin"></i>`;
        setTimeout(() => {
            waterBtn.innerHTML = originalText;
        }, 1000);
    });

    closeWaterBtn.addEventListener('click', () => {
        waterModal.classList.remove('active');
        document.body.style.overflow = ''; 
    });
}



// ==========================================
// 5. Interactive Modal Logic (Agriculture Framework)
// ==========================================
const agricultureBtn = document.getElementById('agriculture-modal-btn');
const agricultureModal = document.getElementById('agriculture-modal');
const closeAgricultureBtn = document.getElementById('close-agriculture-modal');

if (agricultureBtn && agricultureModal && closeAgricultureBtn) {
    
    agricultureBtn.addEventListener('click', (e) => {
        e.preventDefault();
        agricultureModal.classList.add('active');
        document.body.style.overflow = 'hidden'; 
        
        const originalText = agricultureBtn.innerHTML;
        agricultureBtn.innerHTML = `Initializing... <i class="fa-solid fa-spinner fa-spin"></i>`;
        setTimeout(() => {
            agricultureBtn.innerHTML = originalText;
        }, 1000);
    });

    closeAgricultureBtn.addEventListener('click', () => {
        agricultureModal.classList.remove('active');
        document.body.style.overflow = ''; 
    });
}




// ==========================================
// 6. Interactive Modal Logic (Energy Framework)
// ==========================================
const energyBtn = document.getElementById('energy-modal-btn');
const energyModal = document.getElementById('energy-modal');
const closeEnergyBtn = document.getElementById('close-energy-modal');

if (energyBtn && energyModal && closeEnergyBtn) {
    
    energyBtn.addEventListener('click', (e) => {
        e.preventDefault();
        energyModal.classList.add('active');
        document.body.style.overflow = 'hidden'; 
        
        const originalText = energyBtn.innerHTML;
        energyBtn.innerHTML = `Initializing... <i class="fa-solid fa-spinner fa-spin"></i>`;
        setTimeout(() => {
            energyBtn.innerHTML = originalText;
        }, 1000);
    });

    closeEnergyBtn.addEventListener('click', () => {
        energyModal.classList.remove('active');
        document.body.style.overflow = ''; 
    });
}

// ==========================================
// 7. Interactive Modal Logic (Waste Framework)
// ==========================================
const wasteBtn = document.getElementById('waste-modal-btn');
const wasteModal = document.getElementById('waste-modal');
const closeWasteBtn = document.getElementById('close-waste-modal');

if (wasteBtn && wasteModal && closeWasteBtn) {
    
    wasteBtn.addEventListener('click', (e) => {
        e.preventDefault();
        wasteModal.classList.add('active');
        document.body.style.overflow = 'hidden'; 
        
        const originalText = wasteBtn.innerHTML;
        wasteBtn.innerHTML = `Initializing... <i class="fa-solid fa-spinner fa-spin"></i>`;
        setTimeout(() => {
            wasteBtn.innerHTML = originalText;
        }, 1000);
    });

    closeWasteBtn.addEventListener('click', () => {
        wasteModal.classList.remove('active');
        document.body.style.overflow = ''; 
    });
}


// ==========================================
// 8. Interactive Modal Logic (Vertical Forest Framework)
// ==========================================
const verticalBtn = document.getElementById('vertical-modal-btn');
const verticalModal = document.getElementById('vertical-modal');
const closeVerticalBtn = document.getElementById('close-vertical-modal');

if (verticalBtn && verticalModal && closeVerticalBtn) {
    
    verticalBtn.addEventListener('click', (e) => {
        e.preventDefault();
        verticalModal.classList.add('active');
        document.body.style.overflow = 'hidden'; 
        
        const originalText = verticalBtn.innerHTML;
        verticalBtn.innerHTML = `Initializing... <i class="fa-solid fa-spinner fa-spin"></i>`;
        setTimeout(() => {
            verticalBtn.innerHTML = originalText;
        }, 1000);
    });

    closeVerticalBtn.addEventListener('click', () => {
        verticalModal.classList.remove('active');
        document.body.style.overflow = ''; 
    });
}



// ==========================================
// 9. Universal Fluent Lightbox Gallery
// ==========================================
const lightbox = document.getElementById('universal-lightbox');
const lightboxImg = document.getElementById('lightbox-image');
const closeLightbox = document.getElementById('close-lightbox');

// Target specific buttons or any image you label with 'zoomable'
const galleryTriggers = document.querySelectorAll('.universal-gallery-trigger, img.zoomable');

if (lightbox && lightboxImg && closeLightbox) {
    galleryTriggers.forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Pull the high-res image source from the data attribute, or default to the img src
            const imgSrc = trigger.getAttribute('data-img-src') || trigger.src;
            
            if (imgSrc) {
                lightboxImg.src = imgSrc;
                lightbox.classList.add('active');
                document.body.style.overflow = 'hidden'; // Lock background scroll
            }
        });
    });

    // Close on button click
    closeLightbox.addEventListener('click', () => {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
        setTimeout(() => lightboxImg.src = '', 400); // Clear image after animation
    });

    // Close on clicking outside the image (overlay click)
    lightbox.addEventListener('click', (e) => {
        if (e.target.classList.contains('lightbox-overlay') || e.target === lightbox) {
            lightbox.classList.remove('active');
            document.body.style.overflow = '';
            setTimeout(() => lightboxImg.src = '', 400);
        }
    });
}