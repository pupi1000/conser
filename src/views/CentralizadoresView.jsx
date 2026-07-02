import React from 'react';
import DriveCard from '../components/DriveCard';
import { centralizadoresData, colors } from '../data/links';
import { BarChart3, ExternalLink, ArrowRight } from 'lucide-react';

export default function CentralizadoresView() {
  return (
    <div className="pb-8">
      <div className="mb-10 animate-cascade" style={{ animationDelay: '0ms' }}>
        <h1 className="text-3xl md:text-4xl font-display font-black text-slate-800 tracking-tight mb-2">Centralizadores de Notas</h1>
        <p className="text-base text-slate-600">Registros de calificaciones de la gestión en curso.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {centralizadoresData.map((item, index) => (
          <DriveCard key={item.title} title={item.title} desc={item.desc} tag={item.type} icon={BarChart3} link={item.link} delayIndex={index + 1} />
        ))}
      </div>

      <a 
        href="https://sic.coplumu.edu.bo" 
        target="_blank" 
        rel="noopener noreferrer"
        className="animate-cascade flex flex-col sm:flex-row items-center justify-between p-7 md:p-9 rounded-[2.5rem] shadow-[0_10px_30px_rgba(22,51,41,0.08)] active:scale-[0.98] transition-all duration-300 overflow-hidden relative group border-2 border-[#D4AF37]20 hover:border-[#D4AF37]50 hover:-translate-y-1"
        style={{ 
          background: `linear-gradient(135deg, ${colors.sidebarBg} 0%, #1e4537 100%)`, 
          animationDelay: '300ms' 
        }}
      >
        <div className="absolute top-0 right-0 w-80 h-80 bg-white opacity-[0.03] rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none transition-transform duration-700 group-hover:scale-110"></div>
        <div className="absolute -bottom-10 left-1/3 w-40 h-40 bg-amber-400 opacity-[0.02] rounded-full pointer-events-none"></div>

        <div className="flex flex-col sm:flex-row items-center gap-6 relative z-10 w-full sm:w-auto text-center sm:text-left">
          <div className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg bg-white/10 border border-white/10 text-white shrink-0 transition-transform duration-500 group-hover:rotate-6">
            <ExternalLink size={26} />
          </div>
          <div>
            <h3 className="text-xl md:text-2xl font-display font-black text-white mb-1">Enlace al Sistema del Conservatorio</h3>
            <p className="text-sm text-slate-300 font-medium tracking-wide">Acceso directo a la plataforma institucional (SIC)</p>
          </div>
        </div>
        <div className="mt-6 sm:mt-0 w-12 h-12 rounded-full flex items-center justify-center bg-white/10 text-white border border-white/10 relative z-10 shrink-0 transition-all duration-300 group-hover:bg-white group-hover:text-[#163329] group-hover:scale-105">
          <ArrowRight size={18} strokeWidth={2.5} className="transition-transform duration-300 group-hover:translate-x-0.5" />
        </div>
      </a>
    </div>
  );
}