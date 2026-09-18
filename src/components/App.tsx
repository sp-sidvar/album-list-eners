import { useState } from 'react';
import albumData from '../data/db.json';
import { Gallery } from './Gallery.tsx';
import { Filter, type FilterValues } from './Filter.tsx';
import { Pagination } from './Pagination.tsx';

/**
 * Cantidad máxima de álbumes que se muestran de manera simultánea en una sola página.
 * @constant {number}
 */
const RESULTS_PER_PAGE = 20;

/**
 * Componente raíz/principal de la aplicación que orquesta el catálogo musical.
 * Gestiona de forma centralizada los estados globales de filtrado (por texto, género y año)
 * junto con la lógica de paginación para distribuir los álbumes obtenidos de la base de datos.
 *
 * @component
 * @returns {React.JSX.Element} El diseño estructurado de la aplicación que incluye cabecera (filtros), contenido principal (galería) y pie de página (paginación).
 */
export function App() {
    /**
     * Estado que almacena los criterios de filtrado seleccionados mediante el envío del formulario.
     * @type {Object}
     * @property {string} genre - Categoría o género musical seleccionado.
     * @property {string} anio - Año de lanzamiento seleccionado.
     */
    const [filters, setFilters] = useState({
        genre: '',
        anio: '',
    });

    /**
     * Estado para rastrear el texto de búsqueda ingresado en tiempo real para filtrar por artista.
     * @type {string}
     */
    const [textToFilter, setTextToFilter] = useState('');

    /**
     * Estado para rastrear el número de la página activa actual.
     * @type {number}
     */
    const [currentPage, setCurrentPage] = useState<number>(1);

    /**
     * Colección de álbumes que cumplen estrictamente con los filtros de género y año de lanzamiento.
     * @type {Array<Object>}
     */
    const albumsFiltered = albumData.filter((album) => {
        const genreFiltered =
            filters.genre === '' ||
            album.genre.toLowerCase() === filters.genre.toLowerCase();
        const anioFiltered =
            filters.anio === '' || String(album.year) === filters.anio;

        return genreFiltered && anioFiltered;
    });

    /**
     * Colección final de álbumes filtrados tras aplicar la búsqueda de texto en tiempo real sobre el artista.
     * @type {Array<Object>}
     */
    const albumTextFilter =
        textToFilter === ''
            ? albumsFiltered
            : albumsFiltered.filter((album) => {
                  return album.artist
                      .toLowerCase()
                      .includes(textToFilter.toLowerCase());
              });

    /**
     * Número total de páginas calculadas dinámicamente según la cantidad de álbumes que superaron todos los filtros.
     * @type {number}
     */
    const totalPages = Math.ceil(albumTextFilter.length / RESULTS_PER_PAGE);

    /**
     * Subconjunto segmentado de álbumes correspondientes únicamente al rango del índice de la página activa actual.
     * @type {Array<Object>}
     */
    const pagedAlbums = albumTextFilter.slice(
        (currentPage - 1) * RESULTS_PER_PAGE,
        currentPage * RESULTS_PER_PAGE,
    );

    /**
     * Actualiza el estado de la página actual cuando el usuario navega a través del componente Pagination.
     *
     * @param {number} page - El número de la nueva página seleccionada.
     * @returns {void}
     */
    const handlePageChange = (page: number): void => {
        setCurrentPage(page);
    };

    /**
     * Maneja la actualización de filtros por categoría/año enviados desde el formulario y reestablece el paginado.
     *
     * @param {FilterValues} filters - Nuevos valores de filtros aplicados.
     * @returns {void}
     */
    const handleSearch = (filters: FilterValues): void => {
        setCurrentPage(1);
        setFilters(filters);
    };

    /**
     * Maneja el cambio dinámico del texto de búsqueda de artistas y reestablece el paginado a la primera página.
     *
     * @param {string} newTextToFilter - Cadena de texto correspondiente al nombre del artista buscado.
     * @returns {void}
     */
    const handleTextFilter = (newTextToFilter: string): void => {
        setTextToFilter(newTextToFilter);
        setCurrentPage(1);
    };

    return (
        <>
            <header>
                <Filter
                    onSearch={handleSearch}
                    onTextFilter={handleTextFilter}
                />
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
