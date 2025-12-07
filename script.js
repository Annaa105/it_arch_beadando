const galeria = document.getElementById("galeria");
const boritok = document.querySelectorAll(".borito");
let currentIndex = 0;
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
if (prevBtn && nextBtn && galeria) {
    boritok.forEach(borito => {
        borito.addEventListener("click", () => {
            borito.querySelector(".borito-inner").classList.toggle("flip");
        });
    });
    prevBtn.addEventListener("click", () => {
        if (currentIndex > 0) {
            currentIndex--;
            galeria.style.transform = `translateX(-${currentIndex * 100}%)`;
        }
    });

    nextBtn.addEventListener("click", () => {
        if (currentIndex < boritok.length - 1) {
            currentIndex++;
            galeria.style.transform = `translateX(-${currentIndex * 100}%)`;
        }
    });
}
const form = document.getElementById('fullForm');

const nameInput = document.getElementById('fullname');
const emailInput = document.getElementById('email');
const ageInput = document.getElementById('age');
const kedvencInput = document.getElementById('kedvenc');
const termsInput = document.getElementById('terms');

const errorName = document.getElementById('error-name');
const errorEmail = document.getElementById('error-email');
const errorAge = document.getElementById('error-age');
const errorKedvenc = document.getElementById('error-kedvenc');
const errorTerms = document.getElementById('error-terms');


form.addEventListener('submit', function(event) {
    let isValid = true;
//előző hibaüzenetek törlése
    const errors = document.querySelectorAll('.error-msg');
    errors.forEach(el => el.textContent = '');
    const inputs = document.querySelectorAll('input, select');
    inputs.forEach(el => el.classList.remove('input-error'));

//validáció
    if (nameInput.value.trim() === "") {
        errorName.textContent = "A név megadása kötelező!";
        nameInput.classList.add('input-error');
        isValid = false;
    }
    if (emailInput.value.trim() === "") {
        errorEmail.textContent = "Az email cím megadása kötelező!";
        emailInput.classList.add('input-error');
        isValid = false;
    }
    if (ageInput.value.trim() === "") {
        errorAge.textContent = "Az életkor megadása kötelező!";
        ageInput.classList.add('input-error');
        isValid = false;
    } else if (Number(ageInput.value) < 16) {
        errorAge.textContent = "Csak 16 éven felüliek vehetnek részt a kérdőívben.";
        ageInput.classList.add('input-error');
        isValid = false;
    }
    if (kedvencInput.value === "") {
        errorKedvenc.textContent = "Kérlek válassz kedvenc könyvet!";
        kedvencInput.classList.add('input-error');
        isValid = false;
    }

    if (!termsInput.checked) {
        errorTerms.textContent = "A regisztrációhoz el kell fogadnod a feltételeket.";
        termsInput.classList.add('input-error');
        isValid = false;
    }

        
    if (!isValid) {
        event.preventDefault();
        console.log("Hiba az űrlapon!");
    } else {
        console.log("Minden adat rendben, küldés...");
    }
});