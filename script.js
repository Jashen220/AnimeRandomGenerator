// script.js
document.getElementById('randomize-btn').addEventListener('click', fetchRandomCharacter);

function fetchRandomCharacter() {
    const url = 'https://api.jikan.moe/v4/characters?page=1&limit=25'; // Get a page of characters

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            return response.json();
        })
        .then(data => {
            const characters = data.data;
            const randomCharacter = characters[Math.floor(Math.random() * characters.length)];

            // Update the UI with the random character's data
            document.getElementById('character-image').src = randomCharacter.images.jpg.image_url;
            document.getElementById('character-name').textContent = randomCharacter.name;
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('character-name').textContent = 'An error occurred. Please try again later.';
        });
}