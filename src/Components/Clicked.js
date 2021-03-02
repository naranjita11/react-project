import { Component } from "react";

class Clicked extends Component {

    constructor(props) {
        // make sure it always has this, it makes Component work
        super(props);

        // set up state, a JS object
        this.state = {
            clicked: false,
        };

        // force this to always be *this* this in handleClick
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        // get current value of clicked. Not necessary in this case but will be needed to toggle
        // let current = this.state.clicked;
    
        // set new value
        // pass in a POJO with values we want to update
        this.setState({ clicked: true});
      }

      render() {

        return (
            <div style={{ backgroundColor: "hotpink" }} onClick={ this.handleClick }>
            { /* use the state - will use the inital state the first time */ }
            <p>{ this.state.clicked ? "clicked" : "Not clicked"}</p>
            </div>
        );
    }
}

export default Clicked;