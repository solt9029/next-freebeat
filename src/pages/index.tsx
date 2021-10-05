import { AppBar, Grid, Toolbar, Typography } from '@mui/material'
import { PlaylistCard } from '../components/molecules/PlaylistCard'

const IndexPage = () => (
  <>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">FreeBeat</Typography>
      </Toolbar>
    </AppBar>
    <Grid container spacing={2}>
      <Grid item lg={4} md={4} sm={4} xs={12} zeroMinWidth>
        <PlaylistCard
          id={10}
          title="testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest"
          defaultBpm={400}
          firstYoutubeVideoId="aaa"
          createdAt="test"
        />
      </Grid>
      <Grid item lg={4} md={4} sm={4} xs={12} zeroMinWidth>
        <PlaylistCard
          id={10}
          title="testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest"
          defaultBpm={400}
          firstYoutubeVideoId="aaa"
          createdAt="test"
        />
      </Grid>
      <Grid item lg={4} md={4} sm={4} xs={12} zeroMinWidth>
        <PlaylistCard id={10} title="test" defaultBpm={400} firstYoutubeVideoId="aaa" createdAt="test" />
      </Grid>
      <Grid item lg={4} md={4} sm={4} xs={12} zeroMinWidth>
        <PlaylistCard id={10} title="test" defaultBpm={400} firstYoutubeVideoId="aaa" createdAt="test" />
      </Grid>
    </Grid>
  </>
)

export default IndexPage
