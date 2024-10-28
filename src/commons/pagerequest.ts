import { OrderBy } from './orderby';
import { Sort } from "./sort";

export class PageRequest<T>{
    page:number
    size:number
    sort: Sort
    searchTerms:string
    orderBy: OrderBy<T>
    constructor(orderBy: OrderBy<T>, searchTerms: string = '', page:number = 0, size: number = 10, sort:Sort = Sort.ASC){
        this.page = page < 0 ? 0: page;
        this.size = size < 1 ? 1: size;
        this.sort = sort;
        this.searchTerms=  searchTerms || '';
        this.orderBy = orderBy;
    }
}