//initial state
const expenseInitialState = []


//Reducer function
export default (state=expenseInitialState, action) => {
    switch(action.type){
  
      //ADD EXPENSE
      case 'ADD_EXPENSE':
        return [...state, action.expense];
  
      //REMOVE EXPENSE
      case 'REMOVE_EXPENSE':
        return state.filter(({ id }) => id !== action.id)  //destructuring id from expense object
      
      //EDIT EXPENSE
      case 'EDIT_EXPENSE':
        return state.map((expense) => {
          if(expense.id === action.id){  //only process if ID matches to existing object
            return {
              ...expense,
              ...action.updates //overwrites expense object literals with new object literals
            }
            }else{
              return expense
          }
        })

      //SET EXPENSE
      case 'SET_EXPENSE':
        return action.expenses
      
      default:
        return state
    }
  };


