// DOM elements
const transactionForm = document.getElementById('transactionForm');
const categoryBudget = document.getElementById('categoryBudget');
const budgetAmount = document.getElementById('budgetAmount');
const setBudgetButton = document.getElementById('setBudgetButton');
const totalBudget = document.getElementById('totalBudget');
const totalSpent = document.getElementById('totalSpent');
const remainingBudget = document.getElementById('remainingBudget');

// Transactions array
let transactions = [];

// Budgets object
let budgets = {};

// Function to calculate total spent and remaining budget
function calculateBudget() {
    let total = parseFloat(budgetAmount.value) || 0;
    let spent = 0;

    transactions.forEach(transaction => {
        if (transaction.category === categoryBudget.value) {
            spent += transaction.amount;
        }
    });

    totalSpent.textContent = spent;
    remainingBudget.textContent = total - spent;
}

// Function to add transaction
function addTransaction(e) {
    e.preventDefault();

    const date = document.getElementById('date').value;
    const category = document.getElementById('category').value;
    const description = document.getElementById('description').value;
    const amount = parseFloat(document.getElementById('amount').value);
    const paymentMethod = document.getElementById('paymentMethod').value;

    const transaction = { date, category, description, amount, paymentMethod };

    transactions.unshift(transaction);

    // Update budget if transaction category matches selected budget category
    if (category === categoryBudget.value) {
        budgets[category] = (budgets[category] || parseFloat(budgetAmount.value)) - amount;
    }

    calculateBudget();

    transactionForm.reset();
}

// Function to set budget
function setBudget() {
    const category = categoryBudget.value;
    const amount = parseFloat(budgetAmount.value);

    budgets[category] = amount;

    calculateBudget();
}

// Event listeners
transactionForm.addEventListener('submit', addTransaction);
setBudgetButton.addEventListener('click', setBudget);

// Function to calculate total spent and remaining budget
function calculateBudget() {
  let total = parseFloat(budgetAmount.value) || 0;
  let spent = 0;

  transactions.forEach(transaction => {
      if (transaction.category === categoryBudget.value) {
          spent += transaction.amount;
      }
  });

  totalBudget.textContent = total;
  totalSpent.textContent = spent;
  remainingBudget.textContent = total - spent;
}
