import {

    CREATE_TODO,
    EDIT_TODO,
    DELETE_TODO
} from '../action/types';
import _ from "lodash";




export default (state={} ,action) =>{
    switch(action.type){
    
       
   
           
        case EDIT_TODO:
           
            return {...state,[action.payload.id]:action.payload}
        
        case DELETE_TODO:
            return _.omit(state,action.payload)
            
        case CREATE_TODO:
            
            return {...state,[action.payload.id]:action.payload}

        default:
            
            return state;
           
    }
}