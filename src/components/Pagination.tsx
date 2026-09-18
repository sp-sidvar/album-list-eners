import type React from 'react';
import '../classes/pagination-style.css';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';

/**
 * Componente de navegación que renderiza los controles de paginación numéricos con flechas de avance y retroceso.
 * Maneja la inhabilitación visual y lógica de los botones en los extremos (primera y última página).
 *
 * @component
 * @param {Object} props - Propiedades del componente.
 * @param {number} [props.currentPage=1] - Índice de la página que se encuentra activa actualmente.
 * @param {number} [props.totalPages=5] - Cantidad total de páginas disponibles para navegar.
 * @param {function} props.onPageChange - Función callback que se dispara al cambiar de página. Recibe el número de la nueva página como argumento.
 * @returns {React.JSX.Element} Una barra de navegación con enlaces dinámicos para el cambio de páginas.
 *
 */
export function Pagination({
    currentPage = 1,
    totalPages = 5,
    onPageChange,
}: {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}) {
    // Creacion de numeracion respecto a total de paginas por mostrar
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

    const firstPage = currentPage === 1;
    const lastPage = currentPage === totalPages;

    const handlePrevBtn = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        if (!firstPage) {
            onPageChange(currentPage - 1);
        }
    };

    const handleNextBtn = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        if (!lastPage) {
            onPageChange(currentPage + 1);
        }
    };

    const handleChangePage = (
        event: React.MouseEvent<HTMLAnchorElement>,
        page: number,
    ) => {
        event.preventDefault();
        if (page !== currentPage) {
            onPageChange(page);
        }
    };

    const blockPrevBtn = firstPage ? { pointerEvents: 'none' as const } : {};
    const blockNextBtn = lastPage ? { pointerEvents: 'none' as const } : {};

    return (
        <nav className="pagination">
            <a
                href="#"
                style={blockPrevBtn}
                onClick={handlePrevBtn}
            >
                <IconChevronLeft stroke={2} />
            </a>

            {pages.map((page) => (
                <a
                    key={page}
                    href="#"
                    className={currentPage === page ? 'active' : ''}
                    onClick={(event) => handleChangePage(event, page)}
                >
                    {page}
                </a>
            ))}

            <a
                href="#"
                style={blockNextBtn}
                onClick={handleNextBtn}
            >
                <IconChevronRight stroke={2} />
            </a>
        </nav>
    );
}
