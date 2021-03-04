import { Component } from "react";

class GodCounter extends Component {

    constructor() {
        super();

        this.state = {
            number: 0,
        };

        this.handleClick = this.handleClick.bind(this);
        console.log("Construct");
    }

    handleClick() {
        // destructuring the state object
        let { number } = this.state

        this.setState({ number: number + 1 });
        console.log("Click");

    }

    componentDidMount() {
        window.addEventListener("click", this.handleClick);
        console.log("Mount");
        }

    componentWillUnmount() {
        // we need to remove any event listeners
        // that React hasn't setup itself
        window.removeEventListener("click", this.handleClick);
        console.log("Unmount");
        }

    render() {
        // destructuring the state object
        let { number } = this.state
        console.log("Render");

        return (
          <>
          <h4>God Counter</h4>
          <p>{ number }</p>
          </>
        );

    }

};


export default GodCounter;