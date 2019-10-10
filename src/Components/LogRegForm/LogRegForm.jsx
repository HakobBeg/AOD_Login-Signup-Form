import React from 'react'
import LogRegFormCss from './LogRegForm.module.css'
import LoginForm from "../LoginForm/LoginForm";
import RegistrationForm from "../RegistrationForm/RegistrationForm";
import { NavLink, Route } from 'react-router-dom';
import { pageChangesAC } from "../../Redux/ActionCreators";
import { connect } from "react-redux";


const LogRegForm = (props) => {

    let onClickhandler = () => {

        props.dispatch(pageChangesAC());
    };

    return (
        <div>

            <div className={LogRegFormCss.languageButtons}>
                <button>eu</button>
                <button>ru</button>
            </div>

            <div className={LogRegFormCss.LogRegForm}>

                <Route path="/login" component={LoginForm}/>
                <Route path="/register" component={RegistrationForm}/>
                <label>{((props.pageState.pagePointer) === '/login') ? 'Already Registered?' : 'Are you here for the First time?'}</label>
                <NavLink to={props.pageState.pagePointer}>
                    <button
                        onClick={onClickhandler}>{(props.pageState.pagePointer) === '/login' ? 'Log in' : 'Sign Up'}</button>
                </NavLink>


            </div>
        </div>
    );


};


export default connect((store) => {
    return store
})(LogRegForm);




