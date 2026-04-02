// src/components/DriveCard.jsx
import React from 'react';
import { ExternalLink, FolderOpen, ArrowRight } from 'lucide-react';
import { colors } from '../data/links';

export default function DriveCard({ title, desc, tag, icon: Icon, link, onClick, delayIndex = 1 }) {
  return (
    <div 
      onClick={() => link ? window.open(link, '_blank') : onClick()}
      className="animate-cascade cursor-pointer block relative p-7 rounded-[2rem] shadow-md border border-slate-200 active:scale-[0.98] transition-transform overflow-hidden h-full flex flex-col" 
      style={{ backgroundColor: colors.cardBg, animationDelay: `${delayIndex * 100}ms` }}
    >
      {/* Línea decorativa superior */}
      <div className="absolute top-0 left-0 w-full h-1.5" style={{ backgroundColor: colors.sidebarBg }}></div>

      <div className="flex items-start justify-between mb-6 border-b border-slate-100 pb-5 mt-2">
        {/* === CORRECCIÓN: Contenedor CIRCULAR PERFECTO === */}
        <div className="w-14 h-14 rounded-full flex items-center justify-center shadow-md text-white shrink-0" style={{ backgroundColor: colors.sidebarBg }}>
          <Icon size={26} />
        </div>
        {/* Etiqueta (si existe) */}
        {tag && (
          <span className="px-3 py-1 text-xs font-bold rounded-full border bg-white shadow-sm" style={{ color: colors.accent, borderColor: colors.accent }}>
            {tag}
          </span>
        )}
      </div>
      
      {/* Título y descripción */}
      <h3 className="text-xl font-black text-slate-800 mb-3 leading-tight flex-grow">{title}</h3>
      <p className="text-sm text-slate-600 mb-6 flex-grow leading-relaxed">{desc}</p>
      
      {/* Línea de acción inferior */}
      <div className="flex items-center justify-between bg-white py-3.5 px-5 rounded-xl border border-slate-100 shadow-sm mt-auto">
        <span className="text-sm font-bold text-slate-700 flex items-center gap-2">
          {link ? <ExternalLink size={18} style={{color: colors.sidebarBg}}/> : <FolderOpen size={18} style={{color: colors.sidebarBg}}/>}
          {link ? 'Abrir Enlace' : 'Ver Contenido'}
        </span>
        <div className="w-8 h-8 rounded-full flex items-center justify-center bg-slate-50 text-slate-400">
          <ArrowRight size={16} />
        </div>
      </div>
    </div>
  );
}