// src/features/planets/PlanetsList.js
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPlanets } from './PlanetsSlice';
import { Link } from 'react-router-dom';
import Pagination from '../../components/Pagination';

export default function PlanetsList() {
    const dispatch = useDispatch();
    const { items, next, prev, status, error } = useSelector((s) => s.planets);

    useEffect(() => {
        dispatch(fetchPlanets());
    }, [dispatch]);

    if (status === 'loading') return <p className="text-center">Cargando planetas…</p>;
    if (status === 'failed') return <p className="text-center text-red-500">Error: {error}</p>;

    return (
        <div className="space-y-6">
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {items.map((p) => {
                    const id = p.url.match(/\/planets\/(\d+)\//)[1];
                    return (
                        <li
                            key={p.url}
                            className="bg-gray-800 p-6 rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition"
                        >
                            <h2 className="font-bold text-2xl mb-3 text-amber-300">{p.name}</h2>
                            <p><strong>Población:</strong> {p.population}</p>
                            <p><strong>Terreno:</strong> {p.terrain}</p>
                            <p><strong>Clima:</strong> {p.climate}</p>
                            <Link
                                to={`/planets/${id}`}
                                className="inline-block mt-4 text-amber-400 hover:underline font-medium"
                            >
                                Ver detalle →
                            </Link>
                        </li>
                    );
                })}
            </ul>
            <Pagination prev={prev} next={next} onPage={(u) => dispatch(fetchPlanets(u))} />
        </div>
    );
}
