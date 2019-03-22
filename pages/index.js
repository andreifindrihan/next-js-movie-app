import Fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';
import { API_KEY } from '../API_KEY';
import '../sass/styles.scss';

const Index = props => {
    return (
        <Layout>
            <h1 className="main-header text-center">Popular Movies</h1>

            <div className="bd-example">
                <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={`https://image.tmdb.org/t/p/original/${props.movieData[0].backdrop_path}`} className="d-block w-100" alt="Movie Poster" />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>{props.movieData[0].title}</h5>
                                <p>{props.movieData[0].overview}</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={`https://image.tmdb.org/t/p/original/${props.movieData[1].backdrop_path}`} className="d-block w-100" alt="Movie Poster" />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>{props.movieData[1].title}</h5>
                                <p>{props.movieData[1].overview}</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={`https://image.tmdb.org/t/p/original/${props.movieData[2].backdrop_path}`} className="d-block w-100" alt="Movie Poster" />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>{props.movieData[2].title}</h5>
                                <p>{props.movieData[2].overview}</p>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        </Layout>
    )
}

Index.getInitialProps = async () => {
    const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
    const data = await res.json();

    return {
        movieData: data.results
    }
}

export default Index;