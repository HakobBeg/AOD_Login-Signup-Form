import React from 'react'
import RegFormCSS from './RegistrationForm.module.css'
import { connect } from "react-redux";
import {
    registerReq,
    userRegisterConfirmPassTextChanges,
    userRegisterEmailTextChanges, userRegisterNameTextChanges,
    userRegisterPassTextChanges
} from "../../Redux/ActionCreators";

const RegistrationForm = (props)=>

{

    let RegEmailInput = React.createRef();
    let RegPassInput = React.createRef();
    let RegConfirmPassInput = React.createRef();
    let RegNameInput = React.createRef();


    const registerButtonAction=()=>{
        if(props.registrationPageInputState.globalExc==="")
            props.dispatch(registerReq());
    };

    const EmailInputHandler = () => {
        props.dispatch(userRegisterEmailTextChanges(RegEmailInput.current.value));
    };

    const PasswordInputHandler = () => {
        props.dispatch(userRegisterPassTextChanges(RegPassInput.current.value));
    };

    const ConfirmPasswordInputHandler = () => {
        props.dispatch(userRegisterConfirmPassTextChanges(RegConfirmPassInput.current.value));
    };

    const NameInputHandler = () => {
        props.dispatch(userRegisterNameTextChanges(RegNameInput.current.value));
    };

    return(
        <div className={RegFormCSS.RegForm}>
            <label>Sign Up</label>
            <input ref = {RegEmailInput} onChange={EmailInputHandler} value = {props.registrationPageInputState.regUserEmail}/>
            <p className={RegFormCSS.inputException}>{props.registrationPageInputState.EmailInputExc}</p>
            <input ref = {RegPassInput} onChange={PasswordInputHandler} value = {props.registrationPageInputState.regUserPassword}  type={props.registrationPageInputState.passInputType}/>
            <p className={RegFormCSS.inputException}>{props.registrationPageInputState.PassInputExc}</p>
            <input ref = {RegConfirmPassInput}  onChange={ConfirmPasswordInputHandler} value = {props.registrationPageInputState.regUserConfirmPass}  type={props.registrationPageInputState.confirmPassInputType} />
            <p className={RegFormCSS.inputException}>{props.registrationPageInputState.ConfirmPassExc}</p>
            <input ref = {RegNameInput} onChange={NameInputHandler} value = {props.registrationPageInputState.regUserName}/>
            <p className={RegFormCSS.inputException}>{props.registrationPageInputState.NameInputExc}</p>

            <button onClick={registerButtonAction}>Sign Up</button>
            <p>{props.registrationPageInputState.globalExc}</p>
        </div>

    );


};





export default connect((store)=>{return store})(RegistrationForm);