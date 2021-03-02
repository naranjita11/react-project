import Header from "./Header";
import Paragraph from "./Paragraph";
import Square from "./Square";
import People from "./People";
import Clicked from "./Clicked";

const Stuff = ({ square }) => (
    <>
        <Header> 
            <h3>Fantastic App</h3>
            <h4>Is really amazing!</h4>    
        </Header>

        <Paragraph>
            <p>Vultures vultures everywhere</p>
        </Paragraph>

        { square ? <Square colour="hotpink" /> : null }

        <People names={ ["James P. Sullivan", "Mike Wazowski", "Boo", "Randall Boggs", "Roz", "Fungus"] } />

        <Clicked />
    </>
);

Stuff.defaultProps = {
    square: true,
};

export default Stuff;