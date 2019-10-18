import React from 'react'
import ThiSinhStyle from './ThiSinh.css'
import Point from '../Point/Point.js'
import Time from '../Time/Time.js';
import Question from '../Question/Question';
import Message from '../Message/Message';
import Socket from '../../SocketClient/socket';
import Login from '../Login/Login';
class ThiSinh extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
            },
            question: {
                time: 30,
                questions: {
                }
            },
            message:
                [
                    // {
                    // id: "81637647",
                    // user_id: 1,
                    // answer: "con gà",
                    // created: "2019-10-12 17:18:34",

                    // },{
                    //     id: "81637648",
                    //     user_id: 1,
                    //     answer: "con gà",
                    //     created: "2019-10-12 17:18:34",
                    // }
                ]

        };

        this.loadQuestion = this.loadQuestion.bind(this);
        this.loadMessages = this.loadMessages.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.saveAnswerDb = this.saveAnswerDb.bind(this);
    }

    loadUser = () => {
        let user = this.props.location.state.user;
        this.setState({ user: user });
    }
    loadMessages = () => {
        // TODO Viết api cho load Messages
        fetch('http://localhost:9000/api/history/1').then(
            res => {
                if (res.ok) {
                    res.json().then(messages => {
                        this.setState({ message: messages });
                    })
                } else {
                    alert("Không load được messages!");
                }
            }
        ).catch(err => {
            alert("Lấy câu hỏi thất bại");
        })
    }

    loadQuestion = () => {
        fetch('http://localhost:9000/api/question/' + this.state.user.id).then(
            res => {
                if (res.ok) {
                    var question = { ...this.state.question }
                    res.json().then(questions => {
                        question.questions = questions;
                        this.setState({ question: question });
                    })
                }
            }
        ).catch(err => {
            alert("Lấy câu hỏi thất bại");
        })
    }
    componentDidMount = () => {
        this.loadUser();
        this.loadMessages();
        // this.loadQuestion();
    }

    saveAnswerDb = async (answerObj) => {
        try {
            const res = await fetch('http://localhost:9000/api/history/', {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(answerObj)
            });
            const data = await res.json();
            let message = this.state.message;
            message.push(answerObj);
            this.setState({ message: message });
        }
        catch (err) {
            alert("Kết quả ko update");
        }
    }
    handleSubmit = async (e) => {
        e.preventDefault();
        
        let answer = document.getElementById("input-answer").value;
        if (answer == "") return;

        let time = new Date().toISOString().slice(0, 19).replace('T', ' ');
        let id = Number(Date.now().toString().slice(5));
        console.log(id);
        let answerObj = {
            id: id,
            user_id: this.state.user.id,
            answer: answer,
            created: time,
        }
        
        await this.saveAnswerDb(answerObj);
        this.loadMessages();
        Socket.submitAnswer(answerObj);
    }


    render() {
        const user = this.state.user;
        const question = this.state.question;
        const message = this.state.message;
        return (
            <div id="container" style={ThiSinhStyle}>
                <div id="container-1">
                    <div id="content">
                        {/* <Question questions={question.questions}/> */}
                        <Message messages={message} user_id={user.id} />
                    </div>
                    <form id="form-answer" onSubmit={this.handleSubmit}>
                        <input type="text" id="input-answer" name="input-answer" />
                        <button type="submit" id="button-submit" value="Submit">Submit</button>
                    </form>
                </div>

                <div id="container-2">
                    {/* <button onClick="dangxuat()"> Đăng xuất</button>  */}
                    {/* <button onclick="ring()"> Ring </button>*/}
                    <Point fullname={user.fullname} point={user.point} />
                    <Time time={question.time} />
                </div>
            </div>
        );
    }
}

export default ThiSinh;