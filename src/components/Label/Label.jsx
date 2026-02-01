import React from 'react'

const Label = ({labels}) => {
  return (
   <div className='flex gap-2 mt-2'>
    <span className='font-semibold capitalize text-lg'>labels:</span>
    {labels.length==0?<p className=' capitalize mt-1'>No found labels</p>:labels.map(label=>(
        <span
        key={label.id}
        title={label.description||label.name}
        className=" rounded-3xl px-3 py-1 text-xs font-medium"
        style={{backgroundColor:`#${label.color}`}}
        >{label.name}</span>
    ))}
    
   </div>
  )
}

export default Label