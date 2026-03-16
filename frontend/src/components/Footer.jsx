import { Github, Twitter, Linkedin } from "lucide-react"

function Footer() {

  return (

    <footer className="px-24 py-16 border-t border-gray-800">

      <div className="grid grid-cols-4 gap-12">

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

            <li>Expense Tracking</li>
            <li>Category Analysis</li>
            <li>Monthly Reports</li>
            <li>Budget Alerts</li>

          </ul>

        </div>


        {/* COMPANY */}

        <div>

          <h3 className="text-white font-semibold mb-4">
            Company
          </h3>

          <ul className="space-y-2 text-gray-400 text-sm">

            <li>About</li>
            <li>Blog</li>
            <li>Careers</li>
            <li>Contact</li>

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

      <div className="border-t border-gray-800 mt-12 pt-6 flex justify-between text-gray-500 text-sm">

        <p>
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