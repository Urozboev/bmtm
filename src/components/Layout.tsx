import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { BookOpen, Users, FileText, Info, Home } from 'lucide-react';

const Layout: React.FC = () => {
  const location = useLocation();

  const navigationItems = [
    { path: '/', icon: Home, label: 'Asosiy sahifa' },
    { path: '/bibliography', icon: FileText, label: 'Adabiyotlar' },
    { path: '/authors', icon: Users, label: 'Mualliflar' },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-lg border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo and Title */}
            <div className="flex items-center space-x-3">
              <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">
                  Bolalarni maktabga tayyorlash metodikasi
                </h1>
                <p className="text-sm text-gray-600">
                  O'quv qo'llanma
                </p>
              </div>
            </div>

            {/* Institution Badge */}
            <div className="hidden md:flex items-center px-3 py-1 bg-blue-100 rounded-full">
              <span className="text-sm font-medium text-blue-800 uppercase">
                Angren universiteti
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-200 ${
                    isActive(item.path)
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row md:justify-between gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Bolalarni maktabga tayyorlash metodikasi</h3>
              <p className="text-gray-300 text-sm">
                Maktabgacha ta'lim bakalavriat ta'lim yo'nalishi talabalari uchun 
                mo'ljallangan o'quv qo'llanma.
              </p>
            </div>
            <div>
              <h4 className="text-md font-semibold mb-4">Mualliflar</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>Xasanova Sh.T.</li>
                <li>Isabekova D.Sh.</li>
                <li>Giyasova M.A.</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} Angren Universiteti. Barcha huquqlar himoyalangan.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;