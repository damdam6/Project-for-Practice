import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

function Movie({ id, coverImg, title, summary, genre }) {
  return (
    <div>
      {
        <div>
          <h3>
            <Link to={`/movie/${id}`}>{title}</Link>
          </h3>
          <img src={coverImg} />
          <p>{summary}</p>
          <ul>
            {genre.map((g) => (
              <li key={g}>{g}</li>
            ))}
          </ul>
          <br></br>
        </div>
      }
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genre: PropTypes.arrayOf(PropTypes.string),
};

export default Movie;
