
// ==========================================
// SPENDWISE - JAVASCRIPT FOUNDATION
// ==========================================

// 1. APPLICATION VARIABLES

const appName = "SpendWise";
const currency = "USD";


// 2. EXPENSE DATA

let expenses = [
    { category: "Food", amount: 300 },
    { category: "Transport", amount: 100 },
    { category: "Rent", amount: 600 },
    { category: "Entertainment", amount: 100 },
    { category: "Savings", amount: 200 },
    { category: "Utilities", amount: 150 }
];

let monthlyBudget = 2000;


// 3. SELECT HTML ELEMENTS

const budgetForm = document.getElementById("budgetForm");

const budgetInput = document.getElementById("monthlyBudget");

const report = document.getElementById("report");

const formMessage = document.getElementById("formMessage");


// 4. FORMAT MONEY

function formatMoney(amount) {
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: currency
    }).format(amount);
}


// 5. CALCULATE TOTAL EXPENSES

function calculateTotalExpenses(expenseList) {
    let total = 0;

    for (let expense of expenseList) {
        total += expense.amount;
    }

    return total;
}


// 6. CALCULATE REMAINING BALANCE

function calculateRemainingBalance(budget, totalExpenses) {
    return budget - totalExpenses;
}


// 7. CALCULATE SPENDING PERCENTAGE

function calculateSpendingPercentage(total, budget) {
    if (budget === 0) {
        return 0;
    }

    return (total / budget) * 100;
}


// 8. UPDATE DASHBOARD DISPLAY

function updateDashboard() {

    const totalExpenses = calculateTotalExpenses(expenses);

    const remainingBalance = calculateRemainingBalance(
        monthlyBudget,
        totalExpenses
    );

    document.getElementById("budgetDisplay").textContent =
        formatMoney(monthlyBudget);

    document.getElementById("expensesDisplay").textContent =
        formatMoney(totalExpenses);

    const balanceDisplay = document.getElementById("balanceDisplay");

    balanceDisplay.textContent = formatMoney(remainingBalance);

    balanceDisplay.style.color =
        remainingBalance < 0 ? "#DC2626" : "var(--accent-color)";

    // Update category cards

    for (let expense of expenses) {

        const categoryId = expense.category.toLowerCase();

        document.getElementById(categoryId + "Display").textContent =
            formatMoney(expense.amount);

        const progress = document.getElementById(
            categoryId + "Progress"
        );

        const percentage = monthlyBudget > 0
            ? (expense.amount / monthlyBudget) * 100
            : 0;

        progress.style.width = Math.min(percentage, 100) + "%";
    }

    displayResults();
}


// 9. DISPLAY BUDGET REPORT

function displayResults() {

    const totalExpenses = calculateTotalExpenses(expenses);

    const remainingBalance = calculateRemainingBalance(
        monthlyBudget,
        totalExpenses
    );

    const percentage = calculateSpendingPercentage(
        totalExpenses,
        monthlyBudget
    );

    let status;

    if (remainingBalance > 0) {
        status = "You are within your budget.";
    } else if (remainingBalance === 0) {
        status = "You have used your entire budget.";
    } else {
        status = "You have exceeded your budget.";
    }

    report.innerHTML = `
        <div class="report-result">
            <p><strong>Application:</strong> ${appName}</p>
            <p><strong>Monthly Budget:</strong> ${formatMoney(monthlyBudget)}</p>
            <p><strong>Total Expenses:</strong> ${formatMoney(totalExpenses)}</p>
            <p><strong>Remaining Balance:</strong> ${formatMoney(remainingBalance)}</p>
            <p><strong>Budget Used:</strong> ${percentage.toFixed(2)}%</p>
            <p><strong>Status:</strong> ${status}</p>
        </div>
    `;

    console.log("========== SPENDWISE REPORT ==========");
    console.log("Monthly Budget:", formatMoney(monthlyBudget));
    console.log("Expense Details:");
    console.table(expenses);
    console.log("Total Expenses:", formatMoney(totalExpenses));
    console.log("Remaining Balance:", formatMoney(remainingBalance));
    console.log("Budget Used:", percentage.toFixed(2) + "%");
    console.log("Status:", status);
    console.log("======================================");
}


// 10. COLLECT USER INPUT AND PROCESS DATA

budgetForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const budget = Number(budgetInput.value);

    if (!Number.isFinite(budget) || budget < 0 || budgetInput.value.trim() === "") {
        formMessage.textContent = "Please enter a valid monthly budget.";
        formMessage.style.color = "#DC2626";
        return;
    }

    const categories = [
        "Food",
        "Transport",
        "Rent",
        "Entertainment",
        "Savings",
        "Utilities"
    ];

    const newExpenses = [];

    for (let category of categories) {

        const input = document.getElementById(
            category.toLowerCase()
        );

        const amount = Number(input.value);

        if (
            input.value.trim() === "" ||
            !Number.isFinite(amount) ||
            amount < 0
        ) {
            formMessage.textContent =
                "Please enter valid amounts for all expense categories.";

            formMessage.style.color = "#DC2626";
            return;
        }

        newExpenses.push({
            category: category,
            amount: amount
        });
    }

    monthlyBudget = budget;
    expenses = newExpenses;

    updateDashboard();

    formMessage.textContent = "Your budget has been calculated successfully!";

    formMessage.style.color = "var(--accent-color)";
});


// 11. START APPLICATION

updateDashboard();
