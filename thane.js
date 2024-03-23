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

    let ticketSold = 0; // Initialize the ticket count
    let totalEarnings = 0; // Initialize the total earnings
    const ticketPrices = []; // Array to store ticket prices

    // Function to update the ticket count and display it
    function updateTicketCount() {
        const ticketCountElement = document.getElementById('ticketCount');
        ticketCountElement.textContent = `Total tickets sold: ${ticketSold}`;
    }

    // Function to update the total earnings and display it
    function updateTotalEarnings() {
        const totalEarningsElement = document.getElementById('totalEarnings');
        totalEarningsElement.textContent = `Total earnings: ₹${totalEarnings.toFixed(2)}`;
    }

    // Function to update both ticket count and total earnings
    function updateStats() {
        updateTicketCount();
        updateTotalEarnings();
    }

    // Function to simulate a ticket purchase with custom price
    function purchaseTicket(price) {
        ticketSold++;
        totalEarnings += price;
        ticketPrices.push(price); // Store the ticket price
        updateStats();
    }

    // Call the initial update to display the initial count and earnings
    updateStats();

    // Function to calculate ticket price and update stats on form submission
    function calculate(event) {
        event.preventDefault();
        const stops = {
    "Panvel Railway Station": 0,
    "Panvel Bus Station": 1,
    "Orion Mall Panvel": 2,
    "New Panvel Bridge": 3,
    "Amardham C.K.T.College": 4,
    "Thane Naka": 5,
    "Khanda Gaon Colony": 6,
    "Khanda Gaon Netrajyot Hospital": 7,
    "Asudgaon Depot Highway": 8,
    "Kalamboli Chowk (M.G.M.Hospital)": 9,
    "Expressway Mcdonald's": 10,
    "Kalamboli Colony": 11,
    "Kamothe Gaon (K.L.E. College)": 12,
    "Kamothe Phata": 13,
    "Sion Panvel Toll": 14,
    "Taloja Phata": 15,
    "Spageti Gharkul": 16,
    "Kopra Gaon": 17,
    "Hiranandani Highway Kharghar": 18,
    "Kharghar Railway Station": 19,
    "C.B.D. Belapur Highway / Konkan Bhavan": 20,
    "Uran Phata": 21,
    "Tata Press": 22,
    "D.Y.Patil Stadium": 23,
    "Nerul Naka": 24,
    "Shiravane Village": 25,
    "Juinagar Station (Herdilla Co.)": 26,
    "Sanpada Police Station": 27,
    "Turbhe Naka (Janta Market)": 28,
    "Turbhe Stores / Turbhe Rly.Stn.": 29,
    "Savita Chemical Company": 30,
    "Pawane Gaon": 31,
    "Khairane Midc/ Reliance Silicon": 32,
    "Khairane Gaon / Bonkode Talav Corner": 33,
    "Koparkhirane Railway Station": 34,
    "Dhirubhai Ambani Knowledge City": 35,
    "Mahape Naka": 36,
    "Ghansoli Railway Station": 37,
    "Standard Alkali Company": 38,
    "Ghansoli Naka": 39,
    "Talavali Naka / Nocil Company": 40,
    "Gothivali Village / Telephone Exchange": 41,
    "Rabale Railway Station": 42,
    "Rabale Naka": 43,
    "Rabale Police Station": 44,
    "Siemens Company": 45,
    "Bharat Bijlee Airoli": 46,
    "Airoli Railway Station": 47,
    "Minds Space": 48,
    "Airoli Naka": 49,
    "Reliable Plaza": 50,
    "M.S.E.B.Digha": 51,
    "Digha Gaon": 52,
    "Ganesh Nagar": 53,
    "Mukund Company Bridge": 54,
    "Ganpati Pada (Vitava Naka)": 55,
    "Vitava Naka": 56,
    "Vitawa/ Paryache Maidan": 57,
    "Kalwa Depot": 58,
    "Kalwa Naka": 59,
    "Court Naka": 60,
    "Mahagiri Koliwada": 61,
    "Dadoji Konddev Stadium": 62,
    "Thane": 63
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
        
        if (numberOfStops <= 5) {
            price = minimumFare;
        } else {
            price = minimumFare + (numberOfStops - 6) * pricePerStop;
        }
        
        price *= numberOfPersons; // Multiply by the number of persons
        
        // Display the calculated price in the text box
        const display = document.getElementById('display');
        display.value = Math.round(price); // Round the price to the nearest integer
        
        purchaseTicket(price); // Call the purchaseTicket() function with the calculated price
        setTimeout(resetButton, 4000); // Reset button after 4 seconds
    }

    // Add event listener for form submission
    const form = document.getElementById('form');
    form.addEventListener('submit', calculate);

    // Function to reset the button to its initial state
    function resetButton() {
        const btnText = document.querySelector("#btnText");
        btnText.innerHTML = "Submit";
        const btn = document.querySelector("#btn");
        btn.classList.remove("active");
    }
});


document.addEventListener('DOMContentLoaded', function() {
    const startingSelect = document.getElementById('start');

    // Function to handle retrieving and setting the selected starting location from local storage
    const selectedStartLocation = localStorage.getItem('selectedStartLocation');
    if (selectedStartLocation) {
        startingSelect.value = selectedStartLocation;
    }

    // Event listener for the button to swap and reverse locations
    document.getElementById('swapLocationsButton').addEventListener('click', function() {
        const endingSelect = document.getElementById('end');

        if (!endingSelect) {
            console.error("Cannot find select element for ending location.");
            return;
        }

        // Swap the innerHTML of the select elements
        const tempInnerHTML = startingSelect.innerHTML;
        startingSelect.innerHTML = endingSelect.innerHTML;
        endingSelect.innerHTML = tempInnerHTML;

        // Swap the selected attributes of the options
        const tempSelected = startingSelect.value;
        startingSelect.value = endingSelect.value;
        endingSelect.value = tempSelected;

        // Reverse the order of options
        const startingOptions = startingSelect.querySelectorAll('option');
        const endingOptions = endingSelect.querySelectorAll('option');

        for (let i = 0; i < startingOptions.length; i++) {
            startingSelect.removeChild(startingOptions[i]);
        }

        for (let i = 0; i < endingOptions.length; i++) {
            endingSelect.removeChild(endingOptions[i]);
        }

        for (let i = startingOptions.length - 1; i >= 0; i--) {
            startingSelect.appendChild(startingOptions[i]);
        }

        for (let i = endingOptions.length - 1; i >= 0; i--) {
            endingSelect.appendChild(endingOptions[i]);
        }

        // Select the first option after swapping and reversing
        startingSelect.selectedIndex = 0;
        endingSelect.selectedIndex = 0;

        // Store the selected starting location in localStorage
        localStorage.setItem('selectedStartLocation', startingSelect.value);

        // Change the heading text
        const heading = document.querySelector('h1');
        if (heading.textContent === 'Thane To Panvel Rly.Stn') {
            heading.textContent = 'Panvel Rly.Stn To Thane';
        } else {
            heading.textContent = 'Thane To Panvel Rly.Stn';
        }
    });

    // Event listener for form submission to store selected starting location in localStorage
    document.getElementById('form').addEventListener('submit', function(event) {
        localStorage.setItem('selectedStartLocation', startingSelect.value);
    });
});
