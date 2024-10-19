import React from 'react'
import Grid from '@mui/material/Grid'
import AterlierCard from 'src/views/pages/Stage/FicherStage/AterlierCard'
import UtiliseCard from 'src/views/pages/Stage/FicherStage/UtiliseCard'

const index = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} sm={12} md={4}>
        <AterlierCard />
      </Grid>
      <Grid item xs={12} sm={12} md={8}>
        <UtiliseCard />
      </Grid>
    </Grid>
  )
}

export default index
