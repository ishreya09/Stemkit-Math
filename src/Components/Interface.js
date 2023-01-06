import Cookies from 'js-cookie';
import React from 'react';
import './interface.css';

/* Generates integers between low (inclusive) and high (exclusive) */
function generateRandomInteger(low, high) {
    const lowCeil = Math.ceil(low);
    const highFloor = Math.floor(high);
    const randomFloat = lowCeil + Math.random() * (highFloor - lowCeil);

    return Math.floor(randomFloat);
}

function calculate(operation, variables, str) {
    // make the formula spaced by " "
    var formula = operation.split(" ")
    var ans = []
    // O(n2) logic
    for (var i = 0; i < formula.length; i++) {
        var flag = 0;
        for (var j = 0; j < variables.length; j++) {

            if (formula[i] === variables[j].name) {
                ans.push(variables[j].value)
                flag = 1;
            }

        }
        if (flag === 0) {
            ans.push(formula[i])
        }
    }

    // final - final mathematical expression
    var final = ans.join("")
    // alert(final)

    // evaluate the ans expression
    var finalans = eval(final)
    // this.setState({answer:finalans});
    // alert(str + finalans);
    return finalans;
}

class Interface extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            question: "",
            questionlist: [], //array of ques words
            variables: [], //array of objects
            answer: 0,
            // current variable state
            vname: "",
            vvalue: 0,
            vmax: 9,
            vmin: 0,
            vindexs: 0,
            vindexe: 0,
            vindex: 0, // index in questionlist of the variable 
            // will be useful for randomization
            // formula state
            operation: "",
            randomised: [],
            n:1,
        };

        // event handlers
        this.selectVariable = this.selectVariable.bind(this)
        this.loadVariableForm = this.loadVariableForm.bind(this)
        this.SetVarname = this.SetVarname.bind(this)
        this.SetVarvalue = this.SetVarvalue.bind(this)
        this.SetMaxVar = this.SetMaxVar.bind(this)
        this.SetMinVar = this.SetMinVar.bind(this)
        this.loadInsertFormulaForm = this.loadInsertFormulaForm.bind(this)
        this.loadRandomize = this.loadRandomize.bind(this)
        this.SetOperation = this.SetOperation.bind(this)
        this.AddVariable = this.AddVariable.bind(this)
        this.AddFormula = this.AddFormula.bind(this)
        this.setN=this.setN.bind(this)
    }
    setN(e){
        this.setState({n:e.target.value})
    }

    componentDidMount() {
        var ques = " " + Cookies.get('question') + " "
        this.setState({ question: ques })
        this.setState({ questionlist: ques.split(" ") })
    }

    // componentDidUpdate() {
    //     alert("value : " + this.state.vvalue + "start :" + this.state.vindexs + "end : " + this.state.vindexe +"index : "+ this.state.vindex )
    // }

    selectVariable = (e) => {
        var val = window.getSelection().toString()
        // alert(val)
    }

    // to select the any selected word in the paragraph
    ClickableClick(e) {
        var s = window.getSelection();
        var range = s.getRangeAt(0);
        var node = s.anchorNode;

        // Find starting point
        while (range.toString().indexOf(' ') !== 0) {
            range.setStart(node, (range.startOffset - 1));
        }
        range.setStart(node, range.startOffset + 1);

        // Find ending point
        do {
            range.setEnd(node, range.endOffset + 1);

        } while (range.toString().indexOf(' ') === -1 && range.toString().trim() !== '');

        // Alert result
        range.setEnd(node, range.endOffset - 1);
        // var str = range.toString().trim();
        // alert(str);
        // alert(range.endOffset)
        // alert(range.startOffset)
    }

    loadVariableForm = (e) => {
        var form = document.getElementsByClassName('InsertVariable')[0]
        var f1 = document.getElementsByClassName('InsertFormula')[0]
        var f2 = document.getElementsByClassName('Randomize')[0]

        var s = window.getSelection();
        var range = s.getRangeAt(0);
        var node = s.anchorNode;

        // Find starting point
        while (range.toString().indexOf(' ') !== 0) {
            range.setStart(node, (range.startOffset - 1));
        }
        range.setStart(node, range.startOffset + 1);
        // Find ending point
        do {
            range.setEnd(node, range.endOffset + 1);

        } while (range.toString().indexOf(' ') === -1 && range.toString().trim() !== '');

        range.setEnd(node, range.endOffset - 1);
        var str = range.toString().trim();
        var k = Number(str);
        // alert(typeof (k))
        // alert(k)

        // index in questionlist
        var j = 0;
        for (var i = 1; i < this.state.questionlist.length; i++) {
            if (this.state.questionlist[i] === str && j + i === range.startOffset) {
                break;
            }
            j += this.state.questionlist[i].length;
            // alert ("j : "+ j+ " j+i : "+ (j+i));

        }
        this.setState({ vvalue: k, vindexs: range.startOffset, vindexe: range.endOffset, vmax: k+1, vindex: i })

        if (!f1.classList.contains('hide')) {
            f1.classList.add('hide')
        }
        if (!f2.classList.contains('hide')) {
            f2.classList.add('hide')
        }
        if (form.classList.contains('hide')) {
            form.classList.remove('hide')
        }

    }

    SetVarname = (e) => {
        this.setState({ vname: e.target.value })
    }

    SetVarvalue = (e) => {
        this.setState({ vvalue: e.target.value })
        // alert(this.state.vvalue)
    }

    SetMaxVar = (e) => {
        this.setState({ vmax: e.target.value })
    }
    SetMinVar = (e) => {
        this.setState({ vmin: e.target.value })
    }

    AddVariable = (e) => {
        e.preventDefault()

        var variable = {
            name: this.state.vname,
            value: this.state.vvalue,
            max: this.state.vmax, // range
            min: this.state.vmin,
            startindex: this.state.vindexs, //index range
            endindex: this.state.vindexe,
            index: this.state.vindex,
        }

        this.state.variables.push(variable);
        // alert(this.state.variables[0].name)
        // alert(this.state.variables[0].value)
        this.setState({
            vname: "", vvalue: 0, vmax: 9, vmin: 0
        })
        var form = document.getElementsByClassName('InsertVariable')[0]
        if (!form.classList.contains('hide')) {
            form.classList.add('hide')
        }
    }

    loadInsertFormulaForm = (e) => {
        var form = document.getElementsByClassName('InsertFormula')[0]
        var f1 = document.getElementsByClassName('InsertVariable')[0]
        var f2 = document.getElementsByClassName('Randomize')[0]
        if (!f1.classList.contains('hide')) {
            f1.classList.add('hide')
        }
        if (!f2.classList.contains('hide')) {
            f2.classList.add('hide')
        }
        if (form.classList.contains('hide')) {
            form.classList.remove('hide')
        }
    }

    loadRandomize = (e) => {
        var form = document.getElementsByClassName('Randomize')[0]
        var f1 = document.getElementsByClassName('InsertVariable')[0]
        var f2 = document.getElementsByClassName('InsertFormula')[0]

        if (!f1.classList.contains('hide')) {
            f1.classList.add('hide')
        }
        if (!f2.classList.contains('hide')) {
            f2.classList.add('hide')
        }
        if (form.classList.contains('hide')) {
            form.classList.remove('hide')
        }

        var n = Number(this.state.n)
        var arr = []
        arr.push({question:this.state.question,answer:this.state.answer})
        var quesarr = this.state.questionlist
        var variables = this.state.variables

        for (var i = 0; i < n-1; i++) {
            for (var j = 0; j < variables.length; j++) {
                var min = variables[j].min
                var max = variables[j].max
                var r = generateRandomInteger(min, max)
                // var rand = (Math.floor(Math.random() * (max - min)) + min).toString();
                var rand = r.toString();
                quesarr[variables[j].index] = rand;
                variables[j].value = Number(rand);
                // alert("var index : "+variables[j].index+ "rand : "+rand);

            }
            // alert (quesarr.join(" "))
            // alert("ques : "+ typeof(quesarr))
            var ans = calculate(this.state.operation, variables, quesarr.join())
            // alert (ans)
            var ques = {
                question: quesarr.join(" "),
                answer: ans,
            }
            arr.push(ques);
            // alert(ques.question + ques.answer)

        }
        this.setState({ randomize: arr })

        // alert ques and answer
        // for (var i = 0; i < arr.length; i++) {
        //     alert(arr[i].question + "\nanswer : " + arr[i].answer)
        // }
        Cookies.set('randomize', JSON.stringify(arr));

        window.location = "/randomizeques"

    }

    SetOperation = (e) => {
        this.setState({ operation: e.target.value })
    }

    AddFormula = (e) => {
        e.preventDefault()

        // make the formula spaced by " "
        var formula = this.state.operation.split(" ")
        var ans = []
        // O(n2) logic
        for (var i = 0; i < formula.length; i++) {
            var flag = 0;
            for (var j = 0; j < this.state.variables.length; j++) {

                if (formula[i] === this.state.variables[j].name) {
                    ans.push(this.state.variables[j].value)
                    flag = 1;
                }

            }
            if (flag === 0) {
                ans.push(formula[i])
            }
        }

        // final - final mathematical expression
        var final = ans.join("")
        // alert(final)

        // evaluate the ans expression
        var finalans = eval(final)
        this.setState({ answer: finalans });
        alert(finalans);

        var form = document.getElementsByClassName('InsertFormula')[0]
        if (!form.classList.contains('hide')) {
            form.classList.add('hide')
        }

    }



    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div className="row" style={{ height: "600px" }}>
                        <div className="col-6 QuestionInterface">
                            <p className='QuestionHeader clickable' onDoubleClick={this.ClickableClick}>
                                {this.state.question}
                            </p>
                            <span style={{ marginRight: "5px" }} ><button className='btn btn-dark' onClick={this.loadVariableForm} >Insert Variable</button></span>
                            <span style={{ marginRight: "5px" }} ><button className='btn btn-dark ' onClick={this.loadInsertFormulaForm}>Insert Formula</button></span>
                            <span style={{ marginRight: "5px" }} ><button className='btn btn-dark ' onClick={this.loadRandomize}>Randomize</button></span>
                            <span ><button className='btn btn-dark ' onClick={() => window.location = "/question"}>Add Another Question</button></span>



                        </div>
                        <div className='col-5 Interface'>
                            <div className='row InsertVariable hide'>
                                <form onSubmit={this.AddVariable}>
                                    <input required id="name" onChange={this.SetVarname} type="text" placeholder='variable name' value={this.state.vname}></input><br /><br />
                                    <input disabled required id="value" onChange={this.SetVarvalue} type="number" placeholder='variable value' value={this.state.vvalue}></input> <br /><br />
                                    <input required id="min" type="number" onChange={this.SetMinVar} placeholder='min' style={{ width: "80px" }} value={this.state.vmin} />
                                    <label>Range</label>
                                    <input required id="max" type="number" onChange={this.SetMaxVar} placeholder='max' style={{ width: "80px" }} value={this.state.vmax} /><br /><br />
                                    <input className='btn btn-dark' type="submit" value="Add Variable" />
                                </form>
                            </div>

                            <div className='row InsertFormula hide'>
                                <h6>Variables Available</h6>
                                <table>
                                    <tr>
                                        <th>Name</th>
                                        <th>Value</th>
                                        <th>Min</th>
                                        <th>Max</th>
                                    </tr>
                                    {this.state.variables.map((variable) => {
                                        return (
                                            <tr key={variable.name}>
                                            <td key={variable.name}>{variable.name}</td>
                                            <td key={variable.value}>{variable.value}</td>
                                            <td key={variable.min}>{variable.min}</td>
                                            <td key={variable.max}>{variable.max}</td>

                                            </tr>
                                        )
                                    })}

                                </table>
                                <form onSubmit={this.AddFormula}>
                                    <p style={{ color: "red", }}>Add formula by putting a space after each variable and operator</p>
                                    <input required id="operation" onChange={this.SetOperation} type="text" placeholder='Enter Formula' value={this.state.operation}></input><br /><br />
                                    <input required id="n" onChange={this.setN} type="number" placeholder='Enter Number of Questions to generate' value={this.state.n}></input><br /><br />
                                    <input className='btn btn-dark' type="submit" value="Add Formula" />

                                </form>

                            </div>

                            <div className='row Randomize hide'>
                                {
                                    // this.state.randomize.map((question) => {
                                    //     return <div key={question.question} className='col-12'>
                                    //         <p>{question.question}</p>
                                    //         <p>{question.answer}</p>
                                    //     </div>
                                    // })
                                }
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Interface;