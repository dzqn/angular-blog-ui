import { Category } from './category';

export class Post{
    id:number;
    title:String;
    body:string;
    category:Category = new Category();
    isActive:boolean;
}