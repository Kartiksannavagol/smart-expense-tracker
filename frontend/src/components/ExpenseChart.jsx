import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

function ExpenseChart({ expenses = [] }) {

  const categoryTotals = {};

  expenses.forEach((exp) => {
    if (!categoryTotals[exp.category]) {
      categoryTotals[exp.category] = 0;
    }
    categoryTotals[exp.category] += exp.amount;
  });

  const data = {
    labels: Object.keys(categoryTotals),
    datasets: [
      {
        data: Object.values(categoryTotals),
        backgroundColor: [
          "#facc15",
          "#22c55e",
          "#60a5fa",
          "#fb7185",
          "#a78bfa",
          "#14b8a6",
          "#f97316"
        ],
        borderWidth: 0
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          color: "#e5e7eb",
          font: { size: 12 }
        }
      }
    },
    animation: {
      animateRotate: true,
      duration: 1200
    }
  };

  return (

    <section className="px-4 sm:px-6 lg:px-12 py-16">

      {/* HEADER */}
      <div className="text-center mb-10">

        <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 rounded-full text-sm mb-4">
          ● CATEGORY ANALYSIS
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
          Spending by <span className="text-yellow-400">Category</span>
        </h2>

      </div>

      {/* CHART */}
      <div className="flex justify-center">

        <div className="w-full max-w-md bg-slate-900/70 backdrop-blur-lg border border-gray-800 p-6 sm:p-8 rounded-3xl shadow-xl">

          <div className="w-full h-[280px] sm:h-[350px]">
            <Pie data={data} options={options} />
          </div>

        </div>

      </div>

    </section>

  );
}

export default ExpenseChart;