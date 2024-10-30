import { Suspense } from "react";
import MovieInfo, { getMovie } from "../../../../components/movie-info";
import MovieVideo from "../../../../components/movie-video";

interface IParams {
  params: {id: string}
}

export async function generateMetadata({params}: IParams){
  const {id} = await params;
  const movie = await getMovie(id);
  return {
    title: movie.title,
  }
}

const MovieDetail = async ({ params }: IParams) => {
  const { id } = await params;

  return (
    <div>
      <Suspense fallback={<h1>Loading MovieInfo...</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading MovieVideos...</h1>}>
        <MovieVideo id={id} />
      </Suspense>
    </div>
  );
};

export default MovieDetail;
