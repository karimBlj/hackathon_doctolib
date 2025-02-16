import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Menu, X, Server, User, Orbit } from 'lucide-react';
import NetworkPage from './pages/NetworkPage';
import AdaptersPage from './pages/AdaptersPage';
import "./logo_white_empty_fill.png"

function App()
{
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        {/* Header */}
        <header className="border-b border-slate-700 bg-slate-900 fixed w-full z-50">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-6">
                {/* Menu Button */}
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-slate-300 hover:text-white"
                >
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Logo */}
                <div className="flex items-center space-x-2">
                  <Orbit className="h-8 w-8 text-purple-400" />
                  <span className="text-2xl font-bold">Nebula</span>
                </div>
              </div>

              {/* Server & Account Info */}
              <Link 
                to="/settings"
                className="flex items-center space-x-6 text-slate-300 hover:text-white"
              >
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <Server className="h-5 w-5 text-purple-400" />
                    <div className="text-sm">
                      <span className="block font-medium">EUR-WEST</span>
                      <span className="block text-xs text-slate-400">Server: Online</span>
                    </div>
                  </div>
                  <div className="h-6 w-px bg-slate-700"></div>
                  <div className="flex items-center space-x-2">
                    <User className="h-5 w-5 text-purple-400" />
                    <div className="text-sm">
                      <span className="block font-medium">admin@nexuscloud.dev</span>
                      <span className="block text-xs text-slate-400">Administrator</span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* Menu Overlay */}
          {isMenuOpen && (
            <div className="fixed left-0 top-[73px] w-64 bg-slate-900 border-r border-slate-700 h-[calc(100vh-73px)] z-40 shadow-xl">
              <div className="p-6">
                <nav className="flex flex-col space-y-6">
                  <Link 
                    to="/" 
                    className="text-xl font-semibold text-slate-300 hover:text-white hover:translate-x-2 transition-all"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Network
                  </Link>
                  <Link 
                    to="/adapters" 
                    className="text-xl font-semibold text-slate-300 hover:text-white hover:translate-x-2 transition-all"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Adapters
                  </Link>
                </nav>
              </div>
            </div>
          )}
        </header>

        {/* Main Content */}
        <main className="pt-20">
          <Routes>
            <Route path="/" element={<NetworkPage />} />
            <Route path="/adapters" element={<AdaptersPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;