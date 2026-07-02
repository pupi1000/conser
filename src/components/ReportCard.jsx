// src/components/ReportCard.jsx
import React from 'react';
import { CalendarCheck, FolderOpen } from 'lucide-react';
import { colors } from '../data/links';

export default function ReportCard({ report, index }) {
  return (
    <a 
      href={report.driveLink} 
      target="_blank" 
      rel="noopener noreferrer"
      className={`animate-cascade block relative p-6 rounded-[2rem] shadow-[0_4px_20px_rgba(0,0,0,0.02)] border transition-all duration-300 overflow-hidden group
        ${report.isSpecial 
          ? 'border-amber-200 hover:border-amber-300 hover:shadow-[0_15px_35px_rgba(212,175,55,0.12)]' 
          : 'border-slate-100 hover:border-slate-300/80 hover:shadow-[0_15px_35px_rgba(22,51,41,0.06)]'} 
        hover:-translate-y-1.5 active:scale-[0.98]`} 
      style={{ 
        backgroundColor: report.isSpecial ? colors.specialBg : colors.cardBg, 
        animationDelay: `${(index + 1) * 50}ms` 
      }}
    >
      {/* Línea decorativa superior con degradado */}
      <div 
        className="absolute top-0 left-0 w-full h-1.5 transition-transform duration-500 group-hover:scale-x-105" 
        style={{ backgroundColor: report.isSpecial ? colors.accent : colors.sidebarBg }}
      ></div>
      
      {/* Fondo decorativo con el número del mes */}
      <div className="absolute -bottom-6 -right-2 text-[6rem] font-display font-black opacity-[0.03] pointer-events-none text-slate-900 select-none group-hover:scale-110 transition-transform duration-500">
        {report.num}
      </div>

      <div className="relative z-10 flex flex-col h-full">
        <div className="flex items-center gap-4 mb-6">
          {/* Contenedor del ícono redondeado estilizado */}
          <div 
            className="w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-[0_4px_12px_rgba(0,0,0,0.08)] shrink-0 transition-transform duration-500 group-hover:rotate-6" 
            style={{ backgroundColor: report.isSpecial ? colors.accent : colors.sidebarBg }}
          >
            <CalendarCheck size={24} strokeWidth={2.2} />
          </div>
          <div>
             <div className={`text-[10px] font-display font-black tracking-widest uppercase mb-1 ${report.isSpecial ? 'text-amber-800' : 'text-slate-400'}`}>
               {report.isSpecial ? 'Especial' : `Mes ${report.num}`}
             </div>
             <div className="font-display font-black text-slate-800 text-xl tracking-tight leading-tight group-hover:text-slate-900 transition-colors duration-300">
               {report.month}
             </div>
          </div>
        </div>
        
        {/* Botón de acción */}
        <div 
          className="mt-auto w-full flex items-center justify-center gap-2 text-slate-700 font-display font-bold text-sm py-3 px-4 rounded-xl border shadow-sm bg-white transition-all duration-300 group-hover:bg-slate-50" 
          style={{ borderColor: report.isSpecial ? '#FDE68A' : 'rgba(226, 232, 240, 0.8)' }}
        >
          <FolderOpen size={16} strokeWidth={2.2} className="transition-transform duration-300 group-hover:scale-110" style={{ color: report.isSpecial ? colors.accent : colors.sidebarBg }} /> 
          Abrir Carpeta
        </div>
      </div>
    </a>
  );
}