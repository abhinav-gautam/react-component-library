import Button from './index'

export default {
    title: 'Components/Button',
    component: Button,
    argTypes: {
        onClick: { action: 'clicked' }
    }
}

const Template = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
    backgroundColor: 'blue',
}

export const Secondary = Template.bind({})
Secondary.args = {
    backgroundColor: 'green',
}
