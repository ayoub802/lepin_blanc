// ** React Imports
import { forwardRef, useState } from 'react'

// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Radio from '@mui/material/Radio'
import Select from '@mui/material/Select'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import Checkbox from '@mui/material/Checkbox'
import TextField from '@mui/material/TextField'
import FormLabel from '@mui/material/FormLabel'
import CardHeader from '@mui/material/CardHeader'
import InputLabel from '@mui/material/InputLabel'
import IconButton from '@mui/material/IconButton'
import RadioGroup from '@mui/material/RadioGroup'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import FormHelperText from '@mui/material/FormHelperText'
import InputAdornment from '@mui/material/InputAdornment'
import FormControlLabel from '@mui/material/FormControlLabel'

// ** Third Party Imports
import toast from 'react-hot-toast'
import DatePicker from 'react-datepicker'
import { useForm, Controller } from 'react-hook-form'

const defaultValues = {
  dob: null,
  email: '',
  radio: '',
  select: '',
  lastName: '',
  password: '',
  textarea: '',
  firstName: '',
  checkbox: false
}

const FormValidation = () => {
  // ** States
  const [state, setState] = useState({
    password: '',
    showPassword: false
  })

  const [selectedValue, setSelectedValue] = useState('')

  const handleChange = event => {
    setSelectedValue(event.target.value)
  }

  const labelColor = selectedValue ? '#F2660D' : 'inherit' // Color when a radio is selected

  // ** Hooks
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({ defaultValues })

  const handleClickShowPassword = () => {
    setState({ ...state, showPassword: !state.showPassword })
  }
  const onSubmit = () => toast.success('Form Submitted')

  return (
    <Card className='!shadow-none p-0'>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <Controller
                  name='textarea'
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <TextField
                      rows={4}
                      multiline
                      {...field}
                      label='Bio'
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
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <Controller
                  name='firstName'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange } }) => (
                    <TextField
                      value={value}
                      label='Profil Facebook'
                      onChange={onChange}
                      placeholder='le.lapin.blanc'
                      error={Boolean(errors.firstName)}
                      aria-describedby='validation-basic-first-name'
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
                {errors.firstName && (
                  <FormHelperText sx={{ color: 'error.main' }} id='validation-basic-first-name'>
                    This field is required
                  </FormHelperText>
                )}
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <Controller
                  name='lastName'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange } }) => (
                    <TextField
                      value={value}
                      label='Portfolio'
                      onChange={onChange}
                      placeholder='Portfolio'
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

            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <Controller
                  name='lastName'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange } }) => (
                    <TextField
                      value={value}
                      label='Site internet'
                      onChange={onChange}
                      placeholder='Site internet'
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

            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel
                  id='validation-basic-select'
                  error={Boolean(errors.select)}
                  htmlFor='validation-basic-select'
                  sx={{
                    '&.Mui-focused': {
                      color: '#F2660D' // Label color on focus
                    },
                    '&.Mui-error': {
                      color: 'red' // Label color on error
                    }
                  }}
                >
                  Country
                </InputLabel>
                <Controller
                  name='select'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange } }) => (
                    <Select
                      value={value}
                      label='Country'
                      onChange={onChange}
                      error={Boolean(errors.select)}
                      labelId='validation-basic-select'
                      aria-describedby='validation-basic-select'
                      sx={{
                        '&:hover:not(.Mui-focused):not(.Mui-disabled):not(.Mui-error) .MuiOutlinedInput-notchedOutline':
                          {
                            borderColor: '#F2660D'
                          },
                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                          borderColor: '#F2660D'
                        }
                      }}
                    >
                      <MenuItem value='France'>France</MenuItem>
                      <MenuItem value='UK'>UK</MenuItem>
                      <MenuItem value='USA'>USA</MenuItem>
                      <MenuItem value='Belgique'>Belgique</MenuItem>
                    </Select>
                  )}
                />
                {errors.select && (
                  <FormHelperText sx={{ color: 'error.main' }} id='validation-basic-select'>
                    This field is required
                  </FormHelperText>
                )}
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel
                  id='validation-basic-select'
                  error={Boolean(errors.select)}
                  htmlFor='validation-basic-select'
                  sx={{
                    '&.Mui-focused': {
                      color: '#F2660D' // Label color on focus
                    },
                    '&.Mui-error': {
                      color: 'red' // Label color on error
                    }
                  }}
                >
                  Langues
                </InputLabel>
                <Controller
                  name='select'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange } }) => (
                    <Select
                      value={value}
                      label='Langues'
                      onChange={onChange}
                      error={Boolean(errors.select)}
                      labelId='validation-basic-select'
                      aria-describedby='validation-basic-select'
                      sx={{
                        '&:hover:not(.Mui-focused):not(.Mui-disabled):not(.Mui-error) .MuiOutlinedInput-notchedOutline':
                          {
                            borderColor: '#F2660D'
                          },
                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                          borderColor: '#F2660D'
                        }
                      }}
                    >
                      <MenuItem value='français'>Français</MenuItem>
                      <MenuItem value='anglais'>Anglais</MenuItem>
                      <MenuItem value='arabe'>Arabe</MenuItem>
                    </Select>
                  )}
                />
                {errors.select && (
                  <FormHelperText sx={{ color: 'error.main' }} id='validation-basic-select'>
                    This field is required
                  </FormHelperText>
                )}
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControl error={Boolean(errors.radio)}>
                <FormLabel
                  sx={{
                    '&.Mui-focused': {
                      color: '#F2660D'
                    }
                  }}
                >
                  Gender
                </FormLabel>
                <Controller
                  name='radio'
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <RadioGroup
                      row
                      {...field}
                      aria-label='gender'
                      name='validation-basic-radio'
                      onChange={e => {
                        handleChange(e)
                        field.onChange(e) // Ensure the controller updates the form state
                      }}
                    >
                      <FormControlLabel
                        value='homme'
                        label='Homme'
                        sx={errors.radio ? { color: 'error.main' } : null}
                        control={
                          <Radio
                            sx={{
                              ...(selectedValue === 'homme' ? { color: '#F2660D' } : {}),
                              '&.Mui-checked': {
                                color: '#F2660D'
                              }
                            }}
                          />
                        }
                      />
                      <FormControlLabel
                        value='femme'
                        label='Femme'
                        sx={errors.radio ? { color: 'error.main' } : null}
                        control={
                          <Radio
                            sx={{
                              ...(selectedValue === 'femme' ? { color: '#F2660D' } : {}),
                              '&.Mui-checked': {
                                color: '#F2660D'
                              }
                            }}
                          />
                        }
                      />
                      <FormControlLabel
                        value='autre'
                        label='Autre'
                        sx={errors.radio ? { color: 'error.main' } : null}
                        control={
                          <Radio
                            sx={{
                              ...(selectedValue === 'autre' ? { color: '#F2660D' } : {}),
                              '&.Mui-checked': {
                                color: '#F2660D'
                              }
                            }}
                          />
                        }
                      />
                    </RadioGroup>
                  )}
                />
                {errors.radio && (
                  <FormHelperText sx={{ color: 'error.main' }} id='validation-basic-radio'>
                    This field is required
                  </FormHelperText>
                )}
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <Button
                size='contained'
                type='submit'
                sx={{ mr: 3 }}
                variant='contained'
                className='!bg-secondColor hover:!bg-secondColor'
              >
                Enregistrer
              </Button>
              <Button type='reset' variant='outlined' color='secondary'>
                annuler
              </Button>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  )
}

export default FormValidation
