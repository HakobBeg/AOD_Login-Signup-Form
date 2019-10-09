import React from 'react'
import RegFormCSS from './RegistrationForm.module.css'
import { connect } from "react-redux";

const RegistrationForm = (props)=>

{


    return(
        <div className={RegFormCSS.RegForm}>
            <label>Sign Up</label>
            <input/>

            <input/>

            <input/>

            <input/>


            <button>Sign Up</button>

        </div>

    );


}





export default connect((store)=>{return store})(RegistrationForm);