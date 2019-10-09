import React from 'react'
import LoginCss from './LoginForm.module.css'
import { connect } from "react-redux";
import { userEmailTextChanges, userPassTextChanges } from "../../Redux/ActionCreators";


const LoginForm = (props) => {
    let EmailInput = React.createRef();
    let PassInput = React.createRef();


    const EmailInputHandler = () => {
        props.dispatch(userEmailTextChanges(EmailInput.current.value));
    };

    const PassInputHandler = ()=>
    {
        props.dispatch(userPassTextChanges(PassInput.current.value));
    }
    return (
        <div className={LoginCss.Login}>
            <label>Log in</label>
            <input ref={EmailInput} value={props.loginPageInputState.userEmail} onChange={EmailInputHandler}/>


            <input  type={props.loginPageInputState.inputType} ref={PassInput} value={props.loginPageInputState.userPassword} onChange={PassInputHandler}/>

            <button>Sign In</button>
        </div>

    );


};


export default connect((store) => {
    return store
})(LoginForm);
