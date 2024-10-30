import { Suspense } from "react";
import MovieInfo from "../../../../components/movie-info";
import MovieVideo from "../../../../components/movie-video";

const MovieDetail = async ({ params }: { params: { id: string } }) => {
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
