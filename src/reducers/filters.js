//Initial state
const filterInitialState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  }


//Filter Reducer function
export default (state=filterInitialState, action) => {
    switch(action.type){
      case 'set_text':
        return {
          ...state,
          text: action.text  //overwriting only text property value
        }
  
      case 'sort_by_amount':
        return {
          ...state,
          sortBy: 'amount'
        }
  
      case 'sort_by_date':
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
  
