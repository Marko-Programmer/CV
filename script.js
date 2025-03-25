
//  Smooth Appearance

document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show-section");
            }
        });
    }, { threshold: 0.2 });

    sections.forEach(section => {
        if (section.getBoundingClientRect().top < window.innerHeight) {
            section.classList.add("show-section"); 
        } else {
            section.classList.add("hidden-section");
            observer.observe(section);
        }
    });
}); 


// Language Switcher

document.addEventListener("DOMContentLoaded", function () {
    const langButton = document.getElementById("lang_button");
    const langDropdown = document.querySelector(".lang_dropdown");

    const defaultLang = localStorage.getItem("lang") || "en";
    langButton.textContent = defaultLang.toUpperCase();

    langDropdown.addEventListener("click", function (event) {
        if (event.target.tagName === 'A') {
            const selectedLang = event.target.id.split('_')[0];  
            langButton.textContent = selectedLang.toUpperCase();
            localStorage.setItem("lang", selectedLang); 
        }
    });
});
























