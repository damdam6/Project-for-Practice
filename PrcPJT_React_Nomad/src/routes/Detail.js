import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const getMovie = async () => {
    const res = await fetch(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
    );
    const json = await res.json();
    setData(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, [id]);

  const [data, setData] = useState([]);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <h1>{data.title}</h1>
          <h4>{data.title_english}</h4>
          <br />
          <ul>
            <li key={data.year}>year : {data.year}</li>
            <li key={data.rating}>rating : {data.rating}</li>
            <li key={data.runtime}>runtime : {data.runtime}</li>
            <li key={data.genre}>
              genre
              <ul>
                <div>
                  {data.genres.map((g) => (
                    <li key={g}>{g}</li>
                  ))}
                </div>
              </ul>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
export default Detail;
