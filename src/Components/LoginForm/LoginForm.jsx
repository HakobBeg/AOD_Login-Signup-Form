import React from 'react'
import LoginCss from './LoginForm.module.css'
import { connect } from "react-redux";



const LoginForm = (props)=>
{

  return(
      <div className={LoginCss.Login}>
          <label>Log in</label>
          <input/>

          <input/>

          <button>Log In</button>
      </div>

  );


};


const mapStateToProps = (state)=>{return state.pagePointer};

export default connect(mapStateToProps)(LoginForm);
