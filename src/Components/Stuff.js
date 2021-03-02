import Header from "./Header";
import Paragraph from "./Paragraph";
import Square from "./Square";
import People from "./People";
import Clicked from "./Clicked";
import ToggleText from "./ToggleText";

const Stuff = () => (
    <>
        <Header> 
            <h3>Fantastic App</h3>
            <h4>Is really amazing!</h4>    
        </Header>

        <Paragraph>
            <p>Hello hello</p>
        </Paragraph>

        <Square colour="hotpink"/>

        <People names={ ["James P. Sullivan", "Mike Wazowski", "Boo", "Randall Boggs", "Roz", "Fungus"] } />

        <Clicked />

        <ToggleText />
    </>
);

// Stuff.defaultProps = {
//     square: true,
// };

export default Stuff;