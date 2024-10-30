import { API_URL } from "../../../(home)/page";

async function getMovie(id:string){
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}
async function getVideos(id:string){
  const response = await fetch(`${API_URL}/${id}/videos`);
  return response.json();
}



const MovieDetail = async({ params: { id } }: { params: { id: string } }) => {
  console.log("==========");
  console.log("start data fetching");
  const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]);
  console.log("end data fetching");
  return <div>{movie.title}</div>;
};

export default MovieDetail;
