import React, { Component } from 'react';
import { Form } from 'react-bootstrap';

class Round extends Component {
    constructor(props) {
        super(props);
        this.state = { round: 0 };
    }

    handleSubmit(event) {
         this.state = event.target.value;
    }

    render() {
        return (<div>
            <form onChange={(e) => this.handleSubmit(e)}>
                <Form.Group>
                    <Form.Label>Round</Form.Label>
                    <Form.Control as="select" controlId="round">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </Form.Control>
                </Form.Group>
            </form>

        </div>);
    }
}

Round.propTypes = {
}
export default Round;
