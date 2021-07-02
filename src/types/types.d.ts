type CssValue =  string | number

type Style = {
  [cssProperties: string]: CssValue
}

type Cell = {
  status: boolean,
  id: number 
}

type Row = [] | Cell[]
type Board = [] | Row[]

type Empty = null | undefined