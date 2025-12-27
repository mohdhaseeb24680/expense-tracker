const expenseNameInput = document.getElementById("expenseName");
const expenseAmountInput = document.getElementById("expenseAmount");
const addExpenseBtn = document.getElementById("addExpense");
const expenseList = document.getElementById("expenseList");
const totalAmountEl = document.getElementById("totalAmount");

let expenses = [];
let total = 0;

addExpenseBtn.addEventListener("click", () => {
  const name = expenseNameInput.value;
  const amount = expenseAmountInput.value;

  if (name === "" || amount === "") {
    return;
  }

  addExpense(name, amount);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    const name = expenseNameInput.value;
    const amount = expenseAmountInput.value;

    if (name === "" || amount === "") return;

    addExpense(name, amount);
  }
});

function addExpense(name, amount) {
  const expense = {
    id: Date.now(),
    name: name,
    amount: Number(amount)
  };

  expenses.push(expense);
  renderExpenses();

   expenseNameInput.value = "";
   expenseAmountInput.value = "";
}

function renderExpenses() {
  expenseList.innerHTML = "";
  total = 0;

  expenses.forEach((expense) => {
    const li = document.createElement("li");

    li.innerHTML = `
      <span>${expense.name}</span>
      <span>
        ₹${expense.amount}
        <button onclick="deleteExpense(${expense.id})">❌</button>
      </span>
    `;

    expenseList.appendChild(li);
    total += expense.amount;

  });

  totalAmountEl.textContent = total;
}

function deleteExpense(id) {
  expenses = expenses.filter(expense => expense.id !== id);
  renderExpenses();
}
