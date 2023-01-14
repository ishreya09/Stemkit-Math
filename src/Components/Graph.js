import React from 'react';
import './interface.css';
import graph from "../img/polynomialdraw.png"


class Graph extends React.Component{
    render(){
        return(
            <div>
                <img src={graph} alt="graph"></img>
                {/* <canvas id="myChart"  width="400" height="400">
                                    
                </canvas> */}
            </div>
        );
    }
}

export default Graph;