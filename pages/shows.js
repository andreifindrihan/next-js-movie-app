import Fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';
import Show from '../components/Show';
import { API_KEY } from '../API_KEY';
import '../sass/styles.scss';

const Shows = props => {
    return (
        <Layout>
            <h1 className="main-header text-center">TV Shows List!</h1>
            <div className="grid">
                {props.showInfo.map(show => (
                    <Show key={show.id} showInfo={show} />
                ))}
            </div>
        </Layout>
    )
}

Shows.getInitialProps = async () => {
    const res = await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=en-US&page=1`);
    const data = await res.json();

    return {
        showInfo: data.results
    }
}

export default Shows;