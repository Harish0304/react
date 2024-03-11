import { ActionCreator } from "redux";
import { FormdataValid, GET_FORMS_BY_USER } from "../type/demo.types";
import { Form } from "@/model/form";

export const setFormdataValidToReducer:ActionCreator<FormdataValid >=
    (data:Form)=>{
      return{
        type:GET_FORMS_BY_USER,
        payload:data,
      }
    }
