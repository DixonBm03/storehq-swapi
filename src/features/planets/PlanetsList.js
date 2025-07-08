import { useEffect } from 'react';
import { useDispatch, useSelector }   from 'react-redux';
import { fetchPlanets }               from './PlanetsSlice';
import { Link }                       from 'react-router-dom';

export default function PlanetsList() {
    const dispatch = useDispatch();
    const { items, next, prev, status, error } = useSelector(s => s.planets);

    useEffect(() => {
        dispatch(fetchPlanets());
    }, [dispatch]);

    if (status === 'loading') return <p className="text-center">Cargando…</p>;
    if (status === 'failed')  return <p className="text-center" style={{color:'tomato'}}>Error: {error}</p>;

    return (
        <>
            <ul className="grid">
                {items.map(p => {
                    const id = p.url.match(/\/planets\/(\d+)\//)[1];
                    return (
                        <li key={p.url} className="card">
                            <h2>{p.name}</h2>
                            <p><strong>Población:</strong> {p.population}</p>
                            <Link to={`/planets/${id}`}>Ver detalle →</Link>
                        </li>
                    );
                })}
            </ul>

            <div className="pagination">
                <button onClick={() => dispatch(fetchPlanets(prev))} disabled={!prev}>
                    « Anterior
                </button>
                <button onClick={() => dispatch(fetchPlanets(next))} disabled={!next}>
                    Siguiente »
                </button>
            </div>
        </>
    );
}
