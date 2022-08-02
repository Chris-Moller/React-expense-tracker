const ExpenseFilter = (props) => {
  const filterChangeHandler = (e) => {
    props.onFilterChange(e.target.value);
  };

  return (
    <div className="main-filter-div">
      <span
        style={{ alignSelf: "center", paddingBottom: "3px", fontSize: "14pt" }}
      >
        Filter by year
      </span>
      <select
        value={props.selected}
        name="filter"
        onChange={filterChangeHandler}
      >
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
        <option value="2024">2024</option>
      </select>
    </div>
  );
};

export default ExpenseFilter;
