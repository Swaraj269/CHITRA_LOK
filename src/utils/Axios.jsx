import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNzNiOTcwN2Q0NjFhZTU5YTVlNzIzNzA3YTgwYzkxOSIsIm5iZiI6MTcyMDU5MjcyOS4wNjksInN1YiI6IjY2OGUyOTU5NDczZDkzNDljYzBkM2YzYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cQDtIvW85x1OZbIMfvxVI7D8ddRxYGfrC60FQKF7k7Q",
  },
});

export default instance;
