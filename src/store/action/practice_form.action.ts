import { ActionCreator } from "redux";
import { GET_PRACTICE_FORM, PracticeFormValid } from "../type/practice_form.types";
import { PracticeForm } from "@/model/practice_form";

export const setUserDetails:ActionCreator<PracticeFormValid>=(payload:PracticeForm)=>{
    return{
        type:GET_PRACTICE_FORM,
        payload:payload,
      }
}


