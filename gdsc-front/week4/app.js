// Counter value
let count = 0;

// Get HTML elements
const counterDisplay = document.getElementById('counter');
const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');
const resetBtn = document.getElementById('reset');

// Function to update the counter display
function updateCounter() {
    counterDisplay.textContent = count;
}

// Increment button click event
incrementBtn.addEventListener('click', () => {
    count++;
    updateCounter();
});

// Decrement button click event
decrementBtn.addEventListener('click', () => {
    count--;
    updateCounter();
});

// Reset button click event
resetBtn.addEventListener('click', () => {
    count = 0;
    updateCounter();
});