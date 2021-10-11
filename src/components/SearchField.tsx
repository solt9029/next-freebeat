import { alpha, debounce, InputBase } from '@mui/material'
import React, { useCallback, useEffect, useState } from 'react'
import { Search } from '@mui/icons-material'
import { useRouter } from 'next/dist/client/router'
import { styled } from '@mui/system'

const Field = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}))

const SearchIcon = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 1),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}))

const StyledInputBase = styled(InputBase)({
  color: 'inherit',
})

const Input = styled('input')(({ theme }) => ({
  padding: theme.spacing(1, 1, 1, 0),
  paddingLeft: `calc(1em + ${theme.spacing(3)})`,
  // @ts-ignore
  transition: theme.transitions.create('width'),
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    width: '20ch',
    '&:focus': {
      width: '20ch',
    },
  },
}))

export function SearchField() {
  const router = useRouter()
  const [keyword, setKeyword] = useState('')

  const pushRoute = useCallback(
    debounce((value: string) => {
      router.push(`/playlists?keyword=${value}`)
    }, 1000),
    [router],
  )

  const handleChange = useCallback(
    (event) => {
      setKeyword(event.target.value)
      pushRoute(event.target.value)
    },
    [setKeyword],
  )

  useEffect(() => {
    const { keyword } = router.query
    if (keyword) {
      setKeyword(keyword.toString())
    }
  }, [setKeyword, router.query])

  return (
    <Field>
      <SearchIcon>
        <Search />
      </SearchIcon>
      <StyledInputBase
        value={keyword}
        onChange={handleChange}
        placeholder="検索"
        inputComponent={Input}
        inputProps={{ 'aria-label': 'search' }}
      />
    </Field>
  )
}
