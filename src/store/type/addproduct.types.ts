import { Add_Product } from "@/model/addproduct"

export const GET_ADD_PRODUCT="GET_ADD_PRODUCT"

interface AddProductData{
    type:typeof GET_ADD_PRODUCT
    payload:Add_Product
}

export type  AddProductValid = AddProductData