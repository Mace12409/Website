document.addEventListener("DOMContentLoaded", function() {
    const maxElement = document.getElementById("max");
    const midElement = document.getElementById("mid");
    const resultLabel = document.getElementById("resultLabel");

    const submitButton = document.getElementById("submit");
    if (submitButton) {
        submitButton.onclick = function() {
            const max = parseFloat(maxElement.value);
            const mid = parseFloat(midElement.value);

            if (!isNaN(max) && !isNaN(mid)) {
                const randomNumber = Math.floor(Math.random() * (max - mid));

                console.log("Button clicked!");
                console.log("Initial Value:", max);
                console.log("Random Number:", randomNumber);

                // Set the result in the label
                resultLabel.textContent = "Random Number: " + randomNumber;
            } else {
                console.error("Invalid input. Please enter valid numbers for max and mid.");
            }
        };
    }
});
