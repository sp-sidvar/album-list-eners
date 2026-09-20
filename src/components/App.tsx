import { useState } from 'react';
import albumData from '../data/db.json';
import { Gallery } from './Gallery.tsx';
import { Filter, type FilterValues } from './Filter.tsx';
import { Pagination } from './Pagination.tsx';

const RESULTS_PER_PAGE = 20;

export function App() {
    const [filters, setFilters] = useState({
        genre: '',
        anio: '',
    });

    const [textToFilter, setTextToFilter] = useState('');

    const [currentPage, setCurrentPage] = useState<number>(1);

    const albumsFiltered = albumData.filter((album) => {
        const genreFiltered =
            filters.genre === '' ||
            album.genre.toLowerCase() === filters.genre.toLowerCase();
        const anioFiltered =
            filters.anio === '' || String(album.year) === filters.anio;

        return genreFiltered && anioFiltered;
    });

    const albumTextFilter =
        textToFilter === ''
            ? albumsFiltered
            : albumsFiltered.filter((album) => {
                  return album.artist
                      .toLowerCase()
                      .includes(textToFilter.toLowerCase());
              });

    const totalPages = Math.ceil(albumTextFilter.length / RESULTS_PER_PAGE);

    const pagedAlbums = albumTextFilter.slice(
        (currentPage - 1) * RESULTS_PER_PAGE,
        currentPage * RESULTS_PER_PAGE,
    );

    const handlePageChange = (page: number): void => {
        setCurrentPage(page);
    };

    const handleSearch = (filters: FilterValues): void => {
        setCurrentPage(1);
        setFilters(filters);
    };

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
