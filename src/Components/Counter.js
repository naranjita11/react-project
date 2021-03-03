import { Component } from "react";
// import PropTypes from 'prop-types';

class Counter extends Component {

    constructor(props) {
        super(props);

        this.state = {
            // if a props value is an inital value that will change, set in this.state
            number: this.props.initial,
        };

        this.handleClickUp = this.handleClickUp.bind(this);
        this.handleClickDown = this.handleClickDown.bind(this);
    }

    handleClickUp() {
        let { number } = this.state
        let { max } = this.props

        if (number < max) {
            this.setState({ number: number + 1 });
        }
    }

    handleClickDown() {
        let { number } = this.state

        if (number > 0) {
            this.setState({ number: number - 1 });
        }

    }

    render() {
        // destructuring the state object
        let { number } = this.state

        return (
          <>
          <button onClick={ this.handleClickUp }>+</button>
          <p>{ number }</p>
          <button onClick={ this.handleClickDown }>-</button>
          </>
        );

    }

};

// Counter.propTypes = {


// }

export default Counter;