// index.js

// Get references to the DOM elements
const day = document.getElementById('day');
const month = document.getElementById('month');
const year = document.getElementById('year');
const outYr = document.getElementById('outYr');
const outMtn = document.getElementById('outMth');
const outDay = document.getElementById('outDay');
const btn = document.getElementById('btn');

// Function to calculate age
function calculateAge() {
    // Get values from inputs and handle invalid inputs
    const dayValue = parseInt(day.value, 10);
    const monthValue = parseInt(month.value, 10);
    const yearValue = parseInt(year.value, 10);

    if (isNaN(dayValue) || isNaN(monthValue) || isNaN(yearValue)) {
        alert('Please enter valid numbers for day, month, and year.');
        return;
    }
    
    // Create date object for the entered date
    const enteredDate = new Date(yearValue, monthValue - 1, dayValue);
    const currentDate = new Date();
    
    // Check if the entered date is valid
    if (enteredDate.getDate() !== dayValue || enteredDate.getMonth() + 1 !== monthValue || enteredDate.getFullYear() !== yearValue) {
        alert('Please enter a valid date.');
        return;
    }

    // Calculate the difference in milliseconds
    const diffTime = Math.abs(currentDate - enteredDate);
    
    // Calculate the difference in days
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    
    // Calculate years, months, and days
    let ageDiff = currentDate.getFullYear() - enteredDate.getFullYear();
    let m = currentDate.getMonth() - enteredDate.getMonth();
    let d = currentDate.getDate() - enteredDate.getDate();
    
    // Adjust for negative days
    if (d < 0) {
        m--;
        const daysInPreviousMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 0).getDate();
        d += daysInPreviousMonth;
    }

    // Adjust for negative months
    if (m < 0) {
        ageDiff--;
        m += 12;
    }

    // Set output values
    outYr.textContent = ageDiff;
    outMtn.textContent = m;
    outDay.textContent = d;
}

// Add event listener to the button
btn.addEventListener('click', calculateAge);
