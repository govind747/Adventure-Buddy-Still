import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { company } from '../../data';

export default function ContactInfo() {
  return (
    <div className="space-y-4">
      <a href={`tel:${company.phone[0]}`} className="group flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-ember-400/30 transition-all">
        <span className="grid place-items-center w-12 h-12 rounded-xl bg-ember-500/15 text-ember-400 group-hover:bg-ember-500 group-hover:text-white transition-colors">
          <Phone className="w-6 h-6" />
        </span>
        <div>
          <p className="text-xs text-forest-100/50 uppercase tracking-wider font-semibold">Call Us</p>
          <p className="text-white font-bold">{company.phone[0]}</p>
          <p className="text-white/70 text-sm">{company.phone[1]}</p>
        </div>
      </a>

      <a href={`mailto:${company.email}`} className="group flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-ember-400/30 transition-all">
        <span className="grid place-items-center w-12 h-12 rounded-xl bg-ember-500/15 text-ember-400 group-hover:bg-ember-500 group-hover:text-white transition-colors">
          <Mail className="w-6 h-6" />
        </span>
        <div className="min-w-0">
          <p className="text-xs text-forest-100/50 uppercase tracking-wider font-semibold">Email Us</p>
          <p className="text-white font-bold truncate">{company.email}</p>
        </div>
      </a>

      <div className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/10">
        <span className="grid place-items-center w-12 h-12 rounded-xl bg-ember-500/15 text-ember-400">
          <MapPin className="w-6 h-6" />
        </span>
        <div>
          <p className="text-xs text-forest-100/50 uppercase tracking-wider font-semibold">Coverage</p>
          <p className="text-white font-bold">Tours Across India</p>
          <p className="text-white/70 text-sm">North India & South India Packages</p>
        </div>
      </div>

      <a
        href={`https://wa.me/${company.whatsapp.replace(/\D/g, '')}`}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-ember-400/30 transition-all"
      >
        <span className="grid place-items-center w-12 h-12 rounded-xl bg-[#25D366]/15 text-[#25D366] group-hover:bg-[#25D366] group-hover:text-white transition-colors">
          <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.247-.694.247-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
        </span>
        <div>
          <p className="text-xs text-forest-100/50 uppercase tracking-wider font-semibold">WhatsApp</p>
          <p className="text-white font-bold">{company.whatsapp}</p>
        </div>
      </a>

      <div className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/10">
        <span className="grid place-items-center w-12 h-12 rounded-xl bg-ember-500/15 text-ember-400">
          <Clock className="w-6 h-6" />
        </span>
        <div>
          <p className="text-xs text-forest-100/50 uppercase tracking-wider font-semibold">Hours</p>
          <p className="text-white font-bold">Mon – Sun: 8:00 AM – 8:00 PM</p>
        </div>
      </div>
    </div>
  );
}
