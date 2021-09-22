const callToApi = (searchSeries) => {
  // Recibimos por parámetros searchSeries,que nos lo pasan desde App dentro del use Effect
  // Llamamos al fetch interpolando la URL del API más el nombre buscado
  return fetch(`https://api.tvmaze.com/search/shows?q=${searchSeries}`)
    .then((response) => response.json())
    .then((response) => {
      // La respuesta del API es un objeto que dentro tiene la propiedad results que es un array
      // Recorremos el array results obteniendo solo el nombre
      // Esto lo hacemos para limpiar la respuesta del API antes de devolverla al componente App
      // Esto es opcional pero recomendado

      const result = response.results.map((serie) => {
        return {
          name: serie.name,
        };
      });
      return result;
    });
};
export default callToApi;
