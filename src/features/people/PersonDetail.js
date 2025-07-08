import { useEffect, useState } from 'react';
import { useParams }            from 'react-router-dom';
import api                      from '../../api/api';

export default function PersonDetail() {
    const { id } = useParams();
    const [person, setPerson] = useState(null);

    useEffect(() => {
        api.get(`/people/${id}`).then(r => setPerson(r.data));
    }, [id]);

    if (!person) return <p className="text-center">Cargando…</p>;

    return (
        <div className="card" style={{maxWidth: '500px', margin: 'auto'}}>
            <h1>{person.name}</h1>
            <p><strong>Altura:</strong> {person.height} cm</p>
            <p><strong>Peso:</strong> {person.mass} kg</p>
            <p><strong>Género:</strong> {person.gender}</p>
        </div>
    );
}
