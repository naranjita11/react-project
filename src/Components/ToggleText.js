import { Component } from "react";

class ToggleText extends Component {

    constructor(props) {
        super(props);

        this.state = {
            initial: true
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({ initial: !this.state.initial });
    }

    render() {
        let { initial, alternate } = this.props;
        
        return (
          <>
          <button onClick={ this.handleClick }>Toggle</button>
          <p>{ this.state.initial ? initial : alternate }</p>
          </>
        );

    }

};

export default ToggleText;