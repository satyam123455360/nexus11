// --- 1. Lenis Smooth Inertia Scroll Initialization ---
const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: 'vertical',
    gestureDirection: 'vertical',
    smooth: true,
    mouseMultiplier: 1,
});

// Parallax Hook
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

// --- 2. Live Time Display ---
setInterval(() => {
    const timeEl = document.getElementById('time-display');
    if(timeEl) timeEl.innerText = new Date().toLocaleTimeString('en-US', { hour12: false });
}, 1000);

// --- 3. System Core Auth Modal ---
const apiModal = document.getElementById('api-modal');
const keyInput = document.getElementById('api-key-input');
let geminiKey = localStorage.getItem('nexus_gemini_key') || "";

document.getElementById('system-core-btn').addEventListener('click', () => {
    keyInput.value = geminiKey;
    apiModal.classList.add('active');
    lenis.stop(); 
});

document.getElementById('cancel-api').addEventListener('click', () => {
    apiModal.classList.remove('active');
    lenis.start();
});

document.getElementById('save-api').addEventListener('click', () => {
    geminiKey = keyInput.value.trim();
    if(geminiKey) {
        localStorage.setItem('nexus_gemini_key', geminiKey);
        updateSystemCoreButton();
    }
    apiModal.classList.remove('active');
    lenis.start();
});

function updateSystemCoreButton() {
    const btn = document.getElementById('system-core-btn');
    btn.innerText = "Connected";
    btn.style.background = "#10b981";
    btn.style.color = "#fff";
    btn.style.border = "none";
}

if(geminiKey) {
    updateSystemCoreButton();
}



// ==========================================
// Telemetry Clock (Fluent Smooth)
// ==========================================
setInterval(() => {
    const timeEl = document.getElementById('time-display');
    if(timeEl) {
        timeEl.innerText = new Date().toLocaleTimeString('en-US', { hour12: false }) ;
    }
}, 1000);
