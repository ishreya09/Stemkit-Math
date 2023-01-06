import React from 'react';
import './interface.css';
import generateRandomInteger from './generateRandomInteger';


class Division extends React.Component {
    constructor() {
        super();
        this.state = {
            low: 1,
            high: 1000000,
            n1: 0,
            n2: 0,
            n3: 0,
            n4: 0,
            n5: 0,
            n6: 0,
            n7: 0,
            n8: 0,
            n9: 0,
            n10: 0,
            n11: 0,
            n12: 0,
            n1n2: {
                value: 0,
                correct: false
            },
            n2n3: {
                value: 0,
                correct: false
            },
            n3n4: {
                value: 0,
                correct: false
            },
            n1n5: {
                value: 0,
                correct: false
            },
            n2n6: {
                value: 0,
                correct: false
            },
            n3n7: {
                value: 0,
                correct: false
            },
            n4n8: {
                value: 0,
                correct: false
            },
            n5n6: {
                value: 0,
                correct: false
            },
            n6n7: {
                value: 0,
                correct: false
            },
            n7n8: {
                value: 0,
                correct: false
            },
            n5n9: {
                value: 0,
                correct: false
            },
            n6n10: {
                value: 0,
                correct: false
            },
            n7n11: {
                value: 0,
                correct: false
            },
            n8n12: {
                value: 0,
                correct: false
            },
            n9n10: {
                value: 0,
                correct: false
            },
            n10n11: {
                value: 0,
                correct: false
            },
            n11n12: {
                value: 0,
                correct: false
            },
        };

        this.setLow = this.setLow.bind(this)
        this.setHigh = this.setHigh.bind(this)
        this.setRange = this.setRange.bind(this)
        this.setN1N2 = this.setN1N2.bind(this)
        this.setN2N3 = this.setN2N3.bind(this)
        this.setN3N4 = this.setN3N4.bind(this)
        this.setN1N5 = this.setN1N5.bind(this)
        this.setN2N6 = this.setN2N6.bind(this)
        this.setN3N7 = this.setN3N7.bind(this)
        this.setN4N8 = this.setN4N8.bind(this)
        this.setN5N6 = this.setN5N6.bind(this)
        this.setN6N7 = this.setN6N7.bind(this)
        this.setN7N8 = this.setN7N8.bind(this)
        this.setN5N9 = this.setN5N9.bind(this)
        this.setN6N10 = this.setN6N10.bind(this)
        this.setN7N11 = this.setN7N11.bind(this)
        this.setN8N12 = this.setN8N12.bind(this)
        this.setN9N10 = this.setN9N10.bind(this)
        this.setN10N11 = this.setN10N11.bind(this)
        this.setN11N12 = this.setN11N12.bind(this)

    }



    componentWillMount() {
        var low = this.state.low
        var high = this.state.high
        this.setState({
            n1: generateRandomInteger(low, high),
            n2: generateRandomInteger(low, high),
            n3: generateRandomInteger(low, high),
            n4: generateRandomInteger(low, high),
            n5: generateRandomInteger(low, high),
            n6: generateRandomInteger(low, high),
            n7: generateRandomInteger(low, high),
            n8: generateRandomInteger(low, high),
            n9: generateRandomInteger(low, high),
            n10: generateRandomInteger(low, high),
            n11: generateRandomInteger(low, high),
            n12: generateRandomInteger(low, high),
        });

    }

    setLow(e) {
        this.setState({ low: e.target.value })
        // alert(this.state.low)
    }

    setHigh(e) {
        this.setState({ high: e.target.value })
        // alert(this.state.high)
    }

    setRange(e) {
        e.preventDefault()
        this.componentWillMount()
        document.getElementById("N1N2").style.backgroundColor="rgb(97, 200, 244)"
        document.getElementById("N2N3").style.backgroundColor="rgb(97, 200, 244)"
        document.getElementById("N3N4").style.backgroundColor="rgb(97, 200, 244)"
        document.getElementById("N1N5").style.backgroundColor="rgb(97, 200, 244)"
        document.getElementById("N2N6").style.backgroundColor="rgb(97, 200, 244)"
        document.getElementById("N3N7").style.backgroundColor="rgb(97, 200, 244)"
        document.getElementById("N4N8").style.backgroundColor="rgb(97, 200, 244)"
        document.getElementById("N5N6").style.backgroundColor="rgb(97, 200, 244)"
        document.getElementById("N6N7").style.backgroundColor="rgb(97, 200, 244)"
        document.getElementById("N7N8").style.backgroundColor="rgb(97, 200, 244)"
        document.getElementById("N5N9").style.backgroundColor="rgb(97, 200, 244)"
        document.getElementById("N6N10").style.backgroundColor="rgb(97, 200, 244)"
        document.getElementById("N7N11").style.backgroundColor="rgb(97, 200, 244)"
        document.getElementById("N8N12").style.backgroundColor="rgb(97, 200, 244)"
        document.getElementById("N9N10").style.backgroundColor="rgb(97, 200, 244)"
        document.getElementById("N10N11").style.backgroundColor="rgb(97, 200, 244)"
        document.getElementById("N11N12").style.backgroundColor="rgb(97, 200, 244)"
    }


