import {
    logIn,
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
    EmailInputExc: "", PassInputExc: "", ConfirmPassExc: "", NameInputExc: "",passInputType:"Text",confirmPassInputType:"Text"
}, action) => {
    switch (action.type) {
        case usRNameTextChange:
            return Object.assign({}, state, {regUserName: action.payload}, {NameInputExc: nameValidator(action.payload)});
        case usREmailTextChange:
            return Object.assign({}, state, {regUserEmail: action.payload}, {EmailInputExc: emailValidator(action.payload)});
        case usRPassTextChange:
            return Object.assign({}, state, {regUserPassword: action.payload}, {PassInputExc: passwordValidator(action.payload)},{passInputType:"Password"},
                {ConfirmPassExc: (state.regUserConfirmPass === action.payload) ? "" : "* Passwords don't matches!"});
        case usRPassConfirmTextChange:
            return Object.assign({}, state, {regUserConfirmPass: action.payload},{confirmPassInputType:"Password"},{ConfirmPassExc: (state.regUserPassword === action.payload) ? "" : "* Passwords don't matches!"});
        default:
            return state
    }
};

const logInReducer =(state={submitExc:""},action) =>
{

    if(action.type===logIn) {
        if (action.payload.userEmail === "")
        {
            return Object.assign({}, state, {submitExc: "* Email is not typed!"});
        }
        else if (action.payload.userPass ==="")
        {
            return Object.assign({}, state, {submitExc:"* Password is not typed!"});
        }
        else{
            return Object.assign({}, state, {submitExc:""});
        }
        }
    return state;
};




export const rootReducer = {
    pageState: pageReducer,
    loginPageInputState: loginInputsReducer,
    registrationPageInputState: registerInputsReducer,
    loginButton:logInReducer
}