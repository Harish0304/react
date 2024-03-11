import cloneDeep from "lodash/cloneDeep";
import { UserFormInitialState, UserFormState } from "../state/user_form.state";
import { FormdataValid, GET_FORMS_BY_USER, GET_Phone_BY_USER,REMOVE_DATA } from "../type/userForm.types";



export default function UserFormReducer(
    state: UserFormState = UserFormInitialState,
    action: FormdataValid
): UserFormState {
    switch (action.type) {
        case GET_FORMS_BY_USER: {
            return {
                ...state,
                name: cloneDeep(action.payload),
            }
        }
        case GET_Phone_BY_USER: {
            return {
                ...state,
                phone: cloneDeep(action.payload),
            }
        }
        case REMOVE_DATA: {
            return UserFormInitialState
        }
        default:
            return state;
    }
}
