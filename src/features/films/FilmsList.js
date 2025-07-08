import { useEffect } from 'react';
import { useDispatch, useSelector }   from 'react-redux';
import { fetchFilms }                 from './FilmsSlice';
import { Link }                       from 'react-router-dom';

export default function FilmsList() {
    const dispatch = useDispatch();
    const { items, status, error } = useSelector(s => s.films);

    useEffect(() => {
        dispatch(fetchFilms());
    }, [dispatch]);

    if (status === 'loading') return <p className="text-center">Cargando…</p>;
    if (status === 'failed')  return <p className="text-center" style={{color:'tomato'}}>Error: {error}</p>;

    return (
        <ul className="grid">
            {items.map(f => {
                const year = new Date(f.release_date).getFullYear();
                const id   = f.url.match(/\/films\/(\d+)\//)[1];
                return (
                    <li key={f.url} className="card">
                        <h2>{f.title}</h2>
                        <p><strong>Año:</strong> {year}</p>
                        <Link to={`/films/${id}`}>Ver detalle →</Link>
                    </li>
                );
            })}
        </ul>
    );
}
