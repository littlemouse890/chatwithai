// Simple greeting message
document.getElementById('username').textContent = 'Welcome, User!';

// Adding interactivity to character cards (e.g., click event)
const characterCards = document.querySelectorAll('.character-card');

characterCards.forEach(card => {
    card.addEventListener('click', function() {
        alert('You clicked on a character!');
    });
});
