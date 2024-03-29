export let movies = [
  {
    id: 0,
    name: "해바라기",
    score: "4"
  },
  {
    id: 1,
    name: "바람",
    score: "5"
  },
  {
    id: 2,
    name: "타짜",
    score: "4"
  }
];

export const getMovies = () => movies;

export const getById = id => {
  const filteredMovies = movies.filter(movie => movie.id === id);
  return filteredMovies[0];
};

// 해당하는 id의 영화만 목록에서 지운다.
export const deleteMovie = id => {
  const cleanedMovies = movies.filter(movie => movie.id !== id);
  if (movies.lennght > cleanedMovies.length) {
    movies = cleandMovies;
    return true;
  } else {
    return false;
  }
};

// 영화를 추가하는 함수
export const addMovie = (name, score) => {
  let hasSameMovie = () => {
    for (let i = 0; i < movies.length; i++) {
      if (movies[i].name === name) {
        return false;
      }
    }
    return true;
  };
  if (hasSameMovie()) {
    const newMovie = {
      id: `${movies.length} + 1`,
      name,
      score
    };
    movies.push(newMovie);
    return newMovie;
  } else {
    return false;
  }
};
