var typed = new Typed(".text", {
    strings: ["frontend Developer", "web Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

// Toggle hamburger menu and navigation links

document.querySelector('.hamburger-menu').addEventListener('click', function() {
    this.classList.toggle('change');
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show');
});




