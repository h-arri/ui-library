import * as React from 'react'
import StyledButton from './styles'
import { ButtonProps } from './types'

const Button = ({
    label,
    variant = 'primary',
    size = 'medium',
    ...restProps
}: ButtonProps) => {
    return (
        <StyledButton variant={variant} size={size} {...restProps}>
            {label}
        </StyledButton>
    )
}

export default Button
