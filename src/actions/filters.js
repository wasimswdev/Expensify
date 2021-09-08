
export const setTextFilter = (text = '') => ({
    type: 'SET_TEXT',
    text   //keep text as an object
  
  })
  
export const sortByAmount = () => ({
type:'SORT_BY_AMOUNT'
})

export const sortByDate = () => ({
type:'SORT_BY_DATE'
})

export const setStartDate = (startDate) => ({
type: 'setStartDate',
startDate: new Date(startDate).getTime()  //if there is no startDate by default js takes undefined as value
})

export const setEndDate = (endDate) => ({
type: 'setEndDate',
endDate: new Date(endDate).getTime()
})