import styled from '@emotion/styled'
import { colors, typography } from '../../styles/global'
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
    border:
        props.variant === 'outlined' ? `solid 1px ${colors.primary}` : 'none',
    borderRadius: '5px',
    backgroundColor:
        props.backgroundColor ?? props.variant === 'primary'
            ? colors.primary
            : props.variant === 'outlined'
            ? colors.lightest
            : colors.secondary,
    color:
        props.variant === 'primary'
            ? typography.colors.light
            : typography.colors.dark,
    ...sizes[props.size as keyof typeof sizes],

    '&:disabled': {
        backgroundColor: colors.lightest,
        color: 'rgba(32, 63, 55, 0.5)',
        borderColor: 'rgba(81, 158, 138, 0.5)',

        '&:hover': {
            cursor: 'not-allowed',
            backgroundColor: colors.lightest,
            color: 'rgba(32, 63, 55, 0.5)',
        },
    },
    '&:hover': {
        cursor: 'pointer',
        backgroundColor: colors.hover,
        color: typography.colors.light,
    },
}))

export default StyledButton
