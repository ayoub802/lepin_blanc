// ** MUI Imports
import Grid from '@mui/material/Grid'
import Evenement from 'src/views/pages/Commuanite/EventsCard'
import Ateliers from 'src/views/pages/Stage/Ateliers'
import ProchaineStage from 'src/views/pages/Stage/ProchaineStage'
import Stages from 'src/views/pages/Stage/stages'

const StageAtelier = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} sm={12} md={6}>
        <Stages />
      </Grid>
      <Grid item xs={12} sm={12} md={6}>
        <Ateliers />
      </Grid>
      <Grid item xs={12} sm={12} md={6}>
        <ProchaineStage />
      </Grid>
      <Grid item xs={12} sm={12} md={6}>
        <Evenement />
      </Grid>
    </Grid>
  )
}

export default StageAtelier
