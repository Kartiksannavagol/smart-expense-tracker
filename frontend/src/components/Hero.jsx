import { useState, useEffect } from "react"
import { Truck } from "lucide-react";
import { Film } from "lucide-react";
import { formatCurrency } from "../utils/currency";
import { getExpenses } from "../api/expenses";


function Hero(){

  const alerts = [
    "Groceries on track — 62% of budget used",
    "Dining spending 23% above monthly average",
    "Entertainment budget exceeded by $12.50"
  ]

  const [index,setIndex] = useState(0)
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
  async function loadExpenses() {
    const data = await getExpenses();
    setExpenses(data);
  }

  loadExpenses();
}, []);

  useEffect(()=>{

    const interval=setInterval(()=>{
      setIndex((prev)=>(prev+1)%alerts.length)
    },2500)

    return ()=>clearInterval(interval)

  },[])


  return(

    <div className="grid grid-cols-2 items-center px-24 py-20 relative">

      {/* LEFT SIDE */}

      <div>

        {/* ALERT BADGE */}

        <div className="bg-yellow-500/10 text-yellow-400 inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border border-yellow-500/30 text-sm">
          <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
          {alerts[index]}
        </div>


        {/* HERO TEXT */}

        <h1 className="text-[70px] font-black leading-[75px] tracking-tight">

          Know Where <br/>

          <span className="text-yellow-400">
            Every Dollar
          </span>

          <br/> Goes.

        </h1>


        {/* DESCRIPTION */}

        <p className="text-gray-400 mt-6 max-w-xl">

          SmartExpense tracks your spending in real-time,
          breaks it down by category, and sends alerts
          before you overspend — so you stay in control,
          always.

        </p>


        {/* SAVINGS CARD */}

        <div className="mt-8 bg-emerald-500/10 border border-emerald-500/30 rounded-xl px-6 py-5 w-[340px] flex justify-between items-center">

          <div>
            <h2 className="text-emerald-400 text-3xl font-bold">
              $2,847
            </h2>
            <p className="text-gray-400 text-sm">
              avg. savings identified per user / year
            </p>
          </div>

          <div className="bg-emerald-400/20 w-10 h-10 rounded-lg flex items-center justify-center">
            ?
          </div>

        </div>


        {/* BUTTONS */}

        <div className="flex gap-4 mt-8">

          <button className="bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-4 rounded-xl font-semibold flex items-center gap-2">

            + Start Tracking Free

          </button>


          <button className="border border-gray-700 px-8 py-4 rounded-xl text-gray-300 hover:bg-white/5">

            ▶ Watch Demo

          </button>

        </div>

      </div>



      {/* RIGHT SIDE */}

      <div className="relative w-[620px] h-[420px]">

  {/* CHART CARD */}
<div className="float absolute top-0 left-10 -translate-x-1/2 bg-slate-900/80 backdrop-blur-lg px-10 pt-2 pb-2 rounded-2xl border border-gray-800 w-[620px]">

  <div className="flex justify-between items-center">

    <div>
      <p className="text-gray-400 text-sm">
        March 2026 — Total Spent
      </p>

      <h2 className="text-3xl font-bold mt-1">
        $3,241.80
      </h2>
    </div>

    <div className="bg-green-500/10 text-green-400 px-4 py-1 rounded-full text-sm">
      ↘ -8.4%
    </div>

  </div>


  {/* Chart Bars */}

  <div className="mt-6">

    <div className="mt-6 flex items-end justify-between gap-3">

  <div className="w-8 h-[55px] bg-yellow-700 rounded-md"></div>
  <div className="w-8 h-[70px] bg-yellow-600 rounded-md"></div>
  <div className="w-8 h-[50px] bg-yellow-700 rounded-md"></div>
  <div className="w-8 h-[80px] bg-yellow-600 rounded-md"></div>
  <div className="w-8 h-[65px] bg-yellow-700 rounded-md"></div>
  <div className="w-8 h-[45px] bg-yellow-800 rounded-md"></div>
  <div className="w-8 h-[85px] bg-yellow-600 rounded-md"></div>
  <div className="w-8 h-[55px] bg-yellow-700 rounded-md"></div>
  <div className="w-8 h-[70px] bg-yellow-600 rounded-md"></div>
  <div className="w-8 h-[75px] bg-yellow-600 rounded-md"></div>
  <div className="w-8 h-[45px] bg-yellow-800 rounded-md"></div>

  {/* Highlighted Current Month */}
  <div className="w-8 h-[70px] bg-yellow-400 rounded-md"></div>

</div>


    {/* Months */}

    <div className="flex justify-between text-gray-500 text-sm mt-3 px-1">
      <span>Apr</span>
      <span>Jun</span>
      <span>Aug</span>
      <span>Oct</span>
      <span>Mar</span>
    </div>

  </div>

</div>


  {/* UBER EATS */}
 <div className="float absolute bottom-0 left-0 bg-slate-900 border border-gray-800 px-6 py-0 rounded-xl w-[220px]">

     {/* Icon */}
   <div className="flex items-center gap-3">
  <Truck className="w-6 h-6 text-red-400" />

  <div>
    <p className="text-white font-sm font-semibold">Uber Eats</p>
    <p className="text-gray-400 text-xs">Food & Dining</p>
    <p className="text-red-400 font-semibold">
      -$32.50
    </p>

  </div>
</div>
  </div>


  {/* SPENDING ALERT */}
 <div className="float absolute top-60 right-0 bg-yellow-500/10 border border-yellow-500/30 px-6 py-0 rounded-xl w-[250px]">

  <p className="text-yellow-400 text-sm font-semibold">
    Spending Alert
  </p>

    <p className="text-gray-400 text-xs">
      Dining 23% above your monthly average
    </p>

  </div>


  {/* NETFLIX */}
  <div className="float absolute bottom-0 right-16 bg-slate-900 border border-gray-800 px-6 py-4 rounded-xl w-[200px]">
    

    <h3 className="text-white font-semibold">
      Netflix
    </h3>

    <p className="text-gray-400 text-sm">
      Entertainment
    </p>

    <p className="text-purple-400 font-semibold">
      -$15.99
    </p>

  </div>

</div>

</div>

  )

}

export default Hero