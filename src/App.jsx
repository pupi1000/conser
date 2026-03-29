import { useState } from 'react';
import { 
  Home, FileText, BarChart3, HelpCircle, 
  Menu, X, FolderOpen, BookOpen, Download, CalendarCheck 
} from 'lucide-react';
import logoCoplumu from './assets/conser1.png';

// === CONFIGURACIÓN DE COLORES ===
const colors = {
  sidebarBg: '#163329',    // Verde institucional muy oscuro
  activeNav: '#234D3F',    // Verde ligeramente más claro para el botón activo
  accent: '#D4AF37',       // Dorado para acentos
  mainBg: '#F1F5F9',       // Fondo gris muy claro para el contenido
};

// === DATOS DE ENLACES (Añadí el número del mes para el diseño) ===
const monthlyReportsData = [
  { month: 'Febrero', num: '02', driveLink: 'https://drive.google.com/', delay: '0ms' },
  { month: 'Marzo', num: '03', driveLink: 'https://drive.google.com/', delay: '50ms' },
  { month: 'Abril', num: '04', driveLink: 'https://drive.google.com/', delay: '100ms' },
  { month: 'Mayo', num: '05', driveLink: 'https://drive.google.com/', delay: '150ms' },
  { month: 'Junio', num: '06', driveLink: 'https://drive.google.com/', delay: '200ms' },
  { month: 'Julio', num: '07', driveLink: 'https://drive.google.com/', delay: '250ms' },
  { month: 'Agosto', num: '08', driveLink: 'https://drive.google.com/', delay: '300ms' },
  { month: 'Septiembre', num: '09', driveLink: 'https://drive.google.com/', delay: '350ms' },
  { month: 'Octubre', num: '10', driveLink: 'https://drive.google.com/', delay: '400ms' },
  { month: 'Noviembre', num: '11', driveLink: 'https://drive.google.com/', delay: '450ms' },
];

const centralizadoresData = [
  { title: 'Notas Semestrales', desc: 'Calificaciones consolidadas del 1er y 2do semestre.', type: 'Semestral', link: 'https://drive.google.com/', delay: '0ms' },
  { title: 'Notas Anuales', desc: 'Calificaciones de materias con modalidad anual.', type: 'Anual', link: 'https://drive.google.com/', delay: '100ms' },
];

const planesData = [
  { title: 'Malla Curricular 2026', desc: 'Estructura general de las materias por año y semestre.', link: 'https://drive.google.com/', delay: '0ms' },
  { title: 'Planes de Estudio (Instrumento)', desc: 'Programas detallados para especialidades instrumentales.', link: 'https://drive.google.com/', delay: '100ms' },
  { title: 'Planes de Estudio (Teoría)', desc: 'Programas analíticos de materias teóricas y complementarias.', link: 'https://drive.google.com/', delay: '200ms' },
];

// === COMPONENTES PEQUEÑOS ===

// ¡Contraste arreglado! Usando clases estáticas de Tailwind (text-slate-300 y text-white)
const NavItem = ({ icon: Icon, label, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`w-full flex items-center gap-4 px-6 py-4 rounded-xl text-left text-[15px] transition-all duration-200 group relative overflow-hidden
      ${isActive 
        ? 'font-bold text-white shadow-md' 
        : 'font-medium text-slate-300 hover:text-white hover:bg-white/10'}`}
    style={isActive ? { backgroundColor: colors.activeNav } : {}}
  >
    {isActive && <div className="absolute left-0 top-0 h-full w-1.5" style={{ backgroundColor: colors.accent }}></div>}
    <Icon size={22} className={isActive ? `text-[${colors.accent}]` : 'text-slate-400 group-hover:text-white transition-transform group-hover:scale-110'} />
    <span className="flex-grow">{label}</span>
  </button>
);

// === VISTAS ===

