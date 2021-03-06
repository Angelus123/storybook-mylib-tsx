import React, { HTMLAttributes, ReactNode } from 'react'
interface Props extends HTMLAttributes<HTMLButtonElement> {
    children: ReactNode;

    variant: 'primary' | 'secondary';
}

export const Button = ({ children, variant, ...props }: Props) => {
    return (
        <button 
            {...props} 
            style={{ 
                backgroundColor: variant === 'primary' ? 'blue' : 'gray', 
                color: 'white',
                border: 'none',
                borderRadius:100,
                padding:10,
                cursor: 'pointer'
                 }}>
            {children}
        </button>
    )
}