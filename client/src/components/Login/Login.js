import React, { Component } from 'react';
import LoginStyle from './Login.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { username: '', password: '' };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.getUserPass = this.getUserPass.bind(this);
        this.login = this.login.bind(this);
    }

    getUserPass = () => {
        let user = document.getElementById("input-Username").value || "";
        let pass = document.getElementById("input-Password").value || "";
        console.log(user, pass);
        // TODO Tạm dùng thử
        this.login(user, pass);
        this.setState({ username: user, password: pass });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.getUserPass();
    }

    login = (user, pass) => {
        let data = { username: user, password: pass };
        console.log(data);
        fetch('http://localhost:9000/api/user/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        }).then(res => {
            if (res.ok) {
                res.json().then(user => {
                    console.log(user);
                    if (user.round !== 0) {
                        this.props.history.push('/thisinh', { user: user });
                     }
                     else if (user.fullname === "MC"){
                        this.props.history.push('/round',{user: user});
                        }
                        else if (user.fullname === "MODERATOR"){
                            this.props.history.push('/Moderator',{user: user});
                        }

                }
                );
            } else {
                alert("Đăng nhập thất bại");
            }
        }).catch(err => {
            alert('Đăng nhập thất bại!!');
        })
    }

    render() {
        return (
            <div style={LoginStyle}>
                Xin chào
                <form id="form-login" onSubmit={this.handleSubmit}>
                    <input name="username" id="input-Username" type="text" placeholder="Tên đăng nhập" required />
                    <input name="password" id="input-Password" type="password" placeholder="Nhập mật khẩu" required />
                    <button type="submit">Đăng nhập</button>
                </form>
            </div>
        );
    }
}

export default Login;