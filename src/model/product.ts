
export class Product {
    id: number | null = null;
    title: string | null = null;
    category: string | null = null;
    price: number | null = null;
    image: string | null = null;
    rating: Rateobj | null = null;

    constructor(item?:Product)
    {
        if(item)  
             this.deserialize(item)     
    }
    private deserialize(item:any)
    {
        for(let key of Object.keys(item))
        {
            if(key=="rating")
            {
                this.rating=new Rateobj(item[key])
            }
            else
            {
                (this as any)[key]=item[key]
            }
        }
    }
}
export class Rateobj {
    rate: number | null = null;
    count: number | null = null;

    constructor(item?:Rateobj)
    {
        if(item)  
             this.deserialize(item)     
    }
    private deserialize(item:any)
    {
        for(let key of Object.keys(item))
        {
            if(key)
            {
                (this as any)[key]=item[key]
            }
           
        }
    }

}