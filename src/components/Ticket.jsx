import React from "react";
import PropTypes from "prop-types";

function Ticket(props){
  return (
      <div>
        <h3>{props.location} - {props.name}</h3>
        <p><em>{props.issue}</em></p>
        <hr/>
      </div>
   );
}

// Declare strict data types to propTypes. Lowercase is declaring a propTypes property on our Ticket component.
// upper-case version PropTypes.string is referring to the PropTypes class we import at the top of the file.
Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string
};

// most common props
// MyExampleComponent.propTypes = {
// exampleArray: PropTypes.array,
// exampleBoolean: PropTypes.bool,
// exampleFunction: PropTypes.func,
// exampleNumber: PropTypes.number,
// exampleObject: PropTypes.object,
// exampleString: PropTypes.string,
// exampleSymbol: PropTypes.symbol,
// exampleReactElement: PropTypes.element,
// }

// more advanced things we can declare types for
// exampleArrayOfNumbers: PropTypes.arrayOf(PropTypes.number),
// exampleArrayOfStrings: PropTypes.arrayOf(PropTypes.string),

// we can also declare that a prop is an instance of a class
// exampleClassTypeProp : PropTypes.instanceOf(ExampleClassName),

// or that a prop is limited to specific values by treating it as something called an enum
// optionalEnum: PropTypes.oneOf(['ExampleClass', 'AnotherExampleClass']),

export default Ticket;
