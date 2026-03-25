import { useState } from "react";
import { addExpense } from "../api/expenses";
import { Plus, Check } from "lucide-react";

function Features() {

  const [amount, setAmount] = useState("");
  const [merchant, setMerchant] = useState("");
  const [category, setCategory] = useState("Food");
  const [message, setMessage] = useState("");

  const handleAddExpense = async () => {

    if (!amount || !merchant) {
      setMessage("Please enter amount and merchant");
      setTimeout(() => setMessage(""), 3000);
      return;
    }

    try {
      await addExpense({
        amount: Number(amount),
        category,
        description: merchant,
        date: new Date().toISOString().split("T")[0],
      });

      setMessage("Expense added successfully ✅");
      setAmount("");
      setMerchant("");

      window.dispatchEvent(new Event("expenseAdded"));

      setTimeout(() => setMessage(""), 3000);

    } catch (error) {
      console.error(error);
      setMessage("Failed to add expense");
      setTimeout(() => setMessage(""), 3000);
    }
  };

  return (

    <section id="features" className="px-4 sm:px-6 lg:px-12 py-16">

      {/* HEADER */}
      <div className="text-center mb-16">

        <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/10 border border-teal-500/30 text-teal-400 rounded-full text-sm mb-6">
          • CORE FEATURES
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
          Everything you need <br />
          to master your <span className="text-teal-400">money.</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-3 mt-8">

          <button className="border border-gray-700 px-4 py-2 rounded-full text-gray-400 text-sm">
            Category Analysis
          </button>

          <button className="border border-gray-700 px-4 py-2 rounded-full text-gray-400 text-sm">
            Intelligent Spending
          </button>

        </div>

      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

        {/* LEFT */}
        <div>

          <div className="w-12 h-12 bg-yellow-500/10 border border-yellow-500/30 rounded-xl flex items-center justify-center mb-6">
            <Plus className="text-yellow-400" />
          </div>

          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
            Add Expenses Instantly
          </h3>

          <p className="text-gray-400 mb-8 max-w-lg">
            Log any transaction in seconds. Smart categorization
            learns your patterns and auto-fills categories.
          </p>

          <ul className="space-y-4 text-gray-300">

            <li className="flex items-center gap-3">
              <Check className="text-yellow-400" size={18} />
              Auto-category detection
            </li>

            <li className="flex items-center gap-3">
              <Check className="text-yellow-400" size={18} />
              Receipt photo scanning
            </li>

            <li className="flex items-center gap-3">
              <Check className="text-yellow-400" size={18} />
              Recurring templates
            </li>

            <li className="flex items-center gap-3">
              <Check className="text-yellow-400" size={18} />
              Voice input support
            </li>

          </ul>

        </div>

        {/* RIGHT CARD */}
        <div className="bg-slate-900/70 backdrop-blur-xl border border-gray-800 p-6 sm:p-8 rounded-2xl w-full max-w-md mx-auto">

          <p className="text-gray-400 text-sm mb-4">
            QUICK ADD
          </p>

          {/* INPUTS */}
          <input
            type="text"
            placeholder="₹ Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full bg-slate-800 rounded-xl px-4 py-3 text-white text-lg mb-4 outline-none"
          />

          <input
            placeholder="Merchant name..."
            value={merchant}
            onChange={(e) => setMerchant(e.target.value)}
            className="w-full bg-slate-800 rounded-xl px-4 py-3 text-gray-300 mb-4 outline-none"
          />

          {/* CATEGORY */}
          <div className="flex gap-2 mb-6 flex-wrap">

            {[
              "Food","Grocery","Transport","Shopping",
              "Entertainment","Health","Bills","Travel","Other"
            ].map((cat) => (
              <span
                key={cat}
                onClick={() => setCategory(cat)}
                className={`cursor-pointer px-3 py-1 rounded-full text-xs border ${
                  category === cat
                    ? "bg-yellow-500 text-black border-yellow-500"
                    : "bg-yellow-500/10 border-yellow-500/30 text-yellow-400"
                }`}
              >
                {cat}
              </span>
            ))}

          </div>

          {/* BUTTON */}
          <button
            onClick={handleAddExpense}
            className="w-full bg-yellow-500 hover:bg-yellow-400 text-black py-3 rounded-xl font-semibold"
          >
            + Add Expense
          </button>

          {/* MESSAGE */}
          {message && (
            <p className="text-green-400 text-sm mt-3">
              {message}
            </p>
          )}

        </div>

      </div>

    </section>
  );
}

export default Features;