function calculator() {
    let choice;

    do {
        // Show menu
        choice = prompt(
            "Choose an operation:\n" +
            "1. Add\n" +
            "2. Subtract\n" +
            "3. Multiply\n" +
            "4. Divide\n" +
            "5. Exit"
        );

        switch (choice) {
            case '1': // Add
            case '2': // Subtract
            case '3': // Multiply
            case '4': // Divide
                // Get numbers from user
                let num1 = prompt("Enter first number:");
                let num2 = prompt("Enter second number:");

                // Validate numbers
                if (isNaN(num1) || isNaN(num2)) {
                    alert("Invalid input. Please enter numeric values.");
                    continue; // skip rest of loop and show menu again
                }

                // Convert strings to numbers
                num1 = parseFloat(num1);
                num2 = parseFloat(num2);
                let result;

                if (choice === '1') {
                    result = num1 + num2;
                    alert(`Result: ${num1} + ${num2} = ${result}`);
                } else if (choice === '2') {
                    result = num1 - num2;
                    alert(`Result: ${num1} - ${num2} = ${result}`);
                } else if (choice === '3') {
                    result = num1 * num2;
                    alert(`Result: ${num1} * ${num2} = ${result}`);
                } else if (choice === '4') {
                    if (num2 === 0) {
                        alert("Division by zero is not allowed.");
                        continue;
                    }
                    result = num1 / num2;
                    alert(`Result: ${num1} / ${num2} = ${result}`);
                }
                break;

            case '5': // Exit
                alert("Exiting calculator. Goodbye!");
                break;

            default:
                alert("Invalid choice. Please choose a number between 1 and 5.");
                continue;
        }

    } while (choice !== '5');
}

// Run the calculator
calculator();
