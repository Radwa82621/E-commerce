import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../interface/product';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(products: Product[], term: string): Product[] {
    return products.filter((Product)=> Product.title.toLowerCase().includes(term.toLowerCase()))
  }

}
