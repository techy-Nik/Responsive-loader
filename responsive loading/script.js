window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#555';
    } else {
        navbar.style.backgroundColor = '#333';
    }
});

document.querySelectorAll('.nav-link').forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.color = '#333';
        item.style.backgroundColor = 'white';
    });
    item.addEventListener('mouseout', () => {
        item.style.color = 'white';
        item.style.backgroundColor = 'transparent';
    });
});
