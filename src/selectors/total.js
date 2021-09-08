export default (expenses) => {
    const data = {
      sum : 0,
      total: expenses.length
    }
    expenses.forEach((expense) => {
      data.sum += expense.amount
    })
  
    return data
  }