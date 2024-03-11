import cloneDeep from "lodash/cloneDeep";
import { AddProductInitalState, AddProductState } from "../state/addproduct.state"
import { AddProductValid, GET_ADD_PRODUCT } from "../type/addproduct.types";

export default function AddProductReducer(
    state: AddProductState = AddProductInitalState,
    action: AddProductValid
): AddProductState{
    switch (action.type) {
        case GET_ADD_PRODUCT: {
            return {
                ...state,
                myproduct:cloneDeep(action.payload),
            }
        }
        default:
            return state;
    }
}