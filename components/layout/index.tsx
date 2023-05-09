import React from 'react'
import Container from './container'
import Link from 'next/link'

export default function Layout(
    {
        children
    }:{
        children: React.ReactNode
    }) {
    return (
        <>
            <header className='px-4 py-6 shadow-md mb-6 sticky'>
                <Link href="/" className='font-extrabold text-4xl text-blue-500'>Trend<span className='text-black'>Search</span>Engine</Link>
            </header>
            <Container>
                {children}
            </Container>
        </>
    )
}
