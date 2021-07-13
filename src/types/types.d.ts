export type CssValue =  string | number

export type Style = {
  [cssProperties: string]: CssValue
}

export type Cell = {
  status: boolean,
  id: number 
}

export type Row = [] | Cell[]
export type Board = [] | Row[]

export type Empty = null | undefined