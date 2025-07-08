import { NavLink } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="navbar">
            <ul>
                <NavLink to="/people"   className={({isActive}) => isActive ? 'active' : ''}>Personajes</NavLink>
                <NavLink to="/planets"  className={({isActive}) => isActive ? 'active' : ''}>Planetas</NavLink>
                <NavLink to="/films"    className={({isActive}) => isActive ? 'active' : ''}>Películas</NavLink>
            </ul>
        </nav>
    );
}
