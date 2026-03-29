import { useState, useEffect } from 'react'; 
import { 
  Home, FileText, BarChart3, HelpCircle, 
  Menu, X, FolderOpen, BookOpen, Download, CalendarCheck, CalendarDays, Bell,
  ChevronLeft, ChevronRight
} from 'lucide-react';

// === IMPORTACIÓN DE IMÁGENES ===
import logoCoplumu from './assets/conser1.png'; // Tu logo circular
import conser2 from './assets/conser2.jpg';     // Imagen carrusel 1
import conser3 from './assets/conser3.png';     // Imagen carrusel 2 (png)
import conser4 from './assets/conser4.jpg';     // Imagen carrusel 3

// === CONFIGURACIÓN DE COLORES ===
const colors = {
  sidebarBg: '#163329',    // Verde institucional muy oscuro
  activeNav: '#234D3F',    // Verde ligeramente más claro para el botón activo
  accent: '#D4AF37',       // Dorado para acentos y decoraciones
  mainBg: '#FDFBF7',       // Fondo principal: Crema súper suave ("amarillito suavito")
  cardBg: '#FFFDF5',       // Fondo tarjetas: Un tono amarillito apenas perceptible
};

// === DATOS DE ENLACES ===
const monthlyReportsData = [
  { month: 'Febrero', num: '02', driveLink: 'https://drive.google.com/drive/folders/15rWNm4bNTjCQXmk4jWY91HbbWiBI_6Lt' },
  { month: 'Marzo', num: '03', driveLink: 'https://drive.google.com/drive/folders/1BdEPrL9bmfzTYb4C0Djqx8U8iDQGqvBo' },
  { month: 'Abril', num: '04', driveLink: 'https://drive.google.com/drive/folders/1bTHmAC4KhqZz9vgMqyV2AO5PnHAaHmyb' },
  { month: 'Mayo', num: '05', driveLink: 'https://drive.google.com/drive/folders/1dr3ZRvjKiKSAyNujx9GpxDTgaZfJlocV' },
  { month: 'Junio', num: '06', driveLink: 'https://drive.google.com/drive/folders/1j6hUX7br2UJnKss8p6zN8c5yoia0m6_c' },
  { month: 'Julio', num: '07', driveLink: 'https://drive.google.com/drive/folders/1la8gC-37OUeJ6NMxWXyGipbr4v-6HBqZ' },
  { month: 'Agosto', num: '08', driveLink: 'https://drive.google.com/drive/folders/1bYwTmxkVlZmjw1cb5fruvgTx7DBd3Znx' },
  { month: 'Septiembre', num: '09', driveLink: 'https://drive.google.com/drive/folders/1svN-_ict_p-S6PxYvzLq3_t3R9qqafFj' },
  { month: 'Octubre', num: '10', driveLink: 'https://drive.google.com/drive/folders/1N5UafH6Hg1xIENuR_a1d-nISDkeQoM1N' },
  { month: 'Noviembre', num: '11', driveLink: 'https://drive.google.com/drive/folders/1Mj4Si_0NQzafkw_hklaUzG6cW_4kN6TK' },
];

const centralizadoresData = [
  { title: 'Notas Semestrales', desc: 'Calificaciones consolidadas del 1er y 2do semestre.', type: 'Semestral', link: 'https://drive.google.com/' },
  { title: 'Notas Anuales', desc: 'Calificaciones de materias con modal anual.', type: 'Anual', link: 'https://drive.google.com/' },
];

const planesData = [
  { title: 'Malla Curricular 2026', desc: 'Estructura general de las materias por año y semestre.', link: 'https://drive.google.com/' },
  { title: 'Planes de Estudio (Instrumento)', desc: 'Programas detallados para especialidades instrumentales.', link: 'https://drive.google.com/' },
  { title: 'Planes de Estudio (Teoría)', desc: 'Programas analíticos de materias teóricas y complementarias.', link: 'https://drive.google.com/' },
];

const eventosData = [
  { date: '15 Abr', title: 'Inicio de Evaluaciones 1er Bimestre', type: 'Académico' },
  { date: '01 May', title: 'Feriado: Día del Trabajo', type: 'Feriado' },
  { date: '20 Jun', title: 'Concierto de Invierno - Ensambles', type: 'Evento' },
  { date: '05 Jul', title: 'Entrega de Centralizadores 1er Semestre', type: 'Administrativo' },
];

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

