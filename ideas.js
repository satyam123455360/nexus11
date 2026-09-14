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
        if (typeof lenis !== 'undefined') lenis.stop(); 
        
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
        if (typeof lenis !== 'undefined') lenis.start(); 
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


// ==========================================
// UNIFIED MODAL & DYNAMIC AUDIT ENGINE
// ==========================================
const modalTriggers = document.querySelectorAll('.solution-link');
const closeButtons = document.querySelectorAll('.glass-btn-secondary[id^="close-"]');
window.delay = window.delay || ((ms) => new Promise(resolve => setTimeout(resolve, ms)));

// --- Open Modal Logic ---
modalTriggers.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const modalId = btn.id.replace('-btn', '');
        const modal = document.getElementById(modalId);
        
        if (modal) {
            const originalText = btn.innerHTML;
            btn.innerHTML = `Initializing... <i class="fa-solid fa-spinner fa-spin"></i>`;
            
            setTimeout(() => {
                btn.innerHTML = originalText;
                document.body.style.overflow = 'hidden';
                if (typeof lenis !== 'undefined') lenis.stop();
                modal.classList.add('active');
            }, 300); 
        }
    });
});

// --- Close & Reset Modal Logic ---
closeButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const modal = btn.closest('.fluent-framework-modal');
        if (modal) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
            if (typeof lenis !== 'undefined') lenis.start();
            
            // Hard reset the modal content behind the scenes
            setTimeout(() => {
                const modalBody = modal.querySelector('.framework-body');
                if (modalBody) modalBody.scrollTop = 0; 
                resetAuditBox(modal);
            }, 500);
        }
    });
});

// --- Sticky Scroll Tracker ---
window.handleModalScroll = function(bodyElement) {
    const auditBox = bodyElement.querySelector('.ai-audit-container');
    if (!auditBox) return;
    
    // When the user scrolls 80px down, shrink the box into the sticky pill
    if (bodyElement.scrollTop > 80) {
        auditBox.classList.add('compact');
    } else {
        auditBox.classList.remove('compact');
    }
};

function resetAuditBox(modal) {
    const auditBtn = modal.querySelector('.start-audit-btn');
    const auditContent = modal.querySelector('.audit-content');
    const headerIcon = modal.querySelector('.audit-header i');
    const auditBox = modal.querySelector('.ai-audit-container');

    if(auditBtn) auditBtn.style.display = 'inline-flex';
    if(auditContent) {
        auditContent.innerHTML = '';
        auditContent.classList.add('hidden');
    }
    if(headerIcon) headerIcon.className = 'fa-solid fa-microchip ai-pulse-icon';
    if(auditBox) auditBox.classList.remove('compact');
}

// --- Dynamic AI Audit Execution ---
window.runFrameworkAudit = async function(btnElement) {
    const container = btnElement.closest('.ai-audit-container');
    const content = container.querySelector('.audit-content');
    const headerIcon = container.querySelector('.audit-header i');
    const modalId = btnElement.closest('.fluent-framework-modal').id;

    let s1, s2, s3, finalMsg;

    // Dynamically assign steps based on the open modal
    switch(modalId) {
        case 'transit-modal':
            s1 = "Scanning planetary transit vectors...";
            s2 = "Verifying maglev friction coefficients...";
            s3 = "Calculating autonomous swarm latency...";
            finalMsg = "TRANSIT AUDIT PASSED: Zero-friction ecosystem verified.";
            break;
        case 'water-modal':
            s1 = "Analyzing global hydrological cycles...";
            s2 = "Verifying graphene filtration permeability...";
            s3 = "Calculating aquifer recharge rates...";
            finalMsg = "HYDROLOGY AUDIT PASSED: Closed-loop water matrix verified.";
            break;
        case 'agriculture-modal':
            s1 = "Scanning urban biomass outputs...";
            s2 = "Verifying aeroponic nutrient algorithms...";
            s3 = "Calculating cellular protein synthesis yields...";
            finalMsg = "AGRICULTURE AUDIT PASSED: Nutritional matrix verified.";
            break;
        case 'energy-modal':
            s1 = "Auditing decentralized power nodes...";
            s2 = "Verifying orbital microwave transmission loss...";
            s3 = "Calculating micro-fusion thermal stability...";
            finalMsg = "ENERGY AUDIT PASSED: Type 1 power scale verified.";
            break;
        case 'waste-modal':
            s1 = "Scanning pneumatic logistics networks...";
            s2 = "Verifying molecular sorting precision...";
            s3 = "Calculating plasma gasification yields...";
            finalMsg = "CIRCULAR ECONOMY PASSED: Zero-waste matrix verified.";
            break;
        case 'vertical-modal':
            s1 = "Auditing synthetic biosphere integration...";
            s2 = "Verifying arboriculture carbon sequestration...";
            s3 = "Calculating micro-climate thermal reduction...";
            finalMsg = "ECOLOGY AUDIT PASSED: Symbiotic biosphere verified.";
            break;
        default:
            s1 = "Initializing telemetry scan across framework nodes...";
            s2 = "Calculating SDG-11 ecological compliance...";
            s3 = "Verifying Type 1 energy consumption vectors...";
            finalMsg = "AUDIT PASSED: Architecture is mathematically viable.";
    }

    btnElement.style.display = 'none'; 
    content.classList.remove('hidden');
    headerIcon.className = 'fa-solid fa-circle-notch fa-spin ai-pulse-icon'; 

    content.innerHTML = `<div class="audit-step" id="step-1"><i class="fa-solid fa-circle-notch fa-spin"></i> <span>${s1}</span></div>`;
    await window.delay(1200);

    document.querySelector('#step-1 i').className = 'fa-solid fa-check';
    content.innerHTML += `<div class="audit-step" id="step-2"><i class="fa-solid fa-circle-notch fa-spin"></i> <span>${s2}</span></div>`;
    await window.delay(1400);

    document.querySelector('#step-2 i').className = 'fa-solid fa-check';
    content.innerHTML += `<div class="audit-step" id="step-3"><i class="fa-solid fa-circle-notch fa-spin"></i> <span>${s3}</span></div>`;
    await window.delay(1600);

    document.querySelector('#step-3 i').className = 'fa-solid fa-check';
    content.innerHTML += `
        <div class="audit-step" style="color: #10b981; font-weight: bold; margin-top: 16px; border-left: 2px solid #10b981; padding-left: 10px;">
            <i class="fa-solid fa-shield-halved"></i> ${finalMsg}
        </div>
    `;

    headerIcon.className = 'fa-solid fa-microchip ai-pulse-icon'; 
};