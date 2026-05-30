'use client'

import { useState, useEffect } from 'react'

export default function CharterBusWebsite() {
  const [busPosition, setBusPosition] = useState(0)

  // Animate bus movement
  useEffect(() => {
    const interval = setInterval(() => {
      setBusPosition((prev) => (prev >= 100 ? -10 : prev + 0.5))
    }, 30)
    return () => clearInterval(interval)
  }, [])

  const services = [
    {
      title: 'Corporate Travel',
      description: 'Professional transportation for conferences, employee shuttles, and executive travel.',
    },
    {
      title: 'Tour Bus Trips',
      description: 'Comfortable group tours for casinos, concerts, sporting events, and vacations.',
    },
    {
      title: 'School & Church Trips',
      description: 'Safe and reliable charter transportation for schools, youth groups, and churches.',
    },
    {
      title: 'Wedding Transportation',
      description: 'Luxury guest transportation for weddings, receptions, and special events.',
    },
  ]

  const fleet = [
    {
      name: '56 Passenger Motor Coach',
      features: 'Wi‑Fi, Reclining Seats, TV Monitors, Restroom, USB Charging',
    },
    {
      name: 'Mini Coach Shuttle',
      features: 'Ideal for airport transfers, private events, and small groups',
    },
    {
      name: 'Luxury Tour Bus',
      features: 'Premium interiors, entertainment systems, and VIP seating',
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="bg-black text-white sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <div>
            <h1 className="text-2xl font-bold tracking-wide">buses4rent</h1>
            <p className="text-sm text-gray-300">Charter & Tour Bus Services</p>
          </div>

          <nav className="hidden md:flex gap-6 text-sm font-medium">
            <a href="#services" className="hover:text-yellow-400 transition">Services</a>
            <a href="#fleet" className="hover:text-yellow-400 transition">Fleet</a>
            <a href="#about" className="hover:text-yellow-400 transition">About</a>
            <a href="#contact" className="hover:text-yellow-400 transition">Contact</a>
          </nav>

          <button className="bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-5 py-2 rounded-2xl transition">
            Get A Quote
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-[url('https://images.unsplash.com/photo-1570125909517-53cb21c89ff2?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center h-[85vh] flex items-center">
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative max-w-7xl mx-auto px-6 text-white">
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
              Luxury Charter & Tour Bus Transportation
            </h2>

            <p className="text-lg text-gray-200 mb-8 leading-relaxed">
              Reliable transportation for corporate travel, school trips, weddings,
              sports teams, and private tours across Texas and nationwide.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-yellow-400 text-black font-bold px-6 py-3 rounded-2xl hover:bg-yellow-300 transition shadow-lg">
                Book Your Trip
              </button>

              <button className="border border-white px-6 py-3 rounded-2xl hover:bg-white hover:text-black transition">
                View Fleet
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h3 className="text-4xl font-bold mb-4">Our Services</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide dependable transportation solutions for every occasion.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-md hover:shadow-2xl transition p-6 border border-gray-100"
              >
                <div className="w-14 h-14 rounded-2xl bg-yellow-100 flex items-center justify-center mb-5 text-2xl">
                  🚌
                </div>

                <h4 className="text-xl font-bold mb-3">{service.title}</h4>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet */}
      <section id="fleet" className="py-20 bg-black text-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h3 className="text-4xl font-bold mb-4">Our Fleet</h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Modern buses equipped with comfort, safety, and entertainment features.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {fleet.map((bus, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-3xl overflow-hidden border border-gray-700 shadow-lg"
              >
                {index === 0 ? (
                  // Animated bus container for first item
                  <div className="h-56 w-full bg-gradient-to-r from-blue-300 to-blue-500 relative overflow-hidden flex items-center">
                    <style>{`
                      @keyframes busMove {
                        0%, 100% { transform: translateX(-10%); }
                        50% { transform: translateX(110%); }
                      }
                      .animated-bus {
                        animation: busMove 4s ease-in-out infinite;
                      }
                    `}</style>
                    <img
                      src="/56-passenger-coach.png"
                      alt="Moving Bus"
                      className="animated-bus h-full w-auto object-contain"
                    />
                  </div>
                ) : (
                  <img
                    src={index === 1 ? '/mini-coach-shuttle.png' : '/luxury-tour-bus.png'}
                    alt={bus.name}
                    className="h-56 w-full object-cover"
                  />
                )}

                <div className="p-6">
                  <h4 className="text-2xl font-bold mb-3">{bus.name}</h4>
                  <p className="text-gray-300 mb-5">{bus.features}</p>

                  <button className="bg-yellow-400 text-black px-5 py-2 rounded-2xl font-semibold hover:bg-yellow-300 transition">
                    Request Pricing
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1494515843206-f3117d3f51b7?q=80&w=1200&auto=format&fit=crop"
              alt="Tour Bus"
              className="rounded-3xl shadow-2xl"
            />
          </div>

          <div>
            <h3 className="text-4xl font-bold mb-6">Why Choose Us?</h3>

            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Elite Charter Tours delivers safe, reliable, and luxury transportation
              services with experienced drivers and modern equipment.
            </p>

            <div className="space-y-4">
              <div className="bg-white rounded-2xl p-5 shadow-sm border">
                <h4 className="font-bold text-lg">✔ DOT Certified Drivers</h4>
              </div>

              <div className="bg-white rounded-2xl p-5 shadow-sm border">
                <h4 className="font-bold text-lg">✔ Clean & Comfortable Buses</h4>
              </div>

              <div className="bg-white rounded-2xl p-5 shadow-sm border">
                <h4 className="font-bold text-lg">✔ Affordable Group Rates</h4>
              </div>

              <div className="bg-white rounded-2xl p-5 shadow-sm border">
                <h4 className="font-bold text-lg">✔ Available 24/7</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-yellow-400 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-5xl font-extrabold mb-6 text-black">
            Ready To Book Your Next Trip?
          </h3>

          <p className="text-lg text-black/80 mb-8 max-w-2xl mx-auto">
            Contact us today for a free quote and let us handle your transportation needs.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-black text-white px-8 py-4 rounded-2xl font-bold hover:opacity-90 transition">
              Call Now
            </button>

            <button className="bg-white text-black px-8 py-4 rounded-2xl font-bold hover:bg-gray-100 transition">
              Email Us
            </button>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-4xl font-bold mb-6">Contact Us</h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Request a quote or ask about availability for your upcoming trip.
            </p>

            <div className="space-y-4 text-lg">
              <p><strong>Phone:</strong> (469) 383-6747</p>
              <p><strong>Email:</strong> info@elitechartertours.com</p>
              <p><strong>Location:</strong> Texas, United States</p>
            </div>
          </div>

          <form className="bg-gray-50 rounded-3xl p-8 shadow-lg border space-y-5">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 rounded-2xl border focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full p-4 rounded-2xl border focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-4 rounded-2xl border focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />

            <input
              type="text"
              placeholder="Pickup Location"
              className="w-full p-4 rounded-2xl border focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />

            <input
              type="text"
              placeholder="Trip Destination"
              className="w-full p-4 rounded-2xl border focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-2 font-medium text-gray-700">Start Date</label>
                <input
                  type="date"
                  className="w-full p-4 rounded-2xl border focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium text-gray-700">End Date</label>
                <input
                  type="date"
                  className="w-full p-4 rounded-2xl border focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>
            </div>

            <input
              type="number"
              placeholder="Number of Passengers"
              className="w-full p-4 rounded-2xl border focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />

            <textarea
              rows="5"
              placeholder="Tell us about your trip"
              className="w-full p-4 rounded-2xl border focus:outline-none focus:ring-2 focus:ring-yellow-400"
            ></textarea>

            <button className="w-full bg-black text-white py-4 rounded-2xl font-bold hover:opacity-90 transition">
              Request Quote
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-400 py-8 text-center">
        <p>© 2026 Elite Charter Tours. All Rights Reserved.</p>
      </footer>
    </div>
  )
}
