import { Add_Product } from "@/model/addproduct"

export interface AddProductState{
    myproduct:Add_Product
}

export const  AddProductInitalState:AddProductState={
    myproduct:new Add_Product()
}