import { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {

  const [open, setOpen] = useState(false);

  return (

    <div className="w-full flex justify-center">

      <div className="w-full max-w-7xl flex items-center justify-between py-4 px-4 sm:px-6 lg:px-8 relative">

        {/* LOGO */}
        <div className="text-xl font-semibold text-white">
          SmartExpense
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex bg-white/5 border border-white/10 backdrop-blur-md rounded-full px-6 py-2 gap-8 text-gray-400">

          <button
            onClick={() => document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })}
            className="hover:text-white transition"
          >
            Features
          </button>

          <button
            onClick={() => document.getElementById("insights")?.scrollIntoView({ behavior: "smooth" })}
            className="hover:text-white transition"
          >
            Insights
          </button>

          <button className="hover:text-white transition">
            Pricing
          </button>

        </div>

        {/* RIGHT BUTTON */}
        <div className="hidden md:block">
          <button
            onClick={() => document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-yellow-500 hover:bg-yellow-400 text-black px-5 py-2 rounded-full font-semibold"
          >
            Get Started
          </button>
        </div>

        {/* MOBILE MENU BUTTON */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            {open ? <X className="text-white" /> : <Menu className="text-white" />}
          </button>
        </div>

      </div>

      {/* MOBILE DROPDOWN */}
      {open && (
        <div className="absolute top-16 left-0 w-full bg-slate-900 border-t border-gray-800 flex flex-col items-center gap-6 py-6 md:hidden z-50">

          <button
            onClick={() => {
              setOpen(false);
              document.getElementById("features")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="text-gray-300 hover:text-white"
          >
            Features
          </button>

          <button
            onClick={() => {
              setOpen(false);
              document.getElementById("insights")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="text-gray-300 hover:text-white"
          >
            Insights
          </button>

          

          <button
            onClick={() => {
              setOpen(false);
              document.getElementById("features")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-yellow-500 text-black px-6 py-2 rounded-full font-semibold"
          >
            Get Started
          </button>

        </div>
      )}

    </div>
  );
}

export default Navbar;