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
        <h1 className="text-3xl md:text-4xl font-black text-slate-800 tracking-tight mb-2">Calendario Académico y Eventos</h1>
        <p className="text-base text-slate-600">Cronograma oficial y actividades de la gestión 2026.</p>
      </div>

      <div className="flex flex-col gap-10">
        
        {/* === SECCIÓN DEL CALENDARIO OPTIMIZADA PARA MÓVIL === */}
        <div className="animate-cascade bg-white p-4 sm:p-6 md:p-10 rounded-[2rem] md:rounded-[2.5rem] shadow-lg border border-slate-200/60" style={{ backgroundColor: colors.cardBg, animationDelay: '100ms' }}>
          <h2 className="text-2xl font-black text-slate-800 tracking-tight mb-6 flex items-center gap-3 border-b border-slate-200 pb-4">
            <CalendarDays size={28} style={{ color: colors.accent }} /> Calendario Oficial 2026
          </h2>
          
          {/* Contenedor sin márgenes internos para que el calendario sea lo más grande posible */}
          <div className="flex flex-col w-full max-w-5xl mx-auto bg-white rounded-xl md:rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
             <img src={calendario1} alt="Calendario Parte 1" className="w-full block" />
             <img src={calendario2} alt="Calendario Parte 2" className="w-full block border-t border-slate-200" />
             <img src={calendario3} alt="Calendario Parte 3" className="w-full block border-t border-slate-200" />
          </div>
        </div>

        {/* === SECCIÓN DE ACTIVIDADES ARTÍSTICAS === */}
        <div className="animate-cascade bg-white p-6 sm:p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] shadow-lg border border-slate-200/60" style={{ backgroundColor: colors.cardBg, animationDelay: '200ms' }}>
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-200/60">
            <Bell size={26} style={{ color: colors.accent }} />
            <h2 className="text-2xl font-black text-slate-800 tracking-tight">Actividades artísticas</h2>
          </div>

          <a 
            href="https://drive.google.com/drive/folders/17Wl540uYPfB8BQtaZE3dKzs6YIXByN4S" target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-between p-5 mb-8 rounded-2xl shadow-md border border-slate-200 active:scale-[0.98] transition-transform bg-white"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-md" style={{ backgroundColor: colors.sidebarBg }}>
                <FolderOpen size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-800 leading-tight">Acceso al drive</h3>
                <p className="text-xs sm:text-sm text-slate-500">Accede a la carpeta oficial en Google Drive</p>
              </div>
            </div>
            <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400">
              <ExternalLink size={16} />
            </div>
          </a>
          
          {eventosData.length > 0 ? (
            <div className="space-y-4">
              {eventosData.map((evento, index) => (
                <div key={index} className="flex items-center p-4 rounded-2xl active:bg-slate-100 transition-colors border border-slate-100 bg-white shadow-sm">
                  <div className="w-20 text-center border-r border-slate-200/80 pr-4 mr-4 shrink-0">
                    <span className="block text-2xl font-black leading-none" style={{ color: colors.sidebarBg }}>{evento.date.split(' ')[0]}</span>
                    <span className="block text-[11px] font-bold text-slate-400 uppercase mt-1.5">{evento.date.split(' ')[1]}</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-800 leading-tight mb-1">{evento.title}</h4>
                    <span className="text-sm font-medium text-slate-500">{evento.type}</span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-10 px-4 text-center border-t border-slate-100 border-dashed">
               <div className="w-16 h-16 bg-slate-50 text-slate-300 rounded-full flex items-center justify-center mb-4">
                  <Bell size={32} />
               </div>
               <h3 className="text-lg font-bold text-slate-700 mb-2">No hay eventos programados</h3>
               <p className="text-sm text-slate-500 max-w-md">Por el momento no hay actividades o eventos próximos en el cronograma. Mantente al tanto de futuras actualizaciones.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}