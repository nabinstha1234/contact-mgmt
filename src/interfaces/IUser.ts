interface IAddress{
    city:string;
    district:string;
    province:string;
    country:string;
}

export interface IUser{
    id:string|number;
    name:string;
    email:string;
    phone_number:string;
    date_of_birth:any;
    address:IAddress;
}