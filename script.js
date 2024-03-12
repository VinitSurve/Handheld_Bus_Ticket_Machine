document.addEventListener("DOMContentLoaded", function() {
    const decrementButton = document.getElementById('decrement');
    const incrementButton = document.getElementById('increment');
    const personsInput = document.getElementById('persons');

    decrementButton.addEventListener('click', function() {
        if (parseInt(personsInput.value) > 1) {
            personsInput.value = parseInt(personsInput.value) - 1;
        }
    });

    incrementButton.addEventListener('click', function() {
        personsInput.value = parseInt(personsInput.value) + 1;
    });
});

function calculate(event) {
    event.preventDefault();  
    const stops = {
        "Panvel Railway Station": 0,
        "Panvel Bus Stand": 1,
        "Orion Mall": 2,
        "Amardham": 3,
        "Garden Hotel": 4,
        "Khanda Colony": 5,
        "Netra Jyot": 6,
        "Asudgaon": 7,
        "Mgm": 8,
        "Kalamboli Colony": 9,
        "Kamothe": 10,
        "Mansarover": 11,
        "Taloja Phata": 12,
        "Gharkul": 13,
        "Kopra": 14,
        "Kharghar": 15,
        "Kharghar Railway Station": 16, 
        "Belapur":17
    };
    
    let startLocation = document.getElementById('start').value;
    let endLocation = document.getElementById('end').value;
    let numberOfPersons = parseInt(document.getElementById('persons').value);
    
    if (!startLocation || !endLocation) {
        alert("Please Select Location");
        return;
    }
    
    const startingIndex = stops[startLocation];
    const endingIndex = stops[endLocation];
    
    if (startingIndex === undefined || endingIndex === undefined) {
        alert("Invalid Locations");
        return;
    }
    
    let numberOfStops = Math.abs(endingIndex - startingIndex);
    let price;

    // Set minimum fare and price per stop
    const minimumFare = 7; // Minimum fare for up to 4 stops
    const pricePerStop = 1; // Price per stop beyond the minimum fare
    
    if (numberOfStops <= 4) {
        price = minimumFare;
    } else {
        price = minimumFare + (numberOfStops - 5) * pricePerStop;
    }
    
    price *= numberOfPersons; // Multiply by the number of persons
    
    const display = document.getElementById('display');
    display.value = Math.round(price); // Round the price to the nearest integer
}
