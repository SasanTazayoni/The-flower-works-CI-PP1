const testimonialsButtons = document.querySelectorAll('[data-testimonials-button]');
const nextTestimonialButton = document.querySelector('[data-testimonials-button="next"]');
const testimonialsTabs = document.querySelectorAll('[data-testimonials-tab]');

// Testimonials component

testimonialsButtons.forEach(button => {
    button.addEventListener('click', () => {
        const offset = button.dataset.testimonialsButton === 'next' ? 1 : -1;

        // Testimonial index

        const testimonials = button.closest('[data-testimonials]').querySelector('[data-testimonials-content]');
        const activeTestimonial = testimonials.querySelector('[data-active]');
        let newIndex = [...testimonials.children].indexOf(activeTestimonial) + offset;
        if (newIndex < 0) newIndex = testimonials.children.length - 1;
        if (newIndex >= testimonials.children.length) newIndex = 0;

        testimonials.children[newIndex].dataset.active = true;
        delete activeTestimonial.dataset.active;

        // Tab index

        const tabs = button.closest('[data-testimonials]').querySelector('[data-testimonials-tabs]');
        const activeTab = tabs.querySelector('[data-active]');
        let newTabIndex = [...tabs.children].indexOf(activeTab) + offset;
        if (newTabIndex < 0) newTabIndex = tabs.children.length - 1;
        if (newTabIndex >= tabs.children.length) newTabIndex = 0;

        tabs.children[newTabIndex].dataset.active = true;
        delete activeTab.dataset.active;

        button.blur();
    });
});

document.addEventListener('DOMContentLoaded', () => {
    startTestimonialSlider();
});

const startTestimonialSlider = () => {
    setInterval(() => {
        nextTestimonialButton.click();
    }, 16000);
};