import db from '../firebase/firebase';
import { collection, addDoc, getDocs, setDoc, doc, deleteDoc } from "firebase/firestore";

//ACTION GENERATORS
export const addExpense = (expense) => {
    return {
      type: 'ADD_EXPENSE',
      expense
      }
    }
  

export const startAddExpense = (expenseData = {}) => {
  return (dispatch) => {
    const {
      description = '',
      note = '',
      amount = 0,
      createdAt = 0
    } = expenseData
    const expense = {description, note, amount, createdAt:new Date(createdAt).getTime()}
    addDoc(collection(db, "expenses"), expense).then((ref) => {
          dispatch(addExpense({
            id: ref.id,
            ...expense
          }))
          })
  }
}
  
  
export const removeExpense = (id) => ({
    type:'REMOVE_EXPENSE',
    id
  })


export const startRemoveExpense = ({ id } = {}) => {
  return (dispatch) => {
    deleteDoc(doc(db, "expenses", id));
    dispatch(removeExpense(id))
  }
}
  
  
export const editExpense =(id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates   //keep updates as an object
  })


export const startEditExpense = (id ,updates) => {
  updates.createdAt = new Date(updates.createdAt).getTime()
  return (dispatch) => {
        setDoc(doc(db, "expenses", id), {
        ...updates
      });
      dispatch(editExpense(id, updates))
  }
}

export const setExpense = (expenses) => ({
  type: 'SET_EXPENSE',
  expenses
})

export const startSetExpense = () => {
  return (dispatch) => {
    return getDocs(collection(db, "expenses")).then((querySnapshot) => {
      const expenses = []
      querySnapshot.forEach((doc) => {
        expenses.push({
          id: doc.id,
          ...doc.data()
        })
    })
    dispatch(setExpense(expenses))
  })
}
}