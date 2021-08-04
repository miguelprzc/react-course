// Functional Components

import { Fragment } from "react";
import PropTypes from 'prop-types'

const FirstApp = ( { greeting, subtitle } ) => {

  /* if ( !greeting ) {
    throw new Error ( 'The greeting is requiered');
  } */

  return (
    <>
      <h1> { greeting } </h1> 
      {/* <pre> { JSON.stringify(greeting, null, 3) } </pre> */}
      <p>{ subtitle }</p>
    </>
    );
   

}

FirstApp.propTypes = {
  greeting: PropTypes.string.isRequired
}

FirstApp.defaultProps = {
  subtitle: 'THis a subtible by defaultProps'
}

export default FirstApp;

