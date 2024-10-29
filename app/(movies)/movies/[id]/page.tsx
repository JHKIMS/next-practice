const MovieDetail = ({ params: { id } }: { params: { id: string } }) => {
  console.log(`ID CHECK: ${id}`);
  return <div>Moives Detail: {id}</div>;
};

export default MovieDetail;
