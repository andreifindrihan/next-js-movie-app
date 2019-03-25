import React, { Component } from 'react';
import fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';
import Show from '../components/Show';
import { API_KEY } from '../API_KEY';
import '../sass/styles.scss';
import { connect } from 'react-redux';

class Shows extends Component {
    static getInitialProps = async ({ store }) => {
        const res = await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=en-US&page=1`);
        const data = await res.json();
        store.dispatch({ type: "ADD_SHOWS", payload: data.results })

        return {
            showInfo: data.results
        }
    }
    render() {
        console.log(this.props)
        return (
            <Layout>
                <h1 className="main-header text-center">TV Shows List!</h1>
                <div className="grid">
                    {this.props.shows.map(show => (
                        <Show key={show.id} showInfo={show} />
                    ))}
                </div>
            </Layout>
        )
    }
}

export default connect(state => state)(Shows);