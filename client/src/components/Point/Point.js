import React, { Component } from 'react';
import PointStyle from './Point.css'
class Point extends Component {

    render() {
        const { fullname, point } = this.props;
        return (
            <div style={PointStyle} id="container-participant">
                <div className="fullname">
                    <h3> {fullname} </h3>
                </div>
                <div className="point">
                    <h3>{point}</h3>
                </div>
            </div>
        );
    }
}

export default Point;