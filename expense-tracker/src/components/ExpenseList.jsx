import ExpenseDate from "./ExpenseDate.jsx";

const ExpenseList = (props) => {
  return (
    <div>
      {props.filteredStatement.map((item) => (
        <div className="card" key={item.id}>
          <ExpenseDate date={item.date} />
          <div className="expense-div">{item.name}</div>
          <div className="cost-div">{"$" + item.amount}</div>
        </div>
      ))}
    </div>
  );
};

export default ExpenseList;
