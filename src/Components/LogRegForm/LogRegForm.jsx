import React from 'react'
import LogRegFormCss from './LogRegForm.module.css'
import LoginForm from "../LoginForm/LoginForm";
import RegistrationForm from "../RegistrationForm/RegistrationForm";
import { NavLink, Route } from 'react-router-dom';
import { pageChangesAC } from "../../Redux/ActionCreators";
import { connect } from "react-redux";


const LogRegForm = (props)=>
{

    let onClickhandler =()=>
    {

            props.dispatch(pageChangesAC());
    };

    return(

        <div className={LogRegFormCss.LogRegForm}>


            <Route exact path="/login" component={LoginForm} />
            <Route path="/register" component={RegistrationForm} />
            <label>{((props.pagePointer)==='/login')?'Already Registered?':'Are you here for the First time?'}</label>
            <NavLink to={props.pagePointer}> <button onClick={onClickhandler}>{(props.pagePointer)==='/login'?'Log in':'Sign Up'}</button></NavLink>


        </div>

    );



};




export default connect((store)=>{return store})(LogRegForm);




