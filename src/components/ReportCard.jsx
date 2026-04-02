// src/components/ReportCard.jsx
import React from 'react';
import { CalendarCheck, FolderOpen } from 'lucide-react';
import { colors } from '../data/links';

export default function ReportCard({ report, index }) {
  return (
    <a 
      href={report.driveLink} target="_blank" rel="noopener noreferrer"
      className={`animate-cascade block relative p-6 rounded-[1.5rem] shadow-md border active:scale-[0.97] transition-transform overflow-hidden ${report.isSpecial ? 'border-yellow-300' : 'border-slate-200'}`} 
      style={{ backgroundColor: report.isSpecial ? colors.specialBg : colors.cardBg, animationDelay: `${(index + 1) * 50}ms` }}
    >
      {/* Línea decorativa superior */}
      <div className="absolute top-0 left-0 w-full h-1.5" style={{ backgroundColor: colors.accent }}></div>
      
      {/* Fondo decorativo con el número del mes */}
      <div className="absolute -bottom-4 -right-1 text-[5.5rem] font-black opacity-[0.04] pointer-events-none text-black">
        {report.num}
      </div>

      <div className="relative z-10 flex flex-col h-full">
        <div className="flex items-center gap-4 mb-6">
          {/* === CORRECCIÓN: Contenedor CIRCULAR PERFECTO === */}
          <div className="w-14 h-14 rounded-full flex items-center justify-center text-white shadow-md shrink-0" style={{ backgroundColor: report.isSpecial ? colors.accent : colors.sidebarBg }}>
            <CalendarCheck size={24} strokeWidth={2.5} />
          </div>
          <div>
             <div className={`text-xs font-bold tracking-widest uppercase mb-0.5 ${report.isSpecial ? 'text-yellow-700' : 'text-slate-500'}`}>
               {report.isSpecial ? '' : 'Mes'} {report.num}
             </div>
             <div className={`font-extrabold text-slate-800 leading-tight ${report.isSpecial ? 'text-lg' : 'text-xl'}`}>
               {report.month}
             </div>
          </div>
        </div>
        
        {/* Botón de acción */}
        <div className="mt-auto w-full flex items-center justify-center gap-2 text-slate-700 font-bold py-3.5 px-4 rounded-xl border shadow-sm bg-white" style={{ borderColor: report.isSpecial ? '#FDE68A' : 'rgba(226, 232, 240, 0.8)' }}>
          <FolderOpen size={18} strokeWidth={2.5} style={{ color: report.isSpecial ? colors.accent : colors.sidebarBg }} /> 
          Abrir Carpeta
        </div>
      </div>
    </a>
  );
}