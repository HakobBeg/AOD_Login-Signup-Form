import {
    pageTurner,
    usLEmailTextChange,
    usLPassTextChange,
    usREmailTextChange,
    usRNameTextChange,
    usRPassConfirmTextChange, usRPassTextChange
} from '../Constants'
import { emailValidator } from "../Validators";


export const pageReducer = (state={pagePointer:'/login'},action)=>
{
    switch(action.type)
    {
        case pageTurner:
            return Object.assign({},state,{pagePointer:(state.pagePointer==='/register')?'/login':'/register'});
        default:
            return state;
    }

};



export const loginInputsReducer = (state={userEmail:'E-Mail or Phone',userPassword:'Password',inputType:'Text'},action) =>
{
    switch (action.type) {
        case usLEmailTextChange:
            return Object.assign({},state,{userEmail:action.payload});
        case usLPassTextChange:
            return Object.assign({},state,{userPassword:action.payload, inputType: 'Password'});
        default:
            return state
    }
};



export const registerInputsReducer = (state={regUserEmail:'E-Mail or Phone',regUserPassword:'Password',regUserConfirmPass:'Confirm Password',regUserName:'UserName'},action) =>
{
    switch (action.type) {
        case usRNameTextChange:
            return Object.assign({},state,{regUserName:action.payload});
        case usREmailTextChange:
            return Object.assign({},state,{regUserEmail:action.payload});
        case usRPassTextChange:
            return Object.assign({},state,{regUserPassword:action.payload});
        case usRPassConfirmTextChange:
            return Object.assign({},state,{regUserConfirmPass:action.payload});
        default:
            return state
    }
};





export const rootReducer = {
    pageState:pageReducer,
    loginPageInputState:loginInputsReducer,
    registrationPageInputState:registerInputsReducer
}