import React, { Component } from 'react';
import Point from '../Point/Point';
import ArrayThiSinhStyle from '../ArrayThiSinh/ArrayThiSinh.css';

class ArrayThiSinh extends Component {
    render() {
        const { ArrayThiSinh } = this.props;
        let ArrayThiSinhs = [];
        for(let i in ArrayThiSinh){
            if(ArrayThiSinh[i].round !== 0){
                ArrayThiSinhs.push(ArrayThiSinh[i]);
            }
        }
        const createTable = () => {
            let table = [];
            for (let i in ArrayThiSinhs) {
                let ele = (<div className="thi-sinh" key={i}>
                    <Point id="thi-sinh" key={i}
                     fullname={ArrayThiSinhs[i].fullname} point={ArrayThiSinhs[i].point} />
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