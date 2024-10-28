import { Pageable } from './pageable';

export class Page<T> implements Pageable<T> {
  content: T[];
  empty: boolean;
  first: boolean;
  last: boolean;
  number: number;
  numberOfElements: number;
  size: number;
  totalElements: number;
  totalPages: number;
  hasNext: boolean;
  hasPrevious: boolean;

  constructor(content: T[], page: number, size: number, totalElements: number) {
    this.content = content;
    this.size = size;
    this.number = page;
    this.numberOfElements = content.length;
    this.totalElements = totalElements;
    this.totalPages = Math.ceil(totalElements / size);
    this.first = page === 0;
    this.last = (page + 1) * size >= totalElements;
    this.hasNext = !this.last;
    this.hasPrevious = !this.first;
    this.empty = content.length === 0;
  }
}
