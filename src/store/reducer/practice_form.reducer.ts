import cloneDeep from "lodash/cloneDeep";
import { PracticeFormInitialState, PracticeFormState } from "../state/practice_form.state";
import { GET_PRACTICE_FORM, PracticeFormValid } from "../type/practice_form.types";

export default function PracticeFormReducer(
    state:PracticeFormState=PracticeFormInitialState,
    action:PracticeFormValid
):PracticeFormState{
    switch(action.type){
        case GET_PRACTICE_FORM:{
            return{
                ...state,
                myform:cloneDeep(action.payload),
            }
        }
        
        default:
            return state;

    }
}