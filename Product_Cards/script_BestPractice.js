const container = document.querySelector(".container");

const STAR_FILLED = "★";  // Unicode U+2605
const STAR_EMPTY = "☆";   // Unicode U+2606

// Create a DocumentFragment for performance
const fragment = document.createDocumentFragment();

data.forEach((product) => {
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("card");

    const detailsDiv = document.createElement("div");
    detailsDiv.classList.add("details");

    const productName = document.createElement("span");
    productName.classList.add("product__name");
    productName.textContent = product.title;

    const lineBreak = document.createElement("br");

    const productCategory = document.createElement("span");
    productCategory.classList.add("product__category");
    productCategory.textContent = product.category;

    const ratingStarsDiv = document.createElement("div");
    ratingStarsDiv.classList.add("all__star");
    ratingStarsDiv.innerHTML = generateRatingStars(Math.floor(product.rating.rate));

    const ratingCountDiv = document.createElement("div");
    ratingCountDiv.classList.add("rating__count");
    ratingCountDiv.innerHTML = `Rating Count : <span>${product.rating.count}</span>`;

    detailsDiv.append(productName, lineBreak, productCategory, ratingStarsDiv, ratingCountDiv);

    const btnWrapper = document.createElement("div");
    btnWrapper.classList.add("btn");

    const buyBtn = document.createElement("button");
    buyBtn.classList.add("btn__buy");
    buyBtn.textContent = "Buy Now";

    btnWrapper.appendChild(buyBtn);
    cardDiv.append(detailsDiv, btnWrapper);

    fragment.appendChild(cardDiv);
});

// Append everything at once to minimize DOM reflow
container.appendChild(fragment);

// Utility function to generate star HTML
function generateRatingStars(rating) {
    const maxRating = 5;
    let starsHTML = "";

    for (let i = 0; i < rating; i++) {
        starsHTML += `<span class="star__filled">${STAR_FILLED}</span>`;
    }

    for (let i = 0; i < maxRating - rating; i++) {
        starsHTML += `<span class="star__notfilled">${STAR_EMPTY}</span>`;
    }

    return starsHTML;
}