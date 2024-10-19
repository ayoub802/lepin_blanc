// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Avatar from '@mui/material/Avatar'
import { styled } from '@mui/material/styles'
import TimelineDot from '@mui/lab/TimelineDot'
import TimelineItem from '@mui/lab/TimelineItem'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import MuiTimeline from '@mui/lab/Timeline'

// ** Custom Components Imports
import OptionsMenu from 'src/@core/components/option-menu'
import { Icon } from '@iconify/react'

// Styled Timeline component
const Timeline = styled(MuiTimeline)({
  paddingLeft: 0,
  paddingRight: 0,
  '& .MuiTimelineItem-root': {
    width: '100%',
    '&:before': {
      display: 'none'
    }
  }
})

const DernierActiualite = () => {
  return (
    <Card className='min-h-[40rem] max-h-[40rem] 2xl:min-h-[33rem] 2xl:max-h-[33rem]'>
      <CardHeader
        title='Mes dernières actualités'
        action={
          <OptionsMenu
            options={['Last 28 Days', 'Last Month', 'Last Year']}
            iconButtonProps={{ size: 'small', className: 'card-more-options' }}
          />
        }
      />
      <CardContent sx={{ pt: theme => `${theme.spacing(2.5)} !important` }}>
        <Timeline sx={{ my: 0, py: 0 }}>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color='success' />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ mt: 0, mb: theme => `${theme.spacing(3)} !important` }}>
              <Box
                sx={{
                  mb: 3,
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <Typography sx={{ mr: 2, fontWeight: 600 }}>Maurice84 à ajouté un nouveau fichier</Typography>
                <Typography variant='caption' sx={{ color: 'text.disabled' }}>
                  Hier
                </Typography>
              </Box>
              <Typography variant='body2' sx={{ mb: 2 }}>
                Ma dernière performance musicale
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Icon icon='mdi:music-box-outline' color='#F2660D' fontSize={25} />
                <Typography variant='subtitle2' sx={{ ml: 2, fontWeight: 600 }} className='!text-secondColor'>
                  musique.mp3
                </Typography>
              </Box>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color='success' />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ mt: 0, mb: theme => `${theme.spacing(3)} !important` }}>
              <Box
                sx={{
                  mb: 3,
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <Typography sx={{ mr: 2, fontWeight: 600 }}>Votre communauté s’élargit</Typography>
                <Typography variant='caption' sx={{ color: 'text.disabled' }}>
                  Lundi
                </Typography>
              </Box>
              <Typography variant='body2' sx={{ mb: 2 }}>
                Vous êtes désormais connecté avec John
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Avatar src='/images/avatars/1.png' sx={{ mr: 2.5, width: 24, height: 24 }} />
                <Typography variant='body2' sx={{ fontWeight: 600, fontSize: '0.875rem' }}>
                  John Doe
                </Typography>
              </Box>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem sx={{ minHeight: 0 }}>
            <TimelineSeparator>
              <TimelineDot color='lepin_color' />
              <TimelineConnector sx={{ mb: 3 }} />
            </TimelineSeparator>
            <TimelineContent sx={{ mt: 0, mb: theme => `${theme.spacing(0.5)} !important` }}>
              <Box
                sx={{
                  mb: 3,
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <Typography sx={{ mr: 2, fontWeight: 600 }}>Nouveau texte non lu</Typography>
                <Typography variant='caption' sx={{ color: 'text.disabled' }}>
                  Le 17/07/2024
                </Typography>
              </Box>
              <Typography variant='body2' sx={{ mb: 2 }}>
                Victor a paratgé un nouveau texte.
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Avatar src='/images/avatars/1.png' sx={{ mr: 2.5, width: 24, height: 24 }} />
                <Typography variant='body2' sx={{ fontWeight: 600, fontSize: '0.875rem' }}>
                  Victor 1974
                </Typography>
              </Box>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem sx={{ minHeight: 0 }}>
            <TimelineSeparator>
              <TimelineDot color='lepin_color' />
              <TimelineConnector sx={{ mb: 3 }} />
            </TimelineSeparator>
            <TimelineContent sx={{ mt: 0, mb: theme => `${theme.spacing(0.5)} !important` }}>
              <Box
                sx={{
                  mb: 3,
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <Typography sx={{ mr: 2, fontWeight: 600 }}>Modération</Typography>
                <Typography variant='caption' sx={{ color: 'text.disabled' }}>
                  Le 18/07/2024
                </Typography>
              </Box>
              <Typography variant='body2' sx={{ mb: 2 }}>
                Votre texte a été modéré. <span className='text-secondColor font-medium'>Modifier votre texte</span>
              </Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </CardContent>
    </Card>
  )
}

export default DernierActiualite
