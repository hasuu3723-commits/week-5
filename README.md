
# SpendWise - Personal Finance Dashboard

## Project Description

SpendWise is a personal finance dashboard designed to help users manage their monthly budgets and track their expenses.

Users can enter their monthly budget and expenses for Food, Transport, Rent, Entertainment, Savings, and Utilities.

The application automatically calculates total expenses, remaining balance, and budget usage percentage. Results are displayed on the dashboard and in the browser console.

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Google Fonts

## JavaScript Concepts Implemented

### 1. Variables

The application uses `const` and `let` to store information.

Examples:
- `appName` stores the application name.
- `currency` stores the currency.
- `monthlyBudget` stores the monthly budget.
- `expenses` stores expense information.

### 2. Data Types

The project uses:
- Strings for text information.
- Numbers for financial amounts.
- Arrays to store expenses.
- Objects to organize expense categories and amounts.

### 3. User Input

The application collects user information using HTML form inputs.

Users can enter:
- Monthly budget.
- Food expenses.
- Transport expenses.
- Rent expenses.
- Entertainment expenses.
- Savings.
- Utilities.

JavaScript reads the input using `document.getElementById()` and `.value`.

### 4. Budget Calculations

The application performs three main calculations.

Total Expenses:
Adds all expense amounts together.

Remaining Balance:
Monthly Budget - Total Expenses.

Spending Percentage:
(Total Expenses / Monthly Budget) * 100.

### 5. Functions

Reusable functions organize the application logic.

- `formatMoney()` formats financial amounts.
- `calculateTotalExpenses()` calculates total spending.
- `calculateRemainingBalance()` calculates remaining money.
- `calculateSpendingPercentage()` calculates budget usage.
- `updateDashboard()` updates dashboard information.
- `displayResults()` displays the financial report.

### 6. Event Handling

The application uses an event listener to detect form submission.

The `preventDefault()` method prevents the browser from refreshing the page when the user submits the form.

### 7. Displaying Results

Results are displayed in the dashboard and browser console.

The report includes:
- Monthly budget.
- Total expenses.
- Remaining balance.
- Spending percentage.
- Budget status.

## Project Files

- `index.html`: Contains the dashboard structure and budget form.
- `style.css`: Controls the layout, colors, typography, and responsive design.
- `script.js`: Handles user input, variables, calculations, and functions.
- `README.md`: Explains the project and technologies used.

## How to Run the Project

1. Open the SpendWise folder in Visual Studio Code.
2. Open `index.html` using Live Server.
3. Enter your monthly budget.
4. Enter amounts for all six expense categories.
5. Click Calculate My Budget.
6. View your updated dashboard and budget report.
7. Open Developer Tools and select Console to see the calculations.

## Conclusion

SpendWise demonstrates how JavaScript can transform a static dashboard into an interactive budgeting application.

It provides a foundation for future development of a complete personal finance management system.
