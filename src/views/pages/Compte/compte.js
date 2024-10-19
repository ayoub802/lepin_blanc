// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Select from '@mui/material/Select'
import Dialog from '@mui/material/Dialog'
import Divider from '@mui/material/Divider'
import { styled } from '@mui/material/styles'
import Checkbox from '@mui/material/Checkbox'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import InputLabel from '@mui/material/InputLabel'
import CardHeader from '@mui/material/CardHeader'
import FormControl from '@mui/material/FormControl'
import CardContent from '@mui/material/CardContent'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import FormHelperText from '@mui/material/FormHelperText'
import InputAdornment from '@mui/material/InputAdornment'
import Button from '@mui/material/Button'
import FormControlLabel from '@mui/material/FormControlLabel'

// ** Third Party Imports
import { useForm, Controller } from 'react-hook-form'

// ** Icon Imports
import Icon from 'src/@core/components/icon'
import { Alert, AlertTitle } from '@mui/material'

const initialData = {
  state: '',
  number: '',
  address: '',
  zipCode: '',
  lastName: 'Doe',
  currency: 'usd',
  firstName: 'John',
  language: 'arabic',
  timezone: 'gmt-12',
  country: 'australia',
  email: 'john.doe@example.com',
  organization: 'Pixinvent'
}

const ImgStyled = styled('img')(({ theme }) => ({
  width: 120,
  height: 120,
  marginRight: theme.spacing(5),
  borderRadius: theme.shape.borderRadius
}))

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

