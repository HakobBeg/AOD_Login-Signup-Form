import React from 'react'
import LoginCss from './LoginForm.module.css'
import { connect } from "react-redux";
import { loginReq, userEmailTextChanges, userPassTextChanges } from "../../Redux/ActionCreators";
import { useTranslation } from "react-i18next";



const LoginForm = (props) => {
    let EmailInput = React.createRef();
    let PassInput = React.createRef();
    const { t } = useTranslation();


    const loginButtonAction = ()=>
    {
           props.dispatch(loginReq());

    };


    const EmailInputHandler = () => {
        props.dispatch(userEmailTextChanges(EmailInput.current.value));
    };

    const PassInputHandler = ()=>
    {
        props.dispatch(userPassTextChanges(PassInput.current.value));
    };
    return (



            <div className={LoginCss.Login}>
            <label>Log in</label>
            <input ref={EmailInput} value={t(props.loginPageInputState.userEmail)} onChange={EmailInputHandler}/>


            <input  type={props.loginPageInputState.inputType} ref={PassInput} value={t(props.loginPageInputState.userPassword)} onChange={PassInputHandler}/>

            <button onClick={loginButtonAction}>{t('Sign In')}</button>

        </div>
    );


};


export default connect((store) => {
    return store
})(LoginForm);
