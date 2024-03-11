import { PracticeForm } from "@/model/practice_form"

export const GET_PRACTICE_FORM="GET_PRACTICE_FORM"


interface PracticeFormData{
    type:typeof GET_PRACTICE_FORM
    payload:PracticeForm
}



export type PracticeFormValid = PracticeFormData