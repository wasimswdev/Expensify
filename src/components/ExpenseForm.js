import React, { useState } from 'react';
import { connect } from 'react-redux';


const ExpenseForm = (props) => {

  const [description, setDescription] = useState(props.expense ? props.expense.description : '')
  const [amount, setAmount] = useState(props.expense? String(props.expense.amount) : '') 
  const [note, setNote] = useState(props.expense? props.expense.note : '') 
  const [date, setDate] = useState(props.expense? new Date(props.expense.createdAt).toISOString().slice(0,10): '')  
  const [error, setError] = useState(undefined)


  const handleChangeDescription = (e) => {
    const description = e.target.value
    setDescription(description)
  }

  const handleChangeAmount = (e) => {
    const amount = e.target.value
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)){
      setAmount(amount)
    }
  }

  const handleChangeNote = (e) => {
    const note = e.target.value
    setNote(note)
  }

  const handleChangeDate = (e) => {
    const date = e.target.value
    setDate(date)
  }

  const handleRemove = () => {
    props.onRemove()
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if(!description || !amount){
      setError(true)
    }else{
      setError(false)
      props.onSubmit({
        description,
        amount:parseFloat(amount),
        note,
        createdAt: date
      })
    } 
  }

  return(
    <div className="content-container">
      {error && <p>Please provide valid description and amount</p>}
      <form className="form" onSubmit={onSubmit}>
        <input className="form__description" type="text" value={description} onChange={handleChangeDescription} placeholder="Description" autoFocus />
        <input className="form__amount" type="text" value={amount} onChange={handleChangeAmount} placeholder=" Amount"/>
        <input className="form__created" type="date" onChange={handleChangeDate} value = {date} placeholder="createdAt" required/>
        <textarea className="form__text" name="notes" value={note} onChange={handleChangeNote} rows="4" cols="50" placeholder="Add a note for your expense (optional)"></textarea>
        <div>
          <input className="form__submit" type="submit" value="Save Expense" />
        </div>
      </form>
      {props.expense && <button className="form__remove" onClick={handleRemove}>Remove Expense</button>}
  </div>
  )
}

const mapStateToProps =(state) => {
  return {
    expenses: state.expenses
  }
}
  
export default connect(mapStateToProps)(ExpenseForm)