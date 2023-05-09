import React from 'react'

export default function Container({children}:{
    children: React.ReactNode
}) {
  return (
    <div className='p-3 max-w-[1200px] mx-auto'>{children}</div>
  )
}
