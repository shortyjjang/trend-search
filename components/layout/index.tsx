import React from 'react'
import Container from './container'

export default function Layout(
    {
        children
    }:{
        children: React.ReactNode
    }) {
    return (
        <Container>{children}</Container>
    )
}
