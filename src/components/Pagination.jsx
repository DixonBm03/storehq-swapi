// src/components/Pagination.jsx
export default function Pagination({ prev, next, onPage }) {
    const btn = 'px-5 py-2 font-semibold rounded-lg shadow-md transition';
    return (
        <div className="flex justify-center items-center space-x-6 mt-8">
            <button
                onClick={() => onPage(prev)}
                disabled={!prev}
                className={`${btn} bg-amber-400 text-black hover:bg-amber-500 disabled:opacity-50`}
            >
                « Anterior
            </button>
            <button
                onClick={() => onPage(next)}
                disabled={!next}
                className={`${btn} bg-amber-400 text-black hover:bg-amber-500 disabled:opacity-50`}
            >
                Siguiente »
            </button>
        </div>
    );
}
