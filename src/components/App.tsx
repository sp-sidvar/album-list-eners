import { useState, useCallback } from 'react';
import albumData from '../data/db.json';
import { Gallery } from './Gallery.tsx';
import { Filter, type FilterValues } from './Filter.tsx';
import { Pagination } from './Pagination.tsx';

// Cantidad de albums visibles por página
const RESULTS_PER_PAGE = 20;

export function App() {
    /** @type {[FilterValues, React.Dispatch<React.SetStateAction<FilterValues>>]} Estado de los criterios de búsqueda activos */
    const [filters, setFilters] = useState<FilterValues>({
        artist: '',
        genre: '',
        anio: '',
    });

    /** @type {[number, React.Dispatch<React.SetStateAction<number>>]} Estado de la página actual del catálogo */
    const [currentPage, setCurrentPage] = useState<number>(1);

    /** 
     * Colección de álbumes filtrados de manera simultánea en memoria.
     * Se evalúa dinámicamente en cada renderizado.
     */
    const albumsFiltered = albumData.filter((album) => {
        const artistFiltered =
            filters.artist === '' ||
            album.artist.toLowerCase().includes(filters.artist.toLowerCase());

        const genreFiltered =
            filters.genre === '' ||
            album.genre.toLowerCase() === filters.genre.toLowerCase();

        const anioFiltered =
            filters.anio === '' || String(album.year) === filters.anio;

        return artistFiltered && genreFiltered && anioFiltered;
    });

    /** Cantidad total de páginas necesarias basándose en el resultado del filtro */
    const totalPages = Math.ceil(albumsFiltered.length / RESULTS_PER_PAGE);

    /** Subconjunto de álbumes correspondientes únicamente a la página activa */
    const pagedAlbums = albumsFiltered.slice(
        (currentPage - 1) * RESULTS_PER_PAGE,
        currentPage * RESULTS_PER_PAGE,
    );

    /**
     * Modifica la página activa del catálogo.
     * @param {number} page - El número de página destino.
     */
    const handlePageChange = (page: number): void => {
        setCurrentPage(page);
    };

    /**
     * Callback optimizado en memoria que intercepta los filtros emitidos por el componente Filter.
     * Evita loops infinitos de renderizado y bloqueos en la paginación evaluando si los valores cambiaron de verdad.
     * 
     * @param {FilterValues} newFilters - Los nuevos filtros entrantes desde el formulario.
     */
    const handleSearch = useCallback((newFilters: FilterValues): void => {
        setFilters((prevFilters) => {
            if (
                prevFilters.artist === newFilters.artist &&
                prevFilters.genre === newFilters.genre &&
                prevFilters.anio === newFilters.anio
            ) {
                return prevFilters;
            }
            setCurrentPage(1);
            return newFilters;
        });
    }, []);

    return (
        <>
            <header>
                <Filter onSearch={handleSearch} />
            </header>
            <main>
                <Gallery albumData={pagedAlbums} />
            </main>
            <footer>
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                />
            </footer>
        </>
    );
}
