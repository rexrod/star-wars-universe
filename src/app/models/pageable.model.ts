import { Sort } from "./sort.model"

export class Pageable {
    offset: number
    pageNumber: number
    pageSize: number
    paged: true
    sort: Sort
    unpaged: false
  }