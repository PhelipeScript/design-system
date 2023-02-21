import * as Toast from '@radix-ui/react-toast'
import { styled, keyframes } from '../../styles'

export const ToastProvider = styled(Toast.Provider, {})

const slideIn = keyframes({
  from: {
    transform: 'translateX(100%)',
  },
  to: {
    transform: 'translateX(0)',
  },
})

const slideOut = keyframes({
  from: {
    transform: 'translateX(0)',
  },
  to: {
    transform: 'translateX(100%)',
  },
})

export const ToastRoot = styled(Toast.Root, {
  position: 'relative',
  backgroundColor: '$gray800',
  borderRadius: '$sm',
  padding: '$3 $5',
  border: '1px solid $gray600',
  display: 'flex',
  flexDirection: 'column',
  gap: '$1',
  width: 360,
  maxWidth: 'calc(100vw - 100px)',

  '&[data-state="open"]': {
    animation: `${slideIn} 200ms ease-out`,
  },

  '&[data-state="closed"]': {
    animation: `${slideOut} 200ms ease-out`,
  },
})

export const ToastTitle = styled(Toast.Title, {
  color: '$white',
  fontSize: '$xl',
  lineHeight: '$base',
  maxWidth: 330,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
})

export const ToastDescription = styled(Toast.Description, {
  color: '$gray200',
  lineHeight: '$base',
  maxWidth: 330,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
})

export const ToastClose = styled(Toast.Close, {
  all: 'unset',

  position: 'absolute',
  top: '$4',
  right: '$4',
  cursor: 'pointer',

  svg: {
    color: '$gray200',
    width: '$5',
    height: '$5',
  },
})

export const ToastViewport = styled(Toast.Viewport, {
  position: 'fixed',
  bottom: '$8',
  right: '$8',
  margin: 0,
  maxWidth: '100vw',
  listStyle: 'none',
  outline: 'none',
  zIndex: 2147483647,
})
