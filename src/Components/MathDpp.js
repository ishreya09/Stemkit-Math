import Cookies from 'js-cookie';
import React from 'react';
import './interface.css';
import Multiplication from './Multiplication';
import Subtraction from './Subtraction';
import Addition from './Addition';
import Division from './Division';

class MathDpp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            choice: 1,
        };
        this.setChoice = this.setChoice.bind(this);
    }

    setChoice(event) {
        this.setState({choice: Number(event.target.value)});
    }

    render() {
        return (
            <div className='container QuestionInterface'>

                <h1>Math DPP</h1>
                <div className='row'>
                    <div className="col">
                        
                        <form>
                            <div style={{margin:"20px"}} className="form-group">
                                <label for="exampleFormControlSelect1">Select a question type</label>
                                <select onChange={this.setChoice} className="form-control" id="exampleFormControlSelect1">
                                    <option value="1"  defaultChecked >addition</option>
                                    <option value="2" >subtraction</option>
                                    <option value="3" >multiplication</option>
                                    <option value="4"  >division</option>
                                </select>
                            </div>
                        </form>
                    </div>
                </div>
                <div className='row'>
                    <div id="demo" className="col">
                        {
                            this.state.choice === 1 ? <Addition /> : null
                        }
                        
                    </div>
                </div>
                <div className='row'>
                    <div id="demo" className="col">
                        {
                            this.state.choice === 3 ? <Multiplication /> : null
                        }
                        
                    </div>
                </div>
                <div className='row'>
                    <div id="demo" className="col">
                        {
                            this.state.choice === 2 ? <Subtraction /> : null
                        }
                        
                    </div>
                </div>
                <div className='row'>
                    <div id="demo" className="col">
                        {
                            this.state.choice === 4 ? <Division /> : null
                        }
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default MathDpp;