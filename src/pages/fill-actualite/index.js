import { Grid } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import BlankLayout from 'src/@core/layouts/BlankLayout'
import CreatePost from 'src/views/pages/FillActual/CreatePost'
import HeaderNav from 'src/views/pages/FillActual/HeaderNav'
import PostFill from 'src/views/pages/FillActual/PostFill'
import ProchainLive from 'src/views/pages/FillActual/ProchaineLive'
import ThemeMois from 'src/views/pages/FillActual/ThemeMois'

const FillAcualt = () => {
  return (
    <Box>
      <HeaderNav />
      <Box
        sx={{
          maxWidth: {
            lg: '80%',
            xs: '90%'
          },
          mt: {
            md: 10,
            xs: 5
          },
          mx: 'auto'
        }}
      >
        <Grid container spacing={5}>
          <Grid item xs={0} md={0} lg={2} className='!hidden xl:!block'></Grid>
          <Grid item xs={12} md={7} lg={6}>
            <CreatePost mb={8} />
            <PostFill mb={8} />
            <PostFill isWithImage={false} />
          </Grid>
          <Grid item xs={12} md={5} lg={4}>
            <ProchainLive mb={8} />
            <ThemeMois />
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default FillAcualt
