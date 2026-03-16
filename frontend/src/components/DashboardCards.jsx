function DashboardCards(){

  return(

    <div className="grid grid-cols-4 gap-8 px-20 mt-16">

      <div className="bg-slate-900/60 backdrop-blur-lg p-8 rounded-2xl border border-gray-800 hover:scale-105 transition">
        <h2 className="text-4xl font-bold text-yellow-400">$2,847</h2>
        <p className="text-gray-400 mt-2">Avg Annual Savings</p>
      </div>

      <div className="bg-slate-900/60 backdrop-blur-lg p-8 rounded-2xl border border-gray-800 hover:scale-105 transition">
        <h2 className="text-4xl font-bold">$18M+</h2>
        <p className="text-gray-400 mt-2">Expenses Logged</p>
      </div>

      <div className="bg-slate-900/60 backdrop-blur-lg p-8 rounded-2xl border border-gray-800 hover:scale-105 transition">
        <h2 className="text-4xl font-bold">47K+</h2>
        <p className="text-gray-400 mt-2">Active Users</p>
      </div>

      <div className="bg-slate-900/60 backdrop-blur-lg p-8 rounded-2xl border border-gray-800 hover:scale-105 transition">
        <h2 className="text-4xl font-bold text-green-400">92%</h2>
        <p className="text-gray-400 mt-2">Stay On Budget</p>
      </div>

    </div>

  )

}

export default DashboardCards