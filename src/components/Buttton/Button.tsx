import * as React from 'react'
import StyledButton from './styles'
import { ButtonProps } from './types'

const Button = (props: ButtonProps) => {
    const { label, variant = 'primary', size = 'medium' } = props
    return (
        <StyledButton {...props} variant={variant} size={size}>
            {label}
        </StyledButton>
    )
}

export default Button
