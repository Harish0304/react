import { ObjectUtil } from "@/utils/ObjectUtil"

export class artist {

id: string | null = null
name: string | null = null
shortId: string | null = null
image: img | null = null
    description: string | null = null
    accolades: string | null = null
    eventObjs: Array<event> | null = null

    constructor(data?: artist) {
        if (data) {
            this.deserialize(data)
        }
    }
    private deserialize(data: any) {
        for (let key of Object.keys(data)) {
            if (key == "image") {
                this.image = new img(data[key])
            }
            else if (key == "eventObjs") {
                (this as any)[key] = ObjectUtil.renderArray<event>(
                    (data as any)[key]!,
                    event)

            }
            else {
                (this as any)[key] = data[key]
            }
        }
    }
    getArt()
    {
        this.name! + " "+this.id! +" "+this.image! +" " +this.description!
    }
}
export class event {
    id: string | null = null
    source: sourceobj | null = null
    location: locobj | null = null
    thumbnail: thuobj | null = null
    eventsortcode: string | null = null
    pictures: Array<pic> | null = null

    constructor(data?: artist) {
        if (data) {
            this.deserialize(data)
        }
    }
    private deserialize(data: any) {
        for (const key of Object.keys(data)) {
            if (data.hasOwnProperty(key)) {
                switch (key) {
                    case "source":
                        this.source = new sourceobj(data[key])
                        break;
                    case "location":
                        this.location = new locobj(data[key])
                        break;
                    case "thumbnail":
                        this.thumbnail = new thuobj(data[key])
                        break;
                    case "pictures":
                        (this as any)[key] = ObjectUtil.renderArray<pic>(
                            (data as any)[key]!,
                            pic)        
                        break;
                    default:
                        (this as any)[key] = data[key]
                }
            }
        }
    }
     getEvent(){
        this.id! +" "+this.eventsortcode!
     }
}
export class sourceobj {
    id: string | null = null
    type: string | null = null

    constructor(data?: artist) {
        if (data) {
            this.deserialize(data)
        }
    }
    private deserialize(data: any) {
        for (let key of Object.keys(data)) {
            (this as any)[key] = data[key]
        }
    }
    getSource(){
        this.id! +" "+this.type!
    }
}
export class locobj {
    name: string | null = null
    gmapPlaceId: string | null = null
    geometry:geo|null=null
    address:add|null=null
    constructor(data?: artist) {
        if (data) {
            this.deserialize(data)
        }
    }
    private deserialize(data: any) {
        for (let key of Object.keys(data)) {
            if(key="geometry")
            {
                this.geometry= new geo(data[key])
            }
            else if(key="address")
            {
                this.address= new add(data[key])
            }
            else{
            (this as any)[key] = data[key]
            }
        }
    }
    getloc()
    {
        this.name! +" "+this.gmapPlaceId! 
    }
}
export class geo{
    location:loc|null=null
    constructor(data?: artist) {
        if (data) {
            this.deserialize(data)
        }
    }
    private deserialize(data: any) {
        for (let key of Object.keys(data)) {
            (this as any)[key] = data[key]
        }
    }
    getGeo()
    {
        this.location?.lat! +" "+this.location?.long!
    }

}
export class loc{
    lat:number|null=null
    long:number|null=null
    constructor(data?: artist) {
        if (data) {
            this.deserialize(data)
        }
    }
    private deserialize(data: any) {
        for (let key of Object.keys(data)) {
            (this as any)[key] = data[key]
        }
    }
}
export class add{
    area:ar|null=null
    city:ci|null=null
    postal_code:pc|null=null
    country:con|null=null
    state:st|null=null

    constructor(data?: artist) {
        if (data) {
            this.deserialize(data)
        }
    }
    private deserialize(data: any) {
        for (let key of Object.keys(data)) {
            if(key="area")
            {
                this.area= new ar(data[key])
            }
            else if(key="city")
            {
                this.city= new ci(data[key])
            }
            else if(key="postal_code")
            {
                this.postal_code= new pc(data[key])
            }
            else if(key="country")
            {
                this.country= new con(data[key])
            }
            else if(key="state")
            {
                this.state= new st(data[key])
            }
            else{
            (this as any)[key] = data[key]

        }
    }
    }

}
export class ar{
    long_name:string|null=null
    short_name:string|null=null
    type:string|null=null
    constructor(data?: artist) {
        if (data) {
            this.deserialize(data)
        }
    }
    private deserialize(data: any) {
        for (let key of Object.keys(data)) {
            (this as any)[key] = data[key]
        }
    }
}
export class ci{
    long_name:string|null=null
    short_name:string|null=null
    type:string|null=null
    constructor(data?: artist) {
        if (data) {
            this.deserialize(data)
        }
    }
    private deserialize(data: any) {
        for (let key of Object.keys(data)) {
            (this as any)[key] = data[key]
        }
    }
}
export class st{
    long_name:string|null=null
    short_name:string|null=null
    type:string|null=null
    constructor(data?: artist) {
        if (data) {
            this.deserialize(data)
        }
    }
    private deserialize(data: any) {
        for (let key of Object.keys(data)) {
            (this as any)[key] = data[key]
        }
    }
}
export class con{
    long_name:string|null=null
    short_name:string|null=null
    type:string|null=null
    constructor(data?: artist) {
        if (data) {
            this.deserialize(data)
        }
    }
    private deserialize(data: any) {
        for (let key of Object.keys(data)) {
            (this as any)[key] = data[key]
        }
    }
}
export class pc{
    long_name:string|null=null
    short_name:string|null=null
    type:string|null=null
    constructor(data?: artist) {
        if (data) {
            this.deserialize(data)
        }
    }
    private deserialize(data: any) {
        for (let key of Object.keys(data)) {
            (this as any)[key] = data[key]
        }
    }
}
export class thuobj{
    id: string | null = null
    desktop: string | null = null
    mini: string | null = null
    phone: string | null = null

    constructor(data?: artist) {
        if (data) {
            this.deserialize(data)
        }
    }
    private deserialize(data: any) {
        for (let key of Object.keys(data)) {
            (this as any)[key] = data[key]
        }

    }
    
}
export class img {
    id: string | null = null
    desktop: string | null = null
    mini: string | null = null
    phone: string | null = null

    constructor(data?: artist) {
        if (data) {
            this.deserialize(data)
        }
    }
    private deserialize(data: any) {
        for (let key of Object.keys(data)) {
            (this as any)[key] = data[key]
        }

    }
}
export class pic{
    id: string | null = null
    desktop: string | null = null
    mini: string | null = null
    phone: string | null = null

    constructor(data?: artist) {
        if (data) {
            this.deserialize(data)
        }
    }
    private deserialize(data: any) {
        for (let key of Object.keys(data)) {
            (this as any)[key] = data[key]
        }

    }
}