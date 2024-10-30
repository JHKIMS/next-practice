import { API_URL } from "../app/(home)/page";

async function getVideos(id: string) {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const response = await fetch(`${API_URL}/${id}/videos`);
  return response.json();
}

const MovieVideo = async ({ id }: { id: string }) => {
  const videos = await getVideos(id);
  return <div>{JSON.stringify(videos)}</div>;
};

export default MovieVideo;
