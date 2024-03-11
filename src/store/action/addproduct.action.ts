import { ActionCreator } from "redux";
import { AddProductValid, GET_ADD_PRODUCT } from "../type/addproduct.types";
import { Add_Product } from "@/model/addproduct";

export const setProductDetils:ActionCreator<AddProductValid>=(payload:Add_Product)=>{
    return{
        type:GET_ADD_PRODUCT,
        payload:payload ,
    }
}