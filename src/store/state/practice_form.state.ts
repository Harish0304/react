import { PracticeForm } from "@/model/practice_form"

export interface PracticeFormState{
    myform:PracticeForm
}

export const PracticeFormInitialState:PracticeFormState={
   myform:new PracticeForm()
}