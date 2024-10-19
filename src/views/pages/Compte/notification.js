import { useState } from 'react'

import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'

import 'react-credit-cards/es/styles-compiled.css'

import { Button, FormControlLabel, Switch, Typography } from '@mui/material'
import { IoStatsChart } from 'react-icons/io5'
import { MdMailOutline } from 'react-icons/md'
import { useSettings } from 'src/@core/hooks/useSettings'

const NotificationTab = () => {
  return (
    <Box
      sx={{
        ml: 5
      }}
    >
      <Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 2,
            mb: 5
          }}
        >
          <IoStatsChart size={20} color='#4c4e64d9' />
          <Typography variant='h6' sx={{ color: '#4c4e64d9' }}>
            Activité
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
            justifyContent: 'start',
            gap: 2,
            mb: 3,
            ml: 3
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 2,
              mb: 3
            }}
          >
            <FormControlLabel
              control={
                <Switch
                  defaultChecked
                  sx={{
                    '& .Mui-checked+.MuiSwitch-track': {
                      backgroundColor: '#F2660D !important'
                    },
                    '& .Mui-checked .MuiSwitch-thumb': {
                      backgroundColor: '#F2660D'
                    }
                  }}
                />
              }
              label='Envoyer un email de confirmation quand un rendez-vous est modifié'
            />
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 2,
              mb: 3
            }}
          >
            <FormControlLabel
              control={
                <Switch
                  defaultChecked
                  sx={{
                    '& .Mui-checked+.MuiSwitch-track': {
                      backgroundColor: '#F2660D !important'
                    },
                    '& .Mui-checked .MuiSwitch-thumb': {
                      backgroundColor: '#F2660D'
                    }
                  }}
                />
              }
              label='Envoyer un email de confirmation quand un rendez-vous est supprimé'
            />
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 2,
              mb: 3
            }}
          >
            <FormControlLabel
              control={
                <Switch
                  defaultChecked
                  sx={{
                    '& .Mui-checked+.MuiSwitch-track': {
                      backgroundColor: '#F2660D !important'
                    },
                    '& .Mui-checked .MuiSwitch-thumb': {
                      backgroundColor: '#F2660D'
                    }
                  }}
                />
              }
              label='Envoyer un email pour valider un rendez-vous'
            />
          </Box>
        </Box>
      </Box>

      <Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 2,
            mb: 5
          }}
        >
          <MdMailOutline size={25} color='#4c4e64d9' />
          <Typography variant='h6' sx={{ color: '#4c4e64d9' }}>
            Application
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
            justifyContent: 'start',
            gap: 2,
            mb: 3,
            ml: 3
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 2,
              mb: 3
            }}
          >
            <FormControlLabel
              control={
                <Switch
                  defaultChecked
                  sx={{
                    '& .Mui-checked+.MuiSwitch-track': {
                      backgroundColor: '#F2660D !important'
                    },
                    '& .Mui-checked .MuiSwitch-thumb': {
                      backgroundColor: '#F2660D'
                    }
                  }}
                />
              }
              label='M’envoyer des communication des parentaires'
            />
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 2,
              mb: 3
            }}
          >
            <FormControlLabel
              control={
                <Switch
                  defaultChecked
                  sx={{
                    '& .Mui-checked+.MuiSwitch-track': {
                      backgroundColor: '#F2660D !important'
                    },
                    '& .Mui-checked .MuiSwitch-thumb': {
                      backgroundColor: '#F2660D'
                    }
                  }}
                />
              }
              label='M’informer des nouveautés'
            />
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 2,
              mb: 3
            }}
          >
            <FormControlLabel
              control={
                <Switch
                  defaultChecked
                  sx={{
                    '& .Mui-checked+.MuiSwitch-track': {
                      backgroundColor: '#F2660D !important'
                    },
                    '& .Mui-checked .MuiSwitch-thumb': {
                      backgroundColor: '#F2660D'
                    }
                  }}
                />
              }
              label='M’informer des professionnels proches de moi'
            />
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'start',
          gap: 2,
          mt: 5,
          mb: 3
        }}
      >
        <Button
          variant='contained'
          sx={{
            borderRadius: 1,
            mr: 3,
            backgroundColor: '#F2660D',
            '&:hover': { backgroundColor: '#F2660D' }
          }}
        >
          sauvegarder
        </Button>
        <Button variant='outlined' color='secondary'>
          Annuler
        </Button>
      </Box>
    </Box>
  )
}

export default NotificationTab
