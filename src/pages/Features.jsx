function Features() {
    return (
      <section className="h-screen flex flex-col justify-center items-center bg-white text-center">
        <h2 className="text-4xl font-bold">Our Features</h2>
        <div className="mt-6 flex flex-wrap justify-center gap-8">
          {["Custom Designs", "SEO Optimization", "Fast Performance"].map((feature, index) => (
            <div key={index} className="bg-gray-100 p-6 shadow-lg rounded-lg w-72 hover:shadow-2xl transition-transform">
              <h3 className="text-xl font-semibold">{feature}</h3>
              <p className="mt-2 text-gray-600">We offer {feature.toLowerCase()} for your success.</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
  export default Features;