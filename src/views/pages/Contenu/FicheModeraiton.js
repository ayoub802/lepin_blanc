import { Box, styled } from '@mui/system'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import {
  Alert,
  AlertTitle,
  FormControl,
  Button,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  CardMedia
} from '@mui/material'
import Grid from '@mui/material/Grid'

const ButtonStyled = styled(Button)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    textAlign: 'center',
    backgroundColor: '#F2660D'
  }
}))

const FicheModeraiton = ({ setSelectedRequest }) => {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({})

  return (
    <Box sx={{ mt: 5 }}>
      <Box sx={{ mx: 5, display: 'flex', alignItems: 'center' }}>
        <div>
          <ButtonStyled
            component='label'
            variant='contained'
            htmlFor='account-settings-upload-image'
            className='!bg-secondColor hover:!bg-secondColor'
            onClick={() => setSelectedRequest(false)} // Pass the index to handleViewRequest
          >
            Retour aux textes à moderer
          </ButtonStyled>
        </div>
      </Box>

      <Box>
        <Box sx={{ my: 8 }} className='md:!mx-4'>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4}>
              <FormControl fullWidth>
                <Controller
                  name='lastName'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange } }) => (
                    <TextField
                      value={value}
                      label='Titre'
                      onChange={onChange}
                      placeholder='Titre'
                      error={Boolean(errors.lastName)}
                      aria-describedby='validation-basic-last-name'
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
                  )}
                />
                {errors.lastName && (
                  <FormHelperText sx={{ color: 'error.main' }} id='validation-basic-last-name'>
                    This field is required
                  </FormHelperText>
                )}
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={4}>
              <FormControl fullWidth>
                <Controller
                  name='lastName'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange } }) => (
                    <TextField
                      value={value}
                      label='Auteur'
                      onChange={onChange}
                      placeholder='Auteur'
                      error={Boolean(errors.lastName)}
                      aria-describedby='validation-basic-last-name'
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
                  )}
                />
                {errors.lastName && (
                  <FormHelperText sx={{ color: 'error.main' }} id='validation-basic-last-name'>
                    This field is required
                  </FormHelperText>
                )}
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <FormControl fullWidth>
                <Controller
                  name='textarea'
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <TextField
                      rows={12}
                      multiline
                      {...field}
                      label='Titre texte'
                      error={Boolean(errors.textarea)}
                      aria-describedby='validation-basic-textarea'
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
                  )}
                />
                {errors.textarea && (
                  <FormHelperText sx={{ color: 'error.main' }} id='validation-basic-textarea'>
                    This field is required
                  </FormHelperText>
                )}
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <CardMedia sx={{ height: 550, borderRadius: '15px' }} image='/assets/theme_mois.svg' />
            </Grid>

            <Grid item xs={12}>
              <FormControl fullWidth>
                <Controller
                  name='lastName'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange } }) => (
                    <TextField
                      value={value}
                      label='Modifier l’image'
                      onChange={onChange}
                      placeholder='Insérer une image'
                      error={Boolean(errors.lastName)}
                      aria-describedby='validation-basic-last-name'
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
                  )}
                />
                {errors.lastName && (
                  <FormHelperText sx={{ color: 'error.main' }} id='validation-basic-last-name'>
                    This field is required
                  </FormHelperText>
                )}
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <Alert severity='warning'>
                <AlertTitle className='!font-normal'>Ce texte est en attente de modération</AlertTitle>
              </Alert>
            </Grid>

            <Grid item xs={12}>
              <Button
                variant='contained'
                sx={{ mr: 3 }}
                className='!bg-secondColor hover:!bg-secondColor !mb-3 md:!mb-0'
              >
                publier le texte
              </Button>
              <Button type='reset' variant='outlined' color='secondary' onClick={() => setFormData(initialData)}>
                annuler
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  )
}

export default FicheModeraiton
