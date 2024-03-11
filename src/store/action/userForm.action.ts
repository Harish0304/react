import { ActionCreator } from "redux";
import { FormdataValid, GET_FORMS_BY_USER, GET_Phone_BY_USER,REMOVE_DATA } from "../type/userForm.types";

export const setUserName: ActionCreator<FormdataValid> = (payload) => {
  return {
    type: GET_FORMS_BY_USER,
    payload: payload,
  }
}
export const setUserPhone:ActionCreator<FormdataValid>=(payload)=>{
  return{
      type:GET_Phone_BY_USER,
      payload:payload,

    }
  }
  export const resetForm:ActionCreator<FormdataValid>=(payload)=>{
    return{
        type:REMOVE_DATA,
        payload:payload,
  
      }
    }