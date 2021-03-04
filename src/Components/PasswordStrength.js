import { Component } from "react";

class PasswordStrength extends Component {

    constructor(props) {
        super(props);

        this.state = {
            input: "",
        };

        this.handleChange = this.handleChange.bind(this);
    }

    // e is the standard DOM event object
    handleChange(e) {
        // e.currentTarget: DOM element we attached the event handler to
        // use the value property to read its current value
        this.setState({ input: e.target.value });
    }

    findColour() {
        let { length } = this.state.input

        if (length < 1) {
            return "white";
        }
        
        else if (length < 9) {
            return "red";
        }
        
        else if (length < 16) {
            return "orange";
        }

        else {return "green";}

    }

    render() {
        let colour = this.findColour();

        return (
            <div className="form-group">
                <h4>Password Strength</h4>
                <label>{ this.props.label }</label>
                <input
                    onChange={ this.handleChange }
                    value={ this.state.input }
                    name={ this.props.name }
                    type="password"
                    className="form-control"
                    style={{ backgroundColor: colour }}
                />
            </div>
        );
    }
}

export default PasswordStrength;