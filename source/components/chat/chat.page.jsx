import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as webSocketActions from '../../actions/web.socket.actions';
import PageContent from '../common/page.content';
import MessageList from './message.list';

class ChatPage extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            isConnected: false,
            messages: []
        };

        this.handleConnectionClick = this.handleConnectionClick.bind(this);
    }

    handleConnectionClick(e) {
        e.preventDefault();
        this.props.actions.disconnect();

        if (!this.state.isConnected) {
            this.props.actions.connect('ws://localhost:7775/api/chat');
        }

        this.setState({
            isConnected: !this.state.isConnected
        });
    }

    render() {
        return (
            <PageContent role="chat">
                <div id="chatter" className="chat-container">
                    <h1 className="title">Chatter</h1>
                    <div className="description">The Real Time Messenger.</div>
                    <button onClick={this.handleConnectionClick}>
                        {this.state.isConnected ? 'Disconnect' : 'Connect'}
                    </button>
                    <MessageList messages={this.state.messages} />
                </div>
            </PageContent>
        );
    }
}

ChatPage.contextTypes = {
    store: PropTypes.object
};

// redux setup functions
function mapStateToProps(state, ownProps) {
    return {
        token: state.auth.token,
        userName: state.auth.userName,
        isAuthenticated: state.auth.isAuthenticated
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(webSocketActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatPage);