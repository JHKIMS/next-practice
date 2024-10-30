import { API_URL } from "../app/(home)/page";

async function getMovie(id: string) {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

const MovieInfo = async ({ id }: { id: string }) => {
  const movie = await getMovie(id);
  return <div>{JSON.stringify(movie)}</div>;
};

export default MovieInfo;