import Cookies from 'js-cookie';
import React from 'react';
import './interface.css';

class Randomize extends React.Component{
    constructor() {
        super();
        this.state = {
            questions: [],
        }
        
    }

    componentDidMount(){
        var ques = Cookies.get('randomize')
        // alert (typeof(ques))
        var q = JSON.parse(ques)
        this.setState({ questions:q })
        // alert(this.state.questions)  
    }

    render() {
        return (
            <div className='container'>
                <div className="col QuestionInterface">
                    <h1>Randomized Questions</h1>
                    {
                        this.state.questions.map((q) => {
                            return (
                                <div key={q.answer}>
                                    <p className='QuestionHeader text-start'>Question    : {q.question}</p>
                                    <p className='Answer text-start'>Answer      : {q.answer}</p>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        );
    }
}

export default Randomize;