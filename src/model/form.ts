import { ObjectUtil } from "@/utils/ObjectUtil"

export class Form {
    name: string | null = null;
    profession: string | null = null;
    date: string | null = null;
    description: string | null = null;
    phone: number | null = null;
    gender: string | null = null;
    age: number | null = null;
    email: string | null = null;

    constructor(item?: Form) {
        if (item)
            this.deserialize(item)
    }
    private deserialize(item: any) {
        for (let key of Object.keys(item)) {
            (this as any)[key] = item[key]
        }
    }
    checkValid() {
        return this.checkName() && this.checkPhone() && this.checkAge() && this.checkGender() && this.checkEmail() && this.checkDescription();
    }

    checkName() {
        return this.name && this.name.length >= 4
    }
    checkPhone() {
        return this.phone && /^\d{10}$/.test(this.phone.toString()) && this.phone?.toString()?.length == 10
    }
    checkAge() {
        return this.age && this.age >= 18 && this.age <= 50
    }
    checkGender() {
        return this.gender
    }
    checkEmail() {
        return this.email && /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(this.email)
    }
    checkDescription() {
        return this.description && this.description.split('\n').length >= 2;
    }


}