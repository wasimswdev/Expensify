import {v4 as uuid4} from "uuid";


//ACTION GENERATORS
export const addExpense = ({description = '', note = '', amount = 0, createdAt} = {} ) => {
    return {
      type: 'add_expense',
      expense: {
        id:uuid4(),
        description,
        note,
        amount,
        createdAt: new Date(createdAt).getTime()
      }
    }
  }
  
  
export const removeExpense = ({ id } = {}) => ({
    type:'remove_expense',
    id
  })
  
  
export const editExpense =(id, updates) => ({
    type: 'edit_expense',
    id,
    updates   //keep updates as an object
  })