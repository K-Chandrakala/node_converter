const readline = require('readline');

// Fixed exchange rate (you can adjust as needed)
const EXCHANGE_RATE = 82.5; // Example: 1 USD = 82.5 INR

// Create readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Display menu options
const showMenu = () => {
    console.log(`
Currency Converter
-------------------
1. Convert INR to USD
2. Convert USD to INR
3. Exit
    `);
};

// Convert INR to USD
const convertINRToUSD = (amount) => (amount / EXCHANGE_RATE).toFixed(2);

// Convert USD to INR
const convertUSDToINR = (amount) => (amount * EXCHANGE_RATE).toFixed(2);

// Handle user input
const handleInput = (choice) => {
    switch (choice) {
        case '1':
            rl.question('Enter amount in INR: ', (amount) => {
                if (isNaN(amount)) {
                    console.log('Invalid input. Please enter a numeric value.');
                } else {
                    console.log(`₹${amount} = $${convertINRToUSD(amount)}`);
                }
                showMenu();
                rl.prompt();
            });
            break;
        case '2':
            rl.question('Enter amount in USD: ', (amount) => {
                if (isNaN(amount)) {
                    console.log('Invalid input. Please enter a numeric value.');
                } else {
                    console.log(`$${amount} = ₹${convertUSDToINR(amount)}`);
                }
                showMenu();
                rl.prompt();
            });
            break;
        case '3':
            console.log('Thank you for using the currency converter. Goodbye!');
            rl.close();
            break;
        default:
            console.log('Invalid choice. Please select a valid option.');
            showMenu();
            rl.prompt();
    }
};

// Start the application
console.log('Welcome to the Currency Converter!');
showMenu();
rl.prompt();

// Listen for user input
rl.on('line', (input) => {
    handleInput(input.trim());
}).on('close', () => {
    console.log('Exiting application...');
    process.exit(0);
});
