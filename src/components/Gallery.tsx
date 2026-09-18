import '../classes/gallery-style.css';
import { Album } from './Album.jsx';
import type { AlbumProps } from './Album.jsx';

/**
 * Propiedades para el componente Gallery.
 * @interface GalleryProps
 */
interface GalleryProps {
    /** Listado de álbumes a renderizar en la galería. */
    albumData: AlbumProps['data'][];
}

/**
 * Componente que renderiza una cuadrícula o contenedor de álbumes musicales.
 * Se encarga de iterar sobre una lista de datos de álbumes y renderizar un componente `Album` por cada uno.
 *
 * @component
 * @param {GalleryProps} props - Propiedades del componente.
 * @param {AlbumProps['data'][]} props.albumData - Arreglo de objetos con la información de los álbumes.
 * @returns {React.JSX.Element} Una sección contenedora con la colección de álbumes renderizados.
 *
 */
export function Gallery({ albumData }: GalleryProps) {
    return (
        // Generacion de renderizado basado en lectura de db
        <section className="content">
            {albumData.map((album) => (
                <Album
                    // Renerizado de Album por id
                    key={album.id}
                    data={album}
                />
            ))}
        </section>
    );
}
