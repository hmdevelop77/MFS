import React, { useContext , useEffect ,useState } from "react";
import ExpenseItem from "./ExpenseItem";

import { BudgetContext } from "../../context/budget.context";

export default function ExpenseList() {
  const { expenses } = useContext(BudgetContext);
  const [filteredExpenses, setfilteredExpenses] = useState(expenses || []);

	useEffect(() => {
		setfilteredExpenses(expenses);
	}, [expenses]);


  const handleChange = (event) => {
    const searchResults = expenses.filter((filteredExpense) =>
      filteredExpense.item.toLowerCase().includes(event.target.value)
    );
    setfilteredExpenses(searchResults);
  };

  return (
    <>
      <input
        type="text"
        className="form-control mb-2 mr-sm-2"
        placeholder="Type to search..."
        onChange={handleChange}
      />
      <ul className="list-group">
        {filteredExpenses.map((expense) => (
          <ExpenseItem
            id={expense.id}
            item={expense.item}
            price={expense.price}
          />
        ))}
      </ul>
    </>
  );
}
