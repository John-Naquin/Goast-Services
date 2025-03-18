import { useState } from "react";
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
    {
      title: "Preventative Maintenance & Contracts",
      subtitle: "Ensuring System Reliability & Longevity",
      description:
        "At Goast Services, we understand that proactive maintenance is key to keeping your building systems running efficiently and avoiding costly failures. Our Preventative Maintenance Programs are designed to minimize downtime, extend equipment life, and optimize system performance.",
      capabilities: [
        "Customized Maintenance Plans: Tailored service contracts to meet your facility’s specific needs. Flexible scheduling options to minimize disruptions. Coverage for Building Automation Systems (BAS), HVAC, electrical systems, and more.",
        "Regular Inspections & System Health Checks: Comprehensive system evaluations to detect early signs of wear or malfunction. Performance testing and calibration to ensure optimal efficiency. Detailed service reports with recommendations.",
        "Emergency Service & Rapid Response: 24/7 on-call support for contract clients. Priority response times to minimize operational disruptions. Quick troubleshooting and problem resolution.",
        "Predictive Maintenance & Performance Tracking: Remote monitoring to identify issues before they become critical failures. Trend analysis to optimize maintenance schedules and reduce energy waste.",
        "Cost Savings & Risk Reduction: Preventing unexpected failures saves on costly emergency repairs. Optimized system efficiency reduces energy consumption.",
      ],
      whyChoose: [
        "Experienced in maintaining Automated Logic, Carrier, and Tridium systems.",
        "Customized contracts that fit your budget and operational needs.",
        "Proactive, data-driven maintenance to prevent downtime.",
        "Dedicated support team available 24/7 for emergencies.",
      ],
    },
    {
      title: "Troubleshooting & Problem Restoration",
      subtitle: "Fast, Reliable Solutions to Restore Performance",
      description:
        "We specialize in diagnosing and resolving system malfunctions efficiently. Whether it’s a BAS, HVAC, or electrical issue, our team identifies problems quickly and restores functionality with minimal downtime.",
      capabilities: [
        "Comprehensive Diagnostics & Root Cause Analysis: We thoroughly assess system performance, identifying faults in automation controls, electrical wiring, and HVAC components.",
        "On-Site & Remote Troubleshooting: Prompt responses to on-site needs plus remote diagnostics to reduce unnecessary visits.",
        "Problem Restoration & Repair: Effective repair solutions to restore full functionality—component replacement, system recalibration, or software adjustments.",
        "Minimizing Disruptions & Downtime: Rapid response times and efficient problem-solving to restore critical systems quickly.",
        "Preventive Recommendations: Actionable insights to prevent recurring issues, improving long-term reliability.",
      ],
      whyChoose: [
        "Expert knowledge of BAS, HVAC, and electrical systems.",
        "Fast response times with both on-site and remote troubleshooting.",
        "Efficient problem restoration that prevents repeat failures.",
        "Commitment to minimizing downtime and operational disruptions.",
      ],
    },
    {
      title: "Remote Monitoring & Trend Analysis",
      subtitle: "Proactive System Management for Maximum Efficiency",
      description:
        "We offer remote monitoring and trend analysis that keep your systems running at peak performance. By continuously tracking data from BAS, HVAC, and electrical systems, we detect inefficiencies, prevent failures, and optimize energy usage.",
      capabilities: [
        "Real-Time System Monitoring: Continuous tracking allows early detection of issues for immediate troubleshooting.",
        "Trend Analysis & Performance Insights: We identify patterns indicating inefficiencies or impending breakdowns.",
        "Predictive Maintenance Alerts: Early warning signs of failures or abnormal energy consumption trigger proactive maintenance.",
        "Energy Optimization & Cost Reduction: Ongoing analysis helps reduce energy waste and lower utility costs.",
        "Remote Access & Instant Adjustments: Secure remote connections to make real-time system tweaks without on-site visits.",
      ],
      whyChoose: [
        "Proactive system management that prevents costly failures.",
        "Data-driven insights to optimize efficiency and reduce energy waste.",
        "Secure remote access for instant system adjustments.",
        "Predictive maintenance strategies to extend equipment lifespan.",
      ],
    },
    {
      title: "Electrical Services",
      subtitle: "Reliable Power Solutions for Critical Systems",
      description:
        "We provide expert electrical services to support BAS, HVAC, and other critical infrastructure. Our team ensures installations, maintenance, and optimizations meet the highest standards of safety and reliability.",
      capabilities: [
        "Electrical Installations & Upgrades: Code-compliant for commercial, industrial, and government facilities.",
        "Power & Control Wiring: Precision wiring for automation controls and HVAC systems.",
        "Troubleshooting & Repairs: Fast diagnosis and resolution of electrical issues affecting building systems.",
        "Panel & Breaker Upgrades: Modernized panels to handle higher power demands safely and efficiently.",
        "Emergency Power & Backup Solutions: Backup power solutions to protect mission-critical systems.",
        "Preventative Electrical Maintenance: Regular inspections and testing to prevent costly failures.",
      ],
      whyChoose: [
        "Expertise in power and control wiring for BAS, HVAC, and critical systems.",
        "Fast troubleshooting and repairs to minimize downtime.",
        "Code-compliant installations and system upgrades.",
        "Reliable backup power solutions for uninterrupted operations.",
        "Licensed professionals and trusted partners dedicated to quality service.",
      ],
    },
    {
      title: "HVAC Solutions",
      subtitle: "Optimizing Comfort & Efficiency for Every Facility",
      description:
        "We partner with fully licensed HVAC professionals to provide high-performance HVAC systems, maintenance, and repairs. Our goal is to deliver maximum comfort while reducing energy costs.",
      capabilities: [
        "HVAC System Installation & Upgrades: High-efficiency installs integrated with BAS for seamless operation.",
        "Preventative HVAC Maintenance: Routine service plans to extend equipment life and reduce breakdowns.",
        "HVAC Troubleshooting & Repairs: Quick fixes for control failures, sensor malfunctions, and other inefficiencies.",
        "Energy-Efficient System Optimization: Smart scheduling, load balancing, and performance tuning to minimize consumption.",
        "Remote Monitoring & Climate Control: Real-time tracking of temperature and humidity with instant adjustments.",
      ],
      whyChoose: [
        "Seamless integration of HVAC systems with Building Automation Controls.",
        "Energy-efficient solutions to optimize performance and reduce costs.",
        "Fast, reliable troubleshooting and repair services.",
        "Trusted partnerships with licensed HVAC professionals.",
        "Remote monitoring capabilities for real-time system control.",
      ],
    },
  ];

  const [selectedServiceIndex, setSelectedServiceIndex] = useState(0);

  return (
    <section className="min-h-screen bg-gray-100 pt-20 sm:pt-24 pb-12 px-6 sm:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-brandGold">Our Services</h2>
        <p className="text-lg text-gray-700 mt-2">Select a service to learn more.</p>
      </div>

      <div className="mt-8 flex flex-col items-center">
        <label htmlFor="service-select" className="mb-2 font-medium">
          Choose a service:
        </label>
        <select
          id="service-select"
          value={selectedServiceIndex}
          onChange={(e) => setSelectedServiceIndex(Number(e.target.value))}
          className="border border-gray-300 rounded-md px-3 py-2"
        >
          {services.map((service, index) => (
            <option key={index} value={index}>
              {service.title}
            </option>
          ))}
        </select>
      </div>


      <div className="mt-8 flex justify-center">
        <div className="w-full max-w-3xl">
          <ServiceCard {...services[selectedServiceIndex]} />
        </div>
      </div>
    </section>
  );
}

export default Services;
