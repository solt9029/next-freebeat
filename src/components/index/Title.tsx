import { Typography } from '@mui/material'
import { styled } from '@mui/system'
import React from 'react'

const StyledTypography = styled(Typography)(({ theme }) => ({
  fontSize: '1.8rem',
  lineHeight: '3.4rem',
  fontWeight: 900,
  [theme.breakpoints.up('sm')]: {
    fontSize: '3.2rem',
    lineHeight: '5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '3.5rem',
    lineHeight: '5.5rem',
  },
}))

export function Title({ children }: { children: React.ReactNode }) {
  return <StyledTypography variant="h1">{children}</StyledTypography>
}
