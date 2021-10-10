import { Avatar, Card, CardHeader, CardMedia, makeStyles, Typography } from '@material-ui/core'
import { useRouter } from 'next/dist/client/router'
import React from 'react'
import moment from 'moment'

const useStyles = makeStyles(() => ({
  card: {
    cursor: 'pointer',
    width: '100%',
  },
  title: {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    fontSize: '1rem',
  },
  cardHeader: {
    display: 'block',
    overflow: 'hidden',
  },
  cardHeaderRoot: {
    overflow: 'hidden',
  },
  cardHeaderContent: {
    overflow: 'hidden',
  },
}))

type Props = {
  id: number
  title: string
  defaultBpm: number
  firstYoutubeVideoId: string
  createdAt: any
}

export function PlaylistCard(props: Props) {
  const classes = useStyles()
  const router = useRouter()

  const handleClick = () => {
    router.push(`/playlists/${props.id}/edit`)
  }

  return (
    <Card className={classes.card} variant="outlined" onClick={handleClick}>
      <CardMedia
        image={`https://i.ytimg.com/vi/${props.firstYoutubeVideoId}/mqdefault.jpg`}
        style={{
          height: 0,
          paddingTop: '56.25%',
        }}
      />
      <CardHeader
        classes={{
          root: classes.cardHeaderRoot,
          content: classes.cardHeaderContent,
        }}
        avatar={<Avatar component="span" aria-label="recipe"></Avatar>}
        title={
          <div style={{ width: '100%' }}>
            <Typography component="div" noWrap className={classes.title}>
              {props.title}
            </Typography>
          </div>
        }
        subheader={`BPM${props.defaultBpm}・${moment(Date.parse(props.createdAt)).format('YYYY年MM月DD日')}`}
      />
    </Card>
  )
}
