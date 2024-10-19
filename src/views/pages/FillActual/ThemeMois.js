// ** MUI Import
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Avatar from '@mui/material/Avatar'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import AvatarGroup from '@mui/material/AvatarGroup'
import CardContent from '@mui/material/CardContent'
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Custom Components Imports
import CustomChip from 'src/@core/components/mui/chip'
import OptionsMenu from 'src/@core/components/option-menu'
import { CardHeader, IconButton } from '@mui/material'
import styled from '@emotion/styled'
import { useState } from 'react'

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.customColors.trackBg
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: '#f2660d'
  }
}))

const ThemeMois = () => {
  const [liked, setLiked] = useState(false) // State to toggle heart icon

  const handleLike = () => {
    setLiked(!liked) // Toggle between true and false
  }

  return (
    <Card className='!shadow-none'>
      <CardHeader title='Le thème du mois' />
      <CardMedia
        sx={{ height: 200, borderTopLeftRadius: '15px', borderTopRightRadius: '15px' }}
        image='/assets/theme_mois.svg'
      />
      <CardContent>
        <Typography variant='h6' sx={{ mb: 1 }}>
          La forêt
        </Typography>
        <Typography variant='body2' sx={{ mb: 6.25 }}>
          Managing your money isn’t the easiest thing to do. Now that many of us no longer balance a checkbook, tracking
          and expenses.
        </Typography>
        <Box sx={{ mb: 1.25, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Typography variant='body2' sx={{ mr: 2, fontWeight: 600, color: 'text.primary' }}>
            Textes partagés
          </Typography>
          <Typography variant='body2' sx={{ fontWeight: 600, color: 'text.primary' }}>
            47%
          </Typography>
        </Box>
        <BorderLinearProgress value={47} sx={{ mb: 4.75 }} variant='determinate' />
        <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
          <AvatarGroup sx={{ mr: 2 }}>
            <Avatar src='/images/avatars/1.png' alt='Olivia Sparks' />
            <Avatar src='/images/avatars/5.png' alt='Howard Lloyd' />
            <Avatar src='/images/avatars/4.png' alt='Hallie Richards' />
            <Avatar src='/images/avatars/2.png' alt='Alice Cobb' />
          </AvatarGroup>
          <Box sx={{ ml: 'auto', display: 'flex', alignItems: 'center' }}>
            <Typography className='!text-secondColor !font-medium'>105</Typography>
            <IconButton onClick={handleLike}>
              {liked ? (
                <Icon icon='mdi:cards-heart-outline' color='#f2660d' />
              ) : (
                <Icon icon='mdi:cards-heart' color='#f2660d' />
              )}
            </IconButton>
          </Box>
        </Box>
      </CardContent>
    </Card>
  )
}

export default ThemeMois
