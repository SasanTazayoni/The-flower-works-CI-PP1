const gallery = document.querySelector('[data-gallery]');

for (let i = 1; i <= 24; i++) {
    const card = document.createElement('li');
    card.className = 'card gallery-card';
    card.id = `card-${i}`;
    card.setAttribute('data-gallery-card', '');
    card.setAttribute('aria-label', `Flower arrangement photo ${i}`);
    gallery.appendChild(card);
}
