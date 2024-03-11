export class PracticeForm{
    email:string|null=null;
    age:number|null=null;

    constructor(item?: PracticeForm) {
        if (item)
            this.deserialize(item)
    }
    private deserialize(item: any) {
        for (let key of Object.keys(item)) {
            (this as any)[key] = item[key]
        }
    }
}