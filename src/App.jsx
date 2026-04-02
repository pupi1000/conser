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
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-cascade { animation: fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards; opacity: 0; }
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
      
      <header className="md:hidden sticky top-0 z-50 p-4 flex items-center justify-between shadow-md" style={{ backgroundColor: colors.sidebarBg }}>
        <button onClick={() => handleNavClick('Inicio')} className="flex items-center gap-3 font-bold text-lg text-white active:scale-95 transition-transform text-left">
          <div className="bg-white rounded-full p-0.5">
             <img src={logoCoplumu} alt="Logo" className="w-8 h-8 rounded-full" />
          </div>
          <span className="tracking-wide">COPLUMU <span style={{ color: colors.accent }}>Moderna</span></span>
        </button>

        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white p-2 active:scale-95 transition-transform relative z-50">
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
        <button onClick={() => handleNavClick('Inicio')} className="hidden md:flex items-center gap-4 mb-10 pb-8 border-b border-white/10 w-full active:scale-95 transition-transform text-left">
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
          {activeView === 'Planes' && <PlanesView activeFolderId={activeFolderId} onFolderOpen={handleFolderOpen} onFolderClose={handleFolderClose} />}
          {activeView === 'Calendario' && <CalendarioView />}
          
        </div>
      </main>
    </div>
  );
}