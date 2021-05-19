import * as types from '../types/user';
import { IUser } from './../../interfaces/IUser';
interface IState{
  users:IUser[]|[]
}
const defaultState:IState={
  users:[],
}

const users = (state:any = defaultState, action: any) => {
  switch (action.type) {
    case types.USER_ADD_SUCCESS:
      return {...state,users:[...state.users, action.payload]}

    case types.USER_EDIT_SUCCESS:
      return {...state,users:state.users.map((user:IUser)=>user.id===action.payload.id?action.payload:user)}

    case types.USER_DELETE_SUCCESS:
      return {...state, users:state.users.filter((user:IUser)=>user.id!==action.payload)}
    
    case types.USER_SORT_SUCCESS:
      return {
        ...state,users:state.users.sort((first:IUser, second:IUser)=>(first.name>second.name)?1:((second.name>first.name)?-1:0))
      }

    default:
      return state;
  }
};


export default users;