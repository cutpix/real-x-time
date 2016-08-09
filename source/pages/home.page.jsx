import React, {Component} from 'react';
import {Link} from 'react-router';


class HomePage extends Component {
    render() {
        const hero = {
            title: 'Build Your First React.js App',
            description: 'Building your first React application can be challenging. React itself is fairly simple. It has a small API that can be learned quickly. One of the huge challenges when you are getting started with React is all of the other pieces that contribute to creating application.'
        };
        return (
            <div className="page-content" role="main">
                <div className="container clearfix">
                    <div className="hero">
                        <h1 className="title">{hero.title}</h1>
                        <p className="description">{hero.description}</p>
                        <Link to="about" className="btn btn-primary btn-lg">About</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;