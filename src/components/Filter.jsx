import "../classes/filter-style.css";
import { useMemo } from "react";

export function Filter() {
  const listaAnios = useMemo(() => {
    const anioActual = new Date().getFullYear();
    const anioInicio = anioActual - 100;
    const anios = [];

    for (let i = anioActual; i >= anioInicio; i--) {
      anios.push(i);
    }
    return anios;
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <nav id="navbar">
      <form id="filter" onSubmit={handleSubmit}>
        <input type="text" placeholder="Artista" />
        <select name="genero" id="genero" defaultValue="">
          <option value="" disabled>
            Seleccionar genero {""}
          </option>
          <option value="rap">Rap</option>
          <option value="rock">Rock</option>
          <option value="punk">Punk</option>
          <option value="jazz">Jazz</option>
        </select>
        <select name="anio" id="anio" defaultValue="">
          <option value="" disabled>
            Seleccionar año{" "}
          </option>
          {listaAnios.map((anio) => (
            <option key={anio} value={anio}>
              {anio}
            </option>
          ))}
        </select>
        <label htmlFor="esuchados" className="checkbox-container">
          <span>Esuchados</span>
          <input type="checkbox" id="escuchados" />
        </label>
        <button type="submit">Filtrar</button>
      </form>
    </nav>
  );
}