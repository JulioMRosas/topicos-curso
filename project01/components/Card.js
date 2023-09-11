export default function Card({ image, title, description }) {
    const card = document.createElement('div');
    card.classList = 'card'
    card.innerHTML = `
        <div class="card-image-container">
            <img src="${image.url}" alt="${image.description}" class="card-image">
        </div>
        <div class="card-text-container">
            <h4 class="card-text-title">${title}</h4>
            <p class="card-text-description">${description}</p>
        </div>
        <div class="card-button-container">
            <input class="card-button" type="button" value="Ver"/>
        </div>
    `;
    return card;
}