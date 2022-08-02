import "./App.css";
import Navbar from "./components/Navbar";
import Expenses from "./components/Expenses";
import { useState } from "react";
import AddExpense from "./components/AddExpense";


const SAMPLE_STATEMENT = [
  {
    id: "e1",
    name: "television",
    amount: 1643.22,
    date: new Date(2022, 8, 10),
  },
  {
    id: "e2",
    name: "car insurance",
    amount: 450,
    date: new Date(2022, 8, 2),
  },
  {
    id: "e4",
    name: "sunoco",
    amount: 76.54,
    date: new Date(2023, 1, 8),
  },
  {
    id: "e3",
    name: "coffee",
    amount: 9.33,
    date: new Date(2021, 7, 15),
  },
];

function App() {
  const [toggle, setToggle] = useState("asc");
  const [items, setItems] = useState(SAMPLE_STATEMENT);

  const addExpenseHandler = (expense) => {
    setItems((prevItems) => {
      const newArray = [expense, ...prevItems];
      if (toggle === "dsc") {
        const sortedStatement = newArray.sort((a, b) => a.date - b.date);
        return sortedStatement;
        
      } else if (toggle === "asc") {
        const sortedStatement = newArray.sort((a, b) => b.date - a.date);
        return sortedStatement;
        
      }
  
    });
  };


  return (
    <div>
      <Navbar />
      <AddExpense onExpenseData={addExpenseHandler} statement={items} />
      <Expenses statement={items} setToggle={setToggle} toggle={toggle} setItems={setItems} />
    </div>
  );
}

export default App;
