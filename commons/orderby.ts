export class OrderBy<T> {
    field: keyof T
    constructor(field: keyof T){
        this.field = field;
    }
}