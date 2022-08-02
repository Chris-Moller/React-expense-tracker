import { useState, useRef } from "react";
import Dashboard from "./Dashboard.jsx";
import { v4 as uuidv4 } from "uuid";

const AddExpense = (props) => {
  const [expense, setExpense] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [isEditingBudget, setIsEditingBudget] = useState(false);
  const [budget, setBuget] = useState(5000);

  const expenseChangeHandler = (e) => {
    setExpense(e.target.value);
  };
  const amountChangeHandler = (e) => {
    setAmount(e.target.value);
  };
  const dateChangeHandler = (e) => {
    setDate(e.target.value);
  };

  const budgetInput = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      id: uuidv4(),
      name: expense,
      amount: +amount,
      date: new Date(date.replace(/-/g, "/")),
    };
    props.onExpenseData(expenseData);
    setExpense("");
    setAmount("");
    setDate("");
  };

  const submitHandlerBudget = (e) => {
    e.preventDefault();
    const newBudget = budgetInput.current.value;
    setBuget(newBudget);
    setIsEditingBudget(false);
  };

  const editExpensehandler = () => {
    if (isEditing) {
      setIsEditing(false);
      setExpense("");
      setAmount("");
      setDate("");
    } else if (!isEditing) {
      setIsEditing(true);
    }
  };

  const editBudgetHandler = () => {
    if (isEditingBudget) {
      setIsEditingBudget(false);
    } else if (!isEditingBudget) {
      setIsEditingBudget(true);
    }
  };

  return (
    <div className="main-add-div">
      <Dashboard budget={budget} statement={props.statement}></Dashboard>
      {!isEditing && !isEditingBudget && (
        <div className="menu-div">
          <button className="ex-button-new" onClick={editExpensehandler}>
            Add Expense
          </button>
          <button className="button-budget" onClick={editBudgetHandler}>
            Edit Budget
          </button>
        </div>
      )}
      {isEditing && (
        <form className="ex-form" onSubmit={submitHandler}>
          <div className="ex-controls">
            <label>Expense</label>
            <input value={expense} onChange={expenseChangeHandler} required />
          </div>
          <div className="ex-controls">
            <label>Amount</label>
            <input
              type="number"
              onChange={amountChangeHandler}
              value={amount}
              min="0.01"
              step="0.01"
              required
            />
          </div>
          <div className="ex-controls">
            <label>Date</label>
            <input
              type="date"
              onChange={dateChangeHandler}
              value={date}
              min="2020-01-01"
              max="2024-12-31"
              required
            />
          </div>
          <button className="ex-button" type="submit">
            Add Expense
          </button>
          <button
            className="ex-button"
            style={{ backgroundColor: "rgb(187, 30, 30)", marginTop: "7px" }}
            onClick={editExpensehandler}
          >
            Cancel
          </button>
        </form>
      )}
      {isEditingBudget && (
        <form className="ex-form" onSubmit={submitHandlerBudget}>
          <div className="ex-controls-2">
            <label>Current Budget:</label>
            <div>{"$" + budget}</div>
          </div>
          <div className="ex-controls">
            <label>New Amount</label>
            <input
              type="number"
              ref={budgetInput}
              min="0.01"
              step="0.01"
              required
            />
          </div>
          <button
            className="ex-button"
            style={{ marginTop: "5px" }}
            type="submit"
          >
            Set Budget
          </button>
          <button
            className="ex-button"
            style={{ backgroundColor: "rgb(187, 30, 30)", marginTop: "7px" }}
            onClick={editBudgetHandler}
          >
            Cancel
          </button>
        </form>
      )}
    </div>
  );
};

export default AddExpense;
