
export const setTextFilter = (text = '') => ({
    type: 'set_text',
    text   //keep text as an object
  
  })
  
export const sortByAmount = () => ({
type:'sort_by_amount'
})

export const sortByDate = () => ({
type:'sort_by_date'
})


export const setStartDate = (startDate) => ({
type: 'setStartDate',
startDate: new Date(startDate).getTime()  //if there is no startDate by default js takes undefined as value
})

export const setEndDate = (endDate) => ({
type: 'setEndDate',
endDate: new Date(endDate).getTime()
})