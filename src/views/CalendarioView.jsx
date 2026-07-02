import React from 'react';
import { colors, eventosData } from '../data/links';
import { CalendarDays, Bell, FolderOpen, ExternalLink } from 'lucide-react';
import calendario1 from '../assets/calendario1.jpg'; 
import calendario2 from '../assets/calendario2.jpg';
import calendario3 from '../assets/calendario3.jpg';

export default function CalendarioView() {
  return (
    <div className="pb-12">
      <div className="mb-10 animate-cascade" style={{ animationDelay: '0ms' }}>
        <h1 className="text-3xl md:text-4xl font-display font-black text-slate-800 tracking-tight mb-2">Calendario Académico y Eventos</h1>
        <p className="text-base text-slate-600">Cronograma oficial y actividades de la gestión 2026.</p>
      </div>

      <div className="flex flex-col gap-12">
        
        {/* SECCIÓN DEL CALENDARIO OFICIAL */}
        <div 
          className="animate-cascade p-6 sm:p-8 md:p-10 rounded-[2.5rem] shadow-[0_10px_35px_rgba(0,0,0,0.03)] border border-slate-200/50 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)]" 
          style={{ backgroundColor: colors.cardBg, animationDelay: '100ms' }}
        >
          <h2 className="text-2xl font-display font-black text-slate-800 tracking-tight mb-8 flex items-center gap-3 border-b border-slate-200 pb-4">
            <CalendarDays size={28} style={{ color: colors.accent }} /> Calendario Oficial 2026
          </h2>
          
          <div className="flex flex-col w-full max-w-5xl mx-auto rounded-3xl border border-slate-200/80 shadow-[0_15px_40px_rgba(0,0,0,0.04)] overflow-hidden transition-transform duration-500 hover:scale-[1.005]">
             <img src={calendario1} alt="Calendario Parte 1" className="w-full block" />
             <img src={calendario2} alt="Calendario Parte 2" className="w-full block border-t border-slate-100" />
             <img src={calendario3} alt="Calendario Parte 3" className="w-full block border-t border-slate-100" />
          </div>
        </div>

        {/* SECCIÓN DE ACTIVIDADES ARTÍSTICAS */}
        <div 
          className="animate-cascade p-6 sm:p-8 md:p-10 rounded-[2.5rem] shadow-[0_10px_35px_rgba(0,0,0,0.03)] border border-slate-200/50 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)]" 
          style={{ backgroundColor: colors.cardBg, animationDelay: '200ms' }}
        >
          <div className="flex items-center gap-3 mb-8 pb-4 border-b border-slate-200">
            <Bell size={26} style={{ color: colors.accent }} />
            <h2 className="text-2xl font-display font-black text-slate-800 tracking-tight">Actividades artísticas</h2>
          </div>

          <a 
            href="https://drive.google.com/drive/folders/17Wl540uYPfB8BQtaZE3dKzs6YIXByN4S" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-between p-5 mb-8 rounded-[2rem] shadow-[0_4px_15px_rgba(0,0,0,0.02)] border border-slate-100 bg-white hover:border-slate-300/80 hover:shadow-[0_12px_25px_rgba(22,51,41,0.04)] hover:-translate-y-1 active:scale-[0.98] transition-all duration-300 group"
          >
            <div className="flex items-center gap-4">
              <div 
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-md transition-transform duration-500 group-hover:rotate-6 shrink-0" 
                style={{ backgroundColor: colors.sidebarBg }}
              >
                <FolderOpen size={24} />
              </div>
              <div>
                <h3 className="text-lg font-display font-black text-slate-800 leading-tight mb-1 group-hover:text-slate-900 transition-colors duration-300">Acceso al drive</h3>
                <p className="text-xs sm:text-sm text-slate-500">Accede a la carpeta oficial en Google Drive</p>
              </div>
            </div>
            <div className="w-10 h-10 rounded-full bg-slate-50 text-slate-400 flex items-center justify-center transition-all duration-300 group-hover:bg-[#163329] group-hover:text-white shrink-0">
              <ExternalLink size={16} strokeWidth={2.2} />
            </div>
          </a>
          
          {eventosData.length > 0 ? (
            <div className="space-y-4">
              {eventosData.map((evento, index) => (
                <div key={index} className="flex items-center p-5 rounded-2xl border border-slate-100 bg-white shadow-sm transition-all duration-300 hover:shadow-md hover:border-slate-200">
                  <div className="w-20 text-center border-r border-slate-200 pr-4 mr-4 shrink-0">
                    <span className="block text-2xl font-display font-black leading-none" style={{ color: colors.sidebarBg }}>{evento.date.split(' ')[0]}</span>
                    <span className="block text-[10px] font-display font-black text-slate-400 uppercase mt-1.5">{evento.date.split(' ')[1]}</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-display font-black text-slate-800 leading-tight mb-1">{evento.title}</h4>
                    <span className="text-sm font-medium text-slate-500">{evento.type}</span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-12 px-4 text-center border border-slate-100 border-dashed rounded-[2rem] bg-slate-50/50">
               <div className="w-16 h-16 bg-slate-100 text-slate-400 rounded-full flex items-center justify-center mb-4 border border-slate-200/50">
                  <Bell size={28} />
               </div>
               <h3 className="text-lg font-display font-bold text-slate-700 mb-1">No hay eventos programados</h3>
               <p className="text-sm text-slate-500 max-w-md">Por el momento no hay actividades o eventos próximos en el cronograma. Mantente al tanto de futuras actualizaciones.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}