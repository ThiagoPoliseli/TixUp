import React from 'react';
import { Search } from 'lucide-react';

interface NavbarProps {
onOpenLogin: () => void;
}

export function Navbar({ onOpenLogin }: NavbarProps) {
return (
    <nav className="bg-white shadow-sm">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
        <div className="flex items-center">
            <span className="text-4xl font-bold">
            <span className="text-gray-900">Tix</span>
            <span className="text-orange-500">Up</span>
            </span>
        </div>
    
        <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
            <input
                type="text"
                placeholder="Pesquise por eventos ou localização"
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
            </div>
            </div>
        </div>

        <div className="flex items-center space-x-6">
            <a href="#" className="text-gray-700 hover:text-gray-900">Parceiros</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">Eventos</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">Central de Ajuda</a>
            <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300">
            Contato
            </button>
            <button 
            onClick={onOpenLogin} 
            className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600"
            >
            Login
            </button>
        </div>
        </div>
    </div>
    </nav>
);
}