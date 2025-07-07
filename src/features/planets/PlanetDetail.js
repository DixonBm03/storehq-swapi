// src/features/planets/PlanetDetail.js
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../api/api';

export default function PlanetDetail() {
    const { id } = useParams();
    const [planet, setPlanet] = useState(null);

    useEffect(() => {
        api.get(`/planets/${id}`).then((res) => setPlanet(res.data));
    }, [id]);

    if (!planet) return <p className="text-center">Cargando…</p>;

    return (
        <div className="max-w-md mx-auto bg-gray-800 p-8 rounded-2xl shadow-2xl space-y-4">
            <h1 className="text-3xl font-bold text-amber-400">{planet.name}</h1>
            <p><strong>Población:</strong> {planet.population}</p>
            <p><strong>Terreno:</strong> {planet.terrain}</p>
            <p><strong>Clima:</strong> {planet.climate}</p>

            <section className="space-y-2">
                <h2 className="text-2xl font-semibold text-amber-300">Residentes</h2>
                <ul className="list-disc list-inside">
                    {planet.residents.map((r) => (
                        <ResidentName key={r} url={r} />
                    ))}
                </ul>
            </section>
        </div>
    );
}

function ResidentName({ url }) {
    const [name, setName] = useState('');
    useEffect(() => {
        api.get(url.replace('https://swapi.dev/api', '')).then((r) => setName(r.data.name));
    }, [url]);
    return <li>{name}</li>;
}
