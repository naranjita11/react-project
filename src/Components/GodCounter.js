import { Component } from "react";

class GodCounter extends Component {

    constructor() {
        super();

        this.state = {
            number: 0,
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        // destructuring the state object
        let { number } = this.state

        this.setState({ number: number + 1 })
    }

    componentDidMount() {
        window.addEventListener("click", this.handleClick);
        }

    componentWillUnmount() {
        // we need to remove any event listeners
        // that React hasn't setup itself
        window.removeEventListener("click", this.handleClick);
        }

    render() {
        // destructuring the state object
        let { number } = this.state

        return (
          <>
          <h4>God Counter</h4>
          <p>{ number }</p>
          </>
        );

    }

};


export default GodCounter;