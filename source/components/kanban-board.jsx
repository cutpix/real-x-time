import React, {Component} from 'react';
import List from './list';

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

export default class KanbanBoard extends Component {
    render() {
        return (
            <div className='board'>
                <List id="todo" title="To Do"
                    cards={cardsList.filter(cart => cart.status === 'todo') } />
                <List id="in-progress" title="In Progress"
                    cards={cardsList.filter(card => card.status === 'in-progress') } />
                <List id="done" title="Done"
                    cards={cardsList.filter(card => card.status === 'done') } />
            </div>
        );
    }
}