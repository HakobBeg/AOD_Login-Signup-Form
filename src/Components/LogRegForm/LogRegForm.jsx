import React from 'react'
import LogRegFormCss from './LogRegForm.module.css'
import LoginForm from "../LoginForm/LoginForm";
import RegistrationForm from "../RegistrationForm/RegistrationForm";
import { NavLink, Route } from 'react-router-dom';
import { changeLanguageInto, pageChangesAC } from "../../Redux/ActionCreators";
import { connect } from "react-redux";
import { useTranslation } from "react-i18next";



const Loader=(props)=>{
    if(props.flag===true) {
        return (

            <div className={LogRegFormCss.loader} style={{
                backgroundColor: "rgba(47,59,73,0.57)",
                minHeight: "200px",
                position: "absolute",
                width: "100%",
                height: "1000px",

            }}>
                <div className={LogRegFormCss.ldshourglass}>
            </div>
        );
    }
    else
        return(
            <div>

            </div>
        );
};

const LogRegForm = (props) => {
    const { t } = useTranslation();
    const onClickhandler = () => {

        props.dispatch(pageChangesAC());
    };

    const changeIntoEnglish=()=>{
        props.dispatch(changeLanguageInto("en"));
        props.i18n.changeLanguage("en");

    };

    const changeIntoRussian=()=>{
        props.dispatch(changeLanguageInto("ru"));
        props.i18n.changeLanguage("ru");

    };

    return (
        <div>
            <Loader flag={props.loaderFlagState.loaderFlag}/>
            <div className={LogRegFormCss.languageButtons}>
                <button onClick={changeIntoEnglish} autoFocus>en</button>
                <button onClick={changeIntoRussian}>ru</button>
            </div>

            <div className={LogRegFormCss.LogRegForm}>

                <Route path="/login"  component={LoginForm}/>
                <Route path="/register" component={RegistrationForm}/>
                <label>{((props.pageState.pagePointer) === '/login') ? t('Already Registered?') : t('Are you here for the First time?')}</label>
                <NavLink to={props.pageState.pagePointer}>
                    <button onClick={onClickhandler}>{(props.pageState.pagePointer) === '/login' ? t('Log in') : t('Sign Up')}</button>
                </NavLink>

            </div>
        </div>
    );


};


export default connect((store) => {
    return store
})(LogRegForm);




