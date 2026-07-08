'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollTop / docHeight > 0.8 && !dismissed) {
        setShowModal(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [dismissed]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email });
    setSubmitted(true);
    setTimeout(() => {
      setShowModal(false);
      setDismissed(true);
    }, 3000);
  };

  const handleClose = () => {
    setShowModal(false);
    setDismissed(true);
  };

  return (
    <div className="bg-white text-gray-800 min-h-screen font-sans overflow-x-hidden">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b-2 border-orange-400 shadow-md">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 md:py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-0">
            <img src="/logo.png" alt="WOW Logo" className="h-14 md:h-20 w-auto" />
            <div className="flex gap-2 md:gap-8 text-xs md:text-sm font-medium items-center flex-wrap justify-center md:justify-end">
              <a href="#attractions" className="hover:text-orange-600 transition whitespace-nowrap">Attractions</a>
              <a href="#birthday" className="hover:text-orange-600 transition whitespace-nowrap">Birthday Parties</a>
              <a href="#pricing" className="hover:text-orange-600 transition whitespace-nowrap">Pricing</a>
              <a href="#contact" className="hover:text-orange-600 transition whitespace-nowrap">Contact</a>
              <a
                href="tel:+97440001109"
                className="px-4 md:px-6 py-1 md:py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-xs md:text-sm font-bold rounded-full hover:shadow-lg transition whitespace-nowrap"
              >
                Book Now
              </a>
            </div>
          </div>
          <div className="flex gap-4 justify-center md:justify-end mt-2 md:mt-0">
            <a href="https://instagram.com/wowparkdoha" target="_blank" className="hover:opacity-75 transition" title="Instagram">
              <img src="/Inst.png" alt="Instagram" className="w-5 h-5 md:w-6 md:h-6" />
            </a>
            <a href="https://facebook.com/wowparkdoha" target="_blank" className="hover:opacity-75 transition" title="Facebook">
              <img src="/fb.png" alt="Facebook" className="w-5 h-5 md:w-6 md:h-6" />
            </a>
            <a href="https://wa.me/97440001109" target="_blank" className="hover:opacity-75 transition" title="WhatsApp">
              <img src="/whatsapp.png" alt="WhatsApp" className="w-5 h-5 md:w-6 md:h-6" />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section with Background */}
      <section className="relative h-screen bg-gradient-to-b from-orange-400 via-orange-300 to-orange-200 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-[url('/bg2.jpg')] bg-cover bg-center opacity-30"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 h-full flex flex-col items-center justify-center text-center">
          <div className="mb-6 animate-bounce">
            <div className="text-7xl font-black text-white drop-shadow-lg">WOW</div>
          </div>
          <h1 className="text-6xl md:text-7xl font-black text-white mb-6 drop-shadow-lg leading-tight">
            WORLD OF WONDERS
          </h1>
          <p className="text-2xl text-white mb-12 drop-shadow-md max-w-2xl">
            60+ Thrilling Activities Under One Roof
          </p>
          <div className="flex gap-6 flex-wrap justify-center">
            <a
              href="tel:+97440001109"
              className="px-6 md:px-8 py-3 md:py-4 bg-orange-600 text-white font-bold rounded-full hover:bg-orange-700 transition text-base md:text-lg shadow-lg"
            >
              Call to Book
            </a>
            <a
              href="#attractions"
              className="px-6 md:px-8 py-3 md:py-4 bg-white text-orange-600 font-bold rounded-full hover:bg-orange-50 transition text-base md:text-lg shadow-lg"
            >
              Explore Now
            </a>
          </div>
          <p className="text-white text-sm mt-12 drop-shadow-md">📍 Lusail Boulevard | Open 10am - Midnight</p>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 px-4 md:px-8 bg-gradient-to-r from-orange-500 to-orange-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'80\' height=\'80\' viewBox=\'0 0 80 80\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Ccircle cx=\'20\' cy=\'20\' r=\'15\' fill=\'none\' stroke=\'white\' stroke-width=\'2\'/%3E%3Ccircle cx=\'60\' cy=\'20\' r=\'12\' fill=\'none\' stroke=\'white\' stroke-width=\'2\'/%3E%3Ccircle cx=\'40\' cy=\'50\' r=\'18\' fill=\'none\' stroke=\'white\' stroke-width=\'2\'/%3E%3Ccircle cx=\'70\' cy=\'60\' r=\'10\' fill=\'none\' stroke=\'white\' stroke-width=\'2\'/%3E%3C/svg%3E")', backgroundRepeat: 'repeat'}}></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-black">60+</div>
              <p className="text-sm mt-2">Activities</p>
            </div>
            <div>
              <div className="text-4xl font-black">3</div>
              <p className="text-sm mt-2">Floors</p>
            </div>
            <div>
              <div className="text-4xl font-black">4.0★</div>
              <p className="text-sm mt-2">TripAdvisor Rating</p>
            </div>
            <div>
              <div className="text-4xl font-black">GCC</div>
              <p className="text-sm mt-2">Highest Climbing Wall</p>
            </div>
          </div>
        </div>
      </section>

      {/* Summer Schedule */}
      <section className="py-12 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <img src="/summer-sched.png" alt="Summer Schedule" className="max-w-full md:max-w-2xl mx-auto rounded-2xl shadow-lg" />
        </div>
      </section>

      {/* About */}
      <section className="py-12 md:py-20 px-4 md:px-8 bg-gradient-to-b from-white to-orange-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-black text-orange-600 mb-12 text-center">About WOW</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-6">The Ultimate Family Entertainment Destination</h3>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                WOW (World of Wonders) is the Middle East's premier indoor entertainment park, offering 60+ thrilling activities across 3 floors of non-stop fun. From gravity-defying rides to interactive games, we've created an experience where families make unforgettable memories.
              </p>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                Whether you're celebrating a birthday, planning a school trip, or looking for weekend family fun, WOW delivers world-class entertainment with safety and smiles at every turn.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">✓</span>
                  <span className="text-gray-700"><strong>State-of-the-art attractions</strong> — Latest technology and safety standards</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">✓</span>
                  <span className="text-gray-700"><strong>For all ages</strong> — Toddlers to teens, everyone finds their thrill</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">✓</span>
                  <span className="text-gray-700"><strong>Year-round fun</strong> — Beat the heat in air-conditioned comfort</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-orange-100 to-yellow-100 p-12 rounded-2xl border-2 border-orange-300">
              <h3 className="text-2xl font-bold text-orange-600 mb-6">By The Numbers</h3>
              <div className="space-y-6">
                <div>
                  <div className="text-4xl font-black text-orange-600">60+</div>
                  <p className="text-gray-700">Activities & Attractions</p>
                </div>
                <div>
                  <div className="text-4xl font-black text-orange-600">3</div>
                  <p className="text-gray-700">Floors of Non-Stop Fun</p>
                </div>
                <div>
                  <div className="text-4xl font-black text-orange-600">4.0★</div>
                  <p className="text-gray-700">Guest Rating</p>
                </div>
                <div>
                  <div className="text-4xl font-black text-orange-600">GCC</div>
                  <p className="text-gray-700">Highest Indoor Climbing Wall</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Attractions */}
      <section id="attractions" className="py-12 md:py-20 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-black text-orange-600 mb-4 text-center">Amazing Attractions</h2>
          <p className="text-center text-gray-600 mb-16 text-lg">Thrills, adventures, and fun for every age</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { img: '/zip.png', icon: null, title: 'Zip Coaster', desc: 'Gravity-fuelled high-flying thrills' },
              { img: '/adventure.png', icon: null, title: 'Volcano Cave', desc: 'Mysterious curious cave adventure' },
              { img: '/arctic.png', icon: null, title: 'Arctic Adventure', desc: 'Icy immersive experience' },
              { img: '/laser.png', icon: null, title: 'Laser Tag', desc: 'State-of-the-art arena combat' },
              { img: '/tramp.png', icon: null, title: 'Trampolines', desc: 'Bounce zones for all heights' },
              { img: '/bowl.png', icon: null, title: 'Mini Bowling', desc: "Doha's first and only" },
              { img: '/wallclimb.png', icon: null, title: 'Climbing Wall', desc: 'GCC highest indoor wall' },
              { img: '/tunnel.png', icon: null, title: 'Vortex Tunnel', desc: 'Immersive spinning adventure' },
              { img: '/arcade.png', icon: null, title: 'Arcade Games', desc: 'Latest gaming technology' },
              { img: '/tod.png', icon: null, title: 'Toddler Zone', desc: 'Safe play for young children' },
              { img: '/int-game.png', icon: null, title: 'Interactive Games', desc: 'Tech-enabled experiences' },
              { img: '/shop.png', icon: null, title: '& Much More!', desc: 'New experiences constantly' },
            ].map((attraction) => (
              <div key={attraction.title} className="p-8 bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl border-2 border-orange-200 hover:border-orange-600 transition hover:shadow-xl overflow-hidden">
                {attraction.img ? (
                  <img src={attraction.img} alt={attraction.title} className="w-full h-48 object-cover rounded-lg mb-4" />
                ) : (
                  <div className="text-5xl mb-4">{attraction.icon}</div>
                )}
                <h3 className="text-2xl font-bold text-orange-600 mb-2">{attraction.title}</h3>
                <p className="text-gray-600">{attraction.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Gallery */}
      <section className="py-12 md:py-20 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-black text-orange-600 mb-4 text-center">See WOW In Action</h2>
          <p className="text-center text-gray-600 mb-16 text-lg">Watch families and friends create magical memories</p>

          <div className="flex flex-col items-center gap-8">
            <div className="max-w-lg rounded-2xl overflow-hidden shadow-lg bg-black">
              <video controls className="w-full h-auto" poster="/bg2.jpg">
                <source src="/wow-vid.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="grid md:grid-cols-2 gap-8 w-full">
              <div className="rounded-2xl overflow-hidden shadow-lg bg-gray-900 h-80 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🎥</div>
                  <p className="text-gray-300">Video 2</p>
                  <p className="text-sm text-gray-400 mt-2">Coming soon</p>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg bg-gray-900 h-80 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🎥</div>
                  <p className="text-gray-300">Video 3</p>
                  <p className="text-sm text-gray-400 mt-2">Coming soon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Birthday Parties */}
      <section id="birthday" className="py-12 md:py-20 px-4 md:px-8 bg-gradient-to-b from-orange-50 to-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-black text-orange-600 mb-4 text-center">Birthday Parties</h2>
          <p className="text-center text-gray-600 mb-16 text-lg">Unforgettable celebrations for kids of all ages</p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { title: 'Party Planning', items: ['Dedicated party planners', 'Theme customization', 'Fun invitations', 'Celebration rooms'] },
              { title: 'Activities', items: ['60+ attractions included', 'Group games', 'Interactive experiences', 'Photo opportunities'] },
              { title: 'Convenience', items: ['Hassle-free setup', 'On-site catering', 'No cleanup needed', 'Easy booking'] },
            ].map((pkg) => (
              <div key={pkg.title} className="p-8 bg-white rounded-2xl border-2 border-orange-300 shadow-lg">
                <h3 className="text-2xl font-bold text-orange-600 mb-6">{pkg.title}</h3>
                <ul className="space-y-3">
                  {pkg.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="text-orange-600 font-bold text-xl">✓</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center bg-gradient-to-r from-orange-500 to-orange-600 text-white p-12 rounded-2xl relative overflow-hidden">
            <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'80\' height=\'80\' viewBox=\'0 0 80 80\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Ccircle cx=\'20\' cy=\'20\' r=\'15\' fill=\'none\' stroke=\'white\' stroke-width=\'2\'/%3E%3Ccircle cx=\'60\' cy=\'20\' r=\'12\' fill=\'none\' stroke=\'white\' stroke-width=\'2\'/%3E%3Ccircle cx=\'40\' cy=\'50\' r=\'18\' fill=\'none\' stroke=\'white\' stroke-width=\'2\'/%3E%3Ccircle cx=\'70\' cy=\'60\' r=\'10\' fill=\'none\' stroke=\'white\' stroke-width=\'2\'/%3E%3C/svg%3E")', backgroundRepeat: 'repeat'}}></div>
            <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-4">Ready to Celebrate?</h3>
            <p className="text-lg mb-6">Contact our party planners for custom packages</p>
            <a href="tel:+97450505154" className="px-6 md:px-8 py-3 md:py-4 bg-white text-orange-600 font-bold rounded-full hover:bg-gray-100 transition text-base md:text-lg inline-block">
              Book Birthday Party
            </a>
            </div>
          </div>
        </div>
      </section>

      {/* School Trips */}
      <section className="py-12 md:py-20 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-black text-orange-600 mb-4 text-center">School Trips & Groups</h2>
          <p className="text-center text-gray-600 mb-16 text-lg">Educational fun for team building and learning</p>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <span className="text-4xl">🏫</span>
                  <div>
                    <h3 className="text-2xl font-bold text-orange-600">Perfect for Schools</h3>
                    <p className="text-gray-600">Engaging learning through play and adventure</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-4xl">👥</span>
                  <div>
                    <h3 className="text-2xl font-bold text-orange-600">Group Packages</h3>
                    <p className="text-gray-600">Customized experiences for any group size</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-4xl">🎯</span>
                  <div>
                    <h3 className="text-2xl font-bold text-orange-600">Team Building</h3>
                    <p className="text-gray-600">Activities that build confidence and teamwork</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-4xl">📅</span>
                  <div>
                    <h3 className="text-2xl font-bold text-orange-600">Easy Scheduling</h3>
                    <p className="text-gray-600">Flexible times to fit your school calendar</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-orange-100 to-yellow-100 p-12 rounded-2xl border-2 border-orange-300">
              <h3 className="text-3xl font-bold text-orange-600 mb-6">Group Benefits</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <span className="w-3 h-3 bg-orange-600 rounded-full"></span>
                  <span className="text-gray-700">Special group pricing</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-3 h-3 bg-orange-600 rounded-full"></span>
                  <span className="text-gray-700">Dedicated staff assistance</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-3 h-3 bg-orange-600 rounded-full"></span>
                  <span className="text-gray-700">Safety supervised activities</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-3 h-3 bg-orange-600 rounded-full"></span>
                  <span className="text-gray-700">Photo memories included</span>
                </li>
              </ul>
              <a href="tel:+97440001109" className="mt-8 w-full block px-6 py-3 bg-orange-600 text-white font-bold rounded-full hover:bg-orange-700 transition text-center">
                Plan Your School Trip
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-12 md:py-20 px-4 md:px-8 bg-gradient-to-b from-orange-50 to-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-black text-orange-600 mb-4 text-center">Simple Pricing</h2>
          <p className="text-center text-gray-600 mb-16 text-lg">Great value for unlimited fun</p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-white rounded-2xl border-2 border-orange-200 shadow-lg">
              <h3 className="text-2xl font-bold text-orange-600 mb-6">Individual Entry</h3>
              <p className="text-gray-600 mb-6">Pay per activity or experience</p>
              <div className="text-4xl font-black text-orange-600 mb-6">Flexible</div>
              <ul className="space-y-3 text-gray-700">
                <li>✓ Pick your activities</li>
                <li>✓ Stay as long as you want</li>
                <li>✓ No minimum spend</li>
              </ul>
            </div>

            <div className="p-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl border-2 border-orange-600 shadow-2xl text-white transform scale-105">
              <div className="text-center">★★★ BEST VALUE ★★★</div>
              <h3 className="text-3xl font-bold mb-6 text-center">VIP Pass</h3>
              <p className="mb-6 text-center">Unlimited activities for 3 hours</p>
              <div className="mb-6">
                <div className="text-3xl font-black mb-2">60 QAR</div>
                <div className="text-sm">Weekdays</div>
              </div>
              <div className="mb-6">
                <div className="text-3xl font-black mb-2">175 QAR</div>
                <div className="text-sm">Weekends</div>
              </div>
              <ul className="space-y-3">
                <li>✓ 60+ attractions included</li>
                <li>✓ Free arcade games</li>
                <li>✓ Perfect for families</li>
              </ul>
            </div>

            <div className="p-8 bg-white rounded-2xl border-2 border-orange-200 shadow-lg">
              <h3 className="text-2xl font-bold text-orange-600 mb-6">Group Packages</h3>
              <p className="text-gray-600 mb-6">Perfect for schools & events</p>
              <div className="text-4xl font-black text-orange-600 mb-6">Custom</div>
              <ul className="space-y-3 text-gray-700">
                <li>✓ Special group rates</li>
                <li>✓ Bulk discounts</li>
                <li>✓ Dedicated support</li>
              </ul>
              <a href="tel:+97440001109" className="mt-6 w-full px-4 py-2 bg-orange-600 text-white font-bold rounded-full hover:bg-orange-700 transition text-center block">
                Contact Us
              </a>
            </div>
          </div>

          <div className="mt-16 p-8 bg-yellow-100 rounded-2xl border-2 border-yellow-400 text-center">
            <p className="text-lg text-gray-800">
              <strong>💡 PRO TIP:</strong> Use The Entertainer app for exclusive "Buy One Get One Free" offers!
            </p>
          </div>
        </div>
      </section>

      {/* Reviews Carousel */}
      <section className="py-12 md:py-20 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-black text-orange-600 mb-4 text-center">Guest Reviews</h2>
          <p className="text-center text-gray-600 mb-16 text-lg">Loved by families across Doha</p>

          <div className="relative">
            <div className="overflow-hidden">
              <div id="reviews-carousel" className="flex transition-transform duration-500">
                {[
                  { text: "Amazing value for money! The unlimited VIP Pass is unbeatable. We enjoyed activities across the park and staff in each zone were incredibly helpful. A must-visit for families!", author: "Sadaf Atif", rating: 5 },
                  { text: "The unlimited pass was great value and we used every minute of our 3 hours! Arcade games, bowling, laser tag, and trampolines kept the whole family entertained. Kids didn't want to leave!", author: "Paulabas", rating: 5 },
                  { text: "Very friendly staff, especially the receptionist who was always smiling and welcoming. The park is always clean and not crowded. Great location with dining options nearby.", author: "Bilel Alibi", rating: 5 },
                  { text: "Three floors of entertainment! Every corner has something new for the kids. Safety standards are excellent and the variety means there's something for every age group.", author: "Family Visitor", rating: 5 },
                  { text: "Perfect place to spend hours with family. The combination of thrilling rides and quieter games means everyone gets to enjoy themselves. Highly recommend for weekend outings!", author: "Weekend Explorer", rating: 5 },
                  { text: "Best birthday party venue in Doha! The party planners made everything so easy. The kids had an absolute blast and parents loved it too. Worth every penny!", author: "Birthday Parent", rating: 5 },
                ].map((review, idx) => (
                  <div key={idx} className="w-full flex-shrink-0 px-4">
                    <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-8 rounded-2xl border-2 border-orange-200">
                      <div className="flex gap-1 mb-4">
                        {[...Array(review.rating)].map((_, i) => (
                          <span key={i} className="text-orange-500 text-2xl">★</span>
                        ))}
                      </div>
                      <p className="text-lg text-gray-700 mb-4 leading-relaxed italic">
                        "{review.text}"
                      </p>
                      <p className="font-bold text-orange-600">{review.author}</p>
                      <p className="text-sm text-gray-500">Verified Guest</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <button
              onClick={() => {
                const carousel = document.getElementById('reviews-carousel');
                if (carousel) {
                  const width = (carousel.children[0] as HTMLElement).offsetWidth;
                  carousel.parentElement!.scrollLeft -= width;
                }
              }}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 bg-orange-600 text-white p-3 rounded-full hover:bg-orange-700 transition z-10"
            >
              ◀
            </button>
            <button
              onClick={() => {
                const carousel = document.getElementById('reviews-carousel');
                if (carousel) {
                  const width = (carousel.children[0] as HTMLElement).offsetWidth;
                  carousel.parentElement!.scrollLeft += width;
                }
              }}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 bg-orange-600 text-white p-3 rounded-full hover:bg-orange-700 transition z-10"
            >
              ▶
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {[0, 1, 2, 3, 4, 5].map((idx) => (
              <button
                key={idx}
                onClick={() => {
                  const carousel = document.getElementById('reviews-carousel');
                  if (carousel) {
                    const width = (carousel.children[0] as HTMLElement).offsetWidth;
                    carousel.parentElement!.scrollLeft = idx * width;
                  }
                }}
                className="w-3 h-3 rounded-full bg-orange-300 hover:bg-orange-600 transition"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-12 md:py-20 px-4 md:px-8 bg-gradient-to-r from-orange-500 to-orange-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'80\' height=\'80\' viewBox=\'0 0 80 80\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Ccircle cx=\'20\' cy=\'20\' r=\'15\' fill=\'none\' stroke=\'white\' stroke-width=\'2\'/%3E%3Ccircle cx=\'60\' cy=\'20\' r=\'12\' fill=\'none\' stroke=\'white\' stroke-width=\'2\'/%3E%3Ccircle cx=\'40\' cy=\'50\' r=\'18\' fill=\'none\' stroke=\'white\' stroke-width=\'2\'/%3E%3Ccircle cx=\'70\' cy=\'60\' r=\'10\' fill=\'none\' stroke=\'white\' stroke-width=\'2\'/%3E%3C/svg%3E")', backgroundRepeat: 'repeat'}}></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-5xl font-black mb-12 text-center">Get In Touch</h2>
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div className="text-center">
              <div className="text-5xl mb-4">📞</div>
              <p className="text-sm font-semibold uppercase mb-2">General Inquiries</p>
              <a href="tel:+97440001109" className="text-2xl font-bold hover:text-yellow-200 transition">
                +974 4000 1109
              </a>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🎂</div>
              <p className="text-sm font-semibold uppercase mb-2">Birthday Parties</p>
              <a href="tel:+97450505154" className="text-2xl font-bold hover:text-yellow-200 transition">
                +974 5205 0154
              </a>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">📧</div>
              <p className="text-sm font-semibold uppercase mb-2">Email</p>
              <a href="mailto:info@wowparkdoha.qa" className="text-lg font-bold hover:text-yellow-200 transition">
                info@wowparkdoha.qa
              </a>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-4">Hours</h3>
              <p className="text-lg">Mon-Thu: 10:00 AM - 12:00 AM</p>
              <p className="text-lg">Friday: 1:00 PM - 12:00 AM</p>
              <p className="text-lg">Sat-Sun: 10:00 AM - 12:00 AM</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Location</h3>
              <p className="text-lg">Lusail Boulevard</p>
              <p className="text-lg">Lusail, Doha, Qatar</p>
              <a href="https://www.google.com/maps/place/The+world+of+wonders/@25.415318,51.4948572,17z" target="_blank" className="text-yellow-200 hover:text-white transition font-semibold mt-4 inline-block">
                View on Google Maps →
              </a>
            </div>
          </div>

          <div className="text-center pt-8 border-t border-white/20">
            <p className="text-lg mb-4">Follow us for updates and special offers</p>
            <div className="flex gap-6 justify-center">
              <a href="https://instagram.com/wowparkdoha" target="_blank" className="hover:opacity-75 transition" title="Instagram">
                <img src="/Inst.png" alt="Instagram" className="w-8 h-8" />
              </a>
              <a href="https://wa.me/97440001109" target="_blank" className="hover:opacity-75 transition" title="WhatsApp">
                <img src="/whatsapp.png" alt="WhatsApp" className="w-8 h-8" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 md:px-8 bg-gray-900 text-gray-400 text-sm text-center">
        <p>WOW (World of Wonders) © 2026 | 60+ Activities • 3 Floors • Endless Fun</p>
      </footer>

      {/* Email Capture Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl border-4 border-orange-500">
            {!submitted ? (
              <>
                <h3 className="text-2xl font-black text-orange-600 mb-2">Get Exclusive Offers!</h3>
                <p className="text-gray-600 mb-6">Subscribe for special deals and party tips</p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="email"
                    placeholder="Your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-3 border-2 border-orange-300 rounded-lg focus:outline-none focus:border-orange-600 text-gray-800"
                  />
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold py-3 rounded-lg hover:shadow-lg transition"
                  >
                    Sign Me Up!
                  </button>
                </form>
                <button
                  onClick={handleClose}
                  className="mt-4 w-full text-gray-500 hover:text-gray-700 text-sm"
                >
                  No thanks
                </button>
              </>
            ) : (
              <div className="text-center">
                <p className="text-orange-600 font-black text-lg mb-2">✓ Success!</p>
                <p className="text-gray-600">Check your email for exclusive offers</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
