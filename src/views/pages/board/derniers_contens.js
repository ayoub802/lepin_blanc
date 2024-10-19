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

const DernierContenu = () => {
  return (
    <Card className='2xl:min-h-[36rem] 2xl:max-h-[36rem] '>
      <CardHeader
        title='Mes derniers contenus'
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
                <Typography sx={{ mr: 2, fontWeight: 600 }}>Publication d’un texte</Typography>
                <Typography variant='caption' sx={{ color: 'text.disabled' }}>
                  Lundi
                </Typography>
              </Box>
              <Typography variant='body2' sx={{ mb: 2 }} className='text-secondColor'>
                Voir la publication
              </Typography>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color='lepin_color' />
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
                <Typography sx={{ mr: 2, fontWeight: 600 }}>Publication d’un texte (en attente modération)</Typography>
                <Typography variant='caption' sx={{ color: 'text.disabled' }}>
                  Le 17/07/2024
                </Typography>
              </Box>
              <Typography variant='body2' sx={{ mb: 2 }} className='text-secondColor'>
                Voir la publication
              </Typography>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem sx={{ minHeight: 0 }}>
            <TimelineSeparator>
              <TimelineDot color='success' />
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
                <Typography sx={{ mr: 2, fontWeight: 600 }}>Dernier live enregistré</Typography>
                <Typography variant='caption' sx={{ color: 'text.disabled' }}>
                  Le 18/07/2024
                </Typography>
              </Box>
              <Typography variant='body2' sx={{ mb: 2 }} className='text-secondColor'>
                Voir le live
              </Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </CardContent>
    </Card>
  )
}

export default DernierContenu
