(function () {
    const gallery = document.querySelector('[data-gallery]');
    if (!gallery) return;

    for (let i = 1; i <= 24; i++) {
        const card = document.createElement('li');
        card.className = 'card gallery-card';
        card.setAttribute('data-gallery-card', '');
        card.setAttribute('role', 'img');
        card.setAttribute('aria-label', `Flower arrangement photo ${i}`);

        const img = document.createElement('img');
        img.src = `assets/images/gallerypic${i}.webp`;
        img.alt = '';
        img.loading = 'lazy';
        card.appendChild(img);

        gallery.appendChild(card);
    }
}());
