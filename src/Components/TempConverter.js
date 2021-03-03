import { Component } from "react";

class TempConverter extends Component {

    constructor() {
        super();

        this.state = {
            inputF: "",
            inputC: "",
        };

        this.handleChangeF = this.handleChangeF.bind(this);
        this.handleChangeC = this.handleChangeC.bind(this);
    }

    handleChangeF(e) {
        let currentValue = e.currentTarget.value
        this.setState({
            inputF: currentValue,
            inputC: (currentValue-32)*(5/9)
        });
    }

    handleChangeC(e) {
        let currentValue = e.currentTarget.value
        this.setState({
            inputC: currentValue,
            inputF: (currentValue * (9/5)) + 32
        });
    }

    render() {

        return (
            <div className="form-group">
                <h4>Temperature Converter</h4>
                <label>°F</label>
                <input
                    onChange={ this.handleChangeF }
                    value={ this.state.inputF }
                    name="Farenheit"
                    type="number"
                    className="form-control"
                />
                <label>°C</label>
                <input
                    onChange={ this.handleChangeC }
                    value={ this.state.inputC }
                    name="Celsius"
                    type="number"
                    className="form-control"
                />
                <p></p>
            </div>
        );
    }
}

export default TempConverter;