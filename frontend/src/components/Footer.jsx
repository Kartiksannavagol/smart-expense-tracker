import { Github, Twitter, Linkedin } from "lucide-react"

function Footer() {

  return (

    <footer className="px-4 sm:px-6 lg:px-12 py-12 border-t border-gray-800">

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* BRAND */}
        <div>

          <h2 className="text-xl font-bold text-white">
            Smart<span className="text-yellow-400">Expense</span>
          </h2>

          <p className="text-gray-400 mt-4 text-sm max-w-xs">
            Track your spending, understand your habits,
            and take full control of your finances.
          </p>

        </div>

        {/* PRODUCT */}
        <div>

          <h3 className="text-white font-semibold mb-4">
            Product
          </h3>

          <ul className="space-y-2 text-gray-400 text-sm">

            <li className="hover:text-white cursor-pointer">Expense Tracking</li>
            <li className="hover:text-white cursor-pointer">Category Analysis</li>
            <li className="hover:text-white cursor-pointer">Monthly Reports</li>
            <li className="hover:text-white cursor-pointer">Budget Alerts</li>

          </ul>

        </div>

        {/* COMPANY */}
        <div>

          <h3 className="text-white font-semibold mb-4">
            Company
          </h3>

          <ul className="space-y-2 text-gray-400 text-sm">

            <li className="hover:text-white cursor-pointer">About</li>
            <li className="hover:text-white cursor-pointer">Blog</li>
            <li className="hover:text-white cursor-pointer">Careers</li>
            <li className="hover:text-white cursor-pointer">Contact</li>

          </ul>

        </div>

        {/* SOCIAL */}
        <div>

          <h3 className="text-white font-semibold mb-4">
            Connect
          </h3>

          <div className="flex gap-4 text-gray-400">

            <Github className="cursor-pointer hover:text-white" />
            <Twitter className="cursor-pointer hover:text-white" />
            <Linkedin className="cursor-pointer hover:text-white" />

          </div>

        </div>

      </div>

      {/* BOTTOM */}
      <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-gray-500 text-sm">

        <p className="text-center sm:text-left">
          © 2026 SmartExpense. All rights reserved.
        </p>

        <div className="flex gap-6">

          <span className="cursor-pointer hover:text-white">
            Privacy
          </span>

          <span className="cursor-pointer hover:text-white">
            Terms
          </span>

        </div>

      </div>

    </footer>

  )

}

export default Footer