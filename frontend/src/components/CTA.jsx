import { Sparkles, Check } from "lucide-react"

function CTA() {

  const scrollToFeatures = () => {
    const section = document.getElementById("features")
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (

    <section id="pricing" className="px-4 sm:px-6 lg:px-12 py-16">

      <div className="bg-slate-900/70 backdrop-blur-lg border border-gray-800 rounded-3xl p-8 sm:p-12 lg:p-16 text-center relative overflow-hidden">

        {/* ICON */}
        <div className="flex justify-center mb-6">

          <div className="bg-yellow-500/10 border border-yellow-500/30 w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center">

            <Sparkles className="text-yellow-400" size={22} />

          </div>

        </div>

        {/* HEADING */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">

          Start Knowing <br />

          <span className="text-yellow-400">
            Your Money.
          </span>

        </h2>

        {/* DESCRIPTION */}
        <p className="text-gray-400 mt-4 text-sm sm:text-base lg:text-lg">

          Join 47,000+ people who track smarter with SmartExpense. <br className="hidden sm:block"/>
          Free forever. No credit card. No excuses.

        </p>

        {/* BUTTON */}
        <div className="mt-8">

          <button
            onClick={scrollToFeatures}
            className="bg-yellow-500 hover:bg-yellow-400 text-black px-6 sm:px-8 py-3 rounded-full text-sm sm:text-base font-semibold transition"
          >
            Get Started Free →
          </button>

        </div>

        {/* FEATURES */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-6 text-gray-400 text-xs sm:text-sm">

          <div className="flex items-center gap-2">
            <Check className="text-emerald-400" size={16}/>
            Free forever plan
          </div>

          <div className="flex items-center gap-2">
            <Check className="text-emerald-400" size={16}/>
            No credit card
          </div>

          <div className="flex items-center gap-2">
            <Check className="text-emerald-400" size={16}/>
            Cancel anytime
          </div>

        </div>

      </div>

    </section>

  )

}

export default CTA