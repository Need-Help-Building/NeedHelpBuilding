"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  Sparkles,
  Phone,
  MapPin,
  Clock,
  ShoppingBag,
  Star,
  ShieldCheck,
  Truck,
  HeartHandshake,
  MessageCircle,
  Package,
  Layers,
  Sparkle
} from "lucide-react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [orderQuery, setOrderQuery] = useState("");
  const [sentNotice, setSentNotice] = useState(false);

  // Store information
  const store = {
    name: "Express Daily Mart",
    tagline: "Your Trusted Neighborhood Supermarket",
    address:
      "Shop no 19, 20, 21, 22, Kathauta Chauraha Rd, In front of Petrol Pump, Vijayant Khand, Gomti Nagar, Lucknow, Uttar Pradesh 226010",
    phone: "+91 88535 67103",
    cleanPhone: "918853567103",
    rating: "5.0",
    reviewsCount: "140+",
    mapsUrl: "https://maps.app.goo.gl/9kBE7RBcQPjM6aWc6?g_st=ac",
    hours: "8:30 AM – 10:30 PM",
    closedDay: "Wednesday",
  };

  // Product categories in Express Daily Mart
  const categories = [
    {
      title: "Grains, Atta & Pulses",
      subtitle: "Pure staples & daily lentils",
      desc: "Fresh Chakki Atta, Basmati Rice, Toor, Moong, Chana Dal & organic pulses from top brands like Fortune, Aashirvaad & Tata Sampann.",
      badge: "Kitchen Staples",
      icon: "🌾",
    },
    {
      title: "Packaged Snacks & Biscuits",
      subtitle: "Tea-time & party treats",
      desc: "Namkeens, Haldiram's specials, potato crisps, premium cookies, rusks, and dry snacks for every family gathering.",
      badge: "Instant Munchies",
      icon: "🍪",
    },
    {
      title: "Dairy, Beverages & Drinks",
      subtitle: "Cold refreshments & fresh dairy",
      desc: "Milk, curd, paneer, butter, health drinks, energy sodas, fruit juices, and cold refreshments always stocked cool.",
      badge: "Fresh & Chilled",
      icon: "🥛",
    },
    {
      title: "Personal Care & Hygiene",
      subtitle: "Soaps, shampoos & oral care",
      desc: "Dettol, Lifebuoy, Dove, premium soaps, handwashes, face washes, skin lotions, shampoos, and grooming essentials.",
      badge: "Daily Wellness",
      icon: "🧴",
    },
    {
      title: "Household & Cleaning",
      subtitle: "Detergents & home care",
      desc: "Surf Excel, Ariel, dishwash liquids, Harpic, Lizol floor disinfectants, mops, garbage bags, and fresheners.",
      badge: "Spotless Home",
      icon: "🧼",
    },
    {
      title: "Spices, Cooking Oils & Ghee",
      subtitle: "Aromatic herbs & healthy oils",
      desc: "Pure Mustard oil, refined oils, Desi Ghee, Catch, MDH & Everest spices, pickles, sauces, and cooking pastes.",
      badge: "Pure Taste",
      icon: "🫙",
    },
  ];

  // Daily popular shopping deals / highlights
  const specialBaskets = [
    {
      title: "Monthly Grocery Basket",
      items: "Atta (10kg) + Rice (5kg) + 3 Dals + Cooking Oil + Salt & Spices",
      highlight: "Save up to 15% on bulk bundles",
      tag: "Best Value",
    },
    {
      title: "Tea-Time & Evening Munch",
      items: "Assorted Biscuits + Premium Tea + Haldiram Bhujia + Rusk",
      highlight: "Fresh batch stocks every week",
      tag: "Popular",
    },
    {
      title: "Home Hygiene Care Pack",
      items: "Detergent (2kg) + Dishwash Gel + Disinfectant Surface Cleaner + Handwash",
      highlight: "Trusted germ protection brands",
      tag: "Essential",
    },
  ];

  // Real store testimonials based on reviews
  const testimonials = [
    {
      client: "Alok Srivastava",
      role: "Vijayant Khand, Gomti Nagar",
      text: "Express Daily Mart is a lifesaver in our locality! Located right opposite the petrol pump on Kathauta Chauraha road, you get every kitchen staple, branded dairy, and snack without any crowd chaos. The staff is polite and helpful.",
    },
    {
      client: "Dr. Pratibha Verma",
      role: "Gomti Nagar Resident",
      text: "Very neat, organized, and fully stocked. You don't have to visit multiple shops; pulses, spices, hygiene products, and cold drinks are all available under one roof. Easily a 5-star neighborhood store!",
    },
    {
      client: "Naveen Chawla",
      role: "Kathauta Chauraha Road",
      text: "Convenient parking in front of the shop and quick billing. Whenever we need extra milk, snacks for guests, or monthly supplies, Express Daily Mart is our primary stop.",
    },
  ];

  // Frequently Asked Questions
  const faqs = [
    {
      q: "Where is Express Daily Mart located exactly?",
      a: "We are situated at Shop No. 19, 20, 21, 22 on Kathauta Chauraha Road, conveniently positioned directly opposite the Bharat Petroleum pump in Vijayant Khand, Gomti Nagar, Lucknow.",
    },
    {
      q: "Can I order groceries over WhatsApp or phone call?",
      a: "Yes! You can share your grocery shopping list directly to our WhatsApp number (+91 88535 67103) or give us a quick call for instant packing and local neighborhood pickup or delivery.",
    },
    {
      q: "What are the store operating hours?",
      a: "We are open from 8:30 AM to 10:30 PM on Monday, Tuesday, Thursday, Friday, Saturday, and Sunday. Please note our store remains closed on Wednesdays.",
    },
    {
      q: "Which payment options are accepted?",
      a: "We accept all popular digital payment methods including Google Pay, PhonePe, Paytm, BHIM UPI, Debit/Credit Cards, and Cash.",
    },
    {
      q: "Are branded FMCG and daily essentials fresh and authentic?",
      a: "Absolutely. We source all inventory directly from authorized distributors. Every packaged food, spice, dairy product, and household supply is 100% genuine with fresh expiry dates.",
    },
  ];

  const handleListSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!orderQuery.trim()) return;
    const msg = encodeURIComponent(
      `Hello Express Daily Mart, I would like to inquire about/order:\n\n${orderQuery}\n\nPlease let me know availability and pricing.`
    );
    window.open(`https://wa.me/${store.cleanPhone}?text=${msg}`, "_blank");
    setSentNotice(true);
    setTimeout(() => setSentNotice(false), 5000);
    setOrderQuery("");
  };

  return (
    <div className="relative min-h-screen bg-[#fcfdfa] text-gray-900 overflow-x-hidden selection:bg-emerald-600 selection:text-white">
      {/* Floating Direct WhatsApp Order Button */}
      <a
        href={`https://wa.me/${store.cleanPhone}?text=${encodeURIComponent(
          "Hello Express Daily Mart, I want to order daily groceries and essentials."
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Order on WhatsApp"
        className="fixed right-3 bottom-4 sm:right-6 sm:bottom-6 z-50 transition-transform duration-300 hover:scale-110 active:scale-95 animate-floatingSmooth group"
      >
        <div className="flex items-center gap-2 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-lg hover:shadow-emerald-500/40 border border-white/20">
          <MessageCircle size={24} className="fill-white" />
          <span className="hidden sm:inline font-semibold text-sm">Order on WhatsApp</span>
        </div>
      </a>

      {/* Floating Direct Call Button */}
      <a
        href={`tel:${store.cleanPhone}`}
        aria-label="Call Store"
        className="fixed left-3 bottom-4 sm:left-6 sm:bottom-6 z-50 transition-transform duration-300 hover:scale-110 active:scale-95 animate-floatingSmooth"
      >
        <div className="flex items-center gap-2 bg-emerald-800 text-white px-4 py-3 rounded-full shadow-lg hover:shadow-emerald-900/40 border border-white/20">
          <Phone size={20} className="fill-white" />
          <span className="hidden sm:inline font-semibold text-sm">Call Mart</span>
        </div>
      </a>

      {/* Top Banner: Store Status & Schedule */}
      <div className="bg-emerald-900 text-emerald-100 text-xs sm:text-sm py-2 px-4 text-center font-medium border-b border-emerald-800/80">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-x-6 gap-y-1">
          <span className="flex items-center gap-1.5">
            <MapPin size={14} className="text-amber-400 shrink-0" />
            <span>Kathauta Chauraha Rd, Vijayant Khand, Gomti Nagar</span>
          </span>
          <span className="hidden md:inline">•</span>
          <span className="flex items-center gap-1.5">
            <Clock size={14} className="text-amber-400 shrink-0" />
            <span>Open 8:30 AM – 10:30 PM (Wed Closed)</span>
          </span>
          <span className="hidden md:inline">•</span>
          <span className="flex items-center gap-1.5 font-bold text-amber-300">
            <Star size={14} className="fill-amber-400 text-amber-400 shrink-0" />
            <span>5.0 ★ Rated on Google & Magicpin</span>
          </span>
        </div>
      </div>

      {/* Main Header / Pill Navbar */}
      <header className="relative flex justify-center items-center py-4 px-4 sticky top-2 z-40">
        <nav className="hidden md:grid grid-cols-3 items-center rounded-full px-8 py-3 border border-emerald-200/80 bg-white/95 backdrop-blur-md shadow-sm min-w-[760px] max-w-5xl transition-all duration-300 hover:shadow-md">
          <div className="flex justify-start space-x-7 text-sm font-semibold text-gray-700">
            <Link href="#categories" className="hover:text-emerald-700 transition-colors">
              Categories
            </Link>
            <Link href="#deals" className="hover:text-emerald-700 transition-colors">
              Daily Essentials
            </Link>
            <Link href="#about" className="hover:text-emerald-700 transition-colors">
              Why Us
            </Link>
          </div>

          <div className="flex justify-center">
            <Link href="/" className="inline-flex items-center gap-2 transition-transform hover:scale-105">
              <div className="w-9 h-9 rounded-xl bg-emerald-600 flex items-center justify-center shadow-xs text-white">
                <ShoppingBag size={20} />
              </div>
              <div className="text-left">
                <span className="block font-black text-emerald-950 text-base tracking-tight leading-none">
                  EXPRESS <span className="text-emerald-600">DAILY</span>
                </span>
                <span className="text-[10px] tracking-widest font-bold text-amber-600 uppercase leading-none">
                  MART
                </span>
              </div>
            </Link>
          </div>

          <div className="flex justify-end items-center space-x-6 text-sm font-semibold text-gray-700">
            <Link href="#reviews" className="hover:text-emerald-700 transition-colors">
              Reviews
            </Link>
            <Link href="#location" className="hover:text-emerald-700 transition-colors">
              Visit Store
            </Link>
            <a
              href={`tel:${store.cleanPhone}`}
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-1.5 rounded-full text-xs font-bold transition shadow-xs flex items-center gap-1.5"
            >
              <Phone size={13} />
              <span>Call Us</span>
            </a>
          </div>
        </nav>

        {/* Mobile Navigation Header */}
        <div className="flex md:hidden w-full justify-between items-center px-4 py-2.5 border border-emerald-200/90 rounded-2xl bg-white/95 backdrop-blur-md shadow-sm z-50">
          <Link href="/" className="inline-flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center text-white">
              <ShoppingBag size={18} />
            </div>
            <div className="text-left">
              <span className="block font-black text-emerald-950 text-sm tracking-tight leading-none">
                EXPRESS <span className="text-emerald-600">DAILY</span>
              </span>
              <span className="text-[9px] tracking-widest font-bold text-amber-600 uppercase leading-none">
                MART
              </span>
            </div>
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-gray-700 hover:text-emerald-800 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="absolute top-16 left-1/2 -translate-x-1/2 w-[94%] bg-white/98 backdrop-blur-xl border border-emerald-200 rounded-2xl shadow-xl flex flex-col items-center py-5 space-y-4 md:hidden z-40 animate-fadeIn">
            <Link
              href="#categories"
              onClick={() => setMobileMenuOpen(false)}
              className="text-gray-800 font-semibold hover:text-emerald-700 text-base"
            >
              Grocery Categories
            </Link>
            <Link
              href="#deals"
              onClick={() => setMobileMenuOpen(false)}
              className="text-gray-800 font-semibold hover:text-emerald-700 text-base"
            >
              Daily Essentials
            </Link>
            <Link
              href="#reviews"
              onClick={() => setMobileMenuOpen(false)}
              className="text-gray-800 font-semibold hover:text-emerald-700 text-base"
            >
              Customer Reviews
            </Link>
            <Link
              href="#location"
              onClick={() => setMobileMenuOpen(false)}
              className="text-gray-800 font-semibold hover:text-emerald-700 text-base"
            >
              Store Timings & Map
            </Link>
            <a
              href={`https://wa.me/${store.cleanPhone}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-[85%] text-center bg-emerald-600 text-white font-bold py-2.5 rounded-full text-sm shadow-sm"
            >
              Order on WhatsApp (+91 88535 67103)
            </a>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative w-full pt-6 sm:pt-12 pb-16 px-4">
        <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 font-semibold text-xs sm:text-sm mb-5 shadow-xs">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Shop No. 19-22, Kathauta Chauraha, Gomti Nagar</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-emerald-950 tracking-tight leading-[1.15] mb-5">
            Everything Fresh & Daily. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-700">
              Right at Your Neighborhood Mart.
            </span>
          </h1>

          <p className="max-w-2xl text-gray-600 text-base sm:text-lg leading-relaxed mb-8">
            Shop premium cooking staples, fresh pulses, packaged snacks, cool dairy beverages, and branded household essentials at <strong>Express Daily Mart</strong> in Vijayant Khand, Gomti Nagar.
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 z-10 w-full max-w-md">
            <a
              href={`https://wa.me/${store.cleanPhone}?text=${encodeURIComponent(
                "Hi Express Daily Mart, I want to place a grocery order."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="grow sm:grow-0 px-7 py-3.5 sm:py-4 text-sm sm:text-base bg-emerald-600 text-white rounded-full font-bold shadow-md hover:bg-emerald-700 hover:shadow-emerald-600/30 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle size={18} />
              <span>WhatsApp Quick Order</span>
            </a>

            <a
              href={store.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="grow sm:grow-0 px-7 py-3.5 sm:py-4 text-sm sm:text-base bg-white text-emerald-950 rounded-full font-bold border border-emerald-300 shadow-xs hover:bg-emerald-50 hover:border-emerald-400 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              <MapPin size={18} className="text-emerald-600" />
              <span>Get Directions</span>
            </a>
          </div>

          {/* Trust Highlights Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 mt-12 w-full max-w-4xl text-left">
            <div className="p-4 bg-white rounded-2xl border border-emerald-100 shadow-xs flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100/80 text-emerald-800 flex items-center justify-center shrink-0">
                <Star size={20} className="fill-amber-400 text-amber-500" />
              </div>
              <div>
                <div className="font-extrabold text-sm text-gray-900">5.0 ★ Rating</div>
                <div className="text-xs text-gray-500">140+ Happy Reviews</div>
              </div>
            </div>

            <div className="p-4 bg-white rounded-2xl border border-emerald-100 shadow-xs flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100/80 text-emerald-800 flex items-center justify-center shrink-0">
                <ShieldCheck size={20} className="text-emerald-700" />
              </div>
              <div>
                <div className="font-extrabold text-sm text-gray-900">100% Genuine</div>
                <div className="text-xs text-gray-500">Trusted Top Brands</div>
              </div>
            </div>

            <div className="p-4 bg-white rounded-2xl border border-emerald-100 shadow-xs flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100/80 text-emerald-800 flex items-center justify-center shrink-0">
                <Clock size={20} className="text-emerald-700" />
              </div>
              <div>
                <div className="font-extrabold text-sm text-gray-900">8:30 AM – 10:30 PM</div>
                <div className="text-xs text-gray-500">Late Evening Pickup</div>
              </div>
            </div>

            <div className="p-4 bg-white rounded-2xl border border-emerald-100 shadow-xs flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100/80 text-emerald-800 flex items-center justify-center shrink-0">
                <Truck size={20} className="text-emerald-700" />
              </div>
              <div>
                <div className="font-extrabold text-sm text-gray-900">Gomti Nagar</div>
                <div className="text-xs text-gray-500">Fast Local Ordering</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Continuous Brand Marquee Ticker */}
      <div className="overflow-hidden w-full bg-emerald-950 py-3.5 border-y border-emerald-800/80">
        <div className="marquee-left-track flex items-center gap-8 text-emerald-100 text-xs sm:text-sm font-semibold tracking-wider uppercase">
          {[...Array(2)].map((_, loopIdx) => (
            <div key={`brand-strip-${loopIdx}`} className="flex items-center gap-8 shrink-0">
              <span className="flex items-center gap-2">
                <Sparkle size={14} className="text-amber-400" />
                <span>Fresh Chakki Atta & Pulses</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-2">
                <Sparkle size={14} className="text-amber-400" />
                <span>Haldiram Snacks & Biscuits</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-2">
                <Sparkle size={14} className="text-amber-400" />
                <span>Chilled Dairy & Beverages</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-2">
                <Sparkle size={14} className="text-amber-400" />
                <span>Fortune & Aashirvaad Staples</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-2">
                <Sparkle size={14} className="text-amber-400" />
                <span>Home Cleaning & Detergents</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-2">
                <Sparkle size={14} className="text-amber-400" />
                <span>Personal Care Essentials</span>
              </span>
              <span>•</span>
            </div>
          ))}
        </div>
      </div>

      {/* Grocery Categories Section */}
      <section id="categories" className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-emerald-100 text-emerald-800 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles size={14} />
            <span>Departments</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-emerald-950 tracking-tight">
            Explore What&apos;s In Store
          </h2>
          <p className="text-gray-600 text-sm sm:text-base mt-3">
            A comprehensive inventory of daily groceries, kitchen rations, packaged delicacies, and household care items.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-2xl p-7 border border-emerald-100 shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl p-2.5 bg-emerald-50 rounded-xl inline-block group-hover:scale-110 transition-transform">
                    {cat.icon}
                  </span>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-100 text-emerald-800">
                    {cat.badge}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-emerald-700 transition-colors">
                  {cat.title}
                </h3>
                <p className="text-xs font-semibold text-emerald-700 mt-0.5 mb-2">
                  {cat.subtitle}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {cat.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                <a
                  href={`https://wa.me/${store.cleanPhone}?text=${encodeURIComponent(
                    `Hi Express Daily Mart, I would like to order items from "${cat.title}".`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-emerald-700 group-hover:text-emerald-800 flex items-center gap-1.5"
                >
                  <span>Order from this category</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Baskets / Fast Shopping Section */}
      <section id="deals" className="py-16 bg-emerald-900 text-white px-4 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-amber-400 font-extrabold text-xs uppercase tracking-wider">
                Smart Grocery Shopping
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-1">
                Curated Bundles for Lucknow Families
              </h2>
            </div>
            <p className="text-emerald-200 text-sm max-w-md">
              Save time and effort by ordering your household&apos;s essential bundles directly over WhatsApp.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {specialBaskets.map((b, i) => (
              <div
                key={i}
                className="bg-emerald-800/80 rounded-2xl p-6 border border-emerald-700 flex flex-col justify-between hover:bg-emerald-800 transition"
              >
                <div>
                  <div className="inline-block px-2.5 py-0.5 rounded text-[11px] font-bold bg-amber-400 text-emerald-950 mb-3">
                    {b.tag}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{b.title}</h3>
                  <p className="text-emerald-100 text-xs sm:text-sm mb-4 leading-relaxed">
                    {b.items}
                  </p>
                </div>
                <div className="pt-4 border-t border-emerald-700/60">
                  <p className="text-xs font-medium text-amber-300 mb-3">{b.highlight}</p>
                  <a
                    href={`https://wa.me/${store.cleanPhone}?text=${encodeURIComponent(
                      `Hi Express Daily Mart, I am interested in the ${b.title}. Please provide details.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex justify-center items-center gap-2 bg-white text-emerald-950 text-xs font-bold py-2.5 px-4 rounded-xl hover:bg-emerald-100 transition"
                  >
                    <span>Quick Order on WhatsApp</span>
                    <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Send Your List Box */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-emerald-50 to-teal-50/50 rounded-3xl p-6 sm:p-10 border border-emerald-200 shadow-sm text-center">
          <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center mx-auto mb-4 shadow-sm">
            <Package size={24} />
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-emerald-950 mb-3">
            Have a Handwritten or Typed Grocery List?
          </h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-xl mx-auto mb-6">
            Type your requirements below or paste your list. We will instantly redirect you to WhatsApp so our team can pack it for you!
          </p>

          <form onSubmit={handleListSubmit} className="max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-2 bg-white p-2 rounded-2xl shadow-sm border border-emerald-200">
              <input
                type="text"
                value={orderQuery}
                onChange={(e) => setOrderQuery(e.target.value)}
                placeholder="e.g. 5kg Aashirvaad Atta, 1kg Moong Dal, Haldiram Bhujia, Amul Butter"
                className="grow px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none rounded-xl"
                required
              />
              <button
                type="submit"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-xl font-bold text-sm transition shadow-xs flex items-center justify-center gap-2 shrink-0"
              >
                <span>Send to Mart</span>
                <ArrowRight size={16} />
              </button>
            </div>
            {sentNotice && (
              <p className="text-emerald-700 text-xs font-semibold mt-2.5 flex items-center justify-center gap-1.5">
                <CheckCircle2 size={14} />
                <span>Redirecting to WhatsApp! You can chat with our team right away.</span>
              </p>
            )}
          </form>
        </div>
      </section>

      {/* Customer Reviews & Testimonials */}
      <section id="reviews" className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-100 text-amber-900 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <Star size={13} className="fill-amber-500 text-amber-500" />
            <span>Gomti Nagar Community</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-emerald-950 tracking-tight">
            Loved by Neighbors & Regular Shoppers
          </h2>
          <p className="text-gray-600 text-sm sm:text-base mt-2">
            Read what residents across Vijayant Khand and Kathauta Chauraha say about our service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-7 border border-emerald-100 shadow-xs hover:shadow-md transition flex flex-col justify-between text-left"
            >
              <div>
                <div className="flex gap-1 text-amber-400 mb-4">
                  {[...Array(5)].map((_, s) => (
                    <Star key={s} size={16} className="fill-amber-400" />
                  ))}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed italic mb-6">
                  &ldquo;{t.text}&rdquo;
                </p>
              </div>
              <div className="pt-4 border-t border-gray-100">
                <h4 className="font-bold text-gray-900 text-sm sm:text-base">{t.client}</h4>
                <p className="text-emerald-700 text-xs font-medium">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Store Location, Hours & Direct Contact Section */}
      <section id="location" className="py-16 bg-[#f0f7f2] px-4 border-t border-emerald-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Info Card */}
            <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 border border-emerald-200/80 shadow-sm flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-800 rounded-full text-xs font-bold uppercase mb-4">
                  <MapPin size={13} className="text-emerald-600" />
                  <span>Store Address & Timings</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-emerald-950 mb-4">
                  Visit Express Daily Mart
                </h2>

                <div className="space-y-4 text-sm text-gray-700">
                  <div className="flex items-start gap-3">
                    <MapPin size={20} className="text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-gray-900 font-bold">Address:</strong>
                      <span>{store.address}</span>
                      <span className="block text-xs text-emerald-700 mt-1 font-semibold">
                        Landmark: Right in front of Bharat Petroleum petrol pump
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock size={20} className="text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-gray-900 font-bold">Operating Hours:</strong>
                      <p className="text-gray-800">Mon, Tue, Thu, Fri, Sat, Sun: <strong>8:30 AM – 10:30 PM</strong></p>
                      <p className="text-rose-600 font-semibold text-xs mt-0.5">Wednesday: Closed</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone size={20} className="text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-gray-900 font-bold">Phone Hotline:</strong>
                      <a
                        href={`tel:${store.cleanPhone}`}
                        className="text-emerald-700 font-bold hover:underline"
                      >
                        {store.phone}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-gray-100 flex flex-wrap gap-3">
                <a
                  href={store.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-3 px-5 rounded-xl text-xs sm:text-sm transition flex items-center gap-2 shadow-xs"
                >
                  <MapPin size={16} />
                  <span>Open in Google Maps</span>
                  <ExternalLink size={14} />
                </a>

                <a
                  href={`tel:${store.cleanPhone}`}
                  className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-3 px-5 rounded-xl text-xs sm:text-sm transition flex items-center gap-2"
                >
                  <Phone size={16} />
                  <span>Call Store</span>
                </a>
              </div>
            </div>

            {/* Google Maps Visual Embed / Card */}
            <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 border border-emerald-200/80 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-emerald-950 mb-2">Location Map</h3>
                <p className="text-gray-600 text-xs sm:text-sm mb-4">
                  Easily accessible at the Kathauta Chauraha intersection in Gomti Nagar. Ample parking space available for two-wheelers and cars.
                </p>

                <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden border border-emerald-200 shadow-inner relative bg-emerald-50">
                  <iframe
                    title="Express Daily Mart Location"
                    className="w-full h-full border-0"
                    src="https://maps.google.com/maps?q=Express+daily+Mart+Kathauta+Chauraha+Lucknow&t=&z=16&ie=UTF8&iwloc=&output=embed"
                    loading="lazy"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between text-xs text-gray-500">
                <span>Vijayant Khand, Gomti Nagar</span>
                <a
                  href={store.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-700 font-bold hover:underline"
                >
                  View larger map
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-20 px-4 max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-xs font-bold uppercase mb-2">
            Got Questions?
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-emerald-950">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl shadow-xs border border-emerald-100 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full flex justify-between items-center px-6 py-4 text-left font-semibold text-gray-900 hover:text-emerald-700 transition-colors"
                >
                  <span className="text-sm sm:text-base pr-4">{faq.q}</span>
                  <ChevronDown
                    size={20}
                    className={`transform transition-transform duration-300 text-emerald-600 shrink-0 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-gray-600 text-xs sm:text-sm leading-relaxed border-t border-emerald-50">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Footer Section */}
      <footer className="border-t border-emerald-200/80 bg-white pt-14 pb-8 px-4 text-gray-600 text-sm">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {/* Brand column */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center text-white">
                  <ShoppingBag size={18} />
                </div>
                <span className="font-black text-emerald-950 text-lg tracking-tight">
                  EXPRESS <span className="text-emerald-600">DAILY</span> MART
                </span>
              </div>
              <p className="text-gray-600 text-xs sm:text-sm max-w-md leading-relaxed mb-4">
                Shop No. 19, 20, 21, 22, Kathauta Chauraha Road, In front of Bharat Petroleum pump, Vijayant Khand, Gomti Nagar, Lucknow, Uttar Pradesh 226010.
              </p>
              <p className="text-xs text-gray-500 font-medium">
                Phone / WhatsApp:{" "}
                <a href={`tel:${store.cleanPhone}`} className="text-emerald-700 font-bold hover:underline">
                  {store.phone}
                </a>
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-gray-900 text-xs uppercase tracking-wider mb-3">
                Store Sections
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li>
                  <Link href="#categories" className="hover:text-emerald-700 transition-colors">
                    Kitchen Staples & Dals
                  </Link>
                </li>
                <li>
                  <Link href="#categories" className="hover:text-emerald-700 transition-colors">
                    Packaged Snacks & Biscuits
                  </Link>
                </li>
                <li>
                  <Link href="#categories" className="hover:text-emerald-700 transition-colors">
                    Dairy & Cold Beverages
                  </Link>
                </li>
                <li>
                  <Link href="#categories" className="hover:text-emerald-700 transition-colors">
                    Hygiene & Cleaning
                  </Link>
                </li>
              </ul>
            </div>

            {/* Hours & Map */}
            <div>
              <h4 className="font-bold text-gray-900 text-xs uppercase tracking-wider mb-3">
                Hours & Navigation
              </h4>
              <p className="text-xs text-gray-600 mb-1">
                <strong>Mon – Tue:</strong> 8:30 AM – 10:30 PM
              </p>
              <p className="text-xs text-rose-600 font-semibold mb-1">
                <strong>Wed:</strong> Closed
              </p>
              <p className="text-xs text-gray-600 mb-3">
                <strong>Thu – Sun:</strong> 8:30 AM – 10:30 PM
              </p>
              <a
                href={store.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 hover:underline"
              >
                <span>Google Maps Listing</span>
                <ExternalLink size={12} />
              </a>
            </div>
          </div>

          <div className="border-t border-gray-100 pt-6 text-center text-xs text-gray-400">
            © {new Date().getFullYear()} Express Daily Mart. All rights reserved. Vijayant Khand, Gomti Nagar, Lucknow.
          </div>
        </div>
      </footer>
    </div>
  );
}
