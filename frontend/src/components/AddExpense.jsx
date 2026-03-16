import { useState } from "react";
import axios from "axios";

function AddExpense({ fetchExpenses }) {

  const [expense, setExpense] = useState({
    amount: "",
    category: "",
    description: "",
    date: ""
  });

  const handleChange = (e) => {
    setExpense({ ...expense, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.post("http://127.0.0.1:8000/expenses", expense);

    setExpense({
      amount: "",
      category: "",
      description: "",
      date: ""
    });

    fetchExpenses();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="amount" placeholder="Amount" onChange={handleChange} value={expense.amount} />
      <input name="category" placeholder="Category" onChange={handleChange} value={expense.category} />
      <input name="description" placeholder="Description" onChange={handleChange} value={expense.description} />
      <input type="date" name="date" onChange={handleChange} value={expense.date} />

      <button type="submit">Add Expense</button>
    </form>
  );
}

export default AddExpense;