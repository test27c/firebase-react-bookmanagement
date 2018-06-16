export const filterText = (text = '') => ({
  type: 'FILTER_TEXT',
  text
})

export const startYear = startYear => ({
  type: 'START_YEAR',
  startYear
})

export const endYear = endYear => ({
  type: 'END_YEAR',
  endYear
})

export const sortBy = sortType => ({
  type: 'SORT_BY',
  sortType
})

const filtersReducerDefaultState = {
  text: '',
  sortBy: '',
  startYear: null,
  endYear: null
}

export const clear = () => ({
  type: 'CLEAR',
  defaultFilter: filtersReducerDefaultState
})