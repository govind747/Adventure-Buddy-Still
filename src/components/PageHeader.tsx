import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  image: string;
  breadcrumb?: string;
}

export default function PageHeader({ title, subtitle, image, breadcrumb }: PageHeaderProps) {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-forest-950/90 via-forest-900/80 to-forest-950/70" />
      </div>
      <div className="relative mx-auto max-w-7xl px-5">
        <nav className="flex items-center gap-1.5 text-sm text-forest-100/60 mb-4">
          <Link to="/" className="hover:text-ember-300 transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-ember-300">{breadcrumb || title}</span>
        </nav>
        <h1 className="font-display font-extrabold text-white text-4xl lg:text-6xl text-balance">{title}</h1>
        {subtitle && <p className="mt-4 text-lg text-forest-100/70 max-w-2xl">{subtitle}</p>}
      </div>
    </section>
  );
}
