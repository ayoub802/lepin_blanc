import { Icon } from '@iconify/react'
import { Chip, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const FooterSupport = () => {
  //

  return (
    <Box sx={{ my: 10, textAlign: 'center', width: '100%' }}>
      <Box>
        <Typography className='!text-secondColor !text-[20px] !font-medium !mb-3 !text-center'>
          Vous avez d’autres questions ?
        </Typography>
        <Typography className='!text-secondColor !text-[14px] !font-normal !max-w-[100%] md:!max-w-[70%] !mx-auto !text-center'>
          Si vous n’avez pas trouvé la réponse à votre question dans notre FAQ, vous pouvez nous contacter. Nous vous
          répondrons rapidement !
        </Typography>
      </Box>

      <Box sx={{ mt: 15 }}>
        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <Box className='!grid !place-content-center py-[50px] !bg-[#4C4E6415] px-[50px] rounded-xl min-h-[240px]'>
              <Chip
                icon={<Icon icon='mdi:phone' fontSize={28} sx={{ color: '#F2660D', marginLeft: 0 }} />}
                label={''}
                className='!rounded-[10px]' // Set label to an empty string
                sx={{
                  height: 50,
                  width: 50,
                  mx: 'auto',
                  mb: 2,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: 'rgba(242, 102, 13, 0.2)', // Set background with opacity
                  color: '#F2660D',
                  '& .MuiChip-icon': {
                    color: '#F2660D',
                    ml: -1 // Ensure icon color is set
                  },
                  '& .MuiChip-label': {
                    display: 'none' // Hide the label
                  }
                }}
              />
              <Typography className='!text-secondColor !text-[20px] !font-medium !mb-2'>
                + (33) 0 00 00 00 00
              </Typography>
              <Typography className='!text-secondColor !text-[14px] !font-normal'>
                Vous aidez sera toujours un plaisir
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box className='!grid !place-content-center py-[40px] !bg-[#4C4E6415] px-[70px] rounded-xl min-h-[240px] '>
              <Chip
                icon={<Icon icon='mdi:email-outline' fontSize={28} sx={{ color: '#F2660D', marginLeft: 0 }} />}
                label={''}
                className='!rounded-[10px]' // Set label to an empty string
                sx={{
                  height: 50,
                  width: 50,
                  mx: 'auto',
                  mb: 2,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: 'rgba(242, 102, 13, 0.2)', // Set background with opacity
                  color: '#F2660D',
                  '& .MuiChip-icon': {
                    color: '#F2660D',
                    ml: -1.5 // Ensure icon color is set
                  },
                  '& .MuiChip-label': {
                    display: 'none' // Hide the label
                  }
                }}
              />
              <Typography className='!text-secondColor !text-[20px] !font-medium !mb-2'>hello@help.com</Typography>
              <Typography className='!text-secondColor !text-[14px] !font-normal'>
                La méthode la plus rapide pour obtenir une réponse
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default FooterSupport
