import { useEffect, useState } from 'react';
import { useParams }            from 'react-router-dom';
import api                      from '../../api/api';

export default function PlanetDetail() {
    const { id } = useParams();
    const [planet, setPlanet] = useState(null);

    useEffect(() => {
        api.get(`/planets/${id}`).then(r => setPlanet(r.data));
    }, [id]);

    if (!planet) return <p className="text-center">Cargando…</p>;

    return (
        <div className="card" style={{maxWidth: '500px', margin: 'auto'}}>
            <h1>{planet.name}</h1>
            <p><strong>Población:</strong> {planet.population}</p>
            <p><strong>Terreno:</strong> {planet.terrain}</p>
            <p><strong>Clima:</strong> {planet.climate}</p>
        </div>
    );
}
