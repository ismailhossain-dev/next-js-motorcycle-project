import React from "react";

export const FeaturesSection = () => {
  const features = [
    { title: "GPS Tracking", desc: "Real time bike tracking system", icon: "📍" },
    { title: "Super Charging", desc: "Fast and reliable charging", icon: "⚡" },
    { title: "Increasing Speed", desc: "Optimized performance engine", icon: "🚀" },
    { title: "Powerful Tire", desc: "Durable and strong grip tire", icon: "🛞" },
  ];

  return (
    <section className="bg-slate-50 dark:bg-zinc-950 py-20 px-6 md:px-20 text-center transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <p className="text-indigo-600 dark:text-indigo-400 font-semibold tracking-widest uppercase text-sm mb-3">
          Why Choose Us
        </p>
        <h2 className="text-3xl md:text-5xl font-extrabold leading-tight mb-12 text-zinc-900 dark:text-white">
          OUR FEATURES & <span className="text-indigo-600 dark:text-indigo-500">FACILITIES</span>
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-zinc-900/50 p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 hover:border-indigo-500 dark:hover:border-indigo-500 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="w-14 h-14 mx-auto mb-6 bg-indigo-50 dark:bg-indigo-900/30 text-2xl rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="font-bold text-xl mb-3 text-zinc-900 dark:text-zinc-100">
                {item.title}
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
