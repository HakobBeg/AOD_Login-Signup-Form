import {
    languageChangeAction,
    loaderOffAction,
    loaderOnAction,

    pageTurner,
    usLEmailTextChange,
    usLPassTextChange,
    usREmailTextChange,
    usRNameTextChange,
    usRPassConfirmTextChange, usRPassTextChange
} from '../Constants'
import { emailValidator, nameValidator, passwordValidator } from "../Validators";


export const pageReducer = (state = {pagePointer: '/register'}, action) => {
    switch (action.type) {
        case pageTurner:
            return Object.assign({}, state, {pagePointer: (state.pagePointer === '/register') ? '/login' : '/register'});
        default:
            return state;
    }

};


export const loginInputsReducer = (state = {
    userEmail: 'E-Mail or Phone',
    userPassword: 'Password',
    inputType: 'Text',
    isEmailInputEmpty:false,
    isPassInputEmpty:false
}, action) => {
    switch (action.type) {
        case usLEmailTextChange:
            return Object.assign({}, state, {userEmail: action.payload},{isEmailInputEmpty:(action.payload==="")});
        case usLPassTextChange:
            return Object.assign({}, state, {userPassword: action.payload, inputType: 'Password'},{isPassInputEmpty:(action.payload==="")});
        default:
            return state
    }
};


export const registerInputsReducer = (state = {
    regUserEmail: 'E-Mail or Phone', regUserPassword: 'Password',
    regUserConfirmPass: 'Confirm Password', regUserName: 'UserName',
    EmailInputExc: "", PassInputExc: "", ConfirmPassExc: "", NameInputExc: "",passInputType:"Text",confirmPassInputType:"Text",globalExc:""
}, action) => {
    switch (action.type) {
        case usRNameTextChange:{
            const expt = nameValidator(action.payload);
            return Object.assign({}, state, {regUserName: action.payload}, {NameInputExc: expt},{globalExc:(expt==="")?"":expt});}
        case usREmailTextChange:{
            const expt = emailValidator(action.payload);
            return Object.assign({}, state, {regUserEmail: action.payload}, {EmailInputExc: expt},{globalExc:(expt==="")?"":expt});}
        case usRPassTextChange:{
            const expt = passwordValidator(action.payload);
            return Object.assign({}, state, {regUserPassword: action.payload}, {PassInputExc: expt},{passInputType:"Password"},{globalExc:(expt==="")?"":expt},
                {ConfirmPassExc: (state.regUserConfirmPass === action.payload) ? "" : "* Passwords don't matches!"},{globalExc:(state.regUserConfirmPass === action.payload) ? "" : "* Passwords don't matches!"})}
        case usRPassConfirmTextChange:
            return Object.assign({}, state, {regUserConfirmPass: action.payload},{confirmPassInputType:"Password"},{ConfirmPassExc: (state.regUserPassword === action.payload) ? "" : "* Passwords don't matches!"},
                {globalExc:(state.regUserConfirmPass === action.payload) ? "" : "* Passwords don't matches!"});
        default:
            return state
    }
};

export const loaderReducer =(state = {loaderFlag:false},action)=>{
    switch (action.type) {
        case loaderOnAction:
            return Object.assign({},state,{loaderFlag:true});
        case loaderOffAction:
            return Object.assign({},state,{loaderFlag:false});
        default:
            return state;
    }
};

export const languageChangeReducer = (state = {languageSet:"en"},action)=>
{
    switch (action.type) {
        case languageChangeAction:
            return Object.assign({},state,{languageSet: action.payload});
        default:
            return state;
    }
};



export const rootReducer = {
    pageState: pageReducer,
    loginPageInputState: loginInputsReducer,
    registrationPageInputState: registerInputsReducer,
    loaderFlagState:loaderReducer,
    languageState:languageChangeReducer,
};