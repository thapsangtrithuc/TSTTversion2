import React, { Component } from 'react';
import questionStyle from './Question.css'
class Question extends Component {
    constructor(props) {
        super(props);
        this.state = {
            thutu: 0,
        }
    }
    
    render() {
        
        const {questions} = this.props;
        console.log(questions.length)
        const questionObj = {};
        let question = "";
        if (questions.length > 0) {
            Object.assign(questionObj, questions[this.state.thutu]);
            question = questionObj.cauhoi;
        }
        return (
            
            <div id="question-container" style={questionStyle}>
                {question}
            </div>
        );
    }
}

export default Question;