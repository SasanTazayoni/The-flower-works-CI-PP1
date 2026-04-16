const collapsibleToggler = document.querySelector('.collapsible__toggler');
const collapsibleContent = document.querySelector('.collapsible__content');
const btns = document.querySelectorAll('.button');
const navbar = document.querySelector('[data-navbar]');
const scrollToTop = document.querySelector('[data-scroll-up]');

// Menu component

if (collapsibleToggler && collapsibleContent) {
    collapsibleToggler.addEventListener('click', () => {
        collapsibleContent.classList.toggle('collapsible--expanded');
    });
}

// Button component

btns.forEach(btn => {
    btn.addEventListener('mouseenter', function (e) {
        let x = e.clientX - e.target.getBoundingClientRect().left;
        let y = e.clientY - e.target.getBoundingClientRect().top;
        let ripples = document.createElement('span');
        ripples.style.left = x + 'px';
        ripples.style.top = y + 'px';
        this.appendChild(ripples);

        setTimeout(() => {
            ripples.remove();
        }, 500);
    });
});

// Scroll up link component

if (navbar && scrollToTop) {
    window.addEventListener('scroll', () => {
        const scrollHeight = window.scrollY;
        const navHeight = navbar.getBoundingClientRect().height;
        if (scrollHeight > (navHeight * 2)) {
            scrollToTop.classList.add('show-link');
        } else {
            scrollToTop.classList.remove('show-link');
        }

        scrollToTop.blur();
    });
}
