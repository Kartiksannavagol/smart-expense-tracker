function Navbar() {

  const scrollToSection = (id) => {
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (

    <div className="w-full flex justify-center">

      <div className="w-[1400px] flex items-center justify-between py-6 relative">

        {/* LEFT LOGO */}

        <div
          onClick={() => scrollToSection("hero")}
          className="text-xl font-semibold text-white cursor-pointer"
        >
          SmartExpense
        </div>


        {/* CENTER MENU */}

        <div className="absolute left-1/2 -translate-x-1/2">

          <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-full px-8 py-3 flex gap-10 text-gray-400">

            <button
              onClick={() => scrollToSection("features")}
              className="hover:text-white transition"
            >
              Features
            </button>

            <button
              onClick={() => scrollToSection("insights")}
              className="hover:text-white transition"
            >
              Insights
            </button>

            <button
              onClick={() => scrollToSection("pricing")}
              className="hover:text-white transition"
            >
              Pricing
            </button>

          </div>

        </div>


        {/* RIGHT BUTTON */}

        <div className="flex items-center gap-4">

          <button
            onClick={() => scrollToSection("features")}
            className="bg-yellow-500 hover:bg-yellow-400 text-black px-5 py-2 rounded-full font-semibold ml-4"
          >
            Get Started
          </button>

        </div>

      </div>

    </div>

  )

}

export default Navbar