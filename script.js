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
    event.preventDefault(); // prevent default form submission behavior
    
    const stops = {
        "Panvel Railway Station": 0,
        "Panvel Bus Stand": 1,
        "Orion Mall": 2,
        "Amardham": 3,
        "Garden Hotel": 5
    };
    
    let startLocation = document.querySelector('input[name="start"]:checked');
    let endLocation = document.querySelector('input[name="end"]:checked');
    let numberOfPersons = parseInt(document.getElementById('persons').value);
    
    if (!startLocation || !endLocation) {
        alert("Please Select Location");
        return;
    }
    
    const startingIndex = stops[startLocation.value];
    const endingIndex = stops[endLocation.value];
    
    if (startingIndex === undefined || endingIndex === undefined) {
        alert("Invalid Locations");
        return;
    }
    
    let numberOfStops = Math.abs(endingIndex - startingIndex);
    
    let price = numberOfStops * 7 * numberOfPersons; // Multiply price with the number of persons
    
    const display = document.getElementById('display');
    display.value = price;
}
