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
    "Kalamboli Colony": 10,
    "Kamothe Gaon (K.L.E. College)": 11,
    "Kamothe Phata": 12,
    "Sion Panvel Toll": 13,
    "Taloja Phata": 14,
    "Spageti Gharkul": 15,
    "Kopra Gaon": 16,
    "Hiranandani Highway Kharghar": 17,
    "Kharghar Railway Station": 18,
    "C.B.D. Fire Brigade Station": 19,
    "C.B.D.Belapur Bus Station": 20,
    "C.B.D.Fire Brigde Station": 21,
    "C.B.D. Belapur Highway / Konkan Bhavan": 22,
    "Uran Phata": 23,
    "Tata Press": 24,
    "D.Y.Patil Stadium": 25,
    "Nerul Naka": 26,
    "Shiravane Village": 27,
    "Juinagar Station (Herdilla Co.)": 28,
    "Sanpada Police Station": 29,
    "Turbhe Naka (Janta Market)": 30,
    "I.C.L.School (Vashi)": 31,
    "A.P.M.C.Market (Vashi)": 32,
    "Kanda Batata Market": 33,
    "Saint Lawrence High School (Vashi)": 34,
    "Vashi Bus Station": 35,
    "Navratna Hotel": 36,
    "Vashi Sector-17/01/ Apna Bazar": 37,
    "Vashi Highway": 38,
    "Vashi Village": 39,
    "Khadi Pul Navi Mumbai / Toll Naka": 40,
    "Mankhurd Octroi Naka": 41,
    "Maharashtra Nagar": 42,
    "Mankhurd Railway Station (North)": 43,
    "Agarwadi (Mankhurd)": 44,
    "Raj Kapoor Chowk / Bhabha Hospital": 45,
    "Telecom Factory": 46,
    "Punjabwadi": 47,
    "Deonar Depot": 48,
    "R.K.Studio": 49,
    "Maitri Park": 50,
    "R.B.I Colony (Chembur)": 51,
    "Acharya Garden/ Diamond Garden": 52,
    "Acharya Garden / Diamond Garden": 53,
    "Sandu Wadi": 54,
    "Chembur Naka / Swami Vivekanand Chowk": 55,
    "Kumbhar Wada": 56,
    "Umarshi Bappa Chowk": 57,
    "Priyadarshani Chuna Bhatti": 58,
    "Everard Nagar": 59,
    "Highway Apartment": 60,
    "Rani Laxmibai Chowk (Sion)": 61,
    "Rani Laxmibai Chowk-Sion": 62,
    "Sion Railway Station": 63,
    "Naik Nagar": 64,
    "Maharashtra Nature Park / P.M.G.P. Colony": 65,
    "Dharavi Depot": 66,
    "Dharavi Koliwada": 67,
    "Dharavi T Junction / Tapase Chowk": 68,
    "Kalanagar (Bandra East)": 69,
    "P. Mohammed Rafi Chowk (Bandra-W)": 70,
    "Bandra Talao": 71,
    "Jarimari": 72,
    "Bandra Talkies": 73,
    "Bhabha Hospital": 74,
    "Bandra Police Station": 75,
    "P. Mohammad Rafi Chowk": 76,
    "Bandra Bus Station (W)": 77,
    "Bandra Railway Station (W)": 78
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
        
        if (numberOfStops <= 3) {
            price = minimumFare;
        } else {
            price = minimumFare + (numberOfStops - 3) * pricePerStop;
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
        if (heading.textContent === 'Bandra Rly.Stn To Panvel Rly.Stn (AC)') {
            heading.textContent = 'Panvel Rly.Stn To Bandra Rly.Stn (AC)';
        } else {
            heading.textContent = 'Bandra Rly.Stn To Panvel Rly.Stn (AC)';
        }
    });

    // Event listener for form submission to store selected starting location in localStorage
    document.getElementById('form').addEventListener('submit', function(event) {
        localStorage.setItem('selectedStartLocation', startingSelect.value);
    });
});
