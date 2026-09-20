import type React from 'react';
import '../classes/filter-style.css';

export interface FilterValues {
    search: string;
    genre: string;
    anio: string;
}

interface FilterProps {
    onSearch: (filters: FilterValues) => void;
    onTextFilter: (text: string) => void;
}

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
            </form>
        </nav>
    );
}
