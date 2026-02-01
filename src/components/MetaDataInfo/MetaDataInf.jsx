import React from 'react'

const MetaDataInf = ({state,author,date,numberComments,lastUpdate}) => {
  return (
    <div className='flex flex-col sm:flex-row gap-x-0.5'>
        <h3 className='text-sm'>{`${state ==="open"?"opened":"closed"} by ${author} on ${date}.`}</h3>
        <span className='text-sm'>{numberComments} of comments. updated {lastUpdate}.</span>
    </div>
  )
}

export default MetaDataInf