// Create an <Adder> component. It should have a number <input> field and an "Add" <button>. When the "Add" button is pressed the number should be added to a list of numbers on screen and the total of all the numbers in the list should be displayed below. Make sure you test the total is correct: try 1, 2, and 3 and check you get 6

import { Component } from "react";

class Adder extends Component {

    constructor() {
        super();

        this.state = {
            value: "",
            items: [],
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({ value: e.currentTarget.value });
    }

    handleSubmit(e) {
        // this prevents the page from refreshing once the button is clicke wihich is a default behaviour
        e.preventDefault();
        
        // this.setState is not updating state directly, but passing an object with the parts of the state object that I want to update
        this.setState({
            // but won't this clear the contents of value? I can see that you need to do this after submitting it to the array...
            value: "", 
            items: [...this.state.items, this.state.value],
        });
    }

    total() {
        let { items } = this.state
        let { total } = this.state

        // type coercion used as otherwise the numbers are concatenated
        total = items.reduce((total, value) => total + +value, 0);
        return total;
    }


    render() {

        return (
            <>
                <h4>Adder</h4>
                <form className="form-group mt-4">    
                    <label>Number</label>
                    <input
                        onChange={ this.handleChange }
                        // this is a default value and its needed when state changes
                        value={ this.state.value }
                        name="list-item"
                        type="number"
                        className="form-control"
                    />
                    <button className="btn btn-primary mt-4" onClick={ this.handleSubmit }>Add</button>
                </form>
                <ul className="list-group mt-4">
                    { this.state.items.map((item, i) => (
                        <li className="list-group-item" key={ i }>{ item }</li>
                    ))}
                    <li className="list-group-item">Total: { this.total() }</li>
                </ul>
                
            </>
        );
    }
}

export default Adder;