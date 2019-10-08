import React from 'react'
import LogRegFormCss from './LogRegForm.module.css'
import LoginForm from "../LoginForm/LoginForm";
import RegistrationForm from "../RegistrationForm/RegistrationForm";

const LogRegForm = ()=>
{
    let flag=false;
    let string = 'LogIn'
    return(
        <div>
            {flag?<LoginForm/>:<RegistrationForm/>}
            <button>{string}</button>
        </div>

    );



};


export default LogRegForm;




