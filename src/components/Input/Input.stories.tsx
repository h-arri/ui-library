import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Input from './Input'

export default {
    title: 'Components/Input',
    component: Input,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args) => {
    return <Input {...args} />
}

export const TextInput = Template.bind({})
TextInput.args = {
    label: 'Name',
}

export const NumberInput = Template.bind({})
NumberInput.args = {
    label: 'Age',
    type: 'number',
}
