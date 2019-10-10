import {
    logIn,
    pageTurner, register,
    usLEmailTextChange,
    usLPassTextChange,
    usREmailTextChange, usRNameTextChange,
    usRPassConfirmTextChange, usRPassTextChange
} from "../Constants";

//login page input actions
export const pageChangesAC = ()=>{return {type:pageTurner}};
export const userEmailTextChanges = (text)=>{return {type:usLEmailTextChange , payload:text}};
export const userPassTextChanges = (text)=>{return {type:usLPassTextChange,payload:text}};

//registration page input actions
export const userRegisterEmailTextChanges =(text)=>{return {type:usREmailTextChange , payload:text}};
export const userRegisterPassTextChanges =(text)=>{return {type:usRPassTextChange , payload:text}};
export const userRegisterConfirmPassTextChanges =(text)=>{return {type:usRPassConfirmTextChange, payload:text}};
export const userRegisterNameTextChanges =(text)=>{return {type:usRNameTextChange, payload:text}};

//logIn actionCreator
export const UserLogIn =(mail,pass)=>{return {type:logIn,payload:{userEmail:mail,userPass:pass}}};


//SignUp actionCreator
export const UserSignUp =()=>{return {type:register}};