    setN1N2(e) {
        const val = e.target.value
        const x = this.state.n1
        const y = this.state.n2
        const input = document.getElementById("N1N2")
        if (val == Math.round((x / y)*100)/100) {
            input.style.backgroundColor = "#90EE09"
            this.setState({ n1n2: { value: val, correct: true } })
        }
        else {
            input.style.backgroundColor = "red"
            this.setState({ n1n2: { value: val, correct: false } })
        }
    }

    setN2N3(e) {
        const val = e.target.value
        const x = this.state.n2
        const y = this.state.n3
        const input = document.getElementById("N2N3")
        if (val == Math.round((x / y)*100)/100) {
            input.style.backgroundColor = "#90EE09"
            this.setState({ n2n3: { value: val, correct: true } })
        }
        else {
            input.style.backgroundColor = "red"
            this.setState({ n2n3: { value: val, correct: false } })
        }
    }

    setN3N4(e) {
        const val = e.target.value
        const x = this.state.n3
        const y = this.state.n4
        const input = document.getElementById("N3N4")
        if (val == Math.round((x / y)*100)/100) {
            input.style.backgroundColor = "#90EE09"
            this.setState({ n3n4: { value: val, correct: true } })
        }
        else {
            input.style.backgroundColor = "red"
            this.setState({ n3n4: { value: val, correct: false } })
        }
    }

    setN1N5(e) {
        const val = e.target.value
        const x = this.state.n1
        const y = this.state.n5
        const input = document.getElementById("N1N5")
        if (val == Math.round((x / y)*100)/100) {
            input.style.backgroundColor = "#90EE09"
            this.setState({ n1n5: { value: val, correct: true } })
        }
        else {
            input.style.backgroundColor = "red"
            this.setState({ n1n5: { value: val, correct: false } })
        }
    }

    setN2N6(e) {
        const val = e.target.value
        const x = this.state.n2
        const y = this.state.n6
        const input = document.getElementById("N2N6")
        if (val == Math.round((x / y)*100)/100) {
            input.style.backgroundColor = "#90EE09"
            this.setState({ n2n6: { value: val, correct: true } })
        }
        else {
            input.style.backgroundColor = "red"
            this.setState({ n2n6: { value: val, correct: false } })
        }
    }

    setN3N7(e) {
        const val = e.target.value
        const x = this.state.n3
        const y = this.state.n7
        const input = document.getElementById("N3N7")
        if (val == Math.round((x / y)*100)/100) {
            input.style.backgroundColor = "#90EE09"
            this.setState({ n3n7: { value: val, correct: true } })
        }
        else {
            input.style.backgroundColor = "red"
            this.setState({ n3n7: { value: val, correct: false } })
        }
    }

    setN4N8(e) {
        const val = e.target.value
        const x = this.state.n4
        const y = this.state.n8
        const input = document.getElementById("N4N8")
        if (val == Math.round((x / y)*100)/100) {
            input.style.backgroundColor = "#90EE09"
            this.setState({ n4n8: { value: val, correct: true } })
        }
        else {
            input.style.backgroundColor = "red"
            this.setState({ n4n8: { value: val, correct: false } })
        }
    }

    setN5N9(e) {
        const val = e.target.value
        const x = this.state.n5
        const y = this.state.n9
        const input = document.getElementById("N5N9")
        if (val == Math.round((x / y)*100)/100) {
            input.style.backgroundColor = "#90EE09"
            this.setState({ n5n9: { value: val, correct: true } })
        }
        else {
            input.style.backgroundColor = "red"
            this.setState({ n5n9: { value: val, correct: false } })
        }
    }

    setN6N10(e) {
        const val = e.target.value
        const x = this.state.n6
        const y = this.state.n10
        const input = document.getElementById("N6N10")
        if (val == Math.round((x / y)*100)/100) {
            input.style.backgroundColor = "#90EE09"
            this.setState({ n6n10: { value: val, correct: true } })
        }
        else {
            input.style.backgroundColor = "red"
            this.setState({ n6n10: { value: val, correct: false } })
        }
    }

