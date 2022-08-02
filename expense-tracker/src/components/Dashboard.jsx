import { useEffect } from "react";
import MonthlyStatus from "./Dashboard/ProgressBar";

const Dashboard = (props) => {
  useEffect(() => {});

  const today = new Date();
  const day = today.getDate();
  const month = today.getMonth();
  const year = today.getFullYear();
  const daysInMonth = new Date(year, month, 0).getDate();
  const daysLeft = daysInMonth - day;
  let amountSpent = 0;

  const spentMonth = props.statement.filter((expense) => {
    if (
      expense.date.getFullYear() === year &&
      expense.date.getMonth() === month
    ) {
      return expense;
    } else {
      return null;
    }
  });

  for (let i = 0; i < spentMonth.length; i++) {
    amountSpent += spentMonth[i].amount;
  }

  return (
    <div className="dashboard-main">
      <label
        style={{ fontSize: "14pt", marginLeft: "auto", marginRight: "auto" }}
      >
        Spending Overview
      </label>
      <span style={{ fontSize: "12pt", fontWeight: "lighter", color: "white" }}>
        <label style={{ fontSize: "14pt", marginRight: "8px" }}>
          This Month
        </label>
        ({daysLeft + " days left"})
      </span>
      <MonthlyStatus
        amountSpent={Math.round(amountSpent)}
        budget={props.budget}
      />
      <div className="bar-graph"></div>
      <div className="spent"></div>
      <div className="what's left"></div>
    </div>
  );
};

export default Dashboard;
