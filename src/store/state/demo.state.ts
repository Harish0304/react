import { Form } from "@/model/form";


export interface NewFormState{
      myform:Form;
}

export const NewFormInitialState: NewFormState={
    myform: new Form()
}