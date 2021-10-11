import { Typography } from '@mui/material'
import { styled } from '@mui/system'
import React from 'react'

const StyledTypography = styled(Typography)({
  lineHeight: 1.6,
  fontSize: '1.1rem',
  fontWeight: 100,
})

export function Description({ children }: { children: React.ReactNode }) {
  return <StyledTypography variant="h2">{children}</StyledTypography>
}
