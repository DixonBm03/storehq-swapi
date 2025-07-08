import { useEffect, useState } from 'react';
import { useDispatch, useSelector }   from 'react-redux';
import { fetchPeople }                from './PeopleSlice';
import { Link }                       from 'react-router-dom';

export default function PeopleList() {
    const dispatch = useDispatch();
    const { items, next, prev, status, error } = useSelector(s => s.people);
    const [search, setSearch] = useState('');

    useEffect(() => {
        dispatch(fetchPeople(`/people?search=${search}`));
    }, [dispatch, search]);

    if (status === 'loading') return <p className="text-center">Cargando…</p>;
    if (status === 'failed')  return <p className="text-center" style={{color:'tomato'}}>Error: {error}</p>;

    return (
        <>
            <input
                className="search-input"
                placeholder="Buscar personaje…"
                value={search}
                onChange={e => setSearch(e.target.value)}
            />

            <ul className="grid">
                {items.map(p => {
                    const id = p.url.match(/\/people\/(\d+)\//)[1];
                    return (
                        <li key={p.url} className="card">
                            <h2>{p.name}</h2>
                            <Link to={`/people/${id}`}>Ver detalle →</Link>
                        </li>
                    );
                })}
            </ul>

            <div className="pagination">
                <button onClick={() => dispatch(fetchPeople(prev))} disabled={!prev}>
                    « Anterior
                </button>
                <button onClick={() => dispatch(fetchPeople(next))} disabled={!next}>
                    Siguiente »
                </button>
            </div>
        </>
    );
}
