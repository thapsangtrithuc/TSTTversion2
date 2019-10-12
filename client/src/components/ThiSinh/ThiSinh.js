import React from 'react'
import ThiSinhStyle from './ThiSinh.css'
import Point from '../Point/Point.js'
import Time from '../Time/Time.js';
import Question from '../Question/Question';
import connect from '../../SocketClient/socket';
class ThiSinh extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                id: 123,
                username: 'dai',
                password: 123,
                point: 200,
                fullname: "Nguyễn Văn Đại"
            },
            question: {
                time: 30,
                questions: {
                }
            }
        };

        this.loadQuestion = this.loadQuestion.bind(this);
    }

    loadUser = () => {
        let user = this.props.location.state.user;
        this.setState({user: user});
    }

    loadQuestion = () => {
        fetch('http://localhost:9000/api/question/' + this.state.user.id).then(
            res => {
                if (res.ok) {
                    var question = {...this.state.question}
                    res.json().then(questions => {
                        question.questions = questions;
                        console.log(question);
                        this.setState({question: question});
                    })
                }
            }
        ).catch(err => {
            alert("Lấy câu hỏi thất bại");
        })
    }
    componentDidMount = () => {
        connect();
        this.loadUser();
        this.loadQuestion();
    }

    render() {
        const user = this.state.user;
        const question = this.state.question;
        return (
            <div id="container" style={ThiSinhStyle}>
                <div id="container-1">
                    <div id="content">
                        <Question questions={question.questions}/>
                    </div>
                    <form id="form-answer" action="">
                        <input type="text" id="input-answer" name="input-answer" />
                        <button type="button" id="button-submit" value="Submit">Submit</button>
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