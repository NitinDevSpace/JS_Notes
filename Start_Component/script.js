const stars = document.getElementById('star-container');
const count = document.getElementById('count');

let selectedRating = 0; // Store clicked rating

// Helper to fill stars up to a given index
function fillStars(upTo) {
    Array.from(stars.children).forEach((star, i) => {
        star.classList.toggle('star-filled', i < upTo);
    });
}

// Click handler: Set rating
stars.addEventListener('click', (e) => {
    if (e.target.matches('[data-index]')) {
        selectedRating = parseInt(e.target.getAttribute('data-index'));
        count.textContent = selectedRating;
        fillStars(selectedRating);
    }
});

// Hover handler: Temporary preview
stars.addEventListener('mouseover', (e) => {
    if (e.target.matches('[data-index]')) {
        const hoverIndex = parseInt(e.target.getAttribute('data-index'));
        fillStars(hoverIndex);
    }
});

// Restore clicked rating on mouse leave
stars.addEventListener('mouseleave', () => {
    fillStars(selectedRating);
});