    setN7N11(e) {
        const val = e.target.value
        const x = this.state.n7
        const y = this.state.n11
        const input = document.getElementById("N7N11")
        if (val == Math.round((x / y)*100)/100) {
            input.style.backgroundColor = "#90EE09"
            this.setState({ n7n11: { value: val, correct: true } })
        }
        else {
            input.style.backgroundColor = "red"
            this.setState({ n7n11: { value: val, correct: false } })
        }
    }

    setN8N12(e) {
        const val = e.target.value
        const x = this.state.n8
        const y = this.state.n12
        const input = document.getElementById("N8N12")
        if (val == Math.round((x / y)*100)/100) {
            input.style.backgroundColor = "#90EE09"
            this.setState({ n8n12: { value: val, correct: true } })
        }
        else {
            input.style.backgroundColor = "red"
            this.setState({ n8n12: { value: val, correct: false } })
        }
    }

    setN5N6(e) {
        const val = e.target.value
        const x = this.state.n5
        const y = this.state.n6
        const input = document.getElementById("N5N6")
        if (val == Math.round((x / y)*100)/100) {
            input.style.backgroundColor = "#90EE09"
            this.setState({ n5n6: { value: val, correct: true } })
        }
        else {
            input.style.backgroundColor = "red"
            this.setState({ n5n6: { value: val, correct: false } })
        }
    }

    setN6N7(e) {
        const val = e.target.value
        const x = this.state.n6
        const y = this.state.n7
        const input = document.getElementById("N6N7")
        if (val == Math.round((x / y)*100)/100) {
            input.style.backgroundColor = "#90EE09"
            this.setState({ n6n7: { value: val, correct: true } })
        }
        else {
            input.style.backgroundColor = "red"
            this.setState({ n6n7: { value: val, correct: false } })
        }
    }

    setN7N8(e) {
        const val = e.target.value
        const x = this.state.n7
        const y = this.state.n8
        const input = document.getElementById("N7N8")
        if (val == Math.round((x / y)*100)/100) {
            input.style.backgroundColor = "#90EE09"
            this.setState({ n7n8: { value: val, correct: true } })
        }
        else {
            input.style.backgroundColor = "red"
            this.setState({ n7n8: { value: val, correct: false } })
        }
    }

    setN9N10(e) {
        const val = e.target.value
        const x = this.state.n9
        const y = this.state.n10
        const input = document.getElementById("N9N10")
        if (val == Math.round((x / y)*100)/100) {
            input.style.backgroundColor = "#90EE09"
            this.setState({ n9n10: { value: val, correct: true } })
        }
        else {
            input.style.backgroundColor = "red"
            this.setState({ n9n10: { value: val, correct: false } })
        }
    }

    setN10N11(e) {
        const val = e.target.value
        const x = this.state.n10
        const y = this.state.n11
        const input = document.getElementById("N10N11")
        if (val == Math.round((x / y)*100)/100) {
            input.style.backgroundColor = "#90EE09"
            this.setState({ n10n11: { value: val, correct: true } })
        }
        else {
            input.style.backgroundColor = "red"
            this.setState({ n10n11: { value: val, correct: false } })
        }
    }

    setN11N12(e) {
        const val = e.target.value 
        const x = this.state.n11
        const y = this.state.n12
        // alert(val-" "-x-" " -y)
        const input = document.getElementById("N11N12")
        if (val == Math.round((x / y)*100)/100) {
            input.style.backgroundColor = "#90EE09"
            this.setState({ n11n12: { value: val, correct: true } })
            // alert("#90EE09")
        }
        else {
            input.style.backgroundColor = "red"
            this.setState({ n11n12: { value: val, correct: false } })
            // alert("Red")
        }
    }


