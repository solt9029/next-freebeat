import { Typography } from '@mui/material'
import styled from 'styled-components'
import React from 'react'
import { withTheme } from '@mui/styles'

const StyledTypography = styled(withTheme(Typography))`
  font-size: 1.8rem;
  line-height: 3.4rem;
  font-weight: 900;
  ${(props) => props.theme.breakpoints.up('sm')} {
    font-size: 3.2rem;
    line-height: 5rem;
  }
  ${(props) => props.theme.breakpoints.up('md')} {
    font-size: 3.5rem;
    line-height: 5.5rem;
  }
`

export function Title({ children }: { children: React.ReactNode }) {
  return <StyledTypography variant="h1">{children}</StyledTypography>
}
