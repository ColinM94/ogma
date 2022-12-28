export interface ListControl<T> {
  key: keyof T
  label: string
  /** Allow sorting by this value. Default: false. */
  sort?: boolean
  /** Allow filtering by this value. Default: false. */
  filter?: boolean
  /** Allow searching by this value. Default: false.*/
  search?: boolean
}

export type ListItem<T> = T
