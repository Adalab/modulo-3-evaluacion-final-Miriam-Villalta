//fetch
const api = () => {
  return fetch("https://rickandmortyapi.com/api/character")
    .then((response) => response.json())
    .then((data) => {
      return data.results.map((user) => {
        return {
          name: user.name,
          id: user.id,
          species: user.species,
          image: user.image,
          status: user.status,
          origin: user.origin,
          episode: user.episode,
        };
      });
    });
};

export default api;
