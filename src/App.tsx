// src/App.tsx
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import PeopleList from './features/people/PeopleList';
import PersonDetail from './features/people/PersonDetail';
import PlanetsList from './features/planets/PlanetsList';
import PlanetDetail from './features/planets/PlanetDetail';
import FilmsList from './features/films/FilmsList';

export default function App() {
    return (
        <div className="min-h-screen flex flex-col">
            <header className="bg-gradient-to-r from-yellow-500 via-amber-400 to-yellow-500 py-6 shadow-lg">
                <h1 className="text-center text-4xl font-extrabold tracking-wider text-black">
                    🚀 Star Wars Explorer Dixon Bustos
                </h1>
            </header>

            <BrowserRouter>
                <Navbar />
                <main className="flex-grow container mx-auto px-4 py-8">
                    <Routes>
                        <Route path="/" element={<Navigate to="/people" replace />} />
                        <Route path="/people" element={<PeopleList />} />
                        <Route path="/people/:id" element={<PersonDetail />} />
                        <Route path="/planets" element={<PlanetsList />} />
                        <Route path="/planets/:id" element={<PlanetDetail />} />
                        <Route path="/films" element={<FilmsList />} />
                    </Routes>
                </main>
            </BrowserRouter>

            <footer className="text-center py-4 text-gray-500">
                © 2025 Star Wars Explorer Dixon Bustos
            </footer>
        </div>
    );
}
