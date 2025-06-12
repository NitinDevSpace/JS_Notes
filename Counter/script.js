// Get elements by ID (ensure these IDs exist in your HTML)
const counter = document.getElementById("number");
const input = document.getElementById("increment");
const addbtn = document.getElementById("add");
const subbtn = document.getElementById("subtract");
const reset = document.getElementById("reset");

// Add event listeners
addbtn.addEventListener("click", () => {
    const incrementValue = parseInt(input.value) || 0; // Get updated value
    const currentValue = parseInt(counter.textContent) || 0;
    counter.textContent = currentValue + incrementValue;
});

subbtn.addEventListener("click", () => {
    const incrementValue = parseInt(input.value) || 0;
    const currentValue = parseInt(counter.textContent) || 0;
    counter.textContent = currentValue - incrementValue;
});

reset.addEventListener("click", () => {
    counter.textContent = 0;
});