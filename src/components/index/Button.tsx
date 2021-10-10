import { Button as MuiButton } from '@mui/material'
import { withTheme } from '@mui/styles'
import React from 'react'
import styled from 'styled-components'

const StyledButton = styled(withTheme(MuiButton))`
  font-size: 1rem;
  margin: 8px;
`

export function Button(props) {
  return <StyledButton {...props} />
}
