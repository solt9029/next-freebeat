import { Button as MuiButton } from '@mui/material'
import { styled } from '@mui/system'
import React from 'react'

const StyledButton = styled(MuiButton)({
  fontSize: '1rem',
  margin: '8px',
})

export function Button(props) {
  return <StyledButton {...props} />
}
