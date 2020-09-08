const navbarEl = document.querySelector('.navbar')

window.addEventListener('scroll', function (e) {
    if (pageYOffset > 50) {
        navbarEl.style.boxShadow = 'none';
    }
    else {
        navbarEl.style.boxShadow = '0 2px 5px grey';
    }
});