import {
    CREATE_USER,
    EDIT_USER,
    DELETE_USER,
    CREATE_TODO,
    EDIT_TODO,
    DELETE_TODO,
    GET_USER_LIST
} from './types';


export const getuser = ()=>{
    return {
        type:GET_USER_LIST
    }
}

export const createUser =(createdUser)=>{
   
    return {
        type:CREATE_USER,
        payload:createdUser
    };
}

export const editUser =(editedUser)=>{
    
    return {
        type:EDIT_USER,
        payload:editedUser
    };
}

export const deleteUser =(id)=>{
    
    return {
        type:DELETE_USER,
        payload:id
    };
}

export const createtoDo =(createdToDo)=>{
    
    return {
        type:CREATE_TODO,
        payload:createdToDo
    };
}

export const edittoDo =(editedTodo)=>{
   
    return {
        type:EDIT_TODO,
        payload:editedTodo
    };
}

export const deletetoDo =(id)=>{
   
    return {
        type:DELETE_TODO,
        payload:id
    };
}