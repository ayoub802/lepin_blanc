// ** React Imports
import { useState } from 'react'

// ** Next Imports
import Link from 'next/link'

// ** MUI Components
import Alert from '@mui/material/Alert'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Checkbox from '@mui/material/Checkbox'
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel'
import IconButton from '@mui/material/IconButton'
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import useMediaQuery from '@mui/material/useMediaQuery'
import { styled, useTheme } from '@mui/material/styles'
import FormHelperText from '@mui/material/FormHelperText'
import InputAdornment from '@mui/material/InputAdornment'
import Typography from '@mui/material/Typography'
import MuiFormControlLabel from '@mui/material/FormControlLabel'
import Header from 'src/@core/components/navbar'
import Footer from 'src/@core/components/footerLanding'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Third Party Imports
import * as yup from 'yup'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

// ** Hooks
import { useAuth } from 'src/hooks/useAuth'
import useBgColor from 'src/@core/hooks/useBgColor'
import { useSettings } from 'src/@core/hooks/useSettings'

// ** Layout Import
import BlankLayout from 'src/@core/layouts/BlankLayout'

const BoxWrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  [theme.breakpoints.down('md')]: {
    maxWidth: 400
  }
}))

const FormControlLabel = styled(MuiFormControlLabel)(({ theme }) => ({
  '& .MuiFormControlLabel-label': {
    fontSize: '0.875rem',
    color: theme.palette.text.secondary
  }
}))

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(5).required()
})

const defaultValues = {
  password: 'admin',
  email: 'admin@materialize.com'
}

const LoginPage = () => {
  const [rememberMe, setRememberMe] = useState(true)
  const [showPassword, setShowPassword] = useState(false)

  // ** Hooks
  const auth = useAuth()
  const theme = useTheme()
  const bgColors = useBgColor()
  const { settings } = useSettings()

  // ** Vars
  const { skin } = settings

  const {
    control,
    setError,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues,
    mode: 'onBlur',
    resolver: yupResolver(schema)
  })

  const onSubmit = data => {
    const { email, password } = data
    auth.login({ email, password, rememberMe }, () => {
      setError('email', {
        type: 'manual',
        message: 'Email or Password is invalid'
      })
    })
  }

  return (
    <Box>
      <Header title={'Abonnement'} link={'/register'} />
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
            <Alert icon={false} sx={{ py: 3, mb: 6, ...bgColors.primaryLight, '& .MuiAlert-message': { p: 0 } }}>
              <Typography variant='caption' sx={{ mb: 2, display: 'block', color: '#F2660D' }}>
                Admin: <strong>admin@materialize.com</strong> / Pass: <strong>admin</strong>
              </Typography>
              <Typography variant='caption' sx={{ display: 'block', color: '#F2660D' }}>
                Client: <strong>client@materialize.com</strong> / Pass: <strong>client</strong>
              </Typography>
            </Alert>
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
            <form noValidate autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
              <FormControl fullWidth sx={{ mb: 8, mt: 5 }}>
                <Controller
                  name='email'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <TextField
                      autoFocus
                      label='Adresse email'
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      error={Boolean(errors.email)}
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
                {errors.email && <FormHelperText sx={{ color: 'error.main' }}>{errors.email.message}</FormHelperText>}
              </FormControl>
              <FormControl fullWidth>
                {/* <InputLabel htmlFor='auth-login-v2-password' error={Boolean(errors.password)}>
                  Password
                </InputLabel> */}
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
                {errors.password && (
                  <FormHelperText sx={{ color: 'error.main' }} id=''>
                    {errors.password.message}
                  </FormHelperText>
                )}
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
                  label='Rester connecté'
                  control={
                    <Checkbox
                      checked={rememberMe}
                      onChange={e => setRememberMe(e.target.checked)}
                      sx={{
                        '&.Mui-checked': {
                          color: '#F2660D' // Change this to your desired checked color
                        }
                      }}
                    />
                  }
                  sx={{
                    '& .MuiFormControlLabel-label': {
                      fontFamily: 'Poppins, sans-serif',
                      color: '#605F5F',
                      fontWeight: 400,
                      fontSize: 15 // Apply Poppins font to the label
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
                Se connecter à la communauté
              </Button>
            </form>
          </BoxWrapper>
        </Box>
      </Box>
      <Footer />
    </Box>
  )
}
LoginPage.getLayout = page => <BlankLayout>{page}</BlankLayout>
LoginPage.guestGuard = true

export default LoginPage
