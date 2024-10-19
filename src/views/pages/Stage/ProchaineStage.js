// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import OptionsMenu from 'src/@core/components/option-menu'
import Image from 'next/image'
import themeMois from '../../../../public/assets/theme_mois.svg'
import Link from 'next/link'
import { useRouter } from 'next/router'

const ProchaineStage = () => {
  const router = useRouter()

  const handleJoinLive = id => {
    router.push(`/stage-ateiliers/fiche-stage/${id}`) // Update this path according to your routing structure
  }

  return (
    <Card>
      <CardHeader
        title='Les prochains stages et ateliers'
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
          <Typography className='!text-[#4C4E64] !text-[20px] opacity-[0.85] !font-medium'>Stage de musique</Typography>
          <Typography className='!text-[#4c4e6468] !text-[14px]  !font-normal'>
            Le 17/07/2024 à 14h :{' '}
            <Box
              className='text-secondColor font-semibold underline !opacity-100 cursor-pointer'
              onClick={() => handleJoinLive(1)}
            >
              voir le détail
            </Box>
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, mt: 2 }}>
          <Typography className='!text-[#4C4E64] !text-[20px] opacity-[0.85] !font-medium'>
            Stage d’écriture - Niveau débutant
          </Typography>
          <Typography className='!text-[#4c4e6468] !text-[14px]  !font-normal'>
            Le 17/07/2024 à 14h :{' '}
            <Box
              className='text-secondColor font-semibold underline !opacity-100 cursor-pointer'
              onClick={() => handleJoinLive(1)}
            >
              voir le détail
            </Box>
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, mt: 2 }}>
          <Typography className='!text-[#4C4E64] !text-[20px] opacity-[0.85] !font-medium'>
            Atelier d’écriture : les figures de style
          </Typography>
          <Typography className='!text-[#4c4e6468] !text-[14px]  !font-normal'>
            Le 17/07/2024 à 14h :{' '}
            <Box
              className='text-secondColor font-semibold underline !opacity-100 cursor-pointer'
              onClick={() => handleJoinLive(1)}
            >
              voir le détail
            </Box>
          </Typography>
        </Box>
      </CardContent>
    </Card>
  )
}

export default ProchaineStage
