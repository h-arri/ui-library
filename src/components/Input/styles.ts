import styled from '@emotion/styled'
import * as React from 'react'
import { colors, typography } from '../../styles/global'
import { InputProps } from './types'

const StyledContainer = styled.div<{ isTime?: boolean }>(({ isTime }) => ({
    display: 'flex',
    flexDirection: 'column',
    width: isTime ? '80px' : '200px',
    position: 'relative',

    '&:focus-within label': {
        transform: 'translate(0, 8px) scale(0.75)',
    },

    img: {
        position: 'absolute',
        top: '15px',
        right: '-17px',
    },
}))

const StyledLabel = styled.label<{ isActive: boolean; isDateOrTime?: boolean }>(
    ({ isActive, isDateOrTime }) => ({
        fontSize: '16px',
        padding: '0 12px',
        color: typography.colors.dark,
        pointerEvents: 'none',
        position: 'absolute',
        transform:
            isActive || isDateOrTime
                ? 'translate(0, 8px) scale(0.75)'
                : 'translate(0, 16px) scale(1)',
        transformOrigin: 'top left',
        transition: 'all 0.2s ease-out',
    }),
)

const StyledInput = styled.input({
    width: '100%',
    height: '36px',
    padding: '14px 16px 0 10px',
    outline: 0,
    border: `1px solid ${colors.darker}`,
    borderRadius: '5px',
    background: colors.lightest,
    fontSize: '16px',
    '-moz-appearance': 'textfield',

    '::-webkit-outer-spin-button': {
        '-webkit-appearance': 'none',
        margin: 0,
    },

    '::-webkit-inner-spin-button': {
        '-webkit-appearance': 'none',
        margin: 0,
    },
})

export { StyledContainer, StyledLabel, StyledInput }
