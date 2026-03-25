import { useState, useEffect } from "react";
import { Truck } from "lucide-react";
import { getExpenses } from "../api/expenses";

function Hero() {

  const alerts = [
    "Groceries on track — 62% of budget used",
    "Dining spending 23% above monthly average",
    "Entertainment budget exceeded by ₹1250"
  ];

  const [index, setIndex] = useState(0);
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    async function loadExpenses() {
      const data = await getExpenses();
      setExpenses(data);
    }
    loadExpenses();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % alerts.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (

    <div className="grid grid-cols-1 lg:grid-cols-2 items-center px-4 sm:px-8 lg:px-24 py-12 lg:py-20 relative">

      {/* LEFT */}
      <div>

        <div className="bg-yellow-500/10 text-yellow-400 inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border border-yellow-500/30 text-sm">
          <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
          {alerts[index]}
        </div>

        {/* TEXT */}
        <h1 className="text-4xl sm:text-5xl lg:text-[70px] font-black leading-tight lg:leading-[75px] tracking-tight">
          Know Where <br />
          <span className="text-yellow-400">Every Rupee</span>
          <br /> Goes.
        </h1>

        <p className="text-gray-400 mt-6 max-w-xl">
          SmartExpense tracks your spending in real-time,
          breaks it down by category, and sends alerts
          before you overspend.
        </p>

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8">

          <button
            onClick={() => {
              document.getElementById("features")?.scrollIntoView({
                behavior: "smooth"
              });
            }}
            className="bg-yellow-500 hover:bg-yellow-400 text-black px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold"
          >
            + Start Tracking Free
          </button>

         

        </div>
      </div>

      {/* RIGHT */}
      <div className="relative w-full max-w-[620px] h-[400px] mx-auto mt-10 lg:mt-0">

        {/* CHART CARD */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-slate-900/80 backdrop-blur-lg px-6 sm:px-10 py-4 rounded-2xl border border-gray-800 w-full max-w-[620px]">

          <div className="flex justify-between items-center">

            <div>
              <p className="text-gray-400 text-sm">
                March 2026 — Total Spent
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold mt-1">
                ₹32,410
              </h2>
            </div>

            <div className="bg-green-500/10 text-green-400 px-3 sm:px-4 py-1 rounded-full text-sm">
              ↘ -8.4%
            </div>

          </div>

          {/* BARS */}
          <div className="mt-6 flex items-end justify-between gap-2 sm:gap-3">
            {[55,70,50,80,65,45,85,55,70,75,45,70].map((h,i)=>(
              <div key={i} className={`w-2 sm:w-3 rounded-md ${i===11?"bg-yellow-400":"bg-yellow-600"}`} style={{height:h}}></div>
            ))}
          </div>

        </div>

        
        {/* FLOAT CARDS */}
<div>

  {/* UBER */}
  <div className="absolute bottom-2 left-2 sm:left-0 bg-slate-900 border border-gray-800 px-4 py-2 rounded-xl animate-[float_3s_ease-in-out_infinite]">
    <div className="flex items-center gap-3">
      <Truck className="w-5 h-5 text-red-400" />
      <div>
        <p className="text-white text-sm font-semibold">Uber Eats</p>
        <p className="text-gray-400 text-xs">Food & Dining</p>
        <p className="text-red-400 text-sm">-₹3250</p>
      </div>
    </div>
  </div>

  {/* ALERT */}
  <div className="absolute top-40 sm:top-60 right-2 sm:right-0 bg-yellow-500/10 border border-yellow-500/30 px-4 py-2 rounded-xl animate-[float_3s_ease-in-out_infinite]">
    <p className="text-yellow-400 text-sm font-semibold">Spending Alert</p>
    <p className="text-gray-400 text-xs">Dining 23% above average</p>
  </div>

  {/* NETFLIX */}
  <div className="absolute bottom-2 right-2 sm:right-16 bg-slate-900 border border-gray-800 px-4 py-3 rounded-xl animate-[float_3s_ease-in-out_infinite]">
    <h3 className="text-white text-sm font-semibold">Netflix</h3>
    <p className="text-gray-400 text-xs">Entertainment</p>
    <p className="text-purple-400 text-sm">-₹1599</p>
  </div>

</div>

      </div>

    </div>
  );
}

export default Hero;