import { Avatar, Card, CardHeader, CardMedia, Typography } from '@mui/material'
import React from 'react'
import moment from 'moment'
import styled from 'styled-components'

const StyledCard = styled(Card)`
  cursor: pointer;
  width: 100%;
`

const Title = styled(Typography)`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 1rem;
`

const StyledCardHeader = styled(CardHeader)`
  .MuiCardHeader-root {
    overflow: hidden;
  }
  .MuiCardHeader-content {
    overflow: hidden;
  }
`

type Props = {
  id: number
  title: string
  defaultBpm: number
  firstYoutubeVideoId: string
  onClick?: () => void
  createdAt: any
}

export function PlaylistCard(props: Props) {
  return (
    <StyledCard variant="outlined" onClick={props.onClick}>
      <CardMedia
        image={`https://i.ytimg.com/vi/${props.firstYoutubeVideoId}/mqdefault.jpg`}
        style={{ height: 0, paddingTop: '56.25%' }}
      />
      <StyledCardHeader
        avatar={<Avatar component="span" aria-label="recipe"></Avatar>}
        title={
          <div style={{ width: '100%' }}>
            <Title component="div" noWrap>
              {props.title}
            </Title>
          </div>
        }
        subheader={`BPM${props.defaultBpm}・${moment(Date.parse(props.createdAt)).format('YYYY年MM月DD日')}`}
      />
    </StyledCard>
  )
}
