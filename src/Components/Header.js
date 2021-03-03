import { Component } from "react";

// turn into a class of the same name and extend component
class Header extends Component {

    render() {
      //destructure the JSX so we don't have to update the JSX
      let { children, subtitle } = this.props;

      // the return statement of the render method is same as in original function
      return (
        <header className="jumbotron">
          <h1>{ children }</h1>
          <p>{ subtitle }</p>
        </header> 
      );
    }

}

  export default Header;