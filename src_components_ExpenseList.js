import React from 'react';
import './ExpenseList.css';

function ExpenseList() {
  const expenses = [
    { id: 1, description: 'Groceries', amount: 50 },
    { id: 2, description: 'Rent', amount: 900 },
    { id: 3, description: 'Utilities', amount: 150 },
  ];

  return (
    <ul className="expense-list">
      {expenses.map(expense => (
        <li key={expense.id} className="expense-item">
          <span>{expense.description}</span>
          <span>${expense.amount}</span>
        </li>
      ))}
    </ul>
  );
}

export default ExpenseList;