const InicioView = ({ navigateTo }) => {
  const carruselImages = [conser2, conser3, conser4];

  return (
    <div className="animate-fade-in space-y-10 pb-8">
      
      {/* 1. Presentación (Área Moderna) */}
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
                <p>Este es un centro de recursos centralizado para docentes del Área de Música Moderna. Aquí podrás gestionar planes académicos, centralizadores de notas y reportes mensuales de forma rápida y segura.</p>
            </div>
          </div>
          
          <div className="md:w-2/5 flex justify-center w-full mt-6 md:mt-0">
            <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 bg-white rounded-full border-8 border-white shadow-2xl flex items-center justify-center p-6 sm:p-8">
              <img src={logoCoplumu} alt="Logo COPLUMU" className="w-full h-full object-contain opacity-95 drop-shadow-xl" />
            </div>
          </div>
        </div>
      </div>

      {/* 2. Carrusel Automático */}
      <div className="w-full aspect-[16/9] h-auto min-h-[16rem] md:min-h-[24rem]">
          <ImageCarousel images={carruselImages} />
      </div>

      {/* 3. Visión y Misión (Títulos centrados) */}
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

      {/* 4. Botones de Acción (Al final) */}
      <div className="max-w-md mx-auto md:max-w-3xl md:mx-0">
        <div className="flex flex-col md:flex-row gap-4">
            <button onClick={() => navigateTo('Reportes')} className="flex-1 w-full text-white font-bold py-5 px-6 rounded-2xl transition-transform active:scale-95 shadow-lg flex justify-center items-center gap-2" style={{ backgroundColor: colors.sidebarBg }}>
                <FileText size={20} /> Enviar Reportes Mensuales
            </button>
            <button onClick={() => navigateTo('Centralizadores')} className="flex-1 w-full text-slate-700 font-bold py-5 px-6 rounded-2xl border-2 border-slate-300 transition-all hover:bg-slate-100 active:scale-95 flex justify-center items-center gap-2" style={{ backgroundColor: '#FFFFFF' }}>
                <BarChart3 size={20} style={{color: colors.sidebarBg}} /> Ver Centralizadores de Notas
            </button>
        </div>
      </div>

    </div>
  );
};

