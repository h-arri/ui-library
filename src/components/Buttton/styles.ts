import styled from '@emotion/styled'
import { ButtonProps } from './types'

const sizes = {
    small: {
        fontSize: '12px',
        padding: '7px 9px',
    },
    medium: {
        fontSize: '16px',
        padding: '9px 11px',
    },
    large: {
        fontSize: '21px',
        padding: '12px 14px',
    },
}

const StyledButton = styled.button<Omit<ButtonProps, 'label'>>((props) => ({
    outline: 'none',
    border: props.variant === 'outlined' ? 'solid 1px #519e8a' : 'none',
    borderRadius: '5px',
    backgroundColor:
        props.backgroundColor ?? props.variant === 'primary'
            ? '#519e8a'
            : props.variant === 'outlined'
            ? '#eef5f3'
            : '#b9d8d0',
    color: props.variant === 'primary' ? '#dcece8' : '#10201c',
    ...sizes[props.size as keyof typeof sizes],
    fontFamily: `'Zen Maru Gothic', sans-serif`,

    '&:hover': {
        cursor: 'pointer',
        backgroundColor:
            props.variant === 'primary'
                ? '#396f61'
                : props.variant === 'outlined'
                ? '#b9d8d0'
                : '#519e8a',
        color: props.variant === 'primary' ? '#eef5f3' : '#10201c',
    },
}))

export default StyledButton
