import {
  AppBar,
  Box,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from '@mui/material'
import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/dist/client/router'
import { Add, Home, Info, ListAlt, Menu } from '@mui/icons-material'
import styled from 'styled-components'

const Title = styled(Typography)`
  flex-grow: 1;
  display: none;
  ${(props) => props.theme.breakpoints.up('sm')} {
    display: block;
  }
`

export function Navbar() {
  const { pathname } = useRouter()
  const [isDrawerOpened, setIsDrawerOpened] = useState(false)

  return (
    <div style={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Container fixed>
          <Toolbar>
            <IconButton
              onClick={() => {
                setIsDrawerOpened(true)
              }}
              edge="start"
              color="inherit"
              aria-label="menu"
            >
              <Menu />
            </IconButton>
            <Title variant="h6">
              <Link href="/">
                <span style={{ textDecoration: 'none', cursor: 'pointer' }}>FreeBeat</span>
              </Link>
            </Title>
            {pathname === '/playlists' && <div>サーチフォーム</div>}
          </Toolbar>
        </Container>
      </AppBar>
      <Drawer
        anchor="left"
        open={isDrawerOpened}
        onClose={() => {
          setIsDrawerOpened(false)
        }}
      >
        <div style={{ backgroundColor: '#111111' }}>
          <Box m={2} style={{ color: 'white' }}>
            FreeBeat
          </Box>
        </div>
        <Box mr={3} ml={1}>
          <List>
            <Link href="/">
              <ListItem
                button
                onClick={() => {
                  setIsDrawerOpened(false)
                }}
              >
                <ListItemIcon>
                  <Home />
                </ListItemIcon>
                <ListItemText primary="トップページ" />
              </ListItem>
            </Link>
            <ListItem button>
              <ListItemIcon>
                <Add />
              </ListItemIcon>
              <ListItemText primary="プレイリスト作成" />
            </ListItem>
            <Link href="/playlists">
              <ListItem
                button
                onClick={() => {
                  setIsDrawerOpened(false)
                }}
              >
                <ListItemIcon>
                  <ListAlt />
                </ListItemIcon>
                <ListItemText primary="プレイリスト一覧" />
              </ListItem>
            </Link>
            <Link href="/help">
              <ListItem
                button
                onClick={() => {
                  setIsDrawerOpened(false)
                }}
              >
                <ListItemIcon>
                  <Info />
                </ListItemIcon>
                <ListItemText primary="よくある質問" />
              </ListItem>
            </Link>
          </List>
          <Box
            mx={2}
            mb={2}
            style={{
              position: 'fixed',
              bottom: 0,
            }}
          >
            Created by{' '}
            <a href="https://twitter.com/solt9029" target="_blank">
              @solt9029
            </a>
          </Box>
        </Box>
      </Drawer>
    </div>
  )
}