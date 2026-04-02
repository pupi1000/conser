import React from 'react';
import DriveCard from '../components/DriveCard';
import { centralizadoresData, colors } from '../data/links';
import { BarChart3, ExternalLink, ArrowRight } from 'lucide-react';

export default function CentralizadoresView() {
  return (
    <div className="pb-8">
      <div className="mb-10 animate-cascade" style={{ animationDelay: '0ms' }}>
        <h1 className="text-3xl md:text-4xl font-black text-slate-800 tracking-tight mb-2">Centralizadores de Notas</h1>
        <p className="text-base text-slate-600">Registros de calificaciones de la gestión en curso.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        {centralizadoresData.map((item, index) => (
          <DriveCard key={item.title} title={item.title} desc={item.desc} tag={item.type} icon={BarChart3} link={item.link} delayIndex={index + 1} />
        ))}
      </div>

      <a 
        href="https://sic.coplumu.edu.bo" target="_blank" rel="noopener noreferrer"
        className="animate-cascade flex flex-col sm:flex-row items-center justify-between p-6 md:p-8 rounded-[2rem] shadow-lg active:scale-[0.98] transition-transform overflow-hidden relative"
        style={{ backgroundColor: colors.sidebarBg, animationDelay: '300ms' }}
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
        <div className="flex flex-col sm:flex-row items-center gap-5 relative z-10 w-full sm:w-auto text-center sm:text-left">
          <div className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-md bg-white/10 text-white shrink-0">
            <ExternalLink size={28} />
          </div>
          <div>
            <h3 className="text-xl md:text-2xl font-black text-white mb-1">Enlace al Sistema del Conservatorio</h3>
            <p className="text-sm text-slate-300 font-medium tracking-wide">Acceso directo a la plataforma institucional (SIC)</p>
          </div>
        </div>
        <div className="hidden sm:flex w-12 h-12 rounded-full items-center justify-center bg-white/10 text-white relative z-10 shrink-0">
          <ArrowRight size={20} />
        </div>
      </a>
    </div>
  );
}