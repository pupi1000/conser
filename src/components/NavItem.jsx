// src/components/NavItem.jsx
import React from 'react';
import { colors } from '../data/links';

export default function NavItem({ icon: Icon, label, isActive, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center gap-4 px-5 py-3.5 rounded-2xl text-left text-[15px] font-display transition-all duration-300 group relative overflow-hidden active:scale-[0.97]
        ${isActive 
          ? 'font-bold text-white shadow-[0_8px_25px_-5px_rgba(0,0,0,0.3)]' 
          : 'font-medium text-slate-300/80 hover:text-white hover:bg-white/8 hover:translate-x-1'}`}
      style={isActive ? { backgroundColor: colors.activeNav } : {}}
    >
      {isActive && (
        <div 
          className="absolute left-0 top-1/4 h-1/2 w-1 rounded-r-full" 
          style={{ backgroundColor: colors.accent }}
        ></div>
      )}
      
      {/* Icono */}
      <div 
        className="w-10 h-10 rounded-xl flex items-center justify-center text-white transition-all duration-300 shrink-0" 
        style={{ 
          backgroundColor: isActive ? colors.accent : 'rgba(255, 255, 255, 0.05)',
          boxShadow: isActive ? `0 4px 12px ${colors.accent}40` : 'none'
        }}
      >
        <Icon 
          size={20} 
          className={`transition-transform duration-300 group-hover:scale-110 ${isActive ? 'text-white' : 'text-slate-400 group-hover:text-white'}`} 
        />
      </div>
      
      <span className="flex-grow tracking-wide font-medium">{label}</span>
    </button>
  );
}