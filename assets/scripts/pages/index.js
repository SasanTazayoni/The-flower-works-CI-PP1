(function () {
    const testimonialsButtons = document.querySelectorAll('[data-testimonials-button]');
    const container = document.querySelector('[data-testimonials]');
    if (!testimonialsButtons.length || !container) return;

    const TESTIMONIAL_INTERVAL_MS = 16000;
    let sliderInterval = null;

    function advance(offset) {
        const testimonials = container.querySelector('[data-testimonials-content]');
        const activeTestimonial = testimonials.querySelector('[data-active]');
        let newIndex = [...testimonials.children].indexOf(activeTestimonial) + offset;
        if (newIndex < 0) newIndex = testimonials.children.length - 1;
        if (newIndex >= testimonials.children.length) newIndex = 0;

        testimonials.children[newIndex].dataset.active = true;
        delete activeTestimonial.dataset.active;

        const tabs = container.querySelector('[data-testimonials-tabs]');
        const activeTab = tabs.querySelector('[data-active]');
        let newTabIndex = [...tabs.children].indexOf(activeTab) + offset;
        if (newTabIndex < 0) newTabIndex = tabs.children.length - 1;
        if (newTabIndex >= tabs.children.length) newTabIndex = 0;

        tabs.children[newTabIndex].dataset.active = true;
        delete activeTab.dataset.active;
    }

    function startSlider() {
        sliderInterval = setInterval(() => advance(1), TESTIMONIAL_INTERVAL_MS);
    }

    testimonialsButtons.forEach(button => {
        button.addEventListener('click', () => {
            const offset = button.dataset.testimonialsButton === 'next' ? 1 : -1;
            advance(offset);
            clearInterval(sliderInterval);
            startSlider();
        });
    });

    startSlider();
}());
