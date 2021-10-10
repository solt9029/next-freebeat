import { Typography } from '@mui/material'
import { withTheme } from '@mui/styles'
import React from 'react'
import styled from 'styled-components'

const StyledTypography = styled(withTheme(Typography))`
  line-height: 2.5rem;
  font-size: 1.1rem;
  font-weight: 100;
`

export function Description({ children }: { children: React.ReactNode }) {
  return <StyledTypography variant="h2">{children}</StyledTypography>
}
