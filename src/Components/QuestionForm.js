import React from 'react';
import './interface.css';
import Cookies from 'js-cookie';

class QuestionForm extends React.Component {
    constructor() {
        super();
        this.state = {
            question: "",
        }
        this.setQues = this.setQues.bind(this)
        this.insertQuestion = this.insertQuestion.bind(this)
    }

    setQues(e) {
        this.setState({ question: e.target.value })
    }

    insertQuestion(e) {
        e.preventDefault()

        var ques = this.state.question
        ques = ques.replace(/(\r\n|\n|\r)/gm, " ")
        ques = ques.replace(/\s+/g, ' ')
        ques = ques.trim()
        this.setState({ question: ques })
        // alert (ques)

        // setting the question cookie
        Cookies.set('question', ques);
        window.location="/question-set-variable"

    }

    render() {
        return (
            <div>
                <div className="col-6 QuestionInterface">
                    <form onSubmit={this.insertQuestion}>
                        <textarea required onChange={this.setQues} name="question" rows="8" cols="65" placeholder='Enter your question' ></textarea>
                        <br /><br />
                        <span style={{ marginRight: "5px" }} ><input type="submit" value="Enter Question" className='btn btn-dark' /></span>
                    </form>
                </div>
            </div>
        );
    }
}

export default QuestionForm;