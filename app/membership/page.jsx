export default function MembershipPage() {
  const plans = [
    {
      name: "Free",
      price: "$0 / forever",
      features: [
        "Access to all free private posts",
        "Weekly newsletter",
        "No card details required",
      ],
      button: "SIGNUP FOR FREE",
      highlight: false,
    },
    {
      name: "Premium",
      price: "$5 / monthly",
      trial: "7 DAYS TRIAL",
      features: [
        "Full access to Premium posts",
        "Weekly newsletter",
        "Support independent publishing",
        "Monthly exclusive content",
        "Simple, secure card payment",
      ],
      button: "SIGNUP FOR NOW",
      highlight: true,
    },
    {
      name: "Premium Plus",
      price: "$15 / monthly",
      features: [
        "Full access to Premium Plus posts",
        "Members-only Q&A",
        "Weekly email newsletter",
        "Support independent publishing",
        "Simple, secure card payment",
      ],
      button: "SIGNUP FOR NOW",
      highlight: false,
    },
  ];

  return (
    <section className="bg-[#0f0f0f] text-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Membership</h1>
        <p className="text-gray-400 text-lg">
          Choose the plan that fits your journey best.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`rounded-2xl p-8 bg-[#181818] shadow-lg flex flex-col justify-between ${
              plan.highlight ? "border-2 border-amber-500" : "border border-gray-700"
            }`}
          >
            <div>
              <h2 className="text-2xl font-bold mb-2">{plan.name}</h2>
              <p className="text-lg text-amber-400 mb-4">{plan.price}</p>
              {plan.trial && (
                <span className="inline-block mb-4 px-3 py-1 text-xs font-semibold bg-amber-500 text-black rounded-full">
                  {plan.trial}
                </span>
              )}
              <ul className="text-sm text-gray-300 space-y-3 mb-6 text-left">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-amber-400">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <button className="mt-auto bg-amber-500 hover:bg-amber-600 text-black font-semibold py-2 px-4 rounded-xl transition">
              {plan.button}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
