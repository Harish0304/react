export interface UserFormState{
    name:string | null;
    phone:number |null;
}
export const UserFormInitialState: UserFormState={
    name:null,
    phone:null
}