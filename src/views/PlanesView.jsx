import React from 'react';
import DriveCard from '../components/DriveCard';
import { colors, MALLA_IMAGE_MAX_HEIGHT } from '../data/links';
import { ChevronLeft, BookOpen, FolderOpen } from 'lucide-react';
import conser5 from '../assets/conser5.jpg';

export default function PlanesView({ activeFolderId, onFolderOpen, onFolderClose }) {
  const carpetasEstructura = [
    { id: 'proyecto', title: 'Proyecto Académico 2019', desc: 'Estructura fundacional y objetivos de la carrera.', isLink: true, link: 'https://drive.google.com/drive/folders/1JbofE1Sb7fQjccYl-R9m0FV2WCbWHRGu' },
    { id: 'malla', title: 'Malla Curricular y Programas de Estudio', desc: 'Estructura general de las materias por año y semestre.', isLink: false, subFolders: [
        { title: 'Programas Materias Teóricas', desc: 'Materias teóricas y complementarias.', link: 'https://drive.google.com/drive/folders/EJEMPLO_TEORICAS' },
        { title: 'Programas Instrumentos', desc: 'Especialidades instrumentales.', link: 'https://drive.google.com/drive/folders/EJEMPLO_INSTRUMENTOS' }
    ]},
    { id: 'planes2025', title: 'Planes de Trabajo 2025', desc: 'Programas de estudio para la gestión 2025.', isLink: false, subFolders: [
        { title: 'Planes De Trabajo Instrumentos 2025', desc: 'Especialidades instrumentales.', link: 'https://drive.google.com/drive/folders/1V_xs9_URruNzVnCxkVbFihX7z6rS2Y9-' },
        { title: 'Planes De Trabajo Teoricas 2025', desc: 'Materias teóricas y complementarias.', link: 'https://drive.google.com/drive/folders/1A-KFI_NBxf1bvlQorJ3B74QG_-mHL4n9' }
    ]},
    { id: 'planes2026', title: 'Planes de Trabajo 2026', desc: 'Programas de estudio actualizados para la gestión 2026.', isLink: false, subFolders: [
        { title: 'Planes De Trabajo Instrumentos 2026', desc: 'Especialidades instrumentales.', link: 'https://drive.google.com/drive/folders/1r1hwhUf94aVTS0FCxtbCKR3Tvg_c0Rb-' },
        { title: 'Planes De Trabajo Teoricas 2026', desc: 'Materias teóricas y complementarias.', link: 'https://drive.google.com/drive/folders/1br3lGG1a-ltltAnZChXWk9Cmy2V7v4mm' }
    ]}
  ];

  const activeFolder = carpetasEstructura.find(f => f.id === activeFolderId);

  return (
    <div className="pb-8">
      <div className="mb-10 animate-cascade" style={{ animationDelay: '0ms' }}>
        <h1 className="text-3xl md:text-4xl font-black text-slate-800 tracking-tight mb-2">Malla, Planes y Programas</h1>
        <p className="text-base text-slate-600">Navega por las carpetas para ver la estructura curricular y los planes de trabajo.</p>
      </div>

      {!activeFolder ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {carpetasEstructura.map((folder, index) => (
            <DriveCard 
              key={folder.id} title={folder.title} desc={folder.desc} tag={folder.isLink ? "Drive" : ""} 
              icon={folder.id === 'malla' ? BookOpen : FolderOpen} link={folder.isLink ? folder.link : null} 
              onClick={() => onFolderOpen(folder.id)} delayIndex={index + 1}
            />
          ))}
        </div>
      ) : (
        <div className="animate-cascade" style={{ animationDelay: '0ms' }}>
          <button onClick={onFolderClose} className="flex items-center gap-2 text-slate-600 font-bold mb-6 active:scale-95 px-4 py-2 bg-slate-100 rounded-xl w-fit border border-slate-200 shadow-sm">
            <ChevronLeft size={20} /> Volver a Carpetas
          </button>

          <h2 className="text-2xl font-black text-slate-800 mb-8 flex items-center gap-3 border-b border-slate-200 pb-4">
            {activeFolder.id === 'malla' ? <BookOpen size={28} style={{color: colors.accent}}/> : <FolderOpen size={28} style={{color: colors.accent}}/>} 
            {activeFolder.title}
          </h2>

          {activeFolder.id === 'malla' ? (
            <div className="flex flex-col gap-8">
              <div className="w-full flex justify-center animate-cascade" style={{ animationDelay: '100ms' }}>
                  <div className="bg-white p-4 md:p-8 rounded-[2rem] shadow-xl border-4 border-white w-full max-w-5xl" style={{ backgroundColor: colors.cardBg }}>
                     <img src={conser5} alt="Malla Curricular" className="object-contain w-full" style={{ maxHeight: MALLA_IMAGE_MAX_HEIGHT }} />
                  </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
                {activeFolder.subFolders.map((sub, idx) => (
                  <DriveCard key={idx} title={sub.title} desc={sub.desc} icon={FolderOpen} link={sub.link} delayIndex={idx + 2} />
                ))}
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {activeFolder.subFolders.map((sub, idx) => (
                <DriveCard key={idx} title={sub.title} desc={sub.desc} icon={FolderOpen} link={sub.link} delayIndex={idx + 1} />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}