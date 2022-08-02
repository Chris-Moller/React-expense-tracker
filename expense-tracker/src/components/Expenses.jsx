import { useState } from "react";
import ExpenseFilter from "./ExpenseFilter.jsx";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import { BiConfused } from "react-icons/bi";
import ExpenseList from "./ExpenseList.jsx";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2022");

  const changeFilter = (year) => {
    setFilteredYear(year);
  };

  const toggleHandler = () => {
    if (props.toggle === "asc") {
      props.setToggle("dsc");
      const sortedStatement = props.statement.sort((a, b) => a.date - b.date);
      props.setItems(sortedStatement);
    } else if (props.toggle === "dsc") {
      props.setToggle("asc");
      const sortedStatement = props.statement.sort((a, b) => b.date - a.date);
      props.setItems(sortedStatement);
    }
  };

  const filteredStatement = props.statement.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <>
      <ExpensesChart statement={filteredStatement} />
      <div className="main-div-bkgrnd">
        <ExpenseFilter onFilterChange={changeFilter} selected={filteredYear} />
        <div className="main-holder-div">
          <div className="catagory-div">
            <div id="Date">
              Date
              {props.toggle === "asc" ? (
                <TiArrowSortedDown onClick={toggleHandler} />
              ) : (
                <TiArrowSortedUp onClick={toggleHandler} />
              )}
            </div>
            <div id="Item">Item</div>
            <div id="Amount">Amount</div>
          </div>
          {filteredStatement.length === 0 ? (
            <div className="no-data-div">
              <div>No statement data found</div>
              <BiConfused></BiConfused>
            </div>
          ) : (
            <ExpenseList filteredStatement={filteredStatement} />
          )}
        </div>
      </div>
    </>
  );
};

export default Expenses;
