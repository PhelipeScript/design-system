import { StoryObj, Meta } from '@storybook/react'
import { Box, Toast, ToastProps } from '@phelipescript-ui/react'

export default {
  title: 'Surfaces/Toast',
  component: Toast,
  args: {
    ButtonName: 'Agendar',
    AlertTitle: 'Agendamento realizado',
    AlertDescription: 'Quarta-feira, 23 de Outubro às 16h',
    ButtonSize: 'md',
    ButtonType: 'secondary',
    ButtonDisabled: false,
    DurationMs: 5000,
  },
  argTypes: {
    ButtonSize: {
      options: ['sm', 'md'],
      control: {
        type: 'inline-radio',
      },
    },
    ButtonType: {
      options: ['primary', 'secondary', 'tertiary'],
      control: {
        type: 'inline-radio',
      },
    },
    ButtonDisabled: {
      control: {
        type: 'boolean',
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <Box css={{ display: 'flex', flexDirection: 'row', gap: '$2' }}>
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
