import type React from 'react';
import { useState, useEffect } from 'react';
import '../classes/filter-style.css';

/**
 * Representa la estructura de los valores de filtrado activos.
 * 
 * @interface FilterValues
 * @property {string} artist - Texto para la búsqueda del artista.
 * @property {string} genre - Categoría de género seleccionada.
 * @property {string} anio - Año de lanzamiento del álbum seleccionado.
 */
export interface FilterValues {
    artist: string;
    genre: string;
    anio: string;
}

/**
 * Propiedades aceptadas por el componente Filter.
 * 
 * @interface FilterProps
 * @property {function(FilterValues): void} onSearch - Función callback disparada en tiempo real cuando un filtro cambia.
 */
interface FilterProps {
    onSearch: (filters: FilterValues) => void;
}

/**
 * Componente de barra de navegación que renderiza los controles de búsqueda del catálogo.
 * Administra tres estados independientes en tiempo real y de forma simultánea.
 * 
 * @component
 * @param {FilterProps} props - Las propiedades pasadas al componente.
 * @returns {JSX.Element} El elemento JSX del formulario de filtrado.
 */
export function Filter({ onSearch }: FilterProps) {
    /** @type {[string, React.Dispatch<React.SetStateAction<string>>]} Estado local para el filtro de artista */
    const [artistFilter, setArtistFilter] = useState<string>('');
    
    /** @type {[string, React.Dispatch<React.SetStateAction<string>>]} Estado local para el filtro de género */
    const [genreFilter, setGenreFilter] = useState<string>('');
    
    /** @type {[string, React.Dispatch<React.SetStateAction<string>>]} Estado local para el filtro de año */
    const [anioFilter, setAnioFilter] = useState<string>('');

    const currentYear = new Date().getFullYear();
    const years = Array.from(
        { length: 100 },
        (_, index) => currentYear - index,
    );

    useEffect(() => {
        onSearch({
            artist: artistFilter,
            genre: genreFilter,
            anio: anioFilter,
        });
    }, [artistFilter, genreFilter, anioFilter, onSearch]);

    /**
     * Captura el texto ingresado en el input de búsqueda de artistas.
     * @param {React.ChangeEvent<HTMLInputElement>} event - Evento nativo del input de texto.
     */
    const handleArtistChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setArtistFilter(event.target.value);
    };

    /**
     * Captura la opción seleccionada dentro del menú desplegable de géneros musicales.
     * @param {React.ChangeEvent<HTMLSelectElement>} event - Evento nativo del selector de género.
     */
    const handleGenreChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setGenreFilter(event.target.value);
    };

    /**
     * Captura el año seleccionado dentro del menú desplegable de años de lanzamiento.
     * @param {React.ChangeEvent<HTMLSelectElement>} event - Evento nativo del selector de año.
     */
    const handleAnioChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setAnioFilter(event.target.value);
    };

    return (
        <nav id="navbar">
            <form
                id="filter"
                role="search"
                onSubmit={(e) => e.preventDefault()}
            >
                <input
                    type="text"
                    id="artist"
                    name="artist"
                    placeholder="Artista"
                    value={artistFilter}
                    onChange={handleArtistChange}
                />
                <select
                    name="genre"
                    id="genre"
                    value={genreFilter}
                    onChange={handleGenreChange}
                >
                    <option value="">Genero</option>
                    <option value="jazz">Jazz</option>
                    <option value="funk">Funk</option>
                    <option value="soul">Soul</option>
                    <option value="blues">Blues</option>
                    <option value="rock">Rock</option>
                    <option value="poprock">PopRock</option>
                    <option value="altrock">AltRock</option>
                    <option value="metal">Metal</option>
                    <option value="numetal">NuMetal</option>
                    <option value="punk">Punk</option>
                    <option value="rap">Rap</option>
                    <option value="r&b">R&B</option>
                    <option value="dance">Dance</option>
                    <option value="instrumental">Instrumental</option>
                </select>
                <select
                    name="anio"
                    id="anio"
                    value={anioFilter}
                    onChange={handleAnioChange}
                >
                    <option value="">Año</option>
                    {years.map((year) => (
                        <option
                            key={year}
                            value={year}
                        >
                            {year}
                        </option>
                    ))}
                </select>
            </form>
        </nav>
    );
}
