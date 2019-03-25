import React from 'react';
import fetch from 'isomorphic-unfetch';
import Layout from "../components/Layout";
import Movie from '../components/Movie';
import { API_KEY } from '../API_KEY';
import '../sass/styles.scss';
import { connect } from 'react-redux';

class Movies extends React.Component {
    static getInitialProps = async ({ store }) => {
        const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
        const data = await res.json();
        store.dispatch({ type: 'ADD_MOVIES', payload: data.results })
        return {
            movieInfo: data.results
        }
    }
    render() {
        console.log(this.props)
        return (
            <Layout>
                <h1 className="main-header text-center">Movie list!</h1>
                <div className="grid">
                    {this.props.movieInfo.map(movie => (
                        <Movie key={movie.id} movieInfo={movie} />
                    ))}
                </div>
            </Layout>
        )
    }
}

export default connect(state => state)(Movies);