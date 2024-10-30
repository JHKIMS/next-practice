import { API_URL } from "../app/constants";
import styles from "../styles/movie-info.module.css";

export async function getMovie(id: string) {
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

const MovieInfo = async ({ id }: { id: string }) => {
  const movie = await getMovie(id);
  return (
    <div className={styles.container}>
      <img
        className={styles.poster}
        src={movie.poster_path}
        alt={movie.title}
      />
      <div className={styles.info}>
        <h1 className={styles.title}>{movie.title}</h1>
        <h3>⭐️ {movie.vote_average}</h3>
        <p>{movie.overview}</p>
        <a href={movie.homepage} target={"_blank"}>
          Homepage &rarr;
        </a>
        <div className={styles.company}>
        {movie.production_companies
          .filter(
            (company) =>
              company.logo_path &&
              company.logo_path !== "https://image.tmdb.org/t/p/w300null"
          )
          .map((company) => (
            <img
              key={company.id}
              src={company.logo_path}
              style={{ width: "100px", height: "auto", margin: "10px" }}
            />
          ))}
          </div>
      </div>
    </div>
  );
};

export default MovieInfo;
