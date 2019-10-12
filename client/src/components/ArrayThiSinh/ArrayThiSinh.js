import React, { Component } from 'react';
import Point from '../Point/Point';
import ArrayThiSinhStyle from '../ArrayThiSinh/ArrayThiSinh.css';

class ArrayThiSinh extends Component {
    render() {
        const { ArrayThiSinh } = this.props;
        const createTable = () => {
            let table = [];
            for (let i = 0; i < ArrayThiSinh.length; i++) {
                let ele = (<div className="thi-sinh" key={i}>
                    <Point id="thi-sinh" key={i}
                     fullname={ArrayThiSinh[i].fullname} point={ArrayThiSinh[i].point} />
                </div>);
                table.push(ele);
                //Create the parent and add the children
            }
            console.log(table);
            return table;
        }

        return (
            <div style={ArrayThiSinhStyle}>
                {createTable()}
            </div>
        );
    }
}


export default ArrayThiSinh;