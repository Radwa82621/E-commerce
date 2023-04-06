export interface Product {
    imageCover:string
    price:number
    title:string
    category:Category
    description:string
    ratingsAverage:number
    id:string
    images:string[]

}
interface Category{
    name:string

}
