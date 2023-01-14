import React from 'react';
import './interface.css';
import Graph from "./Graph"


class Polynomial extends React.Component {
    constructor() {
        super();
        this.state = {
            poly1: "",
            poly2: "",
            choice: 1,
            answer: "",
        }
        this.setPoly1 = this.setPoly1.bind(this)
        this.setPoly2 = this.setPoly2.bind(this)
        this.setChoice = this.setChoice.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    setChoice(event) {
        this.setState({ choice: Number(event.target.value), answer:"" });
        
    }

    setPoly1(event) {
        this.setState({ poly1: event.target.value });
    }

    setPoly2(event) {
        this.setState({ poly2: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        // alert("submit clicked")


        fetch("http://127.0.0.1:5000/polynomial", {
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            //make sure to serialize your JSON body
            body: JSON.stringify(this.state)
        })
            .then((response) => {
                // console.log(response)
                return response.json()
            })
            .catch((err) => {
                return (err)
            })
            .then((data) => {
                // alert(data.answer)
                this.setState({ answer: data.answer })
            })
            .catch((err) => {
                alert(err)
            })
        
        if(this.state.choice==13){
            window.location="/image/two-polynomial-graph"
        }   
        
        // reload the component
        // this.forceUpdate()

    }


    render() {
        return (
            <div className='container'>
                <div className="col QuestionInterface">
                    <h1>Polynomial Operations</h1>
                    <p className='text-start'>
                        <span style={{ color: "red" }}>To perform operation on a polynomial make sure to write the expressions in decending order of the degree of the expression. <br />
                            The term should be written in Binomial form in case it has more than 1 variable<br />
                            There should not be 2 coeficients with same degree and variables. <br />
                            Each variable should be seperated by a space. <br />
                            There should not be any space between the variable and the power of the variable. <br />
                            There should not be any space between the variable and the coeficient. <br />
                            There should not be any space between the coeficient and sign. <br />
                            Each term should have a sign <br />
                            {/* Only x is the valid variable <br /> */}
                        </span> <br />
                        Correct example: -4x^3 +3x^2 +2x +1 <br />
                        Wrong example: 3x^2 + 2x + 1 + 2x^2 <br />
                        Wrong example: 3x^2 + 2x + 1 + 2x^2 + 3x^3 <br />
                        Wrong example: 3x^2+2x+1+2x^2+3x^3 <br />
                    </p>
                    <div className="row">
                        <div className="col">
                            <form onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <label for="exampleFormControlInput1">Enter the first polynomial</label>
                                    <input type="text" onChange={this.setPoly1} className="form-control" id="exampleFormControlInput1" placeholder="Enter the first polynomial" />
                                </div>
                                <div className="form-group">
                                    <label for="exampleFormControlInput1">Enter the second polynomial</label>
                                    <input type="text" onChange={this.setPoly2} className="form-control" id="exampleFormControlInput1" placeholder="Enter the second polynomial" />
                                </div>
                                <div className="form-group">
                                    <label for="exampleFormControlSelect1">Select the operation</label>
                                    <select className="form-control" onChange={this.setChoice} id="exampleFormControlSelect1">
                                        <option value="1" defaultChecked >Addition</option>
                                        <option value="2" >Subtraction</option>
                                        <option value="3" >Multiplication</option>
                                        <option value="4" >Division</option>
                                        <option value="5" >Power</option>
                                        {/* <option value="9" >Union</option> */}
                                        {/* <option value="6" >Intersection</option> */}
                                        {/* <option value="10" >Complement</option> */}
                                        {/* <option value="11" >Symmetric Difference</option> */}
                                        {/* <option value="12" >Cartesian Product</option> */}
                                        {/* <option value="7" >LCM of 2 Polynomial</option> */}
                                        {/* <option value="8" >GCD of 2 Polynomial</option> */}
                                        <option value="13" >Draw Polynomials</option>


                                    </select>
                                </div><br />

                                <input type="submit" className="btn btn-dark" style={{ width: "100%" }} value="Submit" />
                            </form>
                        </div>
                    </div>
                    <div style={{ marginTop: "10px" }} className="row">
                        <div className="col">
                            <h6>First Polynomial</h6>
                            <p>{this.state.poly1}</p>
                        </div>
                        <div className="col">
                            <h6>Second Polynomial</h6>
                            <p>{this.state.poly2}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <h6>Operation</h6>
                            <p>{this.state.choice}</p>
                        </div>
                        <div className="col">
                            <h6>Answer</h6>
                            <p>{this.state.answer}</p>
                            {/* <div className='hide'>
                                
                                <Graph />
                            </div> */}
                            
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default Polynomial;
