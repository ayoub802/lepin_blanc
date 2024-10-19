// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import { Button } from '@mui/material'
import DernierActiualite from 'src/views/pages/board/dernieres_actualite'
import DernierContenu from 'src/views/pages/board/derniers_contens'
import ThemeMois from 'src/views/pages/board/theme_mois'
import { useAuth } from 'src/hooks/useAuth'
import { Box } from '@mui/system'
import ReactApexcharts from 'src/@core/components/react-apexcharts'
import AnalyticsSessions from 'src/views/pages/board/AnalyticsSessions'
import AnalyticsOverview from 'src/views/pages/board/AnalyticsOverview'
import CrmTotalGrowth from 'src/views/pages/board/CrmTotalGrowth'

const Home = () => {
  const { user } = useAuth()

  console.log('The User => ', user.role)

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <CardHeader title='Bienvenue sur la communauté du Lapin Blanc'></CardHeader>
          <CardContent>
            <Typography>
              At nunc si ad aliquem bene nummatum tumentemque ideo honestus advena salutatum introieris, primitus
              tamquam exoptatus suscipieris et interrogatus multa coactusque mentiri, miraberis numquam antea visus
              summatem virum tenuem te sic enixius observantem, ut paeniteat ob haec bona tamquam praecipua non vidisse
              ante decennium Romam.
            </Typography>

            <Button size='medium' type='submit' variant='contained' className='!bg-secondColor' sx={{ mt: 5 }}>
              Voir le fil d’actualité
            </Button>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={12} md={6} xl={4}>
        <DernierActiualite />
      </Grid>
      <Grid item xs={12} sm={12} md={6} xl={4}>
        <ThemeMois />
      </Grid>
      <Grid item xs={12} sm={12} lg={12} xl={4}>
        <DernierContenu />
      </Grid>
      {user.role == 'admin' && (
        <>
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <AnalyticsSessions />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <AnalyticsOverview />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <CrmTotalGrowth />
          </Grid>
        </>
      )}
    </Grid>
  )
}

export default Home
