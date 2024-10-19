// ** React Imports
import { useState } from 'react'

// ** Next Import
import Link from 'next/link'

// ** MUI Components
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Checkbox from '@mui/material/Checkbox'
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel'
import IconButton from '@mui/material/IconButton'
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import useMediaQuery from '@mui/material/useMediaQuery'
import OutlinedInput from '@mui/material/OutlinedInput'
import { styled, useTheme } from '@mui/material/styles'
import InputAdornment from '@mui/material/InputAdornment'
import Typography from '@mui/material/Typography'
import MuiFormControlLabel from '@mui/material/FormControlLabel'
import Header from 'src/@core/components/navbar'
import Footer from 'src/@core/components/footerLanding'
import * as yup from 'yup'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Layout Import
import BlankLayout from 'src/@core/layouts/BlankLayout'

// ** Hooks
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import FormControlLabel from '@mui/material/FormControlLabel'

const BoxWrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  [theme.breakpoints.down('md')]: {
    maxWidth: 400
  }
}))

const Register = () => {
  // ** States
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)

  const schema = yup.object().shape({
    email: yup.string().email().required(),
    nom: yup.string().label().required(),
    password: yup.string().min(5).required()
  })

  const defaultValues = {
    password: '',
    email: '',
    nom: ''
  }

  const {
    control,
    formState: { errors }
  } = useForm({
    defaultValues,
    mode: 'onBlur',
    resolver: yupResolver(schema)
  })

  return (
    <Box>
      <Header title={'Se connecter'} link={'/login'} />
      <Box className='login__banner pb-[100px] pt-[120px] lg:pt-[180px] md:pt-[140px] px-[24px] md:px-[100px] lg:px-[20px] xl:px-[150px]'>
        <Box className='relative z-10 max-w-[60ch] mx-auto lg:mx-0'>
          <Box sx={{ mb: 6 }}>
            <h2 className='font-poppins text-[30px] text-center lg:text-left lg:text-[54px]  md:text-[34px] leading-[40px] md:leading-[45px] lg:leading-[62px] text-white font-medium '>
              Bienvenue dans la communauté du Lapin Blanc
            </h2>
            <p className='font-poppins text-[18px] text-center lg:text-left md:mt-4 leading-[30px] text-white font-[300] mt-1'>
              Laissez votre créativité s’exprimer
            </p>
          </Box>
        </Box>
        <Box
          sx={{
            height: 'auto',
            display: 'flex',
            backgroundColor: 'background.paper',
            position: 'relative',
            zIndex: 1
          }}
          className='md:p-8 p-4 max-w-max xl:max-w-[100%] mx-auto xl:mx-0'
        >
          <BoxWrapper>
            <Box className='mb-4 md:mb-6'>
              <Typography
                variant='body2'
                sx={{
                  fontWeight: 500,
                  fontFamily: 'Poppins',
                  color: '#121212'
                }}
                className='text-center md:text-left !text-[24px] md:!text-[28px]'
              >
                Découvrez la communauté <br />
                gratuitement !
              </Typography>
            </Box>
            <form noValidate autoComplete='off'>
              <FormControl fullWidth sx={{ mb: 8, mt: 5 }}>
                <Controller
                  name='nom'
                  control={control}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <TextField
                      label='Votre nom'
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      placeholder='Votre nom'
                      variant='standard'
                      sx={{
                        '& .MuiInputBase-input': {
                          fontFamily: 'Poppins, sans-serif' // Apply Poppins font to the input
                        },
                        '& .MuiInputLabel-root': {
                          fontFamily: 'Poppins, sans-serif', // Apply Poppins font to the label
                          '&.Mui-focused': {
                            color: '#F2660D' // Change this to your desired label focus color
                          }
                        },
                        '& .MuiInputBase-root': {
                          // '&:hover:before': {
                          //   borderBottom: '2px solid #F2660D' // Change this to your desired hover color
                          // },
                          '&:after': {
                            borderBottom: '2px solid #F2660D' // Change this to your desired focus color
                          },
                          '&:before': {
                            borderBottom: '2px solid #F2660D' // Change this to your desired default color
                          }
                        }
                      }}
                    />
                  )}
                />
              </FormControl>
              <FormControl fullWidth sx={{ mb: 8 }}>
                <Controller
                  name='email'
                  control={control}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <TextField
                      label='Adresse email'
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      placeholder='Adresse email'
                      variant='standard'
                      sx={{
                        '& .MuiInputBase-input': {
                          fontFamily: 'Poppins, sans-serif' // Apply Poppins font to the input
                        },
                        '& .MuiInputLabel-root': {
                          fontFamily: 'Poppins, sans-serif', // Apply Poppins font to the label
                          '&.Mui-focused': {
                            color: '#F2660D' // Change this to your desired label focus color
                          }
                        },
                        '& .MuiInputBase-root': {
                          // '&:hover:before': {
                          //   borderBottom: '2px solid #F2660D' // Change this to your desired hover color
                          // },
                          '&:after': {
                            borderBottom: '2px solid #F2660D' // Change this to your desired focus color
                          },
                          '&:before': {
                            borderBottom: '2px solid #F2660D' // Change this to your desired default color
                          }
                        }
                      }}
                    />
                  )}
                />
              </FormControl>
              <FormControl fullWidth>
                <Controller
                  name='password'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <TextField
                      variant='standard' // Change the variant to 'standard'
                      value={value}
                      onBlur={onBlur}
                      label='Mot de passe'
                      onChange={onChange}
                      id='auth-login-v2-password'
                      error={Boolean(errors.password)}
                      type={showPassword ? 'text' : 'password'}
                      sx={{
                        '& .MuiInputBase-input': {
                          fontFamily: 'Poppins, sans-serif' // Apply Poppins font to the input
                        },
                        '& .MuiInputLabel-root': {
                          fontFamily: 'Poppins, sans-serif', // Apply Poppins font to the label
                          '&.Mui-focused': {
                            color: '#F2660D' // Change this to your desired label focus color
                          }
                        },
                        '& .MuiInputBase-root': {
                          '&:after': {
                            borderBottom: '2px solid #F2660D' // Change this to your desired focus color
                          },
                          '&:before': {
                            borderBottom: '2px solid #F2660D' // Change this to your desired default color
                          }
                        }
                      }}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position='end'>
                            <IconButton
                              edge='end'
                              onMouseDown={e => e.preventDefault()}
                              onClick={() => setShowPassword(!showPassword)}
                            >
                              <Icon
                                icon={showPassword ? 'mdi:eye-outline' : 'mdi:eye-off-outline'}
                                fontSize={20}
                                color={'#F2660D'}
                              />
                            </IconButton>
                          </InputAdornment>
                        )
                      }}
                    />
                  )}
                />
              </FormControl>
              <Box
                sx={{
                  mb: 4,
                  mt: 6,
                  display: 'flex',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  justifyContent: 'space-between'
                }}
              >
                <FormControlLabel
                  label={
                    <Typography
                      sx={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500, color: '#605F5F' }}
                      className='!text-[15px]'
                    >
                      J’accepte&nbsp;
                      <Box
                        component='span'
                        sx={{ color: '#F2660D' }} // Color for "Politique de confidentialité"
                      >
                        Politique de confidentialité
                      </Box>
                      &nbsp;et&nbsp;
                      <Box
                        component='span'
                        sx={{ color: '#F2660D' }} // Color for "les Conditions générales"
                      >
                        les Conditions générales
                      </Box>
                    </Typography>
                  }
                  control={
                    <Checkbox
                      checked={rememberMe}
                      onChange={e => setRememberMe(e.target.checked)}
                      sx={{
                        '&.Mui-checked': {
                          color: '#F2660D' // Checked color for the checkbox
                        }
                      }}
                    />
                  }
                  sx={{
                    '& .MuiFormControlLabel-label': {
                      fontFamily: 'Poppins, sans-serif',
                      fontWeight: 400,
                      fontSize: 15,
                      color: '#605F5F' // Color for the rest of the text
                    }
                  }}
                />
              </Box>
              <Button
                fullWidth
                size='large'
                type='submit'
                variant='contained'
                className='!bg-secondColor !py-5'
                sx={{ mt: 2 }}
              >
                Je rejoins la communauté
              </Button>
            </form>
          </BoxWrapper>
        </Box>
      </Box>
      <Footer />
    </Box>
  )
}
Register.getLayout = page => <BlankLayout>{page}</BlankLayout>
Register.guestGuard = true

export default Register
