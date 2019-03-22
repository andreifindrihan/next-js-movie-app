import fetch from 'isomorphic-unfetch';
import Layout from "../components/Layout";
import Movie from '../components/Movie';
import { API_KEY } from '../API_KEY';
import '../sass/styles.scss';

const Movies = props => {
    return (
        <Layout>
            <h1 className="main-header text-center">Movie list!</h1>
            <div className="grid">
                {props.movieInfo.map(movie => (
                    <Movie key={movie.id} movieInfo={movie} />
                ))}
            </div>
        </Layout>
    )
}

Movies.getInitialProps = async () => {
    const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
    const data = await res.json();

    return {
        movieInfo: data.results
    }
}

export default Movies;