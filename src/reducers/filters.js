const filterReducerDefaultState = {
  text: '',
  sortBy: '',
  startYear: null,
  endYear: null
};

export default (state = filterReducerDefaultState, action) => {
  switch(action.type) {
    case 'FILTER_TEXT':
      return {
        ...state,
        text: action.text
      };
    case 'START_YEAR':
      return {
        ...state,
        startYear: action.startYear
      };
    case 'END_YEAR':
      return {
        ...state,
        endYear: action.endYear
      }
    case 'CLEAR':
      return {
        ...state,
        text: action.defaultFilter.text,
        sortBy: action.defaultFilter.sortBy,
        startYear: action.defaultFilter.startYear,
        endYear: action.defaultFilter.endYear
      };
    default:
      return state;
  }
}