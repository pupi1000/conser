import { useState, useEffect } from 'react'; 
import { 
  Home, FileText, BarChart3, HelpCircle, 
  Menu, X, FolderOpen, BookOpen, Download, CalendarCheck, CalendarDays, Bell,
  ChevronLeft, ChevronRight, ArrowRight, ExternalLink
} from 'lucide-react';

// === IMPORTACIÓN DE IMÁGENES ===
import logoCoplumu from './assets/conser1.png'; 
import conser2 from './assets/conser2.jpg';     
import conser3 from './assets/conser3.png';     
import conser4 from './assets/conser4.png'; 
import conser5 from './assets/conser5.jpg';    
import calendario1 from './assets/calendario1.jpg'; 
import calendario2 from './assets/calendario2.jpg';
import calendario3 from './assets/calendario3.jpg';

// === CONFIGURACIÓN DE COLORES ===
const colors = {
  sidebarBg: '#163329',    
  activeNav: '#234D3F',    
  accent: '#D4AF37',       
  mainBg: '#FDFBF7',       
  cardBg: '#FFFDF5',       
  specialBg: '#FDF8E8'     
};

// === CONFIGURACIÓN DE TAMAÑOS ===
const MALLA_IMAGE_MAX_HEIGHT = '550px'; 

// === DATOS DE ENLACES ===
const monthlyReportsData = [
  { month: 'Febrero', num: '02', driveLink: 'https://drive.google.com/drive/folders/15rWNm4bNTjCQXmk4jWY91HbbWiBI_6Lt' },
  { month: 'Marzo', num: '03', driveLink: 'https://drive.google.com/drive/folders/1BdEPrL9bmfzTYb4C0Djqx8U8iDQGqvBo' },
  { month: 'Abril', num: '04', driveLink: 'https://drive.google.com/drive/folders/1bTHmAC4KhqZz9vgMqyV2AO5PnHAaHmyb' },
  { month: 'Mayo', num: '05', driveLink: 'https://drive.google.com/drive/folders/1dr3ZRvjKiKSAyNujx9GpxDTgaZfJlocV' },
  { month: 'Junio', num: '06', driveLink: 'https://drive.google.com/drive/folders/1j6hUX7br2UJnKss8p6zN8c5yoia0m6_c' },
  { month: 'Informes Semestrales', num: '', driveLink: 'https://drive.google.com/drive/folders/1wrx4sNh5FN8SWS8XGEmXd6P4IWIc87r3', isSpecial: true },
  { month: 'Julio', num: '07', driveLink: 'https://drive.google.com/drive/folders/1la8gC-37OUeJ6NMxWXyGipbr4v-6HBqZ' },
  { month: 'Agosto', num: '08', driveLink: 'https://drive.google.com/drive/folders/1bYwTmxkVlZmjw1cb5fruvgTx7DBd3Znx' },
  { month: 'Septiembre', num: '09', driveLink: 'https://drive.google.com/drive/folders/1svN-_ict_p-S6PxYvzLq3_t3R9qqafFj' },
  { month: 'Octubre', num: '10', driveLink: 'https://drive.google.com/drive/folders/1N5UafH6Hg1xIENuR_a1d-nISDkeQoM1N' },
  { month: 'Noviembre', num: '11', driveLink: 'https://drive.google.com/drive/folders/1Mj4Si_0NQzafkw_hklaUzG6cW_4kN6TK' },
  { month: 'Informes Finales', num: '', driveLink: 'https://drive.google.com/drive/folders/1ndrw3GaNLAIVS1pr7a6Cfandzl-b7yeX', isSpecial: true },
];

const centralizadoresData = [
  { title: 'Notas Semestrales', desc: 'Calificaciones consolidadas del 1er y 2do semestre.', type: 'Semestral', link: 'https://drive.google.com/drive/folders/1M-JvgfmSYD8RoTMIuTfWVPldLjXNGAm7' },
  { title: 'Notas Anuales', desc: 'Calificaciones de materias con modalidad anual.', type: 'Anual', link: 'https://drive.google.com/drive/folders/1_Lnsfu7CxiQOKQ8rXo9Vc7goT2uKi1as' },
];

const eventosData = []; 

