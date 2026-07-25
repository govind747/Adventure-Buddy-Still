import { Send } from 'lucide-react';
import { company } from '../../data';

export default function ContactForm() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const subject = encodeURIComponent(`Trip Inquiry from ${data.get('name')}`);
        const body = encodeURIComponent(
          `Name: ${data.get('name')}\nPhone: ${data.get('phone')}\nEmail: ${data.get('email')}\nDestination: ${data.get('destination')}\n\n${data.get('message')}`
        );
        window.location.href = `mailto:${company.email}?subject=${subject}&body=${body}`;
      }}
      className="rounded-2xl bg-white/5 border border-white/10 p-7 lg:p-8 space-y-5"
    >
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-forest-100/80 mb-2">Your Name</label>
          <input name="name" required type="text" placeholder="John Doe" className="w-full px-4 py-3 rounded-xl bg-forest-900/50 border border-white/10 text-white placeholder:text-forest-100/30 focus:outline-none focus:border-ember-400/50 focus:ring-2 focus:ring-ember-400/20 transition-all" />
        </div>
        <div>
          <label className="block text-sm font-medium text-forest-100/80 mb-2">Phone Number</label>
          <input name="phone" required type="tel" placeholder="+91 90000 00000" className="w-full px-4 py-3 rounded-xl bg-forest-900/50 border border-white/10 text-white placeholder:text-forest-100/30 focus:outline-none focus:border-ember-400/50 focus:ring-2 focus:ring-ember-400/20 transition-all" />
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-forest-100/80 mb-2">Email</label>
          <input name="email" type="email" placeholder="you@example.com" className="w-full px-4 py-3 rounded-xl bg-forest-900/50 border border-white/10 text-white placeholder:text-forest-100/30 focus:outline-none focus:border-ember-400/50 focus:ring-2 focus:ring-ember-400/20 transition-all" />
        </div>
        <div>
          <label className="block text-sm font-medium text-forest-100/80 mb-2">Destination of Interest</label>
          <input name="destination" type="text" placeholder="e.g. Manali, Char Dham, Kerala..." className="w-full px-4 py-3 rounded-xl bg-forest-900/50 border border-white/10 text-white placeholder:text-forest-100/30 focus:outline-none focus:border-ember-400/50 focus:ring-2 focus:ring-ember-400/20 transition-all" />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-forest-100/80 mb-2">Message</label>
        <textarea name="message" required rows={5} placeholder="Tell us about your dream trip — group size, dates, budget, preferences..." className="w-full px-4 py-3 rounded-xl bg-forest-900/50 border border-white/10 text-white placeholder:text-forest-100/30 focus:outline-none focus:border-ember-400/50 focus:ring-2 focus:ring-ember-400/20 transition-all resize-none" />
      </div>
      <button type="submit" className="group w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-ember-500 text-white font-bold hover:bg-ember-600 transition-all shadow-lg shadow-ember-500/25 hover:-translate-y-0.5">
        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        Send Inquiry
      </button>
    </form>
  );
}
