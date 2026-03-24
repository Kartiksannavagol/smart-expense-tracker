import { useEffect, useState } from "react";
import { getExpenses, deleteExpense, updateExpense } from "../api/expenses";
import ExpenseChart from "./ExpenseChart";
import MonthlyCharts from "./MonthlyCharts";

import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

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

  const totalSpent = expenses.reduce((total, exp) => total + exp.amount, 0);

  const progress = Math.min((totalSpent / budget) * 100, 100);

  // 🔥 Top Category
  const categoryTotals = {};
  expenses.forEach((exp) => {
    categoryTotals[exp.category] =
      (categoryTotals[exp.category] || 0) + exp.amount;
  });

  let topCategory = "None";
  let topAmount = 0;

  Object.entries(categoryTotals).forEach(([cat, amt]) => {
    if (amt > topAmount) {
      topCategory = cat;
      topAmount = amt;
    }
  });

  // ✅ FIXED PDF EXPORT
  const exportToPDF = () => {

    const doc = new jsPDF();

    // Title
    doc.setFontSize(18);
    doc.text("Smart Expense Tracker Report", 105, 20, { align: "center" });

    // Date
    doc.setFontSize(10);
    doc.text(`Generated on: ${new Date().toLocaleString()}`, 14, 28);

    const tableColumn = ["Description", "Category", "Amount", "Date"];

    const tableRows = expenses.map((exp) => [
      exp.description,
      exp.category,
      `Rs. ${exp.amount}`,   // ✅ FIXED
      exp.date,
    ]);

    autoTable(doc, {
      head: [tableColumn],
      body: tableRows,
      startY: 35,
      theme: "striped",   // ✅ CLEAN UI
    });

    // Total
    doc.text(
      `Total Spent: Rs. ${totalSpent}`,   // ✅ FIXED
      14,
      doc.lastAutoTable.finalY + 10
    );

    doc.save("expenses_report.pdf");
  };

  return (
    <section id="insights" className="px-10 py-24">

      {/* Heading */}
      <div className="text-center mb-16">
        <div className="inline-block px-4 py-1 border border-yellow-500/30 text-yellow-400 rounded-full text-sm mb-4">
          ● TRANSACTIONS
        </div>

        <h2 className="text-5xl font-bold text-white">
          Track your <br />
          <span className="text-yellow-400">recent expenses.</span>
        </h2>
      </div>

      {/* Budget */}
      <div className="bg-slate-900 border border-gray-800 rounded-2xl p-6 mb-8">

        <div className="flex justify-between items-center">
          <div>
            <p className="text-gray-400 text-sm">Monthly Budget</p>
            <h3 className="text-2xl font-bold text-white">Rs. {budget}</h3>
          </div>

          <input
            type="number"
            value={budget}
            onChange={(e) => setBudget(Number(e.target.value))}
            className="bg-slate-800 px-4 py-2 rounded-lg text-white w-[150px]"
          />
        </div>

        <div className="mt-4">
          <div className="w-full bg-slate-800 rounded-full h-3">
            <div
              className="bg-yellow-400 h-3 rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>

          <p className="text-gray-400 text-sm mt-2">
            Rs. {totalSpent} spent this month
          </p>
        </div>

        {totalSpent > budget && (
          <p className="text-red-400 mt-2">
            ⚠ Budget exceeded by Rs. {totalSpent - budget}
          </p>
        )}
      </div>

      {/* Top Category */}
      <div className="bg-slate-900 border border-gray-800 rounded-2xl p-6 mb-8">
        <p className="text-gray-400 text-sm">Top Spending Category</p>
        <h3 className="text-yellow-400 text-xl font-bold">{topCategory}</h3>
        <p className="text-gray-400">Rs. {topAmount} spent</p>
      </div>

      {/* Transactions */}
      <div className="bg-slate-900 border border-gray-800 rounded-2xl p-8">

        <div className="flex justify-between items-center mb-6">

          <div>
            <h3 className="text-2xl font-bold text-white">
              Recent Transactions
            </h3>
            <p className="text-gray-500 text-sm">Live feed</p>
          </div>

          <div className="flex gap-3">

            {/* Search */}
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-slate-800 px-4 py-2 rounded-lg text-white"
            />

            {/* Export PDF */}
            <button
              onClick={exportToPDF}
              className="bg-yellow-500 text-black px-4 py-2 rounded-lg font-semibold"
            >
              Export PDF
            </button>

          </div>

        </div>

        <div className="space-y-4">

          {filteredExpenses.length === 0 ? (
            <p className="text-gray-500">No transactions found</p>
          ) : (
            filteredExpenses.slice(0, 5).map((exp) => (
              <Transaction
                key={exp._id}
                id={exp._id}
                name={exp.description}
                category={exp.category}
                price={`Rs. ${exp.amount}`}
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

function Transaction({ id, name, category, price, onDelete, onEdit }) {

  return (
    <div className="flex justify-between items-center bg-slate-800 p-4 rounded-xl">

      <div>
        <p className="text-white">{name}</p>
        <p className="text-gray-400 text-sm">{category}</p>
      </div>

      <div className="flex items-center gap-4">

        <p className="text-teal-400">{price}</p>

        <button
          onClick={() => {
            const newAmount = prompt("Enter new amount");
            if (!newAmount) return;
            onEdit(id, newAmount);
          }}
          className="text-yellow-400"
        >
          ✏️
        </button>

        <button
          onClick={() => onDelete(id)}
          className="text-red-400"
        >
          🗑
        </button>

      </div>

    </div>
  );
}