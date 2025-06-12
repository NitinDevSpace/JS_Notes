//select the main container where to add the cards
const container = document.getElementById('container');

// get data from the data.js
data.forEach((product) => {
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card');

    const rating = Math.floor(product.rating.rate);

    const final_rating = generateRatingStars(rating);

    const card_data = `
         <div class="details">
                <span class="product__name">${product.title}</span>
                <br>
                <span class="product__category">${product.category}</span>
                <div class="all__star">${final_rating}
                </div>
                <div class="rating__count">Rating Count : <span>${product.rating.count}</span></div>
            </div>
            <div class="btn">
                <button class="btn__buy">Buy Now</button>
            </div>
    `
    cardDiv.innerHTML = card_data;
    container.appendChild(cardDiv);
})

function generateRatingStars(rating) {
    // const allStars = document.createElement("div")
    // allStars.setAttribute("class", "all__star")

    let stars = ""
    for(let i = 0; i < rating; i++) {
        stars = stars + "<span class='star__filled'>&#9733;</span>"
    }

    for(let i = 0; i < (5 - rating); i++) {
        stars = stars + "<span class='star__notfilled'>&#9734;</span>"
    }

    // allStars.innerHTML = stars

    return stars
}