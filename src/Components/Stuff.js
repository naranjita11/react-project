import Header from "./Header";
import Paragraph from "./Paragraph";
import Square from "./Square";
import People from "./People";

const Stuff = ({ square }) => (
    <>
        <Header title="Fantastic App" subtitle="Is really amazing!" />
        <Paragraph message="Vultures vultures everywhere" />

        { square ? <Square colour="yellow" /> : null }
        
        <People names={ ["James P. Sullivan", "Mike Wazowski", "Boo", "Randall Boggs", "Roz", "Fungus"] } />
    </>
);

Stuff.defaultProps = {
    square: true,
};

export default Stuff;