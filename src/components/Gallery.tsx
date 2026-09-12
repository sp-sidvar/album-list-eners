import { useState } from 'react';
import '../classes/gallery-style.css';
import data from '../data/db.json';
import { Album } from './Album';

export function Gallery() {
    const [albums] = useState(data);

    return (
        <section className="content">
            {albums.map((album) => (
                <Album
                    key={album.id}
                    data={album}
                />
            ))}
        </section>
    );
}
