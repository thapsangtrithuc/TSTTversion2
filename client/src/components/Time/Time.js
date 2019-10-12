import React, { Component } from 'react';
import TimeStyle from './Time.css'

class Time extends Component {

    render() {
        const {time} = this.props;
        return (
            <div style={TimeStyle}>
                <div>
                    <div id="time-container">
                        <div className="time-label">
                            <h3>Thời gian</h3>
                        </div>
                        <div id="time">
                            <h3 id="time-txt">{time}</h3>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Time;