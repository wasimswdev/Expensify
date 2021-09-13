//Initial state
const filterInitialState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  }


//Filter Reducer function
const filterReducer = (state=filterInitialState, action) => {
    switch(action.type){
      case 'SET_TEXT':
        return {
          ...state,
          text: action.text  //overwriting only text property value
        }
  
      case 'SORT_BY_AMOUNT':
        return {
          ...state,
          sortBy: 'amount'
        }
  
      case 'SORT_BY_DATE':
        return {
          ...state,
          sortBy: 'date'
        }
  
      case 'setStartDate':
        return {
          ...state,
          startDate: action.startDate
        }
  
      case 'setEndDate':
        return {
          ...state,
          endDate: action.endDate
        }
  
      default:
        return state
    }
  }
  
export default filterReducer