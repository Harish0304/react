import { ObjectUtil } from "@/utils/ObjectUtil";

export class Newproduct {
    results: Array<ResObj> | null = null;
    info: InfoObj | null = null;
    constructor(data?: any) {
        if (data)
            this.deserialize(data)
    }

    private deserialize(data: any) {
        const keys = Object.keys(this);

        for (const key of keys) {
            if (data.hasOwnProperty(key)) {
                switch (key) {
                    case "results":
                        (this as any)[key] = ObjectUtil.renderArray<ResObj>(
                            (data as any)[key]!,
                            ResObj
                        );
                        break;
                    case "info":
                        this.info = new InfoObj(data[key])

                    default:
                        (this as any)[key] = (data as any)[key];
                }
            }
        }
    }
}

export class InfoObj {
    seed: string | null = null;
    results: string | null = null;
    page: number | null = null;

    constructor(data?: any) {
        if (data) this.deserialization(data);
    }
    public deserialization(data: any) {
        for (let key of Object.keys(data)) {
            (this as any)[key] = data[key];
        }
    }
}

export class ResObj {
    gender: string | null = null;
    name: NameObj | null = null;
    location: LocObj | null = null;
    email: String | null = null;
    login: LogObj | null = null;
    dob: DobObj | null = null;
    registered: RegObj | null = null;
    phone: string | null = null;
    cell: string | null = null;
    picture: PicObj | null = null;

    constructor(data?: any) {
        if (data) {
            this.deserialize(data);
        }
    }

    private deserialize(data: any) {
        const keys = Object.keys(this);

        for (const key of keys) {
            if (data.hasOwnProperty(key)) {
                switch (key) {
                    case "name":
                        this.name = new NameObj(data[key])
                        break;
                    case "location":
                        this.location = new LocObj(data[key])
                        break;
                    case "login":
                        this.login = new LogObj(data[key])
                        break;
                    case "dob":
                        this.dob = new DobObj(data[key])
                        break;
                    case "registered":
                        this.registered = new RegObj(data[key])
                        break;
                    case "picture":
                        this.picture = new PicObj(data[key])
                        break;

                    default:
                        (this as any)[key] = (data as any)[key];
                }
            }
        }
    }
    getResults()
    {
        this.gender! +" "+this.email! + " " +this.cell! +" "+ this.phone !
    }
}

export class NameObj {
    title: string | null = null;
    first: string | null = null;
    last: string | null = null;
    constructor(data?: any) {
        if (data) {
            this.deserialization(data);
        }
    }
    public deserialization(data: any) {
        for (let key of Object.keys(data)) {
            (this as any)[key] = data[key];
        }
    }
    getName(){
        return this.title! +"   "+ this.first! +" "+ this.last!
    }
}
export class LocObj {
    street: StreetObj | null = null;
    city: string | null = null;
    state: String | null = null;
    country: string | null = null;
    postcode: number | null = null;
    timezone: TimeZObj | null = null;
    constructor(data?: any) {
        if (data)
            this.deserialize(data)
    }

    private deserialize(data: any) {
        const keys = Object.keys(this);

        for (const key of keys) {
            if (data.hasOwnProperty(key)) {
                switch (key) {
                    case "street":
                        this.street = new StreetObj(data[key])
                        break;
                    case "timezone":
                        this.timezone = new TimeZObj(data[key])
                        break;
                    default:
                        (this as any)[key] = (data as any)[key];
                }
            }
        }
    }
    getLocation(){
        return  this.street +" "+ this.city! +" "+  this.state! +" "+ this.country! +" "+this.postcode +" "+" "+ this.timezone!
    }

}

export class DobObj {
    date: string | null = null;
    age: string | null = null;
    constructor(data?: any) {
        if (data) {
            this.deserialization(data);
        }
    }
    public deserialization(data: any) {
        for (let key of Object.keys(data)) {
            (this as any)[key] = data[key];
        }
    }
    getDOB(){
         return this.age! +" "+ this.date!
    }
}
export class RegObj {
    date: string | null = null;
    age: string | null = null;
    constructor(data?: any) {
        if (data) {
            this.deserialization(data);
        }
    }
    public deserialization(data: any) {
        for (let key of Object.keys(data)) {
            (this as any)[key] = data[key];
        }
    }
    getRegistered(){
        this.age !+" "+this.date!
    }
}

export class LogObj {
    username: string | null = null;
    password: string | null = null;

    constructor(data?: any) {
        if (data) {
            this.deserialization(data);
        }
    }
    public deserialization(data: any) {
        for (let key of Object.keys(data)) {
            (this as any)[key] = data[key];
        }
    }
    getLogin(){
        this.username! +" "+this.password!
    }
}



export class PicObj {
    large: string | null = null;
    medium: string | null = null;
    thumbnail: String | null = null;
    constructor(data?: any) {
        if (data)
            this.deserialization(data)
    }
    public deserialization(data: any) {
        for (let key of Object.keys(data)) {
            (this as any)[key] = data[key];
        }
    }
    getPicture()
    {
        this.medium! +" "+ this.large!  +" "+ this.thumbnail!
    }

}

export class StreetObj {
    number: number | null = null;
    name: string | null = null;
    constructor(data?: any) {
        if (data) {
            this.deserialization(data);
        }
    }
    public deserialization(data: any) {
        for (let key of Object.keys(data)) {
            (this as any)[key] = data[key];
        }
    }
    getStreet()
    {
        this.name!+" "+this.number!
    }
}

export class TimeZObj {
    offset: string | null = null;
    desciption: string | null = null;
    constructor(data?: any) {
        if (data) {
            this.deserialization(data);
        }
    }
    public deserialization(data: any) {
        for (let key of Object.keys(data)) {
            (this as any)[key] = data[key];
        }
    }
    getTimezone()
    {
        this.offset! +" "+this.desciption!
    }
}