import React, { Component } from 'react';
import ArrayThiSinh from '../ArrayThiSinh/ArrayThiSinh';
import {Nav, Navbar, NavDropdown, MenuItem, Tabs, ButtonToolbar, Button, Table, ButtonGroup, Row, Col, Grid, Panel, FormGroup, FormControl} from 'react-bootstrap';


class Moderator extends Component {
    constructor(props) {
        super(props);
        this.state = { users: {} };
    }
    loadUsers = () => {
        fetch('http://localhost:9000/api/user/all').then(
            res => {
                if (res.ok) {
                    res.json().then(users => {
                        this.setState({ users: users });
                    })
                }
            }
        ).catch(err => {
            alert("Lấy các thí sinh thất bại");
        })
    };

    componentDidMount() {
        this.loadUsers();
    }

    render() {
        const users = this.state.users;
        console.log(users);
        return (
            <div>
            <Button variant="primary" size="lg" block>
              Block level button
            </Button>
            <Button variant="secondary" size="lg" block>
              Block level button
            </Button>
          </div>
        );
    }
}

Moderator.propTypes = {
};
export default Moderator;