import { NewFormInitialState, NewFormState } from "../state/demo.state";
import { FormdataValid, GET_FORMS_BY_USER } from "../type/demo.types";
import cloneDeep from "lodash/cloneDeep";


export default function DemoReducer(
    state:NewFormState=NewFormInitialState,
    action:FormdataValid
):NewFormState{
    switch(action.type)
    {
       case GET_FORMS_BY_USER:{
        return{
            ...state,
            myform:cloneDeep(action.payload),
        }
       }
      
       default:
        return state;
    }
}
export type UserFormState=ReturnType< typeof DemoReducer>;