export default function Results({ accessToken, genres }) {
  
  const genre = genres.map((genre) => <li>{genre}</li>)
  
  
  return <h1>{genre}</h1>;
}
