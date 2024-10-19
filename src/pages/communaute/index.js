// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import DernierActiualite from 'src/views/pages/Commuanite/dernieres_actualite'
import Evenement from 'src/views/pages/Commuanite/EventsCard'
import Sondage from 'src/views/pages/Commuanite/Sondage'

const Cummunaute = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} sm={12} md={6}>
        <Evenement />
      </Grid>
      <Grid item xs={12} sm={12} md={6}>
        <DernierActiualite />
      </Grid>
      <Grid item xs={12}>
        <Sondage />
      </Grid>
    </Grid>
  )
}

export default Cummunaute
