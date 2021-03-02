import { Component } from "react";

class ToggleText extends Component {

    constructor(props) {
        super(props);

        this.state = {
            initial: true,
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        let isToggled = this.state.initial;
        this.setState({ initial: !isToggled });

    }

    render() {
        
        return (
          <>
          <button onClick={ this.handleClick }>Toggle</button>
          <p>{ this.state.initial ? "Hello" : "World" }</p>
          </>
        );

    }

};

export default ToggleText;