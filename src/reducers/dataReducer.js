import {
    CREATE_USER,
    EDIT_USER,
    DELETE_USER,

} from '../action/types';
import _ from "lodash";


export default (state={} ,action) =>{
    switch(action.type){
    
        
        case CREATE_USER:
            // console.log(state)
            return {...state,[action.payload.id]:action.payload}
            // return {...state,..._.mapKeys(action.payload,"id")};
        case EDIT_USER:
            console.log(action.payload)
            console.log(state)
            return {...state,[action.payload.id]:action.payload}
        
        case DELETE_USER:
            return _.omit(state,action.payload)
            
        
        default:
            
            return state;
            // return {...state,[action.payload.id]:action.payload}
    }
}