const InicioView = ({ navigateTo }) => (
  <div className="animate-fade-in">
    <div className="bg-white p-8 md:p-14 rounded-[2rem] shadow-xl border border-slate-200 relative overflow-hidden">
      <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full opacity-10 pointer-events-none" style={{ backgroundColor: colors.sidebarBg }}></div>
      
      <div className="flex flex-col md:flex-row items-center gap-12 relative z-10">
        <div className="md:w-3/5 text-center md:text-left">
          <span className="inline-block py-1.5 px-4 rounded-full bg-slate-100 text-slate-600 text-xs font-bold tracking-widest uppercase mb-6 border border-slate-200">
            Conservatorio Plurinacional
          </span>
          <h1 className="text-5xl md:text-6xl font-black tracking-tight mb-6 text-slate-800 leading-tight">
            Área de <span style={{ color: colors.sidebarBg }}>Música Moderna</span>
          </h1>
          <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-xl">
            Plataforma centralizada para el cuerpo docente. Gestiona calificaciones, accede a los planes de estudio y envía tus reportes mensuales de forma rápida y segura.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <button onClick={() => navigateTo('Reportes')} className="text-white font-bold py-3.5 px-8 rounded-xl transition-all hover:-translate-y-1 shadow-lg" style={{ backgroundColor: colors.sidebarBg }}>
              Enviar Reportes
            </button>
            <button onClick={() => navigateTo('Centralizadores')} className="bg-white text-slate-700 font-bold py-3.5 px-8 rounded-xl border-2 border-slate-200 transition-all hover:border-slate-400 hover:bg-slate-50">
              Ver Centralizadores
            </button>
          </div>
        </div>
        
        <div className="md:w-2/5 flex justify-center">
          <div className="w-64 h-64 md:w-80 md:h-80 bg-slate-50 rounded-full border-8 border-white shadow-2xl flex items-center justify-center p-8">
            <img src={logoCoplumu} alt="Logo" className="w-full h-full object-contain opacity-90 drop-shadow-xl" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ReportesView = () => (
  <div className="animate-fade-in">
    <div className="mb-10">
      <h1 className="text-4xl font-black text-slate-800 tracking-tight mb-3">Reportes Mensuales 2026</h1>
      <p className="text-lg text-slate-600">Accede a las carpetas de Drive para subir tus plantillas de asistencia.</p>
    </div>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {monthlyReportsData.map((report) => (
        <div key={report.month} className="relative bg-white p-7 rounded-2xl shadow-sm border border-slate-200 flex flex-col h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group overflow-hidden animate-fade-in-up" style={{ animationFillMode: 'both', animationDelay: report.delay }}>
          
          {/* Línea decorativa superior que aparece al pasar el mouse */}
          <div className="absolute top-0 left-0 w-full h-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ backgroundColor: colors.sidebarBg }}></div>
          
          {/* Marca de agua (Número del mes gigante al fondo) */}
          <div className="absolute -bottom-4 -right-2 text-[6rem] font-black text-slate-50 opacity-80 pointer-events-none group-hover:scale-110 group-hover:-translate-y-2 transition-transform duration-500">
            {report.num}
          </div>

          <div className="relative z-10 flex flex-col h-full">
            <div className="flex items-center gap-4 mb-8">
              {/* Ícono dinámico */}
              <div className="relative w-14 h-14 rounded-2xl flex items-center justify-center text-slate-500 border border-slate-100 group-hover:text-white transition-colors duration-300 overflow-hidden" style={{ backgroundColor: '#F8FAFC' }}>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ backgroundColor: colors.sidebarBg }}></div>
                <CalendarCheck size={26} strokeWidth={2.5} className="relative z-10" />
              </div>
              
              <div>
                 <div className="text-xs font-bold text-slate-400 tracking-widest uppercase mb-1">Mes {report.num}</div>
                 <div className="text-2xl font-extrabold text-slate-800 leading-none">{report.month}</div>
              </div>
            </div>
            
            {/* Botón dinámico */}
            <a href={report.driveLink} target="_blank" rel="noopener noreferrer" className="mt-auto w-full flex items-center justify-center gap-2 bg-slate-50 text-slate-700 hover:text-white font-bold py-3.5 px-4 rounded-xl border border-slate-200 transition-all shadow-sm relative overflow-hidden group/btn">
              <div className="absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" style={{ backgroundColor: colors.sidebarBg }}></div>
              <FolderOpen size={18} strokeWidth={2.5} className="relative z-10" /> 
              <span className="relative z-10">Abrir Carpeta</span>
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const CentralizadoresView = () => (
  <div className="animate-fade-in">
    <div className="mb-10">
      <h1 className="text-4xl font-black text-slate-800 tracking-tight mb-3">Centralizadores de Notas</h1>
      <p className="text-lg text-slate-600">Registros de calificaciones de la gestión en curso.</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {centralizadoresData.map((item) => (
        <div key={item.title} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 flex flex-col h-full hover:shadow-lg transition-all animate-fade-in-up" style={{ animationFillMode: 'both', animationDelay: item.delay }}>
          <div className="flex items-start justify-between mb-6">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center" style={{ backgroundColor: `${colors.sidebarBg}15`, color: colors.sidebarBg }}>
              <BarChart3 size={32} />
            </div>
            <span className="px-3 py-1 text-xs font-bold rounded-full border" style={{ color: colors.accent, borderColor: colors.accent, backgroundColor: `${colors.accent}10` }}>
              {item.type}
            </span>
          </div>
          <h3 className="text-2xl font-bold text-slate-800 mb-2">{item.title}</h3>
          <p className="text-slate-600 mb-8 flex-grow">{item.desc}</p>
          <a href={item.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-slate-50 text-slate-700 font-bold py-4 px-4 rounded-xl hover:bg-slate-100 border border-slate-200 transition-colors">
            <FolderOpen size={20} style={{ color: colors.sidebarBg }} /> Ingresar al Drive
          </a>
        </div>
      ))}
    </div>
  </div>
);

const PlanesView = () => (
  <div className="animate-fade-in">
    <div className="mb-10">
      <h1 className="text-4xl font-black text-slate-800 tracking-tight mb-3">Planes y Programas</h1>
      <p className="text-lg text-slate-600">Descarga la documentación académica oficial de la carrera.</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {planesData.map((plan) => (
        <div key={plan.title} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex flex-col h-full hover:border-slate-300 hover:shadow-md transition-all animate-fade-in-up" style={{ animationFillMode: 'both', animationDelay: plan.delay }}>
          <div className="mb-4">
            <BookOpen size={28} style={{ color: colors.sidebarBg }} />
          </div>
          <h3 className="text-xl font-bold text-slate-800 mb-2 leading-tight">{plan.title}</h3>
          <p className="text-sm text-slate-500 mb-6 flex-grow">{plan.desc}</p>
          <a href={plan.link} target="_blank" rel="noopener noreferrer" className="flex items-center text-sm font-bold gap-2 transition-colors" style={{ color: colors.sidebarBg }}>
            <Download size={16} /> Ver Documento
          </a>
        </div>
      ))}
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
  ];

  const handleNavClick = (view) => {
    setActiveView(view);
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row font-sans" style={{ backgroundColor: colors.mainBg }}>
      
      {/* Header Móvil */}
      <header className="md:hidden sticky top-0 z-50 p-4 flex items-center justify-between shadow-lg" style={{ backgroundColor: colors.sidebarBg }}>
        <div className="flex items-center gap-3 font-bold text-xl text-white">
          <img src={logoCoplumu} alt="Logo" className="w-10 h-10 rounded-full border-2 border-white/20" />
          <span className="tracking-wide">COPLUMU <span style={{ color: colors.accent }}>Moderna</span></span>
        </div>
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white p-2 focus:outline-none">
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </header>

      {/* Barra Lateral */}
      <aside 
        className={`p-6 flex flex-col transition-all duration-300 ease-in-out shadow-2xl
          ${isMobileMenuOpen ? 'fixed inset-0 top-[72px] z-40 w-full' : 'fixed -left-full top-[72px] w-full md:relative md:left-0 md:top-0 md:w-[300px]'}`}
        style={{ backgroundColor: colors.sidebarBg }}
      >
        {/* Logo (Desktop) */}
        <div className="hidden md:flex items-center gap-4 mb-10 pb-8 border-b border-white/10">
          <img src={logoCoplumu} alt="Logo COPLUMU" className="w-16 h-16 rounded-full shadow-lg border-2" style={{ borderColor: `${colors.accent}50` }} />
          <div>
            <div className="font-black text-2xl text-white tracking-wider leading-none">COPLUMU</div>
            <div className="text-xs font-bold tracking-[0.2em] uppercase mt-2" style={{ color: colors.accent }}>Música Moderna</div>
          </div>
        </div>
        
        {/* Navegación */}
        <nav className="space-y-2 flex-grow">
          {navItems.map((item) => (
            <NavItem key={item.view} {...item} isActive={activeView === item.view} onClick={() => handleNavClick(item.view)} />
          ))}
        </nav>
        
        {/* Footer Sidebar */}
        <div className="hidden md:block mt-auto pt-8 border-t border-white/10 text-xs text-white/50 text-center">
          <p>© 2026 Conservatorio Plurinacional.</p>
        </div>
      </aside>

      {/* Área de Contenido */}
      <main className={`flex-grow p-6 md:p-12 transition-all duration-300 ${isMobileMenuOpen ? 'blur-sm md:blur-none' : ''}`}>
        <div className="max-w-6xl mx-auto mt-[72px] md:mt-0">
          {activeView === 'Inicio' && <InicioView navigateTo={handleNavClick} />}
          {activeView === 'Reportes' && <ReportesView />}
          {activeView === 'Centralizadores' && <CentralizadoresView />}
          {activeView === 'Planes' && <PlanesView />}
        </div>
      </main>
    </div>
  );
}