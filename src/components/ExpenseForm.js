import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';





const ExpenseForm = (props) => {
  const [description, setDescription] = useState(props.expense ? props.expense.description : '')
  const [amount, setAmount] = useState(props.expense? String(props.expense.amount) : '') 
  const [note, setNote] = useState(props.expense? props.expense.note : '') 
  const [date, setDate] = useState(new Date()) //props.expense ? props.expense.createdAt 
  const [error, setError] = useState(undefined)
  const [focused, setFocused] = useState(false)


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
        amount:Number(amount),
        note,
        createdAt: date
      })
    } 
  }


  useEffect(() => {
      localStorage.setItem('expenses', JSON.stringify(props.expenses))
  }, [props.expenses])

  return(
    <div>
      {error && <p>Please provide valid description and amount</p>}
      <form onSubmit={onSubmit}>
        Description: <input type="text" value={description} onChange={handleChangeDescription} autoFocus /><br />
        Amount: <input type="text" value={amount} onChange={handleChangeAmount} />
        createdAt: <input type="date" onChange={handleChangeDate} required pattern="\d{4}-\d{2}-\d{2}" />
        Note: <textarea name="notes" value={note} onChange={handleChangeNote} rows="4" cols="50" placeholder="Enter text here..."></textarea><br />
        <input type="submit" />
      </form>
      {props.expense && <button onClick={handleRemove}>remove</button>}
    </div>
  )
}

const mapStateToProps =(state) => {
  return {
    expenses: state.expenses
  }
}
  
export default connect(mapStateToProps)(ExpenseForm)