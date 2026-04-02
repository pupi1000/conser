import React from 'react';
import ImageCarousel from '../components/ImageCarousel';
import { colors } from '../data/links';
// Importamos la nueva imagen circular
import conser6 from '../assets/conser6.jpg'; 
import conser2 from '../assets/conser2.jpg';     
import conser3 from '../assets/conser3.png';     
import conser4 from '../assets/conser4.png'; 

export default function InicioView() {
  const carruselImages = [conser2, conser3, conser4];

  return (
    <div className="space-y-10 pb-8">
      <div className="animate-cascade p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-slate-200/60 relative overflow-hidden" style={{ backgroundColor: colors.cardBg, animationDelay: '0ms' }}>
        <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full opacity-5 pointer-events-none" style={{ backgroundColor: colors.sidebarBg }}></div>
        <div className="relative z-10 text-center md:text-left flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-3/5">
            <span className="inline-block py-1.5 px-4 rounded-full bg-slate-200/50 text-slate-700 text-xs font-bold tracking-widest uppercase mb-6 border border-slate-300/50">
              Conservatorio Plurinacional de Música
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-5 text-slate-800 leading-tight">
              Área de <span style={{ color: colors.sidebarBg }}>Música Moderna</span>
            </h1>
            <div className="prose prose-slate prose-lg text-slate-700 leading-relaxed max-w-2xl mx-auto md:mx-0">
                <p className="font-extrabold text-slate-900 text-2xl mb-4">Bienvenido</p>
                <p>Este es un centro de recursos centralizado para Docentes del Área de Música Moderna. Aquí podrás gestionar Planes de Estudio, Centralizadores de Notas y Reportes Mensuales de forma rápida y segura.</p>
            </div>
          </div>
          <div className="md:w-2/5 flex justify-center w-full mt-6 md:mt-0">
            {/* === CONTENEDOR OPTIMIZADO PARA LA NUEVA IMAGEN CIRCULAR === */}
            <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 bg-white rounded-full border-8 border-white shadow-2xl flex items-center justify-center overflow-hidden">
              <img src={conser6} alt="Logo Área de Música Moderna" className="w-full h-full object-cover opacity-95 drop-shadow-xl" />
            </div>
          </div>
        </div>
      </div>

      <div className="animate-cascade w-full aspect-[16/9] h-auto min-h-[16rem] md:min-h-[24rem]" style={{ animationDelay: '100ms' }}>
          <ImageCarousel images={carruselImages} />
      </div>

      <div className="animate-cascade p-8 md:p-12 rounded-[2.5rem] shadow-lg border border-slate-200/50" style={{ backgroundColor: colors.cardBg, animationDelay: '200ms' }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-slate-700 leading-relaxed prose prose-slate max-w-none">
            <div>
                <h2 className="text-3xl font-black text-slate-800 tracking-tight mb-6 text-center">Visión</h2>
                <p className="text-justify md:text-left">El Conservatorio Plurinacional de Música tiene como visión el consolidarse como el referente nacional de la formación musical, reflejada en una educación de calidad con excelencia académica, adoptando los nuevos paradigmas de la educación tanto a nivel nacional como internacional sin olvidarse de la deuda con generaciones pasadas.</p>
            </div>
            <div>
                <h2 className="text-3xl font-black text-slate-800 tracking-tight mb-6 text-center">Misión</h2>
                <p className="text-justify md:text-left">El Conservatorio Plurinacional de Música es una institución especializada en el campo musical con calidad de Instituto de Formación Artística y Escuela Boliviana Intercultural, que adecúa su estructura institucional para desarrollar programas de Formación Artística Musical, en el Área Académica a Nivel de Capacitación, Técnico Medio y Técnico Superior y en el Área Moderna a nivel Técnico Medio y Técnico Superior; y en ambas áreas programas especializados de formación profesional a Nivel Licenciatura. Se dedica a la formación integral de músicos en los campos de la interpretación de la música académica y moderna. Su razón de existir es el liderazgo en la vida musical y cultural de Bolivia, orientándose al desarrollo de las potencialidades y talentos en la diversidad de opciones de la educación musical.</p>
            </div>
        </div>
      </div>
    </div>
  );
}