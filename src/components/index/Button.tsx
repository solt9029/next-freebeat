import { Button as MaterialButton, makeStyles } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles(() => ({
  button: {
    fontSize: '1rem',
    margin: '8px',
  },
}))

export function Button(props) {
  const classes = useStyles()
  return <MaterialButton {...props} className={classes.button} />
}
