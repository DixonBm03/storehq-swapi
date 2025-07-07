// src/features/films/FilmsList.js
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFilms } from './FilmsSlice';

export default function FilmsList() {
    const dispatch = useDispatch();
    const { items, status, error } = useSelector((state) => state.films);

    useEffect(() => {
        dispatch(fetchFilms());
    }, [dispatch]);

    if (status === 'loading') return <p className="text-center">Cargando películas…</p>;
    if (status === 'failed') return <p className="text-center text-red-600">Error: {error}</p>;

    return (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((f) => {
                const year = new Date(f.release_date).getFullYear();
                return (
                    <li
                        key={f.url}
                        className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition"
                    >
                        <h2 className="font-bold text-xl mb-2">{f.title}</h2>
                        <p className="text-gray-600"><strong>Año:</strong> {year}</p>
                    </li>
                );
            })}
        </ul>
    );
}
