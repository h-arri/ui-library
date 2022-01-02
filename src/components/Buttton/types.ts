import { ButtonHTMLAttributes } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    label: string
    variant?: 'primary' | 'secondary' | 'outlined'
    size?: 'small' | 'medium' | 'large' | string
    backgroundColor?: string
    onClick: () => void
}
