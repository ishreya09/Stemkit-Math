import React from 'react';
import './interface.css';

function min(a, b) {
    if (a > b) {
        return b
    }
    else {
        return a
    }
}

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
        this.addPoly = this.addPoly.bind(this)
        this.subPoly = this.subPoly.bind(this)
        
        this.coefList=this.coefList.bind(this)
        this.splitNumberVariable=this.splitNumberVariable.bind(this)
        this.isVarEqual=this.isVarEqual.bind(this)    
    }

    setChoice(event) {
        this.setState({ choice: Number(event.target.value) });

    }

    setPoly1(event) {
        this.setState({ poly1: event.target.value });
    }

    setPoly2(event) {
        this.setState({ poly2: event.target.value });
    }

    splitNumberVariable(str) {
        alert("splitNumberVariable")
        // eg : "+23x^3" returns an array [23,"x^3"]
        var list = []
        if (str.length == 1) {
            return [Number(str), ""];
        }
        for (var i = 0; i < str.length; i++) {
            if (str[i].isAlpha()) {
                list.push(Number(str.slice(0, i)))
                list.push(str.slice(i))
                return list;
            }
        }

    }

    coefList(str) {
        alert("coefList")

        // write a function to convert string to number for only the string part 
        // eg : "+23x^3" returns an array [23,"x",3]
        // eg : "-23x^3" returns an array [-23,"x",3]
        // eg : "23a^3" returns an array [23,"a",3]
        // eg : "23" returns an array [23,"",0]
        // eg : "-23" returns an array [-23,"",0]
        // eg : "23x" returns an array [23,"x",1]
        // eg : "-23x" returns an array [-23,"x",1]
        // eg : "23x^" returns an array [23,"x",1]
        // eg : "-23x^" returns an array [-23,"x",1]
        // eg : "23xy^3" returns an array [23,"x",1,"y",3]
        // eg : "-23xy^3" returns an array [-23,"x",1,"y",3]
        // eg : "23xy^" returns an array [23,"x",1 ,"y",1]
        // eg : "-23xy^" returns an array [-23,"x",1,"y",1]

        var list = this.splitNumberVariable(str)
        var coef = list[0]
        var variable = list[1]
        var variableList = []
        var powerList = []
        var i = 0
        if (Number(variable.length) == 0) {
            return [coef, "", "0"];
        }
        while (i < variable.length) {
            if (variable[i].isAlpha()) {
                variableList.push(variable[i])
                i += 1

                if (variable[i] == "^") {
                    i += 1
                    if (i != variable.length && variable[i].isDigit()) {
                        var power = ""
                        while (i < variable.length && variable[i].isDigit()) {
                            power += variable[i]
                            i += 1
                        }
                        powerList.push(power)
                    }
                    else {
                        powerList.push("1")
                    }
                }
                else if (variable[i].isAlpha()) { // xy
                    powerList.push("1")
                }
                else if (i == variable.length) { // x
                    powerList.push("1")
                }

            }
        }
        var answer = [coef]
        for (var i = 0; i < variableList.length; i++) {
            answer.push(variableList[i])
            answer.push(powerList[i])
        }
        return answer;

    }
    isVarEqual(list1,list2){
        alert("isVarEqual")
        if(list1.length > list2.length){
            return -1;
        }
        else if (list1.length < list2.length){
            return 1;
        }
        for(var i=1;i<list1.length;i++){
            if(list1[i] != list2[i]){
                // differentiate between variables and coef
                if (list1[i].isAlpha()){
                    // variables don't match
                    if (list1[i]>list2[i]){
                        return 1
                    }
                    else{
                        return -1
                    }
                }
                else if(list1[i].isDigit){
                    // power don't match
                    if (list1[i]>list2[i]){
                        return -1
                    }
                    else{
                        return 1
                    }
                }
            }
        }
        return 0;
    }

    addPoly(poly1, poly2) {
        alert("add")

        var p1 = poly1.split(" ")
        var p2 = poly2.split(" ")
        var answer = [];
        var j = 0;
        var k = 0;
        var i = 0;
        while (i < p1.length && j < p2.length) {
            var c1 = this.coefList(p1[i])
            alert ("hello")
            var c2 = this.coefList(p2[j])
            var flag=this.isVarEqual(c1,c2);
            if (flag == 0) {
                var coef = c1[0] + c2[0];
                if (coef != 0) {
                    var k= this.splitNumberVariable(p1[i])[1];
                    answer.push(coef +k )
                }
                i += 1;
                j += 1;
            }
            else if (flag == -1) {
                answer.push(p1[i])
                i += 1;
            }
            else if (flag == 1) {
                answer.push(p2[j])
                j += 1;
            }
        }
        while (i < p1.length) {
            answer.push(p1[i])
        }
        while (j < p2.length) {
            answer.push(p2[j])
        }

        var final = answer.join (" ")
        alert (final)
        return final;
    }

    subPoly(poly1, poly2) {
        var p1 = poly1.split(" ")
        var p2 = poly2.split(" ")
        var answer = [];
        var j = 0;
        var k = 0;
        var i = 0;
        while (i < p1.length && j < p2.length) {
            var c1 = this.coefList(p1[i])
            var c2 = this.coefList(p2[j])
            var flag=this.isVarEqual(c1,c2);
            if (flag == 0) {
                var coef = c1[0] - c2[0];
                if (coef != 0) {
                    var k= this.splitNumberVariable(p1[i])[1];
                    answer.push(coef +k )
                }
                i += 1;
                j += 1;
            }
            else if (flag == -1) {
                answer.push(p1[i])
                i += 1;
            }
            else if (flag == 1) {
                answer.push(p2[j])
                j += 1;
            }
        }
        var final = answer.join (" ")
        return final;
    }

    handleSubmit(event) {
        event.preventDefault();
        var poly1 = this.state.poly1
        var poly2 = this.state.poly2
        var choice = this.state.choice
        var answer = ""
        
        if (choice == 1) {
            answer = this.addPoly(poly1, poly2)
            alert("handle")
        }
        else if (choice == 2) {
            answer = this.subPoly(poly1, poly2)
        }
        alert(answer)
        this.setState({ answer: answer }, () => {
            alert(this.state.answer)
            this.render()
        })
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
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default Polynomial;
