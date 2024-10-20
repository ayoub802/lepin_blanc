// ** MUI Imports
import Grid from '@mui/material/Grid'
import { useState } from 'react'
import { useAuth } from 'src/hooks/useAuth'
import Evenement from 'src/views/pages/Commuanite/EventsCard'
import Ateliers from 'src/views/pages/Stage/Ateliers'
import ProchaineStage from 'src/views/pages/Stage/ProchaineStage'
import Stages from 'src/views/pages/Stage/stages'
import CreateStage from './CreateStage'

const StageAtelier = () => {
  const { user } = useAuth()

  const [open, setOpen] = useState(false)

  return (
    <Grid container spacing={6}>
      <Grid item xs={12} sm={12} md={6}>
        <Stages role={user?.role} setOpen={setOpen} />
      </Grid>
      <Grid item xs={12} sm={12} md={6}>
        <Ateliers role={user?.role} setOpen={setOpen} />
      </Grid>
      <Grid item xs={12} sm={12} md={6}>
        <ProchaineStage />
      </Grid>
      <Grid item xs={12} sm={12} md={6}>
        <Evenement />
      </Grid>

      <CreateStage open={open} setOpen={setOpen} />
    </Grid>
  )
}

export default StageAtelier
