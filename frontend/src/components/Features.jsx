import { useState } from "react";
import { addExpense } from "../api/expenses";
import { Plus, Check } from "lucide-react";

function Features() {

  const [amount, setAmount] = useState("");
  const [merchant, setMerchant] = useState("");
  const [category, setCategory] = useState("Food");
  const [expenses, setExpenses] = useState([]);
  const [message, setMessage] = useState("");

  const handleAddExpense = async () => {

  if (!amount || !merchant) {
    setMessage("Please enter amount and merchant");

    setTimeout(() => {
      setMessage("");
    }, 3000);

    return;
  }

  try {

    await addExpense({
      amount: Number(amount),
      category: category,
      description: merchant,
      date: new Date().toISOString().split("T")[0],
    });

    setMessage("Expense added successfully ✅");

    setAmount("");
    setMerchant("");

    window.dispatchEvent(new Event("expenseAdded"));

    // message disappears after 3 seconds
    setTimeout(() => {
      setMessage("");
    }, 3000);

  } catch (error) {
    console.error(error);
    setMessage("Failed to add expense");

    setTimeout(() => {
      setMessage("");
    }, 3000);
  }

};

  return (

    <section id="features" className="px-24 py-32">

      {/* HEADER */}

      <div className="text-center mb-20">

        <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/10 border border-teal-500/30 text-teal-400 rounded-full text-sm mb-6">
          • CORE FEATURES
        </div>

        <h2 className="text-5xl font-bold leading-tight">
          Everything you need <br/>
          to master your <span className="text-teal-400">money.</span>
        </h2>

        <div className="flex justify-center gap-4 mt-8">

          <button className="border border-gray-700 px-6 py-3 rounded-full text-gray-400">
            Category Analysis
          </button>

          <button className="border border-gray-700 px-6 py-3 rounded-full text-gray-400">
            Intelligent Spending
          </button>

        </div>

      </div>


      {/* MAIN GRID */}

      <div className="grid grid-cols-2 gap-20 items-center">

        {/* LEFT TEXT */}

        <div>

          <div className="w-12 h-12 bg-yellow-500/10 border border-yellow-500/30 rounded-xl flex items-center justify-center mb-6">
            <Plus className="text-yellow-400"/>
          </div>

          <h3 className="text-4xl font-bold mb-6">
            Add Expenses Instantly
          </h3>

          <p className="text-gray-400 mb-8 max-w-lg">
            Log any transaction in under 5 seconds. Smart categorization
            learns your spending patterns and auto-fills categories
            for repeat merchants.
          </p>

          <ul className="space-y-4 text-gray-300">

            <li className="flex items-center gap-3">
              <Check className="text-yellow-400" size={18}/>
              Auto-category detection
            </li>

            <li className="flex items-center gap-3">
              <Check className="text-yellow-400" size={18}/>
              Receipt photo scanning
            </li>

            <li className="flex items-center gap-3">
              <Check className="text-yellow-400" size={18}/>
              Recurring expense templates
            </li>

            <li className="flex items-center gap-3">
              <Check className="text-yellow-400" size={18}/>
              Voice input support
            </li>

          </ul>

        </div>


        {/* RIGHT CARD */}

        <div className="bg-slate-900/70 backdrop-blur-xl border border-gray-800 p-8 rounded-2xl w-[500px]">

          <p className="text-gray-400 text-sm mb-4">
            QUICK ADD
          </p>

          {/* AMOUNT INPUT */}

          <input
            type="text"
            placeholder="₹ Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full bg-slate-800 rounded-xl px-4 py-3 text-white text-xl mb-4 outline-none"
          />

          {/* MERCHANT INPUT */}

          <input
            placeholder="Merchant name..."
            value={merchant}
            onChange={(e) => setMerchant(e.target.value)}
            className="w-full bg-slate-800 rounded-xl px-4 py-3 text-gray-300 mb-4 outline-none"
          />

          {/* CATEGORY BUTTONS */}

          <div className="flex gap-3 mb-6 flex-wrap">

<span
onClick={() => setCategory("Food")}
className={`cursor-pointer px-4 py-2 rounded-full text-sm border ${
category === "Food"
? "bg-yellow-500 text-black border-yellow-500"
: "bg-yellow-500/10 border-yellow-500/30 text-yellow-400"
}`}
>
🍕 Food
</span>

<span
onClick={() => setCategory("Grocery")}
className={`cursor-pointer px-4 py-2 rounded-full text-sm border ${
category === "Grocery"
? "bg-yellow-500 text-black border-yellow-500"
: "bg-yellow-500/10 border-yellow-500/30 text-yellow-400"
}`}
>
🛒 Grocery
</span>

<span
onClick={() => setCategory("Transport")}
className={`cursor-pointer px-4 py-2 rounded-full text-sm border ${
category === "Transport"
? "bg-yellow-500 text-black border-yellow-500"
: "bg-yellow-500/10 border-yellow-500/30 text-yellow-400"
}`}
>
🚕 Transport
</span>

<span
onClick={() => setCategory("Shopping")}
className={`cursor-pointer px-4 py-2 rounded-full text-sm border ${
category === "Shopping"
? "bg-yellow-500 text-black border-yellow-500"
: "bg-yellow-500/10 border-yellow-500/30 text-yellow-400"
}`}
>
🛍 Shopping
</span>

<span
onClick={() => setCategory("Entertainment")}
className={`cursor-pointer px-4 py-2 rounded-full text-sm border ${
category === "Entertainment"
? "bg-yellow-500 text-black border-yellow-500"
: "bg-yellow-500/10 border-yellow-500/30 text-yellow-400"
}`}
>
🎮 Entertainment
</span>

<span
onClick={() => setCategory("Health")}
className={`cursor-pointer px-4 py-2 rounded-full text-sm border ${
category === "Health"
? "bg-yellow-500 text-black border-yellow-500"
: "bg-yellow-500/10 border-yellow-500/30 text-yellow-400"
}`}
>
💊 Health
</span>

<span
onClick={() => setCategory("Bills")}
className={`cursor-pointer px-4 py-2 rounded-full text-sm border ${
category === "Bills"
? "bg-yellow-500 text-black border-yellow-500"
: "bg-yellow-500/10 border-yellow-500/30 text-yellow-400"
}`}
>
💡 Bills
</span>

<span
onClick={() => setCategory("Travel")}
className={`cursor-pointer px-4 py-2 rounded-full text-sm border ${
category === "Travel"
? "bg-yellow-500 text-black border-yellow-500"
: "bg-yellow-500/10 border-yellow-500/30 text-yellow-400"
}`}
>
✈️ Travel
</span>

<span
onClick={() => setCategory("Other")}
className={`cursor-pointer px-4 py-2 rounded-full text-sm border ${
category === "Other"
? "bg-yellow-500 text-black border-yellow-500"
: "bg-yellow-500/10 border-yellow-500/30 text-yellow-400"
}`}
>
📦 Other
</span>

</div>

          {/* ADD EXPENSE BUTTON */}

          <button
            onClick={handleAddExpense}
            className="w-full bg-yellow-500 text-black py-4 rounded-xl font-semibold"
          >
            + Add Expense
          </button>

          {/* SUCCESS MESSAGE */}

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