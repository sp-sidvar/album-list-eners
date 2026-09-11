# Album Listeners

## Planificacion
### Objetivo 
Esta aplicacion ayudara a compartir albumes musicales con el publico que desee conocer nueva musica

### MVP
- Lista de albumes en base de datos renderizada a forma de lista filtrable
- Filtro seccional (artista, anio de salida, genero, etc)

### Adiciones para UX
- Almacenamiento de lista en LS para uso de estados (escuchado, excluido, etc)
- Posibilidad de calificar el album segun gustos (de manera local a forma de clasificacion aniadiendo nuevo filtro)
- Posibilidad de agregar comentarios o notas a los albumes
- Posibilidad de realizar recomendaciones de nuevos albumes

## UI
### **Arquitectura de información:**
[Diseno UI](../recursos/) - Diseno final UI (por procesar)
### **Guía de estilos:** 
[Gua de estilos](../recursos/) - Colores, tipografias, iconos, componentes

## Arquitectura
### Frontend
- React => Componentes con cambio de estados - Componentizacion de codigo - Mantenimiento simple
### DB
- doc JSON para almacenar datos de albumes
### Deploy
Uso de GitHub Pages para despliegue por sencilles de proyecto y facil mantenimiento
