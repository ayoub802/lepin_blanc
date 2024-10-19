// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Avatar from '@mui/material/Avatar'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import OptionsMenu from 'src/@core/components/option-menu'
import { styled } from '@mui/material/styles'
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress'
import { Icon } from '@iconify/react'
import { AvatarGroup, CardMedia, IconButton, Tooltip } from '@mui/material'
import { useState } from 'react'
import Image from 'next/image'
import themeMois from '../../../../public/assets/theme_mois.svg'

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

const avatarGroup = [
  { avatar: '/images/avatars/1.png', name: 'Vinnie Mostowy' },
  { avatar: '/images/avatars/2.png', name: 'Allen Rieske' },
  { avatar: '/images/avatars/3.png', name: 'Julee Rossignol' },
  { avatar: '/images/avatars/4.png', name: 'George Burrill' }
]

const ThemeMois = () => {
  const [liked, setLiked] = useState(false) // State to toggle heart icon

  const handleLike = () => {
    setLiked(!liked) // Toggle between true and false
  }

  return (
    <Card className='2xl:min-h-[36rem] 2xl:max-h-[36rem] '>
      <CardHeader
        title='Le thème du mois'
        action={
          <OptionsMenu
            options={['Last 28 Days', 'Last Month', 'Last Year']}
            iconButtonProps={{ size: 'small', className: 'card-more-options' }}
          />
        }
      />
      <CardMedia
        sx={{ height: 220, borderTopLeftRadius: '15px', borderTopRightRadius: '15px' }}
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
