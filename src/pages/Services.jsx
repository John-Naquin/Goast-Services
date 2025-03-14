import { ServiceCard } from "../components/ServiceCard";

function Services() {
  const services = [
    {
      title: "Building Automation & Controls",
      subtitle: "Optimizing Efficiency, Enhancing Performance",
      description:
        "We design, install, and maintain advanced Building Automation Systems (BAS) to help businesses optimize energy use, improve system performance, and reduce operational costs.",
      capabilities: [
        "Custom BAS solutions tailored to your facility’s needs.",
        "Integration with HVAC, lighting, and energy systems.",
        "Migration from outdated legacy systems to modern solutions.",
        "Real-time system monitoring and remote access.",
        "24/7 emergency support to minimize downtime.",
      ],
      whyChoose: [
        "Expertise Across Leading BAS Platforms – Automated Logic, Carrier, and Tridium.",
        "24/7 Customer Support – Always available when you need us.",
        "Tailored Solutions – Custom automation strategies for every facility.",
        "Proven Reliability – 100% customer retention rate.",
      ],
    },
    // Add more services here as needed
  ];

  return (
    <section className="min-h-screen bg-gray-100 pt-20 sm:pt-24 pb-12 px-6 sm:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-brandGold">Our Services</h2>
        <p className="text-lg text-gray-700 mt-2">Explore the range of solutions we provide.</p>
      </div>

      <div className="mt-12 flex flex-col items-center space-y-8">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </section>
  );
}

export default Services;
