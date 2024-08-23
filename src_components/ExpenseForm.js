import React, { useState } from 'react';
import './ExpenseForm.css';

function ExpenseForm() {
  const [expense, setExpense] = useState({ description: '', amount: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setExpense({ ...expense, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Expense added:', expense);
    setExpense({ description: '', amount: '' });
  };

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="description"
        value={expense.description}
        onChange={handleInputChange}
        placeholder="Expense Description"
      />
      <input
        type="number"
        name="amount"
        value={expense.amount}
        onChange={handleInputChange}
        placeholder="Amount"
      />
      <button type="submit">Add Expense</button>
    </form>
  );
}

export default ExpenseForm;
