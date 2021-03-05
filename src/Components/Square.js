import { Component } from "react";

class Square extends Component {

    constructor(props) {
          
        super(props);

        this.state = {
          green: true,
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        // get current value of clicked. Not necessary in this case but will be needed to toggle
        let isToggled = this.state.green;

        // set new value
        // pass in a plain old JS object with values we want to update
        this.setState({ green: !isToggled});

    }

    render() {
      let colour = this.state.green ? "green" : this.props.colour;  
      
      const divStyle = {
            width: 200,
            height: 200,
            backgroundColor: colour
        };

        return (
            <div style={divStyle} onClick={ this.handleClick } />
        );

    }

};

Square.defaultProps = {
  colour: "grey",
};

export default Square;