// src/components/DriveCard.jsx
import React from 'react';
import { ExternalLink, FolderOpen, ArrowRight } from 'lucide-react';
import { colors } from '../data/links';

export default function DriveCard({ title, desc, tag, icon: Icon, link, onClick, delayIndex = 1 }) {
  return (
    <div 
      onClick={() => link ? window.open(link, '_blank') : onClick()}
      className="animate-cascade cursor-pointer block relative p-7 rounded-[2rem] shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-slate-100 hover:border-slate-300/80 hover:shadow-[0_15px_35px_rgba(22,51,41,0.06)] hover:-translate-y-1.5 active:scale-[0.98] transition-all duration-300 overflow-hidden h-full flex flex-col group" 
      style={{ backgroundColor: colors.cardBg, animationDelay: `${delayIndex * 100}ms` }}
    >
      {/* Línea decorativa superior */}
      <div 
        className="absolute top-0 left-0 w-full h-1.5 transition-transform duration-500 group-hover:scale-x-105" 
        style={{ backgroundColor: colors.sidebarBg }}
      ></div>

      <div className="flex items-start justify-between mb-6 border-b border-slate-100 pb-5 mt-2">
        {/* Contenedor del ícono redondeado estilizado */}
        <div 
          className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.06)] text-white shrink-0 transition-transform duration-500 group-hover:rotate-6" 
          style={{ backgroundColor: colors.sidebarBg }}
        >
          <Icon size={24} strokeWidth={2.2} />
        </div>
        {/* Etiqueta (si existe) */}
        {tag && (
          <span 
            className="px-3 py-1 text-[10px] font-display font-extrabold tracking-widest rounded-full border bg-white shadow-sm transition-colors duration-300" 
            style={{ 
              color: colors.accent, 
              borderColor: `${colors.accent}40`,
              backgroundColor: `${colors.accent}08`
            }}
          >
            {tag}
          </span>
        )}
      </div>
      
      {/* Título y descripción */}
      <h3 className="text-xl font-display font-black text-slate-800 mb-3 leading-tight flex-grow group-hover:text-slate-900 transition-colors duration-300">
        {title}
      </h3>
      <p className="text-sm text-slate-600 mb-6 flex-grow leading-relaxed font-sans">
        {desc}
      </p>
      
      {/* Línea de acción inferior */}
      <div className="flex items-center justify-between bg-white py-3.5 px-5 rounded-xl border border-slate-100/80 shadow-sm mt-auto transition-colors duration-300 group-hover:bg-slate-50">
        <span className="text-sm font-display font-bold text-slate-700 flex items-center gap-2">
          {link ? <ExternalLink size={16} strokeWidth={2.2} style={{color: colors.sidebarBg}}/> : <FolderOpen size={16} strokeWidth={2.2} style={{color: colors.sidebarBg}}/>}
          {link ? 'Abrir Enlace' : 'Ver Contenido'}
        </span>
        <div 
          className="w-8 h-8 rounded-full flex items-center justify-center bg-slate-50 text-slate-400 transition-all duration-300 group-hover:bg-[#163329] group-hover:text-white"
        >
          <ArrowRight size={14} strokeWidth={2.5} className="transition-transform duration-300 group-hover:translate-x-0.5" />
        </div>
      </div>
    </div>
  );
}