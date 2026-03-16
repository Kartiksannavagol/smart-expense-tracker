import { useEffect, useState } from "react";
import { getExpenses, deleteExpense, updateExpense } from "../api/expenses";
import ExpenseChart from "./ExpenseChart";
import MonthlyCharts from "./MonthlyCharts";

import { ShoppingCart } from "lucide-react";

export default function StatsSection() {

  const [expenses, setExpenses] = useState([]);
  const [search, setSearch] = useState("");
  const [budget, setBudget] = useState(5000);

  useEffect(() => {

    loadExpenses();

    const refreshExpenses = () => {
      loadExpenses();
    };

    window.addEventListener("expenseAdded", refreshExpenses);

    return () => {
      window.removeEventListener("expenseAdded", refreshExpenses);
    };

  }, []);

  const loadExpenses = async () => {
    try {
      const data = await getExpenses();
      setExpenses(data);
    } catch (error) {
      console.error("Failed to load expenses:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteExpense(id);
      loadExpenses();
    } catch (error) {
      console.error("Failed to delete expense:", error);
    }
  };

  const handleEdit = async (id, newAmount) => {

    const expense = expenses.find((e) => e._id === id);

    try {

      await updateExpense(id, {
        amount: Number(newAmount),
        category: expense.category,
        description: expense.description,
        date: expense.date
      });

      loadExpenses();

    } catch (error) {
      console.error("Failed to update expense", error);
    }

  };

  const filteredExpenses = expenses.filter((exp) =>
    exp.description.toLowerCase().includes(search.toLowerCase()) ||
    exp.category.toLowerCase().includes(search.toLowerCase())
  );

  const totalSpent = expenses.reduce((total, exp) => {
    return total + exp.amount;
  }, 0);

  const progress = Math.min((totalSpent / budget) * 100, 100);

  /* ---------- Top Category Calculation ---------- */

  const categoryTotals = {};

  expenses.forEach((exp) => {
    if (categoryTotals[exp.category]) {
      categoryTotals[exp.category] += exp.amount;
    } else {
      categoryTotals[exp.category] = exp.amount;
    }
  });

  let topCategory = "None";
  let topAmount = 0;

  Object.entries(categoryTotals).forEach(([category, amount]) => {
    if (amount > topAmount) {
      topCategory = category;
      topAmount = amount;
    }
  });

  return (
    <section id="insights" className="px-10 py-24">

      {/* Section Heading */}

      <div className="text-center mb-16">

        <div className="inline-block px-4 py-1 rounded-full border border-yellow-500/30 text-yellow-400 text-sm mb-4">
          ● TRANSACTIONS
        </div>

        <h2 className="text-5xl font-bold text-white">
          Track your <br />
          <span className="text-yellow-400">recent expenses.</span>
        </h2>

      </div>


      {/* Budget Section */}

      <div className="bg-slate-900/70 border border-gray-800 rounded-2xl p-6 mb-8">

        <div className="flex justify-between items-center">

          <div>
            <p className="text-gray-400 text-sm">Monthly Budget</p>
            <h3 className="text-2xl font-bold text-white">₹{budget}</h3>
          </div>

          <input
            type="number"
            value={budget}
            onChange={(e) => setBudget(Number(e.target.value))}
            className="bg-slate-800 border border-gray-700 px-4 py-2 rounded-lg text-white outline-none w-[150px]"
          />

        </div>

        <div className="mt-4">

          <div className="w-full bg-slate-800 rounded-full h-3">

            <div
              className="bg-yellow-400 h-3 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />

          </div>

          <p className="text-gray-400 text-sm mt-2">
            ₹{totalSpent} spent this month
          </p>

        </div>

        {totalSpent > budget && (
          <div className="mt-4 text-red-400 font-semibold">
            ⚠ Budget exceeded by ₹{totalSpent - budget}
          </div>
        )}

      </div>


      {/* Top Spending Category */}

      <div className="bg-slate-900/70 border border-gray-800 rounded-2xl p-6 mb-10">

        <p className="text-gray-400 text-sm">
          Top Spending Category
        </p>

        <h3 className="text-2xl font-bold text-yellow-400 mt-1">
          {topCategory}
        </h3>

        <p className="text-gray-400 text-sm">
          ₹{topAmount} spent
        </p>

      </div>


      {/* Transactions Card */}

      <div className="bg-slate-900/70 border border-gray-800 rounded-2xl p-8">

        <div className="flex justify-between items-center mb-6">

          <div>
            <h3 className="text-2xl font-bold text-white">
              Recent Transactions
            </h3>
            <p className="text-gray-500 text-sm">
              Live feed
            </p>
          </div>

          <input
            type="text"
            placeholder="Search expenses..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-slate-800 border border-gray-700 px-4 py-2 rounded-lg text-white outline-none w-[220px]"
          />

        </div>


        {/* Transaction List */}

        <div className="space-y-4">

          {filteredExpenses.length === 0 ? (

            <p className="text-gray-500">
              No transactions found
            </p>

          ) : (

            filteredExpenses.slice(0,5).map((exp) => (

              <Transaction
                key={exp._id}
                id={exp._id}
                icon={<ShoppingCart />}
                name={exp.description}
                category={exp.category}
                price={`-₹${exp.amount}`}
                onDelete={handleDelete}
                onEdit={handleEdit}
              />

            ))

          )}

        </div>

      </div>


      {/* Charts */}

      <ExpenseChart expenses={expenses} />

      <MonthlyCharts expenses={expenses} />

    </section>
  );
}



function Transaction({ id, icon, name, category, price, onDelete, onEdit }) {

  return (

    <div className="flex items-center justify-between bg-slate-800/40 border border-gray-800 rounded-xl px-6 py-4">

      <div className="flex items-center gap-4">

        <div className="w-10 h-10 flex items-center justify-center bg-slate-700/40 rounded-lg text-gray-300">
          {icon}
        </div>

        <div>
          <p className="text-white font-semibold">{name}</p>
          <p className="text-gray-400 text-sm">{category}</p>
        </div>

      </div>

      <div className="flex items-center gap-4">

        <p className="text-teal-400 font-semibold">{price}</p>

        <div className="flex gap-3">

          <button
            onClick={() => {
              const newAmount = prompt("Enter new amount");
              if (!newAmount) return;
              onEdit(id, newAmount);
            }}
            className="text-yellow-400 hover:text-yellow-500"
          >
            ✏️
          </button>

          <button
            onClick={() => onDelete(id)}
            className="text-red-400 hover:text-red-500"
          >
            🗑
          </button>

        </div>

      </div>

    </div>

  );

}