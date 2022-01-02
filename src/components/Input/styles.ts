import styled from '@emotion/styled'
import * as React from 'react'
import { InputProps } from './types'

const StyledContainer = styled.div({
    display: 'flex',
    flexDirection: 'column',
    width: '200px',
    position: 'relative',
    fontFamily: `'Zen Maru Gothic', sans-serif`,

    '&:focus-within label': {
        transform: 'translate(0, 8px) scale(0.75)',
    },
})

const StyledLabel = styled.label<{ isActive: boolean }>((props) => ({
    fontSize: '16px',
    padding: '0 12px',
    color: '#10201c',
    pointerEvents: 'none',
    position: 'absolute',
    transform: props.isActive
        ? 'translate(0, 8px) scale(0.75)'
        : 'translate(0, 16px) scale(1)',
    transformOrigin: 'top left',
    transition: 'all 0.2s ease-out',
}))

const StyledInput = styled.input<Omit<InputProps, 'label'>>((props) => ({
    width: '100%',
    height: '36px',
    padding: '14px 16px 0 10px',
    outline: 0,
    border: '1px solid #182f29',
    borderRadius: '5px',
    background: '#eef5f3',
    fontSize: '16px',
}))

export { StyledContainer, StyledLabel, StyledInput }
