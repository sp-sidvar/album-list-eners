import type React from 'react';
import '../classes/filter-style.css';

/**
 * Representa los valores de los filtros seleccionados en el formulario.
 * @interface FilterValues
 */
export interface FilterValues {
    /** Texto de búsqueda enfocado en el nombre del artista. */
    search: string;
    /** Género musical seleccionado en el menú desplegable. */
    genre: string;
    /** Año de lanzamiento seleccionado en el menú desplegable. */
    anio: string;
}

/**
 * Propiedades para el componente Filter.
 * @interface FilterProps
 */
interface FilterProps {
    /**
     * Función callback que se ejecuta al enviar (submit) el formulario de filtros.
     * @param {FilterValues} filters - Objeto con el estado actual de todos los filtros aplicados.
     */
    onSearch: (filters: FilterValues) => void;
    /**
     * Función callback que se ejecuta en tiempo real cada vez que cambia el texto del input de búsqueda.
     * @param {string} text - El texto actual ingresado en el input.
     */
    onTextFilter: (text: string) => void;
}

/**
 * Componente de barra de navegación que contiene un formulario de filtrado para álbumes musicales.
 * Permite buscar por artista en tiempo real, y filtrar por género o año al hacer submit.
 *
 * @component
 * @param {FilterProps} props - Propiedades del componente.
 * @returns {React.JSX.Element} Una barra de navegación con los controles de filtrado.
 *
 */
export function Filter({ onSearch, onTextFilter }: FilterProps) {
    const currentYear = new Date().getFullYear();
    const years = Array.from(
        { length: 100 },
        (_, index) => currentYear - index,
    );

    const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);

        const filters: FilterValues = {
            search: (formData.get('artist') as string) || '',
            genre: (formData.get('genre') as string) || '',
            anio: (formData.get('anio') as string) || '',
        };

        onSearch(filters);
    };

    const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const text = event.target.value;
        onTextFilter(text);
    };

    return (
        <nav id="navbar">
            <form
                id="filter"
                role="search"
                onSubmit={handleSubmit}
            >
                <input
                    type="text"
                    id="artist"
                    name="artist"
                    placeholder="Artista"
                    onChange={handleTextChange}
                />
                <select
                    name="genre"
                    id="genre"
                    defaultValue=""
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
                    defaultValue=""
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
                <button
                    id="submitBtn"
                    type="submit"
                >
                    Filtrar
                </button>
            </form>
        </nav>
    );
}
