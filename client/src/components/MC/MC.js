import React, { Component } from 'react';
import ArrayThiSinh from '../ArrayThiSinh/ArrayThiSinh';

class MC extends Component {
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
                <ArrayThiSinh ArrayThiSinh={users} />
            </div>
        );
    }
}

MC.propTypes = {
};
export default MC;