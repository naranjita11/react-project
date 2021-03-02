// import { PropTypes } from 'prop-types';

const divStyle = {
  width: 200,
  height: 200,
};

const Square = ({ colour }) => (
  // use of spreading. Could have brought all of divStly properties within the function with explicit return
  <div style={{ ...divStyle, backgroundColor: colour }}></div>
);

// add default values for the color prop
// if the prop is not given this will be used
Square.defaultProps = {
  colour: "grey",
};

export default Square;