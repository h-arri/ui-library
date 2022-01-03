import * as React from 'react'
import { StyledContainer, StyledInput, StyledLabel } from './styles'
import { InputProps } from './types'
import show from '../../../public/show.svg'
import hide from '../../../public/hide.svg'

const Input = ({
    label,
    name,
    type = 'text',
    onInputChange,
    ...restProps
}: InputProps) => {
    const [value, setValue] = React.useState<string>('')
    const [isActive, setIsActive] = React.useState<boolean>(false)
    const [showPassword, setShowPassword] = React.useState<boolean>(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
        onInputChange?.(e.target.value)

        if (e.target.value !== '') {
            setIsActive(true)
        } else {
            setIsActive(false)
        }
    }

    const handleIconClick = () => {
        setShowPassword(!showPassword)
    }

    return (
        <StyledContainer>
            <StyledLabel
                htmlFor={name}
                isActive={isActive}
                isDateOrTime={type === 'date' || type === 'time'}
            >
                {label}
            </StyledLabel>
            <StyledInput
                id={name}
                name={name}
                type={showPassword ? 'text' : type}
                value={value}
                onChange={handleChange}
                {...restProps}
            />
            {type === 'password' && (
                <img
                    alt={`${showPassword ? 'Hide password' : 'Show password'}`}
                    src={`${showPassword ? hide : show}`}
                    width={25}
                    height={25}
                    onClick={handleIconClick}
                />
            )}
        </StyledContainer>
    )
}

export default Input
