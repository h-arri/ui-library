import * as React from 'react'
import { StyledContainer, StyledInput, StyledLabel } from './styles'
import { InputProps } from './types'

const Input = ({
    label,
    name,
    type = 'text',
    onInputChange,
    ...restProps
}: InputProps) => {
    const [value, setValue] = React.useState<string>('')
    const [isActive, setIsActive] = React.useState<boolean>(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
        onInputChange?.(e.target.value)

        if (e.target.value !== '') {
            setIsActive(true)
        } else {
            setIsActive(false)
        }
    }

    return (
        <StyledContainer>
            <StyledLabel htmlFor={name} isActive={isActive}>
                {label}
            </StyledLabel>
            <StyledInput
                id={name}
                name={name}
                type={type}
                value={value}
                onChange={handleChange}
                {...restProps}
            />
        </StyledContainer>
    )
}

export default Input