// === COMPONENTES PEQUEÑOS ===

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000); 
    return () => clearInterval(slideInterval); 
  }, [currentIndex]);

  return (
    <div className="w-full h-full relative group overflow-hidden rounded-2xl shadow-xl">
      <div 
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500 transition-all border-4 border-white"
      ></div>

      <div className="hidden md:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-4 text-2xl rounded-full p-2 bg-black/30 text-white cursor-pointer hover:bg-black/50 transition-colors">
        <ChevronLeft onClick={prevSlide} size={28} />
      </div>
      <div className="hidden md:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-4 text-2xl rounded-full p-2 bg-black/30 text-white cursor-pointer hover:bg-black/50 transition-colors">
        <ChevronRight onClick={nextSlide} size={28} />
      </div>

      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {images.map((slide, slideIndex) => (
          <div 
            key={slideIndex} 
            onClick={() => setCurrentIndex(slideIndex)}
            className={`cursor-pointer rounded-full transition-all duration-300 ${currentIndex === slideIndex ? 'w-6 h-2' : 'w-2 h-2'}`}
            style={{ backgroundColor: currentIndex === slideIndex ? colors.accent : 'rgba(255,255,255,0.6)' }}
          ></div>
        ))}
      </div>
    </div>
  );
};

const NavItem = ({ icon: Icon, label, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`w-full flex items-center gap-4 px-6 py-4 rounded-xl text-left text-[15px] transition-colors duration-150 group relative overflow-hidden active:scale-[0.98]
      ${isActive 
        ? 'font-bold text-white shadow-md' 
        : 'font-medium text-slate-300 hover:text-white hover:bg-white/10'}`}
    style={isActive ? { backgroundColor: colors.activeNav } : {}}
  >
    {isActive && <div className="absolute left-0 top-0 h-full w-1.5" style={{ backgroundColor: colors.accent }}></div>}
    <Icon size={22} className={isActive ? `text-[${colors.accent}]` : 'text-slate-400 group-hover:text-white transition-colors'} />
    <span className="flex-grow">{label}</span>
  </button>
);

// === VISTAS ===

