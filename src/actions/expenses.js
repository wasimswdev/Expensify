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
  return (dispatch, getState) => {
    const uid = getState().auth.uid
    const {
      description = '',
      note = '',
      amount = 0,
      createdAt = 0
    } = expenseData
    const expense = {description, note, amount, createdAt:new Date(createdAt).getTime()}
    addDoc(collection(db, "users",`${uid}`,"expenses"), expense).then((ref) => {
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
  return (dispatch, getState) => {
    const uid = getState().auth.uid
    deleteDoc(doc(db, "users",`${uid}`,"expenses", id));
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
  return (dispatch, getState) => {
    const uid = getState().auth.uid
      setDoc(doc(db, "users",`${uid}`,"expenses", id), {
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
  return (dispatch, getState) => {
    const uid = getState().auth.uid
    return getDocs(collection(db, "users",`${uid}`,"expenses")).then((querySnapshot) => {
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