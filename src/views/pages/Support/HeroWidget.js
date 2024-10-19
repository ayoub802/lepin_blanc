import { Icon } from '@iconify/react'
import { Box, FormControl, Input, InputAdornment, InputLabel, Typography } from '@mui/material'
import React from 'react'

const HeroWidget = () => {
  return (
    <Box className='heroSupport'>
      <Box>
        <Typography className='!text-white !text-[18px] md:!text-[25px] !font-semibold text-center'>
          Comment pouvons-nous vous aider ?
        </Typography>
      </Box>
      <Box className='!max-w-[30ch] md:max-w-[40ch] !mx-auto'>
        <Typography className='!text-white md:!text-[14px]  !text-[12px] font-normal text-center'>
          ou choisissez une catégorie pour trouver rapidement une réponse à votre question.
        </Typography>
      </Box>
      <Box
        sx={{
          width: '100%',
          mt: 6
        }}
        className='scale-[.95] md:scale-100'
      >
        <FormControl variant='standard' sx={{ width: '100%' }}>
          {' '}
          {/* Set desired width here */}
          <Input
            id='input-with-icon-adornment'
            sx={{
              backgroundColor: '#fff',
              paddingLeft: '18px', // Adjust padding here
              paddingBlock: '5px', // Adjust padding here
              borderRadius: 1,
              '& .MuiInputBase-input': {
                padding: '10px'
              },
              '&:hover .MuiInputBase-input': {
                borderBottom: 'none'
              },
              '&:before': {
                // Remove underline before focusing
                borderBottom: 'none'
              },
              '&:after': {
                // Remove underline after focusing
                borderBottom: 'none'
              },
              '&.Mui-focused:before': {
                // Remove underline when focused
                borderBottom: 'none'
              },
              '&.Mui-focused:after': {
                // Remove underline when focused
                borderBottom: 'none'
              },
              '&:hover.Mui-focused:before': {
                // Remove underline when focused
                borderBottom: 'none'
              },
              '&:hover.Mui-focused:after': {
                // Remove underline when focused
                borderBottom: 'none'
              }
            }}
            placeholder='Posez une question....'
            startAdornment={
              <InputAdornment position='start'>
                <Icon icon='mdi:search' fontSize={25} color='#F2660D' />
              </InputAdornment>
            }
          />
        </FormControl>
      </Box>
    </Box>
  )
}

export default HeroWidget
