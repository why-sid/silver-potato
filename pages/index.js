import React, { useState } from "react";

export default function HotelShreeBalajiSimple() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  const rooms = [
    { id: 1, title: "Deluxe Room", price: "₹2,499 / night", desc: "City view, king bed, modern comforts.", img: "https://images.unsplash.com/photo-1631049552057-403cdb8f0658?auto=format&fit=crop&w=1200&q=60" },
    { id: 2, title: "Executive Suite", price: "₹3,999 / night", desc: "Spacious suite with seating area.", img: "https://plus.unsplash.com/premium_photo-1661963239507-7bdf41a5e66b?auto=format&fit=crop&w=1200&q=60" },
    { id: 3, title: "Heritage Room", price: "₹1,899 / night", desc: "Cozy, traditional decor, budget friendly.", img: "https://plus.unsplash.com/premium_photo-1661884238187-1c274b3c3413?auto=format&fit=crop&w=1200&q=60" },
  ];

  const amenities = [
    "Complimentary Breakfast",
    "Free Wi‑Fi",
    "24/7 Reception",
    "Daily Housekeeping",
    "Room Service",
    "Airport Pickup (on request)",
  ];

  const places = [
    { name: "Kaal Bhairav Temple", note: "Major temple of Varanasi", map: "https://maps.app.goo.gl/B1WqH4GwCsLyiE1NA" },
    { name: "Dashashwamedh Ghat", note: "Evening aarti & boat rides", map: "https://maps.app.goo.gl/hBHaamDDYvHEH9QL6", boat: true },
    { name: "Kashi Vishwanath Dham", note: "Sacred temple complex", map: "https://maps.app.goo.gl/y32869zNnXV24PGB8" },
    { name: "Tulsi Manas Temple", note: "Historic temple & cultural spot", map: "https://maps.app.goo.gl/gFdWkSEE46dJyV1V9" },
  ];

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", phone: "", message: "" });
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white via-[#fffaf2] to-white text-[#081029]">
      {/* global smooth scroll */}
      <style>{`html { scroll-behavior: smooth; }`}</style>

      {/* Header / Nav */}
      <header className="w-full border-b bg-white/60 backdrop-blur sticky top-0 z-30">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-md bg-amber-500 flex items-center justify-center shadow-inner overflow-hidden">
              <img
                src="https://i.postimg.cc/GHzLw0hY/illustration-of-naamam-a-sacred-symbol-of-vaishnavite-in-india-vector.jpg"
                alt="Tirupati Balaji"
                className="w-10 h-10 object-cover"
              />
            </div>
            <div>
              <div className="font-semibold text-lg">Hotel Shree Balaji</div>
              <div className="text-xs text-gray-500">Inspired by Lord Tirupati Balaji</div>
            </div>
          </div>

          <nav>
            <ul className="flex items-center gap-6 text-sm">
              <li><a href="#rooms" className="hover:underline">Rooms</a></li>
              <li><a href="#amenities" className="hover:underline">Amenities</a></li>
              <li><a href="#places" className="hover:underline">Visit</a></li>
              <li><a href="#contact" className="hover:underline">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-[url('https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1500&q=60')] bg-cover bg-center h-72 flex items-center">
        <div className="max-w-6xl mx-auto px-6 py-12 bg-white/70 rounded-lg">
          <h1 className="text-3xl md:text-4xl font-extrabold">Hotel Shree Balaji</h1>
          <p className="mt-2 text-sm text-gray-700 max-w-xl">
            Steps from Kaal Bhairav Temple — comfortable stays, complimentary breakfast & free Wi‑Fi. A warm heritage welcome in Varanasi.
          </p>

          <div className="mt-4 flex gap-3">
            <a href="#rooms" className="px-4 py-2 bg-amber-500 text-white rounded">View Rooms</a>
            <a
              href="#contact"
              className="px-4 py-2 border border-amber-500 text-amber-600 rounded"
            >
              Contact & Book
            </a>
          </div>
        </div>
      </section>

      {/* Main content */}
      <main className="flex-1">
        {/* Rooms */}
        <section id="rooms" className="max-w-6xl mx-auto px-6 py-12">
          <h2 className="text-2xl font-bold">Rooms & Suites</h2>
          <p className="mt-1 text-sm text-gray-600">Three thoughtfully designed categories to suit every traveller.</p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            {rooms.map((r) => (
              <article key={r.id} className="border rounded-lg overflow-hidden bg-white">
                <img src={r.img} alt={r.title} className="w-full h-40 object-cover" />
                <div className="p-4">
                  <h3 className="font-semibold">{r.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{r.desc}</p>
                  <div className="mt-3 flex items-center justify-between">
                    <div className="font-bold text-amber-600">{r.price}</div>
                    <div className="flex gap-2">
                      <a href="#contact" className="px-3 py-1 rounded border text-sm">Enquire</a>
                      <a
                        href="#contact"
                        className="px-3 py-1 rounded bg-amber-500 text-white text-sm"
                      >
                        Book
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Amenities */}
        <section id="amenities" className="max-w-6xl mx-auto px-6 py-12 bg-white">
          <h2 className="text-2xl font-bold">Amenities</h2>
          <p className="mt-1 text-sm text-gray-600">Comfort-forward services included with your stay.</p>

          <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {amenities.map((a) => (
              <li key={a} className="p-4 border rounded-lg bg-[#fffaf2]">
                <div className="font-semibold">{a}</div>
                {a === 'Complimentary Breakfast' && <div className="text-xs text-gray-600 mt-1">Indian & continental options available</div>}
              </li>
            ))}
          </ul>
        </section>

        {/* Places */}
        <section id="places" className="max-w-6xl mx-auto px-6 py-12">
          <h2 className="text-2xl font-bold">Explore Varanasi</h2>
          <p className="mt-1 text-sm text-gray-600">Nearby attractions and pilgrimage sites — perfect for first-time visitors.</p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-4">
              {places.map((p) => (
                <div key={p.name} className="p-4 border rounded-lg bg-white">
                  <div className="flex items-start">
                    <div className="flex-1">
                      <div className="font-semibold">{p.name}</div>
                      <div className="text-xs text-gray-600">{p.note}</div>
                    </div>

                    <div className="flex items-center gap-3 ml-auto">
                      {p.boat && (
                        <a href="mailto:reservations@shreebalaji.example?subject=Boat%20Ride%20Booking" className="px-3 py-1 bg-amber-500 text-white rounded text-sm">Book Boat Ride</a>
                      )}

                      <a href={p.map} target="_blank" rel="noopener noreferrer" title={`Open ${p.name} on Google Maps`}>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Google_Maps_icon_%282020%29.svg/512px-Google_Maps_icon_%282020%29.svg.png" alt="Google Maps" className="w-7 h-auto object-contain" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <aside className="p-4 border rounded-lg bg-white">
              <h4 className="font-semibold">Quick Tips</h4>
              <ul className="mt-2 text-sm text-gray-600 space-y-2">
                <li>Respect local customs near ghats & temples.</li>
                <li>Best visiting months: October — March.</li>
                <li>Evening aarti at Dashashwamedh Ghat is a must-see.</li>
              </ul>
            </aside>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-6xl mx-auto px-6 py-10">
          <div className="p-6 bg-amber-50 rounded-lg border flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="font-bold">Ready to reserve?</h3>
              <p className="text-sm text-gray-600">Reach out and we’ll confirm availability and rates.</p>
            </div>
            <a href="#contact" className="px-4 py-2 bg-amber-500 text-white rounded">Contact & Book</a>
          </div>
        </section>
      </main>

      {/* Contact / Footer */}
      <footer id="contact" className="w-full bg-white border-t">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="font-semibold">Hotel Shree Balaji</div>
            <div className="text-sm text-gray-600">
              A-12, Near Kaal Bhairav Temple, Varanasi, Uttar Pradesh
              <br />Phone: +91 98XXXXXXXX | Email: info@shreebalaji.example
            </div>
          </div>

          <div className="w-full md:w-1/3">
            {sent ? (
              <div className="p-4 bg-emerald-50 rounded text-sm text-emerald-700">Thanks — your message was sent. We'll contact you soon.</div>
            ) : (
              <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-2">
                <div className="flex gap-2">
                  <input name="name" value={form.name} onChange={handleChange} placeholder="Name" className="flex-1 px-3 py-2 border rounded" required />
                  <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone" className="w-36 px-3 py-2 border rounded" />
                </div>
                <input name="email" value={form.email} onChange={handleChange} placeholder="Email" className="px-3 py-2 border rounded" />
                <textarea name="message" value={form.message} onChange={handleChange} placeholder="Message / Check-in date" className="px-3 py-2 border rounded" rows={2} />
                <div className="flex items-center justify-between">
                  <div className="text-xs text-gray-500">We reply within 24 hours.</div>
                  <button type="submit" className="px-4 py-2 bg-amber-500 text-white rounded">Send Enquiry</button>
                </div>
              </form>
            )}
          </div>

          <div className="text-center text-xs text-gray-500 w-full md:w-auto">© {new Date().getFullYear()} Hotel Shree Balaji — All rights reserved</div>
        </div>
      </footer>

      {/* Floating WhatsApp chat button */}
      <a href="https://wa.me/9198XXXXXXXX?text=Hi%20Hotel%20Shree%20Balaji%2C%20I%20need%20assistance" target="_blank" rel="noopener noreferrer" className="fixed right-5 bottom-5 z-50 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full p-3 shadow-lg flex items-center justify-center md:hidden" aria-label="Chat on WhatsApp">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor" aria-hidden="true">
          <path d="M20.52 3.48A11.93 11.93 0 0012.04.5c-6.62 0-11.99 5.37-11.99 12 0 2.12.56 4.1 1.62 5.85L.5 23.5l5.43-1.41A11.92 11.92 0 0012.04 24c6.62 0 11.99-5.37 11.99-12 0-3.2-1.25-6.2-3.51-8.52zM12.04 21.5c-1.78 0-3.46-.47-4.95-1.35l-.35-.2-3.23.84.86-3.14-.23-.36A9.02 9.02 0 013.04 12.5c0-4.97 4.03-9 9-9 4.97 0 9 4.03 9 9s-4.03 9-9 9z" />
          <path d="M17.36 14.19c-.29-.15-1.71-.84-1.98-.94-.27-.1-.47-.15-.67.15s-.76.94-.93 1.13c-.17.19-.34.21-.63.07-.29-.15-1.22-.45-2.32-1.43-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.6.13-.12.29-.33.43-.49.14-.16.19-.27.29-.45.1-.17.05-.32-.02-.46-.07-.13-.67-1.62-.92-2.23-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.32-.27.25-1.03 1.01-1.03 2.47 0 1.45 1.05 2.86 1.2 3.06.15.2 2.08 3.36 5.04 4.72 2.96 1.36 2.96.91 3.49.85.53-.06 1.71-.69 1.95-1.36.24-.67.24-1.24.17-1.36-.07-.12-.27-.19-.56-.34z" />
        </svg>
      </a>
    </div>
  );
}
