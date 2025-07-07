// src/features/people/PersonDetail.js
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../api/api';

export default function PersonDetail() {
    const { id } = useParams();
    const [person, setPerson] = useState(null);

    useEffect(() => {
        api.get(`/people/${id}`).then((res) => setPerson(res.data));
    }, [id]);

    if (!person) return <p className="text-center">Cargando…</p>;

    return (
        <div className="max-w-lg mx-auto bg-gray-800 p-8 rounded-2xl shadow-2xl space-y-4">
            <h1 className="text-3xl font-bold text-amber-400">{person.name}</h1>
            <p><strong>Altura:</strong> {person.height} cm</p>
            <p><strong>Peso:</strong> {person.mass} kg</p>
            <p><strong>Género:</strong> {person.gender}</p>

            <section className="space-y-2">
                <h2 className="text-2xl font-semibold text-amber-300">Películas</h2>
                <ul className="list-disc list-inside">
                    {person.films.map((f) => (
                        <FilmName key={f} url={f} />
                    ))}
                </ul>
            </section>
        </div>
    );
}

function FilmName({ url }) {
    const [title, setTitle] = useState('');
    useEffect(() => {
        api.get(url.replace('https://swapi.dev/api', '')).then((r) => setTitle(r.data.title));
    }, [url]);
    return <li>{title}</li>;
}
