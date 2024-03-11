import { Form } from "@/model/form";
export const GET_FORMS_BY_USER = " GET_FORMS_BY_USER";
export const GET_Phone_BY_USER = " GET_Phone_BY_USER";
export const REMOVE_DATA = " REMOVE_DATA";

interface NameData {
    type: typeof GET_FORMS_BY_USER
    payload: string
}

interface Phonedata {
    type: typeof GET_Phone_BY_USER
    payload: number
}
interface RemoveData {
    type: typeof REMOVE_DATA
    payload: boolean;
}
export type FormdataValid = NameData | Phonedata | RemoveData