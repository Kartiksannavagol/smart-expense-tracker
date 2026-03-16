import { Sparkles, Check } from "lucide-react"

function CTA() {

  const scrollToFeatures = () => {
    const section = document.getElementById("features")
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (

    <section id="pricing" className="px-24 py-32">

      <div className="bg-slate-900/70 backdrop-blur-lg border border-gray-800 rounded-3xl p-20 text-center relative overflow-hidden">

        {/* Icon */}

        <div className="flex justify-center mb-6">

          <div className="bg-yellow-500/10 border border-yellow-500/30 w-14 h-14 rounded-xl flex items-center justify-center">

            <Sparkles className="text-yellow-400" size={24} />

          </div>

        </div>


        {/* Heading */}

        <h2 className="text-6xl font-bold leading-tight">

          Start Knowing <br/>

          <span className="text-yellow-400">
            Your Money.
          </span>

        </h2>


        {/* Description */}

        <p className="text-gray-400 mt-6 text-lg">

          Join 47,000+ people who track smarter with SmartExpense. <br/>
          Free forever. No credit card. No excuses.

        </p>


        {/* Button */}

        <div className="mt-10">

          <button
            onClick={scrollToFeatures}
            className="bg-yellow-500 hover:bg-yellow-400 text-black px-10 py-4 rounded-full text-lg font-semibold transition"
          >
            Get Started Free →
          </button>

        </div>


        {/* Features */}

        <div className="flex justify-center gap-10 mt-8 text-gray-400 text-sm">

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