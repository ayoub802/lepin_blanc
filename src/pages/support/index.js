// ** MUI Imports
import Grid from '@mui/material/Grid'
import Evenement from 'src/views/pages/Commuanite/EventsCard'
import Ateliers from 'src/views/pages/Stage/Ateliers'
import ProchaineStage from 'src/views/pages/Stage/ProchaineStage'
import Stages from 'src/views/pages/Stage/stages'
import AccorditionWidget from 'src/views/pages/Support/Acrcordition'
import FooterSupport from 'src/views/pages/Support/FooterSupport'
import HeroWidget from 'src/views/pages/Support/HeroWidget'

const StageAtelier = () => {
  return (
    <Grid container spacing={6} className='!mt-[2rem] max-w-[100%] md:max-w-[95%] !mx-auto'>
      <HeroWidget />
      <Grid container spacing={6} className='!mt-[2rem] md:max-w-[75%] max-w-[85%] !mx-auto'>
        <AccorditionWidget />

        <FooterSupport />
      </Grid>
    </Grid>
  )
}

export default StageAtelier
