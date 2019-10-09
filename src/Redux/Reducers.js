import {pageTurner} from '../Constants'

export const pageHandler = (state={pagePointer:'/login'},action)=>
{
    switch(action.type)
    {
        case pageTurner:
            return Object.assign({},state,{pagePointer:(state.pagePointer==='/register')?'/login':'/register'});
        default:
            return state;
    }

}