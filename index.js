const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const conversionRate = 82.5; // Example fixed rate: 1 USD = 82.5 INR

function convertCurrency() {
  console.log('\nCurrency Converter');
  console.log('1. Convert INR to USD');
  console.log('2. Convert USD to INR');
  console.log('3. Exit');

  rl.question('Choose an option: ', (choice) => {
    switch (choice) {
      case '1':
        rl.question('Enter amount in INR: ', (inr) => {
          const usd = (parseFloat(inr) / conversionRate).toFixed(2);
          console.log(`${inr} INR is approximately ${usd} USD.`);
          convertCurrency();
        });
        break;

      case '2':
        rl.question('Enter amount in USD: ', (usd) => {
          const inr = (parseFloat(usd) * conversionRate).toFixed(2);
          console.log(`${usd} USD is approximately ${inr} INR.`);
          convertCurrency();
        });
        break;

      case '3':
        console.log('Thank you for using the currency converter. Goodbye!');
        rl.close();
        break;

      default:
        console.log('Invalid option. Please try again.');
        convertCurrency();
    }
  });
}

convertCurrency();
