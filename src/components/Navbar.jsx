// src/components/Navbar.jsx
import { NavLink } from 'react-router-dom';

export default function Navbar() {
    const base = 'px-4 py-2 rounded-md text-lg font-medium';
    const active = 'bg-amber-400 text-black';
    const inactive = 'text-gray-300 hover:bg-gray-700 hover:text-white';

    return (
        <nav className="bg-gray-800/75 backdrop-blur-md px-6 py-3 shadow-md">
            <ul className="flex justify-center space-x-8">
                <NavLink to="/people" className={({ isActive }) => `${base} ${isActive ? active : inactive}`}>
                    Personajes
                </NavLink>
                <NavLink to="/planets" className={({ isActive }) => `${base} ${isActive ? active : inactive}`}>
                    Planetas
                </NavLink>
                <NavLink to="/films" className={({ isActive }) => `${base} ${isActive ? active : inactive}`}>
                    Películas
                </NavLink>
            </ul>
        </nav>
    );
}
