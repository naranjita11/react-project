// Create a <StepCounter max={ 100 } step={ 5 } /> component. It should consist of a <p> containing a number (start at 0) and two buttons, + and -. When the user clicks the + button, the number should go up by step. When the user clicks the - button the number should go down by step. The number should not be able to go below 0. Use props to pass in a maximum value for the counter.

import { Component } from "react";

class StepCounter extends Component {

    constructor(props) {
        super(props);

        this.state = {
            number: 0,
            max: this.props.max,
            step: this.props.step
        };

        this.handleClickUp = this.handleClickUp.bind(this);
        this.handleClickDown = this.handleClickDown.bind(this);
    }

    handleClickUp() {
        let { number } = this.state
        let { max } = this.props
        let { step } = this.props

        // + infront of step means read it as a number (type coercion)
        if (number < max) {
            this.setState({ number: number + +step });
        }
        // this is useful to find out what type JS thinks the variable is
        console.log(typeof step);
    }

    handleClickDown() {
        let { number } = this.state
        let { step } = this.props

        if (number > 0) {
            this.setState({ number: number - step });
        }

    }

    render() {
        // destructuring the state object
        let { number } = this.state

        return (
          <>
          <h4>Step Counter</h4>
          <button onClick={ this.handleClickUp }>+</button>
          <p>{ number }</p>
          <button onClick={ this.handleClickDown }>-</button>
          </>
        );

    }

};


export default StepCounter;