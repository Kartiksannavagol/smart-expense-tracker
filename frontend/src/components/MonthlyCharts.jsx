import { useState } from "react"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
  CartesianGrid
} from "recharts"

function MonthlyCharts({ expenses = [] }) {

  const [selectedMonth, setSelectedMonth] = useState("All")

  const monthlyTotals = {}

  expenses.forEach((exp) => {

    if (!exp.date) return

    const month = new Date(exp.date).toLocaleString("default", { month: "short" })
    const category = exp.category?.toLowerCase()

    if (!monthlyTotals[month]) {
      monthlyTotals[month] = { month }
    }

    if (!monthlyTotals[month][category]) {
      monthlyTotals[month][category] = 0
    }

    monthlyTotals[month][category] += exp.amount
  })

  let data = Object.values(monthlyTotals)

  if (selectedMonth !== "All") {
    data = data.filter((item) => item.month === selectedMonth)
  }

  const months = [
    "All","Jan","Feb","Mar","Apr","May","Jun",
    "Jul","Aug","Sep","Oct","Nov","Dec"
  ]

  return (

    <section className="px-4 sm:px-6 lg:px-12 py-16">

      {/* HEADER */}
      <div className="text-center mb-10">

        <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/30 text-purple-400 rounded-full text-sm mb-4">
          ● SPENDING TRENDS
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
          Monthly <span className="text-purple-400">Spending Analysis</span>
        </h2>

      </div>

      {/* MONTH SELECT */}
      <div className="flex justify-center mb-8">

        <select
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(e.target.value)}
          className="bg-slate-900 border border-gray-700 text-white px-4 py-2 rounded-lg text-sm sm:text-base"
        >
          {months.map((month) => (
            <option key={month} value={month}>
              {month}
            </option>
          ))}
        </select>

      </div>

      {/* CHART */}
      <div className="flex justify-center">

        <div className="w-full max-w-4xl bg-slate-900/70 backdrop-blur-lg border border-gray-800 rounded-3xl p-4 sm:p-8 shadow-xl">

          <div className="w-full h-[280px] sm:h-[350px]">

            {data.length === 0 ? (

              <p className="text-gray-400 text-center">
                No data for selected month
              </p>

            ) : (

              <ResponsiveContainer width="100%" height="100%">

                <BarChart data={data}>

                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />

                  <XAxis dataKey="month" stroke="#9ca3af" />

                  <YAxis stroke="#9ca3af" />

                  <Tooltip />

                  <Legend />

                  <Bar dataKey="food" fill="#fb7185" radius={[6,6,0,0]} />
                  <Bar dataKey="grocery" fill="#34d399" radius={[6,6,0,0]} />
                  <Bar dataKey="transport" fill="#60a5fa" radius={[6,6,0,0]} />
                  <Bar dataKey="fun" fill="#a78bfa" radius={[6,6,0,0]} />
                  <Bar dataKey="shopping" fill="#facc15" radius={[6,6,0,0]} />
                  <Bar dataKey="health" fill="#22c55e" radius={[6,6,0,0]} />
                  <Bar dataKey="bills" fill="#f97316" radius={[6,6,0,0]} />
                  <Bar dataKey="travel" fill="#14b8a6" radius={[6,6,0,0]} />
                  <Bar dataKey="other" fill="#e879f9" radius={[6,6,0,0]} />

                </BarChart>

              </ResponsiveContainer>

            )}

          </div>

        </div>

      </div>

    </section>

  )
}

export default MonthlyCharts