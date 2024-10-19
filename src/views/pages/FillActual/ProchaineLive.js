// ** MUI Import
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import { Button, CardActions, CardHeader, Divider, IconButton } from '@mui/material'
import { IoIosArrowForward } from 'react-icons/io'

const ProchainLive = ({ mb = 0 }) => {
  return (
    <Card className='!rounded-none !shadow-none !border-[#EAEAEA] border' sx={{ mb: mb }}>
      <CardHeader
        title={
          <Typography sx={{ color: '#121212', fontWeight: '500', fontSize: '18px' }} className='!font-poppins'>
            Prochains live
          </Typography>
        }
        sx={{
          borderBottom: '1px solid #EAEAEA', // Add bottom border
          pb: 2, // Adjust padding
          pt: 2 // Adjust padding
        }}
      />
      <CardContent className='md:!p-6 '>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
            <Typography className='!text-[#807E7E] text-center !font-poppins !text-[12px] !font-semibold !leading-[25px]'>
              07
            </Typography>
            <Box
              sx={{
                px: '10px',
                py: '4px',
                width: '54px',
                borderBottomRightRadius: '4px',
                borderBottomLeftRadius: '4px',
                backgroundColor: 'rgba(213, 106, 17, 0.40)'
              }}
            >
              <Typography className='!text-[#000] text-center !font-poppins !text-[12px] !font-semibold'>
                Août
              </Typography>
            </Box>
          </Box>
          <Box>
            <Typography className='!text-[#454545] !font-poppins !text-[12px] !font-semibold'>
              Atelier écriture
            </Typography>
            <Typography className='!text-[#807E7E] !font-poppins !text-[12px] !font-medium'>@lou</Typography>
            <Typography className='!text-[#F2660D] !font-poppins !text-[12px] !font-normal'>Détails</Typography>
          </Box>
        </Box>
        <Divider
          sx={{
            my: 5
          }}
        />
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
            <Typography className='!text-[#807E7E] text-center !font-poppins !text-[12px] !font-semibold !leading-[25px]'>
              09
            </Typography>
            <Box
              sx={{
                px: '10px',
                py: '4px',
                width: '54px',
                borderBottomRightRadius: '4px',
                borderBottomLeftRadius: '4px',
                backgroundColor: 'rgba(214, 162, 6, 0.40)'
              }}
            >
              <Typography className='!text-[#000] text-center !font-poppins !text-[12px] !font-semibold'>
                Sept
              </Typography>
            </Box>
          </Box>
          <Box>
            <Typography className='!text-[#454545] !font-poppins !text-[12px] !font-semibold'>
              Atelier écriture
            </Typography>
            <Typography className='!text-[#807E7E] !font-poppins !text-[12px] !font-medium'>@lou</Typography>
            <Typography className='!text-[#F2660D] !font-poppins !text-[12px] !font-normal'>Détails</Typography>
          </Box>
        </Box>
        <Divider
          sx={{
            my: 5
          }}
        />
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
            <Typography className='!text-[#807E7E] text-center !font-poppins !text-[12px] !font-semibold !leading-[25px]'>
              16
            </Typography>
            <Box
              sx={{
                px: '10px',
                py: '4px',
                width: '54px',
                borderBottomRightRadius: '4px',
                borderBottomLeftRadius: '4px',
                backgroundColor: 'rgba(28, 131, 109, 0.40)'
              }}
            >
              <Typography className='!text-[#000] text-center !font-poppins !text-[12px] !font-semibold'>
                Dec
              </Typography>
            </Box>
          </Box>
          <Box>
            <Typography className='!text-[#454545] !font-poppins !text-[12px] !font-semibold'>
              Atelier écriture
            </Typography>
            <Typography className='!text-[#807E7E] !font-poppins !text-[12px] !font-medium'>@lou</Typography>
            <Typography className='!text-[#F2660D] !font-poppins !text-[12px] !font-normal'>Détails</Typography>
          </Box>
        </Box>
      </CardContent>
      <CardActions className='border-t border-[#EAEAEA] justify-center !py-3'>
        <Button size='small'>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Typography className='!text-[#F2660D] !font-poppins !text-[14px] !font-medium capitalize'>
              Voir plus
            </Typography>
            <IoIosArrowForward color='#F2660D' size={15} />
          </Box>
        </Button>
      </CardActions>
    </Card>
  )
}

export default ProchainLive
