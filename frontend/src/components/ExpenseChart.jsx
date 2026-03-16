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
    plugins: {
      legend: {
        labels: {
          color: "#e5e7eb",
          font: { size: 14 }
        }
      }
    },
    animation: {
      animateRotate: true,
      duration: 1200
    }
  };

  return (

    <section className="px-24 py-28">

      <div className="text-center mb-14">

        <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 rounded-full text-sm mb-5">
          ● CATEGORY ANALYSIS
        </div>

        <h2 className="text-5xl font-bold">
          Spending by <span className="text-yellow-400">Category</span>
        </h2>

      </div>

      <div className="flex justify-center">

        <div className="bg-slate-900/70 backdrop-blur-lg border border-gray-800 p-10 rounded-3xl shadow-xl">

          <div style={{ width: 420 }}>
            <Pie data={data} options={options} />
          </div>

        </div>

      </div>

    </section>

  );
}

export default ExpenseChart;