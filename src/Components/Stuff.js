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

        <ToggleText initial="Hello" alternate="World"/>

        <Counter initial={ 50 } max={ 100 } />

        {/* <StepCounter max={ 100 } step={ 5 } /> */}

        <Length label="How long?"/>

        <PasswordStrength name="password" label="Password: Is it secure?"/>
    </>
);

// Stuff.defaultProps = {
//     square: true,
// };

export default Stuff;