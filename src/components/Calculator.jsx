import React, { Component } from 'react';
import '../styles/calculator.css';
import '../styles/index.css';
import Button from "../components/Button.jsx";
import Display from "../components/Display.jsx";

const initialState = {
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    current: 0
}

export default class Calculator extends Component {

    constructor(props) {
        super(props)
        this.clearMemory = this.clearMemory.bind(this)
        this.setOperation = this.setOperation.bind(this)
        this.addDigit = this.addDigit.bind(this)
    }
    state = {...initialState}
   clearMemory(){
    this.setState({...initialState});
   }

   setOperation(operation) {
    console.log(operation);
   }
   
   addDigit(n) {
   if (n === '.' && this.state.displayValue.includes('.')){
    return
   }

   const clearDisplay = this.state.displayValue === "0"
      || this.state.clearDisplay
      const currentValue = clearDisplay ? '' : this.state.displayValue
    const displayValue = currentValue + n
    this.setState({displayValue, clearDisplay: false})

    if(n !== "."){
        const i = this.state.current
        const newValue = parseFloat(displayValue)
        const values = [...this.state.values]
        values[i] = newValue
        this.setState({values})
    }
}

    render() {
        return(
            <div className='calculator' id='calculator'>
             <Display value={this.state.displayValue} />
             <Button label="AC" click = {this.clearMemory} triple/>
             <Button label="/" click = {this.setOperation} operation />
             <Button label="7" click = {this.addDigit}/>
             <Button label="8" click = {this.addDigit}/>
             <Button label="9" click = {this.addDigit}/>
             <Button label="*" click = {this.setOperation} operation />
             <Button label="4" click = {this.addDigit}/>
             <Button label="5" click = {this.addDigit}/>
             <Button label="6" click = {this.addDigit}/>
             <Button label="-" click = {this.setOperation}  operation/>
             <Button label="1" click = {this.addDigit}/>
             <Button label="2" click = {this.addDigit}/>
             <Button label="3" click = {this.addDigit}/>
             <Button label="+" click = {this.setOperation}  operation/>
             <Button label="0" click = {this.addDigit} double/>
             <Button label="." click = {this.setOperation} />
             <Button label="=" click = {this.setOperation} operation />
    </div>
        )
    }
}