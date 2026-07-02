import React, { useState, useEffect } from 'react'; 
import { Home, FileText, BarChart3, HelpCircle, Menu, X, CalendarDays } from 'lucide-react';
import NavItem from './components/NavItem';
import InicioView from './views/InicioView';
import ReportesView from './views/ReportesView';
import CentralizadoresView from './views/CentralizadoresView';
import PlanesView from './views/PlanesView';
import CalendarioView from './views/CalendarioView';
import logoCoplumu from './assets/conser1.png'; 
import { colors } from './data/links';

const AnimationStyles = () => (
  <style>{`
    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(16px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-cascade { animation: fadeInUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards; opacity: 0; }
  `}</style>
);

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
      <AnimationStyles /> 
      
      {/* HEADER MÓVIL CON BACKDROP BLUR */}
      <header 
        className="md:hidden sticky top-0 z-50 p-4 flex items-center justify-between shadow-[0_4px_20px_rgba(0,0,0,0.08)] border-b border-white/10 backdrop-blur-md" 
        style={{ backgroundColor: `${colors.sidebarBg}E6` }}
      >
        <button onClick={() => handleNavClick('Inicio')} className="flex items-center gap-3 font-display font-bold text-lg text-white active:scale-95 transition-transform text-left">
          <div className="bg-white rounded-full p-0.5 shadow-md">
             <img src={logoCoplumu} alt="Logo" className="w-8 h-8 rounded-full" />
          </div>
          <span className="tracking-wide">COPLUMU <span style={{ color: colors.accent }}>Moderna</span></span>
        </button>

        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white p-2 active:scale-95 transition-all duration-300 relative z-50 rounded-xl hover:bg-white/10">
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {/* SIDEBAR */}
      <aside 
        className={`p-6 flex flex-col transition-all duration-300 ease-in-out shadow-[4px_0_30px_rgba(0,0,0,0.15)]
          fixed top-[68px] right-0 bottom-0 w-full z-40
          md:relative md:top-0 md:right-auto md:bottom-auto md:w-[290px] lg:w-[320px]
          ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'}`}
        style={{ backgroundColor: colors.sidebarBg }}
      >
        {/* BRANDING EN SIDEBAR */}
        <button onClick={() => handleNavClick('Inicio')} className="hidden md:flex items-center gap-4 mb-8 pb-6 border-b border-white/10 w-full active:scale-95 transition-transform text-left">
          <div className="bg-white rounded-full p-0.5 shadow-xl transition-transform duration-500 hover:rotate-12">
             <img src={logoCoplumu} alt="Logo COPLUMU" className="w-12 h-12 rounded-full border-2" style={{ borderColor: `${colors.accent}40` }} />
          </div>
          <div>
            <div className="font-display font-black text-xl lg:text-2xl text-white tracking-wider leading-none">COPLUMU</div>
            <div className="text-[9px] lg:text-[10px] font-display font-bold tracking-[0.25em] uppercase mt-1.5" style={{ color: colors.accent }}>Música Moderna</div>
          </div>
        </button>
        
        {/* NAVEGACIÓN */}
        <nav className="space-y-2 flex-grow">
          {navItems.map((item) => (
            <NavItem key={item.view} {...item} isActive={activeView === item.view} onClick={() => handleNavClick(item.view)} />
          ))}
        </nav>
        
        {/* FOOTER EN SIDEBAR */}
        <div className="mt-auto pt-6 border-t border-white/10 text-[10px] text-white/40 text-center font-display tracking-wider">
          <p>© 2026 Conservatorio Plurinacional.</p>
        </div>
      </aside>

      {/* CONTENIDO PRINCIPAL */}
      <main className={`flex-grow p-5 sm:p-8 md:p-10 lg:p-12 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-20 md:opacity-100 overflow-hidden md:overflow-auto h-[calc(100vh-68px)] md:h-auto' : ''}`}>
        <div className="max-w-5xl mx-auto md:mt-0">
          {activeView === 'Inicio' && <InicioView />}
          {activeView === 'Reportes' && <ReportesView />}
          {activeView === 'Centralizadores' && <CentralizadoresView />}
          {activeView === 'Planes' && <PlanesView activeFolderId={activeFolderId} onFolderOpen={handleFolderOpen} onFolderClose={handleFolderClose} />}
          {activeView === 'Calendario' && <CalendarioView />}
        </div>
      </main>
    </div>
  );
}