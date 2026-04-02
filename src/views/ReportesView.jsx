import React from 'react';
import ReportCard from '../components/ReportCard';
import { monthlyReportsData } from '../data/links';

export default function ReportesView() {
  return (
    <div className="pb-8">
      <div className="mb-10 animate-cascade" style={{ animationDelay: '0ms' }}>
        <h1 className="text-3xl md:text-4xl font-black text-slate-800 tracking-tight mb-2">Reportes Mensuales e Informes 2026</h1>
        <p className="text-base text-slate-600">Accede a las carpetas para subir tus plantillas de asistencia y evaluaciones.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {monthlyReportsData.map((report, index) => (
          <ReportCard key={index} report={report} index={index} />
        ))}
      </div>
    </div>
  );
}