// src/components/NavItem.jsx
import React from 'react';
import { colors } from '../data/links';

export default function NavItem({ icon: Icon, label, isActive, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center gap-4 px-6 py-4 rounded-xl text-left text-[15px] transition-colors duration-150 group relative overflow-hidden active:scale-[0.98]
        ${isActive 
          ? 'font-bold text-white shadow-md' 
          : 'font-medium text-slate-300 hover:text-white hover:bg-white/10'}`}
      style={isActive ? { backgroundColor: colors.activeNav } : {}}
    >
      {isActive && <div className="absolute left-0 top-0 h-full w-1.5" style={{ backgroundColor: colors.accent }}></div>}
      
      {/* === CONSISTENCIA: Ícono CIRCULAR PERFECTO === */}
      <div className="w-10 h-10 rounded-full flex items-center justify-center text-white shadow-inner shrink-0" style={{ backgroundColor: isActive ? colors.accent : 'rgba(255, 255, 255, 0.1)' }}>
        <Icon size={22} className={isActive ? 'text-white' : 'text-slate-400 group-hover:text-white'} />
      </div>
      
      <span className="flex-grow">{label}</span>
    </button>
  );
}