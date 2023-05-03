import React from 'react'

export default function Container({children}:{
    children: React.ReactNode
}) {
  return (
    <div className='p-3 max-[1200px]:'>{children}</div>
  )
}
