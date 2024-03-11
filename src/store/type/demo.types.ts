import { Form } from "@/model/form";
export const GET_FORMS_BY_USER = " GET_FORMS_BY_USER";

interface Formdata {
    type: typeof GET_FORMS_BY_USER
    payload: Form

}

export type FormdataValid = Formdata