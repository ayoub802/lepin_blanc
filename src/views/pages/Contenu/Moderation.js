import { Box, styled } from '@mui/system'
import React from 'react'
import { Avatar, Button, Divider, Typography } from '@mui/material'

const ButtonStyled = styled(Button)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    textAlign: 'center',
    backgroundColor: '#F2660D'
  }
}))

const ResetButtonStyled = styled(Button)(({ theme }) => ({
  marginLeft: theme.spacing(4),
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    marginLeft: 0,
    textAlign: 'center',
    marginTop: theme.spacing(4)
  }
}))

const Moderation = ({ setSelectedRequest }) => {
  return (
    <Box>
      <Box className='!px-10 !py-3'>
        <Box>
          {Array.from({ length: 8 }).map((_, index) => (
            <Box key={index}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                  <Avatar alt='Victor Anderson' sx={{ width: 60, height: 60 }} src='/images/avatars/1.png' />
                  <Box>
                    <Typography className='!text-[#454545] !font-poppins !text-[14px] !font-semibold'>
                      Anne-Marie Courdran
                    </Typography>
                    <Typography className='!text-[#807E7E] !font-poppins !text-[12px] !font-medium'>Texte 1</Typography>
                  </Box>
                </Box>

                <ResetButtonStyled
                  color='secondary'
                  variant='outlined'
                  className='!border-[#D56A11] !text-[#D56A11]'
                  onClick={() => setSelectedRequest(true)} // Pass the index to handleViewRequest
                >
                  Voir la demande
                </ResetButtonStyled>
              </Box>
              <Divider sx={{ my: 5 }} />
            </Box>
          ))}
        </Box>
      </Box>

      <ButtonStyled
        component='label'
        variant='contained'
        htmlFor='account-settings-upload-image'
        className='!bg-secondColor hover:!bg-secondColor'
      >
        Retour
      </ButtonStyled>
    </Box>
  )
}

export default Moderation
