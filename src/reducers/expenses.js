//initial state
const expenseInitialState = []


//Reducer function
export default (state=expenseInitialState, action) => {
    switch(action.type){
  
      //ADD EXPENSE
      case 'add_expense':
        return [...state, action.expense];
  
      //REMOVE EXPENSE
      case 'remove_expense':
        return state.filter(({ id }) => id !== action.id)  //destructuring id from expense object
      
      //EDIT EXPENSE
      case 'edit_expense':
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
      
      default:
        return state
    }
  };


