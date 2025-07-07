// src/features/people/PeopleList.js
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPeople } from './PeopleSlice';
import { Link } from 'react-router-dom';
import Pagination from '../../components/Pagination';

export default function PeopleList() {
    const dispatch = useDispatch();
    const { items, next, prev, status, error } = useSelector((s) => s.people);
    const [search, setSearch] = useState('');

    useEffect(() => {
        dispatch(fetchPeople(`/people?search=${search}`));
    }, [dispatch, search]);

    return (
        <div className="space-y-6">
            <div className="flex justify-center">
                <input
                    type="text"
                    placeholder="Buscar personaje…"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full max-w-lg px-4 py-2 rounded-full bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
            </div>

            {status === 'loading' && <p className="text-center">Cargando personajes…</p>}
            {status === 'failed' && <p className="text-center text-red-500">Error: {error}</p>}

            {status === 'succeeded' && (
                <>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {items.map((p) => {
                            const id = p.url.match(/\/people\/(\d+)\//)[1];
                            return (
                                <li
                                    key={p.url}
                                    className="bg-gray-800 p-6 rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition"
                                >
                                    <h2 className="font-bold text-2xl mb-4">{p.name}</h2>
                                    <Link
                                        to={`/people/${id}`}
                                        className="inline-block mt-2 text-amber-400 hover:underline font-medium"
                                    >
                                        Ver detalle →
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                    <Pagination prev={prev} next={next} onPage={(u) => dispatch(fetchPeople(u))} />
                </>
            )}
        </div>
    );
}
