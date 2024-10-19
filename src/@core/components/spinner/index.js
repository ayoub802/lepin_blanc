// ** MUI Imports
import { useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'
import Image from 'next/image'
import Logo from '../../../../public/assets/logo_black.svg'

const FallbackSpinner = ({ sx }) => {
  // ** Hook
  const theme = useTheme()

  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        ...sx
      }}
    >
      <Image src={Logo} quality={100} className='w-[50px] h-[50px]' alt='Lepin Blanc Logo' />
      <CircularProgress disableShrink sx={{ mt: 6, color: '#F2660D' }} />
    </Box>
  )
}

export default FallbackSpinner
