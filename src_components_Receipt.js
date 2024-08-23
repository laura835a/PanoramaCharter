import React from 'react';
import './Receipt.css';

function Receipt({ expenses }) {
  const totalAmount = expenses.reduce((acc, expense) => acc + expense.amount, 0);

  return (
    <div className="receipt">
      {expenses.map(expense => (
        <div key={expense.id} className="receipt-item">
          <span>{expense.description}</span>
          <span>${expense.amount}</span>
        </div>
      ))}
      <hr />
      <div className="receipt-item">
        <strong>Total</strong>
        <strong>${totalAmount}</strong>
      </div>
    </div>
  );
}

export default Receipt;
