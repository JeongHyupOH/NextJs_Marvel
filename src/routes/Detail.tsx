import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Movie from '../components/Movie';
import { Link } from 'react-router-dom';
import styles from './Detail.module.css';

export default function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState('');

  const getMovie = async () => {
    const response = await fetch(
      `https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters/${id}`
    );
    const json = await response.json();
    setMovie(json.data.results[0]);

    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, [id]);
  console.log(movie);
  console.log(id);

  return (
    <div className={styles.container}>
      <Link to="/" className={styles.homeButton}>
        ⬅️ Home 으로..
      </Link>
      {loading ? (
        <h1 className={styles.loader}>Loading...</h1>
      ) : (
        <>
          <Movie
            key={movie.id}
            id={movie.id}
            name={movie.name}
            thumbnail={movie.thumbnail}
            series={movie.series}
            stories={movie.stories}
          />
        </>
      )}
    </div>
  );
}
