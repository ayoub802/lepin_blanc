// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Avatar from '@mui/material/Avatar'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import OptionsMenu from 'src/@core/components/option-menu'
import { AvatarGroup, Link as MUILink, Tooltip } from '@mui/material'
import Image from 'next/image'
import themeMois from '../../../../public/assets/theme_mois.svg'
import { useRouter } from 'next/router'

const avatarGroup = [
  { avatar: '/images/avatars/1.png', name: 'Vinnie Mostowy' },
  { avatar: '/images/avatars/2.png', name: 'Allen Rieske' },
  { avatar: '/images/avatars/3.png', name: 'Julee Rossignol' },
  { avatar: '/images/avatars/4.png', name: 'George Burrill' }
]

const Stages = () => {
  const router = useRouter()

  const handleJoinLive = id => {
    router.push(`/stage-ateiliers/fiche-stage/${id}`) // Update this path according to your routing structure
  }

  return (
    <Card>
      <CardHeader
        title='Mes stages'
        action={
          <OptionsMenu
            options={['Last 28 Days', 'Last Month', 'Last Year']}
            iconButtonProps={{ size: 'small', className: 'card-more-options' }}
          />
        }
      />
      <Box className='w-full '>
        <Image
          quality={100}
          width={100}
          height={100}
          src={themeMois}
          alt='Theme de mois'
          className='w-full h-full rounded-t-[10px] max-h-[15rem] object-cover'
        />
      </Box>
      <CardContent>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
          <Typography className='!text-[#4C4E64] !text-[20px] opacity-[0.85] !font-medium'>
            Ecriture - Niveau intermédiaire
          </Typography>
          <Typography className='!text-[#4c4e6468] !text-[14px]  !font-normal'>
            Le 17/07/2024 à 14h :{' '}
            <MUILink
              className='!text-secondColor !font-semibold !underline !opacity-100'
              onClick={() => handleJoinLive(1)}
              sx={{ cursor: 'pointer' }}
            >
              joindre le live
            </MUILink>
          </Typography>
        </Box>
        <Box sx={{ gap: 2, display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <AvatarGroup className='pull-up' sx={{ alignItems: 'center' }}>
              {avatarGroup.map((person, index) => {
                return (
                  <Tooltip key={index} title={person.name}>
                    <Avatar src={person.avatar} alt={person.name} sx={{ height: 32, width: 32 }} />
                  </Tooltip>
                )
              })}
            </AvatarGroup>
          </Box>

          <Box sx={{ ml: 'auto', display: 'flex', alignItems: 'center' }}>
            <Typography sx={{ my: 4 }} className='!text-secondColor !font-medium'>
              7 personnes y participent
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, mt: 2 }}>
          <Typography className='!text-[#4C4E64] !text-[20px] opacity-[0.85] !font-medium'>
            Peinture - Niveau débutant
          </Typography>
          <Typography className='!text-[#4c4e6468] !text-[14px]  !font-normal'>
            Le 17/07/2024 à 14h :{' '}
            <MUILink
              className='!text-secondColor !font-semibold !underline !opacity-100'
              onClick={() => handleJoinLive(2)}
              sx={{ cursor: 'pointer' }}
            >
              joindre le live
            </MUILink>
          </Typography>
        </Box>
        <Box sx={{ gap: 2, display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <AvatarGroup className='pull-up' sx={{ alignItems: 'center' }}>
              {avatarGroup.map((person, index) => {
                return (
                  <Tooltip key={index} title={person.name}>
                    <Avatar src={person.avatar} alt={person.name} sx={{ height: 32, width: 32 }} />
                  </Tooltip>
                )
              })}
            </AvatarGroup>
          </Box>

          <Box sx={{ ml: 'auto', display: 'flex', alignItems: 'center' }}>
            <Typography sx={{ my: 4 }} className='!text-secondColor !font-medium'>
              3 personnes y participent
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  )
}

export default Stages
