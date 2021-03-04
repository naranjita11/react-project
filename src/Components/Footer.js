import { Link } from "react-router-dom";
import { Component } from "react";

class Footer extends Component {

  render() {

    return (
        <ul className="list-group">
          <li>
            <Link to="">Home</Link>
          </li>
          <li>
            <Link to="/clicked">Clicked</Link>
          </li>
          <li>
            <Link to="/people">People</Link>
          </li>
          <li>
            <Link to="/square">Square</Link>
          </li>
          <li>
            <Link to="/list">List</Link>
          </li>
          <li>
            <Link to="/god-counter">God Counter</Link>
          </li>
          <li>
            <Link to="/toggle-text">Toggle Text</Link>
          </li>
          <li>
            <Link to="/temp-converter">Temperature Converter</Link>
          </li>
          <li>
            <Link to="/two-counters">Two Counters</Link>
          </li>
        </ul>

    );

  }

}

  export default Footer;