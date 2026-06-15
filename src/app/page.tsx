import { Calendar, MapPin, Sun, Waves, MessageSquare, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="font-extrabold text-2xl tracking-tighter text-primary">
            London Beach
          </div>
          <div className="hidden md:flex space-x-8 text-sm font-semibold text-gray-700">
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#amenities" className="hover:text-primary transition-colors">Amenities</a>
            <a href="#location" className="hover:text-primary transition-colors">Location</a>
          </div>
          <button className="bg-primary text-primary-foreground px-6 py-2.5 rounded-full font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/30">
            Book Now
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden flex items-center justify-center min-h-[85vh] bg-gray-50">
        {/* Abstract Background Elements for Premium Look */}
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] mix-blend-multiply -z-10" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[120px] mix-blend-multiply -z-10" />
        
        <div className="max-w-4xl mx-auto text-center space-y-8 z-10">
          <div className="inline-flex items-center space-x-2 bg-amber-100 text-amber-800 px-5 py-2 rounded-full text-sm font-bold tracking-wide shadow-sm">
            <Sun size={18} />
            <span>Summer Promo: 20% Off Day Tours</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight text-gray-900 leading-[1.1]">
            Escape to the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Perfect Getaway</span> in GenSan.
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed font-medium">
            Experience pristine beaches, luxurious cottages, and unforgettable moments at London Beach Resort. Book directly to skip the fees.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <button className="w-full sm:w-auto bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold hover:bg-primary/90 transition-transform hover:-translate-y-1 shadow-xl shadow-primary/30 flex items-center justify-center gap-2 text-lg">
              <Calendar size={22} />
              Check Availability
            </button>
            <button className="w-full sm:w-auto bg-white border-2 border-gray-200 text-gray-800 px-8 py-4 rounded-full font-bold hover:border-gray-300 hover:bg-gray-50 transition-all flex items-center justify-center gap-2 text-lg">
              <MessageSquare size={22} className="text-accent" />
              Ask a Question
            </button>
          </div>
        </div>
      </section>

      {/* Quick Amenities */}
      <section id="amenities" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">Everything you need for a perfect stay</h2>
            <p className="text-gray-600 text-xl font-medium">Whether you are here for a day tour or an overnight vacation.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Day Tour Cottages", desc: "Open-air cottages perfect for family picnics and weekend barkada trips.", icon: Sun },
              { title: "Overnight Rooms", desc: "Air-conditioned rooms with modern amenities and room service.", icon: Calendar },
              { title: "Beach Access", desc: "Direct access to the pristine waters of Sarangani Bay.", icon: Waves },
            ].map((feature, i) => (
              <div key={i} className="bg-gray-50 p-10 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all hover:-translate-y-2 group cursor-pointer">
                <div className="h-16 w-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all text-primary shadow-sm">
                  <feature.icon size={32} />
                </div>
                <h3 className="text-2xl font-extrabold mb-4 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed font-medium text-lg mb-6">{feature.desc}</p>
                <div className="flex items-center text-primary font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more <ArrowRight size={18} className="ml-2" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Location Bar */}
      <section id="location" className="py-16 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent" />
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between relative z-10">
          <div className="flex items-center space-x-6 mb-8 md:mb-0">
            <div className="h-16 w-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/30">
              <MapPin size={32} className="text-white drop-shadow-md" />
            </div>
            <div>
              <h4 className="font-extrabold text-2xl drop-shadow-sm">Located in General Santos City</h4>
              <p className="text-primary-foreground/90 font-medium text-lg mt-1">Just 15 minutes away from the city center.</p>
            </div>
          </div>
          <button className="bg-secondary text-secondary-foreground px-10 py-4 rounded-full font-black text-lg hover:bg-secondary/90 transition-transform hover:scale-105 shadow-xl shadow-black/20 border border-secondary-foreground/10">
            Get Directions
          </button>
        </div>
      </section>
    </main>
  );
}
