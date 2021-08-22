export class Product {
   constructor(public product_id: string,
               public name: string,
               public image: string,
               public shiping: string,
               public quantity: number,
               public fraction: number,
               public cents: number) {
    }
}