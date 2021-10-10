import { makeStyles, Typography } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles(() => ({
  description: {
    lineHeight: 1.6,
    fontSize: '1.1rem',
    fontWeight: 100,
  },
}))

export function Description({ children }: { children: React.ReactNode }) {
  const classes = useStyles()

  return (
    <Typography variant="h2" className={classes.description} style={{ lineHeight: '2.5rem' }}>
      {children}
    </Typography>
  )
}
