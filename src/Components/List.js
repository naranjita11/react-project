import { Component } from "react";

class List extends Component {

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


    render() {

        return (
            <>
                <h4>List</h4>
                <form className="form-group mt-4">    
                    <label>Item to add</label>
                    <input
                        onChange={ this.handleChange }
                        // this is a default value and its needed when state changes
                        value={ this.state.value }
                        name="list-item"
                        type="text"
                        className="form-control"
                    />
                    <button className="btn btn-primary mt-4" onClick={ this.handleSubmit }>Add item</button>
                </form>
                <ul className="list-group mt-4">
                    { this.state.items.map((item, i) => (
                        <li className="list-group-item" key={ i }>{ item }</li>
                    ))}
                </ul>
                
            </>
        );
    }
}

export default List;