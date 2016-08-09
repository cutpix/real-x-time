import React, {Component} from 'react';
import {Link} from 'react-router';

import KanbanBoard from '../components/kanban-board';

const cardsList = [
    {
        id: 1,
        title: 'Card One title',
        description: 'Card detailed description.',
        status: 'todo',
        tasks: [
            { id: 1, name: 'Task One', done: true },
            { id: 2, name: 'Task Two', done: false },
            { id: 3, name: 'Task Three', done: false }
        ]
    },
    {
        id: 2,
        title: 'Card Two title',
        description: 'Card detailed description',
        status: 'in-progress',
        tasks: []
    },
    {
        id: 3,
        title: 'Card Three title',
        description: 'Card detailed description',
        status: 'done',
        tasks: []
    },
];

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