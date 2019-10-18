import React, { Component } from 'react';

class Message extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user_id: this.props.user_id,
            messages: this.props.messages
        }
    }

    componentDidUpdate(prevProps) {
        console.log(JSON.stringify(prevProps.messages) !==  JSON.stringify(this.props.messages));
        if ( JSON.stringify(prevProps.messages) !==  JSON.stringify(this.props.messages)) {
            this.setState({ user_id: this.props.user_id });
            this.setState({ messages: this.props.messages });
        }
    }
    render() {
        const {messages, user_id} = this.state;
        const createTable = () => {
            let table = [];
            for (let i = 0; i < messages.length; i++) {
                let ele = (<div className="message" key={i}>
                    <div>
                        {messages[i].answer}
                    </div>
                </div>);
                table.push(ele);
            }
            return table;
        }

        return (
            <div>
                {createTable()}
            </div>
        );
    }
}

export default Message;