const InicioView = () => {
  const carruselImages = [conser2, conser3, conser4];

  return (
    <div className="animate-fade-in space-y-10 pb-8">
      <div className="p-8 md:p-12 rounded-[2rem] shadow-xl border border-slate-200/60 relative overflow-hidden" style={{ backgroundColor: colors.cardBg }}>
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
            <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 bg-white rounded-full border-8 border-white shadow-2xl flex items-center justify-center p-6 sm:p-8">
              <img src={logoCoplumu} alt="Logo COPLUMU" className="w-full h-full object-contain opacity-95 drop-shadow-xl" />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full aspect-[16/9] h-auto min-h-[16rem] md:min-h-[24rem]">
          <ImageCarousel images={carruselImages} />
      </div>

      <div className="p-8 md:p-12 rounded-[1.5rem] shadow-lg border border-slate-200/50" style={{ backgroundColor: colors.cardBg }}>
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
};

const ReportesView = () => (
  <div className="animate-fade-in pb-8">
    <div className="mb-8">
      <h1 className="text-3xl md:text-4xl font-black text-slate-800 tracking-tight mb-2">Reportes Mensuales e Informes 2026</h1>
      <p className="text-base text-slate-600">Accede a las carpetas para subir tus plantillas de asistencia y evaluaciones.</p>
    </div>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {monthlyReportsData.map((report, index) => (
        <a 
          key={index} 
          href={report.driveLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className={`block relative p-6 rounded-2xl shadow-sm border hover:shadow-md active:scale-[0.97] transition-all duration-150 overflow-hidden ${report.isSpecial ? 'border-yellow-200' : 'border-slate-200/80'}`} 
          style={{ backgroundColor: report.isSpecial ? colors.specialBg : colors.cardBg }}
        >
          <div className="absolute top-0 left-0 w-full h-1" style={{ backgroundColor: colors.accent }}></div>
          <div className="absolute -bottom-4 -right-1 text-[5.5rem] font-black opacity-[0.04] pointer-events-none text-black">
            {report.num}
          </div>
          <div className="relative z-10 flex flex-col h-full">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-md" style={{ backgroundColor: report.isSpecial ? colors.accent : colors.sidebarBg }}>
                <CalendarCheck size={26} strokeWidth={2.5} />
              </div>
              <div>
                 <div className={`text-xs font-bold tracking-widest uppercase mb-0.5 ${report.isSpecial ? 'text-yellow-700' : 'text-slate-500'}`}>
                   {report.isSpecial ? '' : 'Mes'} {report.num}
                 </div>
                 <div className={`font-extrabold text-slate-800 leading-tight ${report.isSpecial ? 'text-lg' : 'text-xl'}`}>
                   {report.month}
                 </div>
              </div>
            </div>
            <div className="mt-auto w-full flex items-center justify-center gap-2 text-slate-700 font-bold py-3.5 px-4 rounded-xl border shadow-sm transition-colors group-hover:bg-white" style={{ backgroundColor: 'rgba(255,255,255,0.7)', borderColor: report.isSpecial ? '#FDE68A' : 'rgba(226, 232, 240, 0.8)' }}>
              <FolderOpen size={18} strokeWidth={2.5} style={{ color: report.isSpecial ? colors.accent : colors.sidebarBg }} /> 
              Abrir Carpeta
            </div>
          </div>
        </a>
      ))}
    </div>
  </div>
);

const CentralizadoresView = () => (
  <div className="animate-fade-in pb-8">
    <div className="mb-8">
      <h1 className="text-3xl md:text-4xl font-black text-slate-800 tracking-tight mb-2">Centralizadores de Notas</h1>
      <p className="text-base text-slate-600">Registros de calificaciones de la gestión en curso.</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
      {centralizadoresData.map((item) => (
        <a key={item.title} href={item.link} target="_blank" rel="noopener noreferrer" className="block relative p-8 rounded-[2rem] shadow-sm border border-slate-200/80 hover:shadow-xl hover:-translate-y-1 active:scale-[0.98] transition-all duration-300 overflow-hidden group" style={{ backgroundColor: colors.cardBg }}>
          <div className="absolute top-0 left-0 w-full h-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ backgroundColor: colors.sidebarBg }}></div>
          <div className="flex items-start justify-between mb-8">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-md text-white transition-transform duration-300 group-hover:scale-110" style={{ backgroundColor: colors.sidebarBg }}>
              <BarChart3 size={32} />
            </div>
            <span className="px-4 py-1.5 text-xs font-bold rounded-full border bg-white shadow-sm" style={{ color: colors.accent, borderColor: colors.accent }}>
              {item.type}
            </span>
          </div>
          <div className="flex flex-col h-full">
            <h3 className="text-2xl font-black text-slate-800 mb-3 group-hover:text-[#163329] transition-colors">{item.title}</h3>
            <p className="text-slate-600 mb-8 flex-grow leading-relaxed">{item.desc}</p>
            <div className="flex items-center justify-between border-t border-slate-200/60 pt-5 mt-auto">
              <span className="text-sm font-bold text-slate-500 group-hover:text-slate-800 transition-colors">Acceder al Drive</span>
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-100 group-hover:bg-[#163329] text-[#163329] group-hover:text-white transition-colors duration-300">
                <ArrowRight size={18} />
              </div>
            </div>
          </div>
        </a>
      ))}
    </div>

    <a 
      href="https://sic.coplumu.edu.bo" 
      target="_blank" 
      rel="noopener noreferrer"
      className="flex flex-col sm:flex-row items-center justify-between p-6 md:p-8 rounded-[2rem] shadow-md hover:shadow-xl transition-all duration-300 group border border-slate-200/80 active:scale-[0.98] overflow-hidden relative"
      style={{ backgroundColor: colors.sidebarBg }}
    >
      <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none transition-transform duration-500 group-hover:scale-110"></div>
      <div className="flex flex-col sm:flex-row items-center gap-5 relative z-10 w-full sm:w-auto text-center sm:text-left">
        <div className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-md bg-white/10 text-white shrink-0">
          <ExternalLink size={28} />
        </div>
        <div>
          <h3 className="text-xl md:text-2xl font-black text-white mb-1">Enlace al Sistema del Conservatorio</h3>
          <p className="text-sm text-slate-300 font-medium tracking-wide">Acceso directo a la plataforma institucional (SIC)</p>
        </div>
      </div>
      <div className="hidden sm:flex w-12 h-12 rounded-full items-center justify-center bg-white/10 text-white group-hover:bg-white group-hover:text-[#163329] transition-colors duration-300 relative z-10 shrink-0">
        <ArrowRight size={20} />
      </div>
    </a>
  </div>
);

const PlanesView = ({ activeFolderId, onFolderOpen, onFolderClose }) => {
  const carpetasEstructura = [
    {
      id: 'proyecto',
      title: 'Proyecto Académico 2019',
      desc: 'Estructura fundacional y objetivos de la carrera.',
      isLink: true,
      link: 'https://drive.google.com/drive/folders/1JbofE1Sb7fQjccYl-R9m0FV2WCbWHRGu'
    },
    {
      id: 'malla',
      title: 'Malla Curricular y Programas de Estudio',
      desc: 'Estructura general de las materias por año y semestre.',
      isLink: false,
      // NUEVAS SUBCARPETAS AGREGADAS AQUÍ
      subFolders: [
        { title: 'Programas Materias Teóricas', desc: 'Materias teóricas y complementarias.', link: 'https://drive.google.com/drive/folders/EJEMPLO_TEORICAS' }, // Reemplaza este link
        { title: 'Programas Instrumentos', desc: 'Especialidades instrumentales.', link: 'https://drive.google.com/drive/folders/EJEMPLO_INSTRUMENTOS' } // Reemplaza este link
      ]
    },
    {
      id: 'planes2025',
      title: 'Planes de Trabajo 2025',
      desc: 'Programas de estudio para la gestión 2025.',
      isLink: false,
      subFolders: [
        { title: 'Planes De Trabajo Instrumentos 2025', desc: 'Especialidades instrumentales.', link: 'https://drive.google.com/drive/folders/1V_xs9_URruNzVnCxkVbFihX7z6rS2Y9-' },
        { title: 'Planes De Trabajo Teoricas 2025', desc: 'Materias teóricas y complementarias.', link: 'https://drive.google.com/drive/folders/1A-KFI_NBxf1bvlQorJ3B74QG_-mHL4n9' }
      ]
    },
    {
      id: 'planes2026',
      title: 'Planes de Trabajo 2026',
      desc: 'Programas de estudio actualizados para la gestión 2026.',
      isLink: false,
      subFolders: [
        { title: 'Planes De Trabajo Instrumentos 2026', desc: 'Especialidades instrumentales.', link: 'https://drive.google.com/drive/folders/1r1hwhUf94aVTS0FCxtbCKR3Tvg_c0Rb-' },
        { title: 'Planes De Trabajo Teoricas 2026', desc: 'Materias teóricas y complementarias.', link: 'https://drive.google.com/drive/folders/1br3lGG1a-ltltAnZChXWk9Cmy2V7v4mm' }
      ]
    }
  ];

  const activeFolder = carpetasEstructura.find(f => f.id === activeFolderId);

  return (
    <div className="animate-fade-in pb-8">
      <div className="mb-10">
        <h1 className="text-3xl md:text-4xl font-black text-slate-800 tracking-tight mb-2">Malla, Planes y Programas</h1>
        <p className="text-base text-slate-600">Navega por las carpetas para ver la estructura curricular y los planes de trabajo.</p>
      </div>

      {!activeFolder ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {carpetasEstructura.map((folder) => (
            <div 
              key={folder.id}
              onClick={() => folder.isLink ? window.open(folder.link, '_blank') : onFolderOpen(folder.id)}
              className="cursor-pointer block p-7 rounded-3xl shadow-sm border border-slate-200/80 active:scale-[0.98] transition-all duration-150 overflow-hidden group h-full flex flex-col"
              style={{ backgroundColor: colors.cardBg }}
            >
              <div className="absolute top-0 left-0 w-full h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ backgroundColor: colors.sidebarBg }}></div>
              
              <div className="flex items-start justify-between mb-6 border-b border-slate-100 pb-5">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-md text-white" style={{ backgroundColor: colors.sidebarBg }}>
                  {folder.id === 'malla' ? <BookOpen size={26} /> : <FolderOpen size={26} strokeWidth={2.5} />}
                </div>
                {folder.isLink && <span className="text-[11px] font-bold tracking-widest text-slate-400 uppercase mt-2 group-hover:text-[#163329] transition-colors">Drive</span>}
              </div>
              
              <h3 className="text-xl font-extrabold text-slate-800 mb-2 leading-tight flex-grow group-hover:text-[#163329] transition-colors">{folder.title}</h3>
              <p className="text-sm text-slate-500 mb-6 flex-grow leading-relaxed group-hover:text-slate-700 transition-colors">{folder.desc}</p>
              
              <div className="flex items-center text-sm font-bold gap-2 mt-auto pt-4 border-t border-slate-100" style={{ color: colors.sidebarBg }}>
                {folder.isLink ? <ExternalLink size={18} /> : <FolderOpen size={18} />} 
                <span className="group-hover:translate-x-1 transition-transform">{folder.isLink ? 'Abrir Enlace' : 'Abrir Carpeta'}</span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="animate-fade-in-up">
          <button 
            onClick={onFolderClose}
            className="flex items-center gap-2 text-slate-600 font-bold mb-6 hover:text-slate-900 transition-colors active:scale-95 px-4 py-2 bg-slate-100 rounded-xl w-fit border border-slate-200 shadow-sm"
          >
            <ChevronLeft size={20} /> Volver a Carpetas
          </button>

          <h2 className="text-2xl font-black text-slate-800 mb-8 flex items-center gap-3 border-b border-slate-200 pb-4">
            {activeFolder.id === 'malla' ? <BookOpen size={28} style={{color: colors.accent}}/> : <FolderOpen size={28} style={{color: colors.accent}}/>} 
            {activeFolder.title}
          </h2>

          {activeFolder.id === 'malla' ? (
            <div className="flex flex-col gap-8">
              {/* IMAGEN DE LA MALLA */}
              <div className="w-full flex justify-center">
                  <div className="bg-white p-6 md:p-10 rounded-[3rem] shadow-xl border-4 border-white flex justify-center items-center overflow-hidden w-full max-w-5xl" style={{ backgroundColor: colors.cardBg }}>
                     <img 
                       src={conser5} 
                       alt="Malla Curricular Completa" 
                       className="object-contain drop-shadow-md w-full" 
                       style={{ maxHeight: MALLA_IMAGE_MAX_HEIGHT }} 
                     />
                  </div>
              </div>
              
              {/* NUEVAS CARPETAS DE PROGRAMAS */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
                {activeFolder.subFolders.map((sub, idx) => (
                  <a 
                    key={idx}
                    href={sub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-7 rounded-3xl shadow-sm border border-slate-200/80 active:scale-[0.98] transition-all duration-150 overflow-hidden group"
                    style={{ backgroundColor: colors.cardBg }}
                  >
                    <div className="absolute top-0 left-0 w-full h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ backgroundColor: colors.accent }}></div>
                    <div className="flex items-center gap-4 mb-4">
                       <div className="w-14 h-14 rounded-xl flex items-center justify-center shadow-sm text-white" style={{ backgroundColor: colors.sidebarBg }}>
                         <FolderOpen size={24} />
                       </div>
                       <h3 className="text-lg font-bold text-slate-800 group-hover:text-[#163329] transition-colors leading-tight">{sub.title}</h3>
                    </div>
                    <p className="text-sm text-slate-500 mb-6">{sub.desc}</p>
                    <div className="flex items-center text-sm font-bold gap-2 text-slate-700 bg-white py-3.5 px-4 rounded-xl border border-slate-200 group-hover:bg-slate-50 transition-colors shadow-sm justify-center">
                      <ExternalLink size={18} style={{ color: colors.sidebarBg }}/> 
                      Abrir en Google Drive
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {activeFolder.subFolders.map((sub, idx) => (
                <a 
                  key={idx}
                  href={sub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-7 rounded-3xl shadow-sm border border-slate-200/80 active:scale-[0.98] transition-all duration-150 overflow-hidden group"
                  style={{ backgroundColor: colors.cardBg }}
                >
                  <div className="absolute top-0 left-0 w-full h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ backgroundColor: colors.accent }}></div>
                  <div className="flex items-center gap-4 mb-4">
                     <div className="w-14 h-14 rounded-xl flex items-center justify-center shadow-sm text-white" style={{ backgroundColor: colors.sidebarBg }}>
                       <FolderOpen size={24} />
                     </div>
                     <h3 className="text-lg font-bold text-slate-800 group-hover:text-[#163329] transition-colors leading-tight">{sub.title}</h3>
                  </div>
                  <p className="text-sm text-slate-500 mb-6">{sub.desc}</p>
                  <div className="flex items-center text-sm font-bold gap-2 text-slate-700 bg-white py-3.5 px-4 rounded-xl border border-slate-200 group-hover:bg-slate-50 transition-colors shadow-sm justify-center">
                    <ExternalLink size={18} style={{ color: colors.sidebarBg }}/> 
                    Abrir en Google Drive
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const CalendarioView = () => (
  <div className="animate-fade-in pb-12">
    <div className="mb-10">
      <h1 className="text-3xl md:text-4xl font-black text-slate-800 tracking-tight mb-2">Calendario Académico y Eventos</h1>
      <p className="text-base text-slate-600">Cronograma oficial y eventos importantes de la gestión 2026.</p>
    </div>

    <div className="flex flex-col gap-10">
      <div className="bg-white p-6 md:p-10 rounded-[2.5rem] shadow-lg border border-slate-200/60" style={{ backgroundColor: colors.cardBg }}>
        <h2 className="text-2xl font-black text-slate-800 tracking-tight mb-8 flex items-center gap-3 border-b border-slate-200 pb-4">
          <CalendarDays size={28} style={{ color: colors.accent }} />
          Calendario Oficial 2026
        </h2>
        
        <div className="flex flex-col gap-6 items-center w-full max-w-4xl mx-auto bg-slate-50 p-4 md:p-8 rounded-3xl border border-slate-200 shadow-inner">
           <img src={calendario1} alt="Calendario Parte 1" className="w-full object-contain rounded-xl shadow-md border border-slate-300/50 bg-white" />
           <img src={calendario2} alt="Calendario Parte 2" className="w-full object-contain rounded-xl shadow-md border border-slate-300/50 bg-white" />
           <img src={calendario3} alt="Calendario Parte 3" className="w-full object-contain rounded-xl shadow-md border border-slate-300/50 bg-white" />
        </div>
      </div>

      <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-lg border border-slate-200/60" style={{ backgroundColor: colors.cardBg }}>
        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-200/60">
          <Bell size={26} style={{ color: colors.accent }} />
          <h2 className="text-2xl font-black text-slate-800 tracking-tight">Actividades artísticas</h2>
        </div>

        <a 
          href="https://drive.google.com/drive/folders/17Wl540uYPfB8BQtaZE3dKzs6YIXByN4S" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center justify-between p-5 mb-8 rounded-2xl shadow-sm border border-slate-200/80 hover:shadow-md active:scale-[0.98] transition-all duration-300 group bg-white"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-md transition-transform group-hover:scale-105" style={{ backgroundColor: colors.sidebarBg }}>
              <FolderOpen size={24} />
            </div>
            <div>
              {/* CAMBIO DE TEXTO A "Acceso al drive" */}
              <h3 className="text-lg font-bold text-slate-800 group-hover:text-[#163329] transition-colors leading-tight">Acceso al drive</h3>
              <p className="text-xs sm:text-sm text-slate-500">Accede a la carpeta oficial en Google Drive</p>
            </div>
          </div>
          <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-[#163329] group-hover:text-white transition-colors duration-300">
            <ExternalLink size={16} />
          </div>
        </a>
        
        {eventosData.length > 0 ? (
          <div className="space-y-4">
            {eventosData.map((evento, index) => (
              <div key={index} className="flex items-center p-4 rounded-2xl active:bg-slate-100 transition-colors border border-slate-100 bg-white shadow-sm">
                <div className="w-20 text-center border-r border-slate-200/80 pr-4 mr-4 shrink-0">
                  <span className="block text-xl font-black leading-none" style={{ color: colors.sidebarBg }}>{evento.date.split(' ')[0]}</span>
                  <span className="block text-[10px] font-bold text-slate-400 uppercase mt-1.5">{evento.date.split(' ')[1]}</span>
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

// === COMPONENTE PRINCIPAL APP ===

export default function App() {
  const [activeView, setActiveView] = useState('Inicio');
  const [activeFolderId, setActiveFolderId] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    window.history.replaceState({ view: 'Inicio', folderId: null }, '');

    const handlePopState = (event) => {
      if (event.state) {
        setActiveView(event.state.view || 'Inicio');
        setActiveFolderId(event.state.folderId || null);
      } else {
        setActiveView('Inicio');
        setActiveFolderId(null);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navItems = [
    { view: 'Inicio', label: 'Inicio', icon: Home },
    { view: 'Reportes', label: 'Reportes e Informes', icon: FileText },
    { view: 'Centralizadores', label: 'Centralizadores de Notas', icon: BarChart3 },
    { view: 'Planes', label: 'Malla, Planes y Programas', icon: HelpCircle },
    { view: 'Calendario', label: 'Calendario y Eventos', icon: CalendarDays },
  ];

  const handleNavClick = (view) => {
    if (activeView === view && activeFolderId === null) return;
    setActiveView(view);
    setActiveFolderId(null);
    setIsMobileMenuOpen(false);
    window.history.pushState({ view, folderId: null }, '');
  };

  const handleFolderOpen = (folderId) => {
    setActiveFolderId(folderId);
    window.history.pushState({ view: 'Planes', folderId }, '');
  };

  const handleFolderClose = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row font-sans" style={{ backgroundColor: colors.mainBg }}>
      
      <header className="md:hidden sticky top-0 z-50 p-4 flex items-center justify-between shadow-md" style={{ backgroundColor: colors.sidebarBg }}>
        <button onClick={() => handleNavClick('Inicio')} className="flex items-center gap-3 font-bold text-lg text-white focus:outline-none active:scale-95 transition-transform text-left">
          <div className="bg-white rounded-full p-0.5">
             <img src={logoCoplumu} alt="Logo" className="w-8 h-8 rounded-full" />
          </div>
          <span className="tracking-wide">COPLUMU <span style={{ color: colors.accent }}>Moderna</span></span>
        </button>

        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white p-2 focus:outline-none active:scale-95 transition-transform relative z-50">
          {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </header>

      <aside 
        className={`p-6 flex flex-col transition-transform duration-300 ease-in-out shadow-2xl
          fixed top-[68px] right-0 bottom-0 w-full z-40
          md:relative md:top-0 md:right-auto md:bottom-auto md:w-[280px] lg:w-[300px]
          ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'}`}
        style={{ backgroundColor: colors.sidebarBg }}
      >
        <button onClick={() => handleNavClick('Inicio')} className="hidden md:flex items-center gap-4 mb-10 pb-8 border-b border-white/10 w-full focus:outline-none active:scale-95 transition-transform text-left">
          <div className="bg-white rounded-full p-0.5 shadow-lg">
             <img src={logoCoplumu} alt="Logo COPLUMU" className="w-14 h-14 rounded-full border-2" style={{ borderColor: `${colors.accent}50` }} />
          </div>
          <div>
            <div className="font-black text-xl lg:text-2xl text-white tracking-wider leading-none">COPLUMU</div>
            <div className="text-[10px] lg:text-xs font-bold tracking-[0.2em] uppercase mt-1.5" style={{ color: colors.accent }}>Música Moderna</div>
          </div>
        </button>
        
        <nav className="space-y-1.5 flex-grow">
          {navItems.map((item) => (
            <NavItem key={item.view} {...item} isActive={activeView === item.view} onClick={() => handleNavClick(item.view)} />
          ))}
        </nav>
        
        <div className="mt-auto pt-8 border-t border-white/10 text-[10px] text-white/50 text-center">
          <p>© 2026 Conservatorio Plurinacional.</p>
        </div>
      </aside>

      <main className={`flex-grow p-5 sm:p-8 md:p-10 lg:p-12 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-30 md:opacity-100 overflow-hidden md:overflow-auto h-[calc(100vh-68px)] md:h-auto' : ''}`}>
        <div className="max-w-5xl mx-auto md:mt-0">
          {activeView === 'Inicio' && <InicioView />}
          {activeView === 'Reportes' && <ReportesView />}
          {activeView === 'Centralizadores' && <CentralizadoresView />}
          
          {activeView === 'Planes' && (
            <PlanesView 
              activeFolderId={activeFolderId} 
              onFolderOpen={handleFolderOpen} 
              onFolderClose={handleFolderClose} 
            />
          )}
          
          {activeView === 'Calendario' && <CalendarioView />}
        </div>
      </main>
    </div>
  );
}