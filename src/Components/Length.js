import { Component } from "react";

class Length extends Component {

    constructor(props) {
        // make sure it always has this, it makes Component work
        super(props);

        // set up state, a JS object
        this.state = {
            input: "",
        };

        // force this to always be *this* this in handleClick
        this.handleChange = this.handleChange.bind(this);

    }

    // e is the standard DOM event object
    handleChange(e) {
        // e.currentTarget: DOM element we attached the event handler to
        // use the value property to read its current value
        this.setState({ input: e.currentTarget.value });
    }

    render() {

        return (
            <div className="form-group">
                <label>{ this.props.label }</label>

                { /* use the value of the state */ }
                <input
                    onChange={ this.handleChange }
                    value={ this.state.input }
                    name={ this.props.name }
                    className="form-control"
                />
                <p className="form-text text-muted">
                    Length: { this.state.input.length } characters
                </p>
            </div>
        );
    }
}

export default Length;