    render() {
        return (
            <div className='container'>
                <form onSubmit={this.setRange}>
                    <input type="number" onChange={this.setLow} placeholder='lower range (1)' />
                    <label> RANGE :- </label>
                    <input type="number" onChange={this.setHigh} placeholder='higher range (1000000)' />

                    <input type="submit" value="Set" />
                </form>

                <p style={{color:"red"}} className="em"><br /> Correct to two decimal places</p>
                <table border={"2px"}>
                    <tbody>
                            <tr key="header">

                            </tr>
                            <tr key="r1">
                                <td className="tablewidth" key="1">{this.state.n1}</td>
                                <td className="tablewidth" key="12"><input className="inputwidth" name="N1N2" id="N1N2" onInput={this.setN1N2} value={this.state.n1n2.value} type="number"></input></td>
                                <td className="tablewidth" key="2">{this.state.n2}</td>
                                <td className="tablewidth" key="23"><input className="inputwidth" name="N2N3" id="N2N3" onChange={this.setN2N3} value={this.state.n2n3.value} type="number"></input></td>
                                <td className="tablewidth" key="3">{this.state.n3}</td>
                                <td className="tablewidth" key="34"><input className="inputwidth" name="N3N4" id="N3N4" onChange={this.setN3N4} value={this.state.n3n4.value} type="number"></input></td>
                                <td className="tablewidth" key="4">{this.state.n4}</td>
                            </tr>

                            <tr key="r2">
                                <td className="tablewidth" key="15"><input className="inputwidth" name="N1N5" id="N1N5" onChange={this.setN1N5} value={this.state.n1n5.value} type="number"></input></td>
                                <td className="tablewidth">XXXXXXXX</td>
                                <td className="tablewidth" key="26"><input className="inputwidth" name="N2N6" id="N2N6" onChange={this.setN2N6} value={this.state.n2n6.value} type="number"></input></td>
                                <td className="tablewidth">XXXXXXXX</td>
                                <td className="tablewidth" key="37"><input className="inputwidth" name="N3N7" id="N3N7" onChange={this.setN3N7} value={this.state.n3n7.value} type="number"></input></td>
                                <td className="tablewidth">XXXXXXXX</td>
                                <td className="tablewidth" key="48"><input className="inputwidth" name="N4N8" id="N4N8" onChange={this.setN4N8} value={this.state.n4n8.value} type="number"></input></td>
                            </tr>

                            <tr key="r3">
                                <td className="tablewidth" key="5">{this.state.n5}</td>
                                <td className="tablewidth" key="56"><input className="inputwidth" name="N5N6" id="N5N6" onChange={this.setN5N6} value={this.state.n5n6.value} type="number"></input></td>
                                <td className="tablewidth" key="6">{this.state.n6}</td>
                                <td className="tablewidth" key="67"><input className="inputwidth" name="N6N7" id="N6N7" onChange={this.setN6N7} value={this.state.n6n7.value} type="number"></input></td>
                                <td className="tablewidth" key="7">{this.state.n7}</td>
                                <td className="tablewidth" key="78"><input className="inputwidth" name="N7N8" id="N7N8" onChange={this.setN7N8} value={this.state.n7n8.value} type="number"></input></td>
                                <td className="tablewidth" key="8">{this.state.n8}</td>
                            </tr>

                            <tr key="r4">
                                <td className="tablewidth" key="59"><input className="inputwidth" name="N5N9" id="N5N9" onChange={this.setN5N9} value={this.state.n5n9.value} type="number"></input></td>
                                <td className="tablewidth">XXXXXXXX</td>
                                <td className="tablewidth" key="610"><input className="inputwidth" name="N6N10" id="N6N10" onChange={this.setN6N10} value={this.state.n6n10.value} type="number"></input></td>
                                <td className="tablewidth">XXXXXXXX</td>
                                <td className="tablewidth" key="711"><input className="inputwidth" name="N7N11" id="N7N11" onChange={this.setN7N11} value={this.state.n7n11.value} type="number"></input></td>
                                <td className="tablewidth">XXXXXXXX</td>
                                <td className="tablewidth" key="812"><input className="inputwidth" name="N8N12" id="N8N12" onChange={this.setN8N12} value={this.state.n8n12.value} type="number"></input></td>
                            </tr>

                            <tr key="r5">
                                <td className="tablewidth" key="9">{this.state.n9}</td>
                                <td className="tablewidth" key="910"><input className="inputwidth" name="N9N10" id="N9N10" onChange={this.setN9N10} value={this.state.n9n10.value} type="number"></input></td>
                                <td className="tablewidth" key="10">{this.state.n10}</td>
                                <td className="tablewidth" key="1011"><input className="inputwidth" name="N10N11" id="N10N11" onChange={this.setN10N11} value={this.state.n10n11.value} type="number"></input></td>
                                <td className="tablewidth" key="11">{this.state.n11}</td>
                                <td className="tablewidth" key="1112"><input className="inputwidth" name="N11N12" id="N11N12" onChange={this.setN11N12} value={this.state.n11n12.value} type="number"></input></td>
                                <td className="tablewidth" key="12">{this.state.n12}</td>
                            </tr>

                    </tbody>
                </table>
            </div>
        )
    }
}

export default Division;
