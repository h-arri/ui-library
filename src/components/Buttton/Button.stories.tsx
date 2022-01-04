import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Button from './Button'

export default {
    title: 'Components/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => {
    return (
        <>
            <Button {...args} size="small" />
            <Button {...args} size="medium" />
            <Button {...args} size="large" />
            <Button {...args} size="large" disabled />
        </>
    )
}

export const Primary = Template.bind({})
Primary.args = {
    label: 'Primary',
}

export const Secondary = Template.bind({})
Secondary.args = {
    variant: 'secondary',
    label: 'Secondary',
}

export const Outlined = Template.bind({})
Outlined.args = {
    variant: 'outlined',
    label: 'Outlined',
}
