import { Component } from "react";

class GodCounter extends Component {

    constructor() {
        super();

        this.state = {
            value1: 1,
            value2: 1,
        };

        this.handle1 = this.handle1.bind(this);
        this.handle2 = this.handle2.bind(this);
    }

    handle1() {
        let { value1 } = this.state
        this.setState({ value1: value1 + 1 });
    }

    handle2() {
        let { value2 } = this.state
        this.setState({ value2: value2 + 1 });
    }

    // this is run directly after initial render so effectively displays the combined value of value1 and value2 in the doc title on load
    componentDidMount() {
        let { value1 } = this.state;
        let { value2 } = this.state;
        document.title = value1 + value2;
        }

    // this unmounts the above
    componentWillUnmount() {
        document.title = "React App";
        console.log("unmount")
        }

    // seeing as this method and DidMount use the same code, could pull it ouot into a separate method and call that method in DidMount and DidUpdate
    componentDidUpdate() {
        let { value1 } = this.state;
        let { value2 } = this.state;
        document.title = value1 + value2;
         }

    render() {
        let { value1 } = this.state
        let { value2 } = this.state

        return (
            <div className="jumbotron">
                <h4>Two Counters</h4>
                <p>
                    <button onClick={ this.handle1 } className="btn btn-lg btn-danger">+</button>
                    <span className="alert alert-danger mr-2 ml-2">{ value1 }</span>
                </p>
                <p>
                    <button onClick={ this.handle2 } className="btn btn-lg btn-success">+</button>
                    <span className="alert alert-success mr-2 ml-2">{ value2 }</span>
                </p>
            </div>
        );

    }

};


export default GodCounter;