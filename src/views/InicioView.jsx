import React from 'react';
import ImageCarousel from '../components/ImageCarousel';
import { colors } from '../data/links';
import { Compass, Eye } from 'lucide-react';
// Importamos la nueva imagen circular
import conser6 from '../assets/conser6.jpg'; 
import conser2 from '../assets/conser2.jpg';     
import conser3 from '../assets/conser3.png';     
import conser4 from '../assets/conser4.png'; 

export default function InicioView() {
  const carruselImages = [conser2, conser3, conser4];

  return (
    <div className="space-y-12 pb-8">
      {/* CARD DE BIENVENIDA PREMIUM */}
      <div 
        className="animate-cascade p-8 md:p-14 rounded-[2.5rem] shadow-[0_15px_40px_rgba(0,0,0,0.04)] border border-slate-200/50 relative overflow-hidden transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)]" 
        style={{ 
          background: `linear-gradient(135deg, ${colors.cardBg} 0%, #FAF6EE 100%)`, 
          animationDelay: '0ms' 
        }}
      >
        {/* Círculo decorativo */}
        <div 
          className="absolute -top-24 -right-24 w-80 h-80 rounded-full opacity-[0.03] pointer-events-none" 
          style={{ backgroundColor: colors.sidebarBg }}
        ></div>
        <div 
          className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full opacity-[0.02] pointer-events-none" 
          style={{ backgroundColor: colors.accent }}
        ></div>
        
        <div className="relative z-10 text-center md:text-left flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-3/5">
            <span 
              className="inline-block py-1.5 px-4 rounded-full text-[10px] font-display font-extrabold tracking-[0.15em] uppercase mb-6 border"
              style={{ 
                backgroundColor: `${colors.accent}12`, 
                borderColor: `${colors.accent}40`,
                color: '#A88216'
              }}
            >
              Conservatorio Plurinacional de Música
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-black tracking-tight mb-5 text-slate-800 leading-[1.1]">
              Área de <span className="block mt-1 bg-clip-text text-transparent bg-gradient-to-r" style={{ backgroundImage: `linear-gradient(to right, ${colors.sidebarBg}, #306D58)` }}>Música Moderna</span>
            </h1>
            <div className="prose prose-slate prose-lg text-slate-600 leading-relaxed max-w-2xl mx-auto md:mx-0">
                <p className="font-display font-extrabold text-slate-800 text-2xl mb-4">Bienvenido</p>
                <p className="text-[15px] sm:text-base font-normal">
                  Este es un centro de recursos centralizado para Docentes del Área de Música Moderna. Aquí podrás gestionar Planes de Estudio, Centralizadores de Notas y Reportes Mensuales de forma rápida, intuitiva y segura.
                </p>
            </div>
          </div>
          <div className="md:w-2/5 flex justify-center w-full mt-6 md:mt-0">
            {/* Imagen circular optimizada */}
            <div 
              className="w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80 bg-white rounded-full p-2.5 shadow-[0_20px_50px_rgba(22,51,41,0.15)] flex items-center justify-center overflow-hidden transition-all duration-500 hover:scale-[1.03] group"
              style={{ border: `3px solid ${colors.accent}40` }}
            >
              <div className="w-full h-full rounded-full overflow-hidden relative">
                <img 
                  src={conser6} 
                  alt="Logo Área de Música Moderna" 
                  className="w-full h-full object-cover opacity-95 transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CARRUSEL DE IMÁGENES */}
      <div className="animate-cascade w-full aspect-[16/9] h-auto min-h-[16rem] md:min-h-[26rem] shadow-xl rounded-[2.5rem]" style={{ animationDelay: '100ms' }}>
          <ImageCarousel images={carruselImages} />
      </div>

      {/* VISIÓN Y MISIÓN REDISEÑADAS EN DOS TARJETAS MODERNAS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* TARJETA VISIÓN */}
        <div 
          className="animate-cascade p-8 md:p-10 rounded-[2.5rem] shadow-[0_10px_35px_rgba(0,0,0,0.03)] border border-slate-200/50 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_15px_45px_rgba(0,0,0,0.06)] hover:-translate-y-1" 
          style={{ backgroundColor: colors.cardBg, animationDelay: '200ms' }}
        >
          <div>
            <div className="flex items-center gap-4 mb-6 border-b border-slate-100 pb-5">
              <div 
                className="w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-md shrink-0" 
                style={{ backgroundColor: colors.accent }}
              >
                <Eye size={24} />
              </div>
              <h2 className="text-2xl font-display font-black text-slate-800 tracking-tight">Visión</h2>
            </div>
            <p className="text-slate-600 text-[15px] leading-relaxed text-justify">
              El Conservatorio Plurinacional de Música tiene como visión el consolidarse como el referente nacional de la formación musical, reflejada en una educación de calidad con excelencia académica, adoptando los nuevos paradigmas de la educación tanto a nivel nacional como internacional sin olvidarse de la deuda con generaciones pasadas.
            </p>
          </div>
        </div>

        {/* TARJETA MISIÓN */}
        <div 
          className="animate-cascade p-8 md:p-10 rounded-[2.5rem] shadow-[0_10px_35px_rgba(0,0,0,0.03)] border border-slate-200/50 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_15px_45px_rgba(0,0,0,0.06)] hover:-translate-y-1" 
          style={{ backgroundColor: colors.cardBg, animationDelay: '250ms' }}
        >
          <div>
            <div className="flex items-center gap-4 mb-6 border-b border-slate-100 pb-5">
              <div 
                className="w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-md shrink-0" 
                style={{ backgroundColor: colors.sidebarBg }}
              >
                <Compass size={24} />
              </div>
              <h2 className="text-2xl font-display font-black text-slate-800 tracking-tight">Misión</h2>
            </div>
            <p className="text-slate-600 text-[14px] leading-relaxed text-justify font-sans">
              El Conservatorio Plurinacional de Música es una institución especializada en el campo musical con calidad de Instituto de Formación Artística y Escuela Boliviana Intercultural, que adecúa su estructura institucional para desarrollar programas de Formación Artística Musical, en el Área Académica a Nivel de Capacitación, Técnico Medio y Técnico Superior y en el Área Moderna a nivel Técnico Medio y Técnico Superior; y en ambas áreas programas especializados de formación profesional a Nivel Licenciatura. Se dedica a la formación integral de músicos en los campos de la interpretación de la música académica y moderna. Su razón de existir es el liderazgo en la vida musical y cultural de Bolivia, orientándose al desarrollo de las potencialidades y talentos en la diversidad de opciones de la educación musical.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}