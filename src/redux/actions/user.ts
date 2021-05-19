import * as types from "../types/user";
import { IUser } from './../../interfaces/IUser';

export const addUser= (user: IUser) => {
  return{
    type:types.USER_ADD_SUCCESS,
    payload:user
  }
}

export const editUser=(user: IUser)=>{
  return{
    type:types.USER_EDIT_SUCCESS,
    payload:user
  }
}

export const deleteUser=(userId: string|number)=>{
  return{
    type:types.USER_DELETE_SUCCESS,
    payload: userId
  }
}

export const sortByUser =()=>{
  return{
    type:types.USER_SORT_SUCCESS,
  }
}