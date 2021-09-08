//filtering expense
export default (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
  
      //If no startdate provided it will return true to ignore start date in filtering, 
      //if startdate is provided then we check for condition and return boolean value
      const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate
      const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate
      const textMatch = expense.description.toLowerCase().includes(text.toLowerCase()) 
  
      return startDateMatch && endDateMatch && textMatch
      
    }).sort(( a,b ) => {
      if(sortBy === 'date'){
        return a.createdAt < b.createdAt ? 1 : -1
      }else if(sortBy === 'amount'){
        return a.amount < b.amount ? 1: -1
      }
}) 
  }

