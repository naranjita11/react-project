import Header from "./Header";
import Paragraph from "./Paragraph";
import Square from "./Square";
import People from "./People";

const Stuff = () => (
    <>
        <Header title="My Amazing App" subtitle="Is really amazing!"/>
        <Paragraph message="Another message"/>
        <Square colour="yellow"/>
        <People/>
    </>
);

export default Stuff;