const ReportesView = () => (
  <div className="animate-fade-in pb-8">
    <div className="mb-8">
      <h1 className="text-3xl md:text-4xl font-black text-slate-800 tracking-tight mb-2">Reportes Mensuales 2026</h1>
      <p className="text-base text-slate-600">Accede a las carpetas para subir tus plantillas de asistencia.</p>
    </div>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {monthlyReportsData.map((report) => (
        <a 
          key={report.month} 
          href={report.driveLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="block relative p-6 rounded-2xl shadow-sm border border-slate-200/80 hover:shadow-md active:scale-[0.97] transition-all duration-150 overflow-hidden" 
          style={{ backgroundColor: colors.cardBg }}
        >
          <div className="absolute top-0 left-0 w-full h-1" style={{ backgroundColor: colors.accent }}></div>
          
          <div className="absolute -bottom-4 -right-1 text-[5.5rem] font-black opacity-[0.04] pointer-events-none text-black">
            {report.num}
          </div>

          <div className="relative z-10 flex flex-col h-full">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-md" style={{ backgroundColor: colors.sidebarBg }}>
                <CalendarCheck size={26} strokeWidth={2.5} />
              </div>
              <div>
                 <div className="text-xs font-bold text-slate-500 tracking-widest uppercase mb-0.5">Mes {report.num}</div>
                 <div className="text-xl font-extrabold text-slate-800 leading-none">{report.month}</div>
              </div>
            </div>
            
            <div className="mt-auto w-full flex items-center justify-center gap-2 text-slate-700 font-bold py-3.5 px-4 rounded-xl border border-slate-200/80 shadow-sm" style={{ backgroundColor: 'rgba(255,255,255,0.7)' }}>
              <FolderOpen size={18} strokeWidth={2.5} style={{ color: colors.sidebarBg }} /> 
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
      <h1 className="text-3xl md:text-4xl font-black text-slate-800 tracking-tight mb-2">Centralizadores</h1>
      <p className="text-base text-slate-600">Registros de calificaciones de la gestión en curso.</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {centralizadoresData.map((item) => (
        <a key={item.title} href={item.link} target="_blank" rel="noopener noreferrer" className="block p-7 rounded-3xl shadow-sm border border-slate-200/80 active:scale-[0.98] transition-all duration-150" style={{ backgroundColor: colors.cardBg }}>
          <div className="flex items-start justify-between mb-5">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-md text-white" style={{ backgroundColor: colors.sidebarBg }}>
              <BarChart3 size={28} />
            </div>
            <span className="px-3 py-1 text-xs font-bold rounded-full border bg-white" style={{ color: colors.accent, borderColor: colors.accent }}>
              {item.type}
            </span>
          </div>
          <h3 className="text-xl font-bold text-slate-800 mb-2">{item.title}</h3>
          <p className="text-sm text-slate-600 mb-6">{item.desc}</p>
          <div className="flex items-center justify-center gap-2 text-slate-700 font-bold py-3.5 px-4 rounded-xl border border-slate-200 bg-white">
            <FolderOpen size={18} style={{ color: colors.sidebarBg }} /> Ingresar al Drive
          </div>
        </a>
      ))}
    </div>
  </div>
);

const PlanesView = () => (
  <div className="animate-fade-in pb-8">
    <div className="mb-8">
      <h1 className="text-3xl md:text-4xl font-black text-slate-800 tracking-tight mb-2">Planes y Programas</h1>
      <p className="text-base text-slate-600">Descarga la documentación académica oficial.</p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
      {planesData.map((plan) => (
        <a key={plan.title} href={plan.link} target="_blank" rel="noopener noreferrer" className="block p-6 rounded-2xl shadow-sm border border-slate-200/80 active:scale-[0.98] transition-all duration-150" style={{ backgroundColor: colors.cardBg }}>
          <div className="mb-4">
            <BookOpen size={28} style={{ color: colors.accent }} />
          </div>
          <h3 className="text-lg font-bold text-slate-800 mb-2 leading-tight">{plan.title}</h3>
          <p className="text-sm text-slate-500 mb-5">{plan.desc}</p>
          <div className="flex items-center text-sm font-bold gap-2" style={{ color: colors.sidebarBg }}>
            <Download size={18} /> Ver Documento
          </div>
        </a>
      ))}
    </div>
  </div>
);

const CalendarioView = () => (
  <div className="animate-fade-in pb-8">
    <div className="mb-8">
      <h1 className="text-3xl md:text-4xl font-black text-slate-800 tracking-tight mb-2">Calendario Académico y Eventos</h1>
      <p className="text-base text-slate-600">Cronograma oficial y eventos importantes de la gestión 2026.</p>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-1">
        <div className="p-7 rounded-3xl shadow-sm border border-slate-200/80 h-full flex flex-col" style={{ backgroundColor: colors.cardBg }}>
          <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 text-white shadow-md" style={{ backgroundColor: colors.sidebarBg }}>
            <CalendarDays size={28} />
          </div>
          <h3 className="text-xl font-bold text-slate-800 mb-3">Calendario Oficial</h3>
          <p className="text-sm text-slate-600 mb-6 flex-grow">Descarga el cronograma académico anual en formato PDF. Incluye fechas de exámenes, recesos y eventos institucionales.</p>
          <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-white text-slate-700 font-bold py-3.5 px-4 rounded-xl border border-slate-200 active:scale-[0.98] transition-transform shadow-sm">
            <Download size={18} style={{ color: colors.sidebarBg }} /> Descargar PDF
          </a>
        </div>
      </div>

      <div className="lg:col-span-2">
        <div className="p-7 rounded-3xl shadow-sm border border-slate-200/80 h-full" style={{ backgroundColor: colors.cardBg }}>
          <div className="flex items-center gap-3 mb-5 pb-3 border-b border-slate-200/60">
            <Bell size={22} style={{ color: colors.accent }} />
            <h3 className="text-lg font-bold text-slate-800">Próximos Eventos</h3>
          </div>
          
          <div className="space-y-3">
            {eventosData.map((evento, index) => (
              <div key={index} className="flex items-center p-3 rounded-2xl active:bg-slate-100 transition-colors border border-transparent">
                <div className="w-16 text-center border-r border-slate-200/80 pr-3 mr-3 shrink-0">
                  <span className="block text-xl font-black leading-none" style={{ color: colors.sidebarBg }}>{evento.date.split(' ')[0]}</span>
                  <span className="block text-[10px] font-bold text-slate-400 uppercase mt-1">{evento.date.split(' ')[1]}</span>
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-800 leading-tight mb-0.5">{evento.title}</h4>
                  <span className="text-xs font-medium text-slate-500">{evento.type}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

// === COMPONENTE PRINCIPAL APP ===

export default function App() {
  const [activeView, setActiveView] = useState('Inicio');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { view: 'Inicio', label: 'Inicio', icon: Home },
    { view: 'Reportes', label: 'Reportes mensuales', icon: FileText },
    { view: 'Centralizadores', label: 'Centralizadores de notas', icon: BarChart3 },
    { view: 'Planes', label: 'Planes y programas', icon: HelpCircle },
    { view: 'Calendario', label: 'Calendario y Eventos', icon: CalendarDays },
  ];

  const handleNavClick = (view) => {
    setActiveView(view);
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row font-sans" style={{ backgroundColor: colors.mainBg }}>
      
      {/* Header Móvil */}
      <header className="md:hidden sticky top-0 z-50 p-4 flex items-center justify-between shadow-md" style={{ backgroundColor: colors.sidebarBg }}>
        <div className="flex items-center gap-3 font-bold text-lg text-white">
          <div className="bg-white rounded-full p-0.5">
             <img src={logoCoplumu} alt="Logo" className="w-8 h-8 rounded-full" />
          </div>
          <span className="tracking-wide">COPLUMU <span style={{ color: colors.accent }}>Moderna</span></span>
        </div>
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white p-2 focus:outline-none active:scale-95 transition-transform relative z-50">
          {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </header>

      {/* Barra Lateral (Sidebar) */}
      <aside 
        className={`p-6 flex flex-col transition-transform duration-300 ease-in-out shadow-2xl
          ${isMobileMenuOpen ? 'fixed inset-0 top-[68px] z-40 w-full translate-x-0' : 'fixed top-[68px] w-full -translate-x-full md:translate-x-0 md:relative md:top-0 md:w-[280px] lg:w-[300px]'}`}
        style={{ backgroundColor: colors.sidebarBg }}
      >
        <div className="hidden md:flex items-center gap-4 mb-10 pb-8 border-b border-white/10">
          <div className="bg-white rounded-full p-0.5 shadow-lg">
             <img src={logoCoplumu} alt="Logo COPLUMU" className="w-14 h-14 rounded-full border-2" style={{ borderColor: `${colors.accent}50` }} />
          </div>
          <div>
            <div className="font-black text-xl lg:text-2xl text-white tracking-wider leading-none">COPLUMU</div>
            <div className="text-[10px] lg:text-xs font-bold tracking-[0.2em] uppercase mt-1.5" style={{ color: colors.accent }}>Música Moderna</div>
          </div>
        </div>
        
        <nav className="space-y-1.5 flex-grow">
          {navItems.map((item) => (
            <NavItem key={item.view} {...item} isActive={activeView === item.view} onClick={() => handleNavClick(item.view)} />
          ))}
        </nav>
        
        <div className="mt-auto pt-8 border-t border-white/10 text-[10px] text-white/50 text-center">
          <p>© 2026 Conservatorio Plurinacional.</p>
        </div>
      </aside>

      {/* Área de Contenido Principal */}
      <main className={`flex-grow p-5 sm:p-8 md:p-10 lg:p-12 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-30 md:opacity-100 overflow-hidden md:overflow-auto h-[calc(100vh-68px)] md:h-auto' : ''}`}>
        <div className="max-w-5xl mx-auto md:mt-0">
          {activeView === 'Inicio' && <InicioView navigateTo={handleNavClick} />}
          {activeView === 'Reportes' && <ReportesView />}
          {activeView === 'Centralizadores' && <CentralizadoresView />}
          {activeView === 'Planes' && <PlanesView />}
          {activeView === 'Calendario' && <CalendarioView />}
        </div>
      </main>
    </div>
  );
}