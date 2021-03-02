import Header from "./Header";
import Paragraph from "./Paragraph";
import Square from "./Square";
import People from "./People";

const Stuff = ({ square }) => (
    <>
        <Header> 
            <h3>Fantastic App</h3>
            <h4>Is really amazing!</h4>    
        </Header>

        <Paragraph>
            <p>Vultures vultures everywhere</p>
        </Paragraph>

        { square ? <Square colour="violet" /> : null }

        <People names={ ["James P. Sullivan", "Mike Wazowski", "Boo", "Randall Boggs", "Roz", "Fungus"] } />
    </>
);

Stuff.defaultProps = {
    square: true,
};

export default Stuff;