import { InputHTMLAttributes } from 'react'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string
    name: string
    placeholder?: string
    type?: 'text' | 'number' | 'password' | 'date' | 'time'
    size?: number
    onInputChange?: (value: string) => void
}
