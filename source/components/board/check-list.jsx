import React, { Component } from 'react';

export default class CheckList extends Component {
    render() {
        let tasks = this.props.tasks.map(task => {
            return (
                <li key={task.id} className="check-list-task">
                    <input type="checkbox" maxLength="30" defaultChecked={task.done} />
                    {task.name}
                    <a href="#" className="check-list-task-name" />
                </li>
            );
        });

        return (
            <div className="check-list">
                <ul>{tasks}</ul>
            </div>
        );
    }
}