const AccountSettings = () => {
  // ** State
  const [open, setOpen] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [userInput, setUserInput] = useState('yes')
  const [formData, setFormData] = useState(initialData)
  const [imgSrc, setImgSrc] = useState('/images/avatars/1.png')
  const [secondDialogOpen, setSecondDialogOpen] = useState(false)

  // ** Hooks
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({ defaultValues: { checkbox: false } })
  const handleClose = () => setOpen(false)
  const handleSecondDialogClose = () => setSecondDialogOpen(false)
  const onSubmit = () => setOpen(true)

  const handleConfirmation = value => {
    handleClose()
    setUserInput(value)
    setSecondDialogOpen(true)
  }

  const handleInputImageChange = file => {
    const reader = new FileReader()
    const { files } = file.target
    if (files && files.length !== 0) {
      reader.onload = () => setImgSrc(reader.result)
      reader.readAsDataURL(files[0])
      if (reader.result !== null) {
        setInputValue(reader.result)
      }
    }
  }

  const handleInputImageReset = () => {
    setInputValue('')
    setImgSrc('/images/avatars/1.png')
  }

  const handleFormChange = (field, value) => {
    setFormData({ ...formData, [field]: value })
  }

  const formatDate = value => {
    // Remove non-digit characters
    const cleaned = value.replace(/\D/g, '')

    // Format the cleaned string
    const match = cleaned.match(/^(\d{0,2})(\d{0,2})(\d{0,4})$/)
    if (match) {
      return `${match[1]}${match[2] ? '/' : ''}${match[2]}${match[3] ? '/' : ''}${match[3]}`
    }

    return value
  }

  const handleChange = e => {
    const formattedValue = formatDate(e.target.value)
    handleFormChange('birth', formattedValue)
  }

  return (
    <Grid container spacing={6}>
      {/* Account Details Card */}
      <Grid item xs={12}>
        <Card className='!shadow-none p-0'>
          <form>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <ImgStyled src={imgSrc} alt='Profile Pic' />
                <div>
                  <ButtonStyled
                    component='label'
                    variant='contained'
                    htmlFor='account-settings-upload-image'
                    className='!bg-secondColor hover:!bg-secondColor'
                  >
                    ajouter une photo
                    <input
                      hidden
                      type='file'
                      value={inputValue}
                      accept='image/png, image/jpeg'
                      onChange={handleInputImageChange}
                      id='account-settings-upload-image'
                    />
                  </ButtonStyled>
                  <ResetButtonStyled
                    color='secondary'
                    variant='outlined'
                    onClick={handleInputImageReset}
                    className='!border-[#FF4D49] !text-[#FF4D49]'
                  >
                    supprimer
                  </ResetButtonStyled>
                  <Typography sx={{ mt: 5, color: 'text.disabled' }}>Fichié autorisé : JPG, GIF ou PNG. </Typography>
                </div>
              </Box>
            </CardContent>
            <Divider />
            <CardContent>
              <Grid container spacing={6}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label='Nom d’utilisateur'
                    placeholder='John'
                    value={formData.firstName}
                    onChange={e => handleFormChange('firstName', e.target.value)}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                          borderColor: 'grey' // Default border color
                        },
                        '&:hover fieldset': {
                          borderColor: 'blue' // Border color on hover
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#F2660D' // Border color on focus
                        },
                        '& .MuiInputLabel-root': {
                          color: 'grey' // Default label color
                        },
                        '& .MuiInputLabel-root.Mui-focused': {
                          color: '#F2660D' // Label color on focus
                        }
                      }
                    }}
                    InputLabelProps={{
                      sx: {
                        '&.Mui-focused': {
                          color: '#F2660D' // Label color on focus
                        },
                        '&.Mui-focused.Mui-error': {
                          color: 'red' // Label color on focus
                        }
                      }
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label='Nom'
                    placeholder='Doe'
                    value={formData.lastName}
                    onChange={e => handleFormChange('lastName', e.target.value)}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                          borderColor: 'grey' // Default border color
                        },
                        '&:hover fieldset': {
                          borderColor: 'blue' // Border color on hover
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#F2660D' // Border color on focus
                        },
                        '& .MuiInputLabel-root': {
                          color: 'grey' // Default label color
                        },
                        '& .MuiInputLabel-root.Mui-focused': {
                          color: '#F2660D' // Label color on focus
                        }
                      }
                    }}
                    InputLabelProps={{
                      sx: {
                        '&.Mui-focused': {
                          color: '#F2660D' // Label color on focus
                        },
                        '&.Mui-focused.Mui-error': {
                          color: 'red' // Label color on focus
                        }
                      }
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    type='email'
                    label='Email'
                    value={formData.email}
                    placeholder='john.doe@example.com'
                    onChange={e => handleFormChange('email', e.target.value)}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                          borderColor: 'grey' // Default border color
                        },
                        '&:hover fieldset': {
                          borderColor: 'blue' // Border color on hover
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#F2660D' // Border color on focus
                        },
                        '& .MuiInputLabel-root': {
                          color: 'grey' // Default label color
                        },
                        '& .MuiInputLabel-root.Mui-focused': {
                          color: '#F2660D' // Label color on focus
                        }
                      }
                    }}
                    InputLabelProps={{
                      sx: {
                        '&.Mui-focused': {
                          color: '#F2660D' // Label color on focus
                        },
                        '&.Mui-focused.Mui-error': {
                          color: 'red' // Label color on focus
                        }
                      }
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label='Date de naissance'
                    placeholder='--/--/----'
                    value={formData.birth}
                    onChange={handleChange}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                          borderColor: 'grey' // Default border color
                        },
                        '&:hover fieldset': {
                          borderColor: 'blue' // Border color on hover
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#F2660D' // Border color on focus
                        },
                        '& .MuiInputLabel-root': {
                          color: 'grey' // Default label color
                        },
                        '& .MuiInputLabel-root.Mui-focused': {
                          color: '#F2660D' // Label color on focus
                        }
                      }
                    }}
                    InputLabelProps={{
                      sx: {
                        '&.Mui-focused': {
                          color: '#F2660D' // Label color on focus
                        },
                        '&.Mui-focused.Mui-error': {
                          color: 'red' // Label color on focus
                        }
                      }
                    }}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label='Abonnement'
                    placeholder='Address'
                    value={formData.address}
                    onChange={e => handleFormChange('address', e.target.value)}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                          borderColor: 'grey' // Default border color
                        },
                        '&:hover fieldset': {
                          borderColor: 'blue' // Border color on hover
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#F2660D' // Border color on focus
                        },
                        '& .MuiInputLabel-root': {
                          color: 'grey' // Default label color
                        },
                        '& .MuiInputLabel-root.Mui-focused': {
                          color: '#F2660D' // Label color on focus
                        }
                      }
                    }}
                    InputLabelProps={{
                      sx: {
                        '&.Mui-focused': {
                          color: '#F2660D' // Label color on focus
                        },
                        '&.Mui-focused.Mui-error': {
                          color: 'red' // Label color on focus
                        }
                      }
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    type='number'
                    label='Téléphone'
                    value={formData.number}
                    placeholder='202 555 0111'
                    onChange={e => handleFormChange('number', e.target.value)}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                          borderColor: 'grey' // Default border color
                        },
                        '&:hover fieldset': {
                          borderColor: 'blue' // Border color on hover
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#F2660D' // Border color on focus
                        },
                        '& .MuiInputLabel-root': {
                          color: 'grey' // Default label color
                        },
                        '& .MuiInputLabel-root.Mui-focused': {
                          color: '#F2660D' // Label color on focus
                        }
                      }
                    }}
                    InputLabelProps={{
                      sx: {
                        '&.Mui-focused': {
                          color: '#F2660D' // Label color on focus
                        },
                        '&.Mui-focused.Mui-error': {
                          color: 'red' // Label color on focus
                        }
                      }
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Alert severity='warning'>
                    <AlertTitle>Votre email n’a pas été confirmé. Veuillez vérifier votre boite email.</AlertTitle>
                    Envoyer la confirmation
                  </Alert>
                </Grid>
                <Grid item xs={12}>
                  <Button variant='contained' sx={{ mr: 3 }} className='!bg-secondColor hover:!bg-secondColor'>
                    Save Changes
                  </Button>
                  <Button type='reset' variant='outlined' color='secondary' onClick={() => setFormData(initialData)}>
                    annuler
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </form>
        </Card>
      </Grid>
    </Grid>
  )
}

export default AccountSettings
