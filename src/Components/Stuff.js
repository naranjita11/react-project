import Header from "./Header";
import Paragraph from "./Paragraph";
import Square from "./Square";
import People from "./People";
import Clicked from "./Clicked";
import ToggleText from "./ToggleText";
import Counter from "./Counter";
// import StepCounter from "./StepCounter";
import Length from "./Length";
import PasswordStrength from "./PasswordStrength";
import TempConverter from "./TempConverter";

const Stuff = () => (
    <>
        <Header subtitle="This subtitle is a prop"> 
            <p>Fantastic App</p>
            <p>Is really amazing!</p>    
        </Header>

        <Paragraph>
            Hello hello paragraph
        </Paragraph>

        <Square colour="hotpink"/>

        <People names={ ["James P. Sullivan", "Mike Wazowski", "Boo", "Randall Boggs", "Roz", "Fungus"] } />

        <Clicked />

        <ToggleText initial="Hello" alternate="World"/>

        <Counter initial={ 50 } max={ 100 } />

        {/* <StepCounter max={ 100 } step={ 5 } /> */}

        <Length label="How long?"/>

        <PasswordStrength name="password" label="Is it secure?"/>
        
        <TempConverter label="Temperature Converter"/>
    </>
);

// Stuff.defaultProps = {
//     square: true,
// };

export default Stuff;