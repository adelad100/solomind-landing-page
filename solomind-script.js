document.addEventListener('DOMContentLoaded', () => {
    const features = document.querySelectorAll('.feature');

    features.forEach(feature => {
        feature.addEventListener('click', () => {
            feature.classList.toggle('active');
            const toggleIcon = feature.querySelector('.toggle-icon');
            toggleIcon.textContent = toggleIcon.textContent === '+' ? '-' : '+';
        });
    });

    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Beta signup form submitted. Thank you!');
        form.reset();
    });
});
