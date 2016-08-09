import React, {Component} from 'react';
import CheckList from './check-list';

export default class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showDetails: false
        };

        this.toggleDetails = this.toggleDetails.bind(this);
    }

    toggleDetails(event) {
        event.preventDefault();

        this.setState({
            showDetails: !this.state.showDetails
        });
    }

    render() {
        let cardDetails;
        if (this.state.showDetails) {
            cardDetails = (
                <div className="card-details">
                    {this.props.description}
                    <CheckList cardId={this.props.id} tasks={this.props.tasks} />
                </div>
            );
        }
        return (
            <div className="card">
                <div className="card-title" onClick={this.toggleDetails}>{this.props.title}</div>
                {cardDetails}
            </div>
        );
    }
}