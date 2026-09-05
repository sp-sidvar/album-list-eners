import "../classes/filter-style.css";
export function Filter() {
  return (
    <nav id="navbar">
      <form id="filter" action="">
        <label>Artista</label>
        <input type="text" />
        <label>Genero</label>
        <select name="genero" id="genero">
          <option value="" disabled selected>
            Selecciona una opcion...
          </option>
          <option value=""></option>
        </select>
        <label>ano</label>
        <select name="ano" id="ano">
          <option value="" disabled selected>
            Selecciona una opcion...
          </option>
        </select>
        <button type="submit">Filtrar</button>
      </form>
    </nav>
  );
}

// Filtros a realizar
// Artista (abierto = text input)
// Genero (cerrado = select)
// Ano (cerrado = carrusel)
// Escuchados = (cerrado = booleano)