import React from 'react';
import ExpenseDate from '../Expenses/ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <h2 className="expense-item__description">{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
