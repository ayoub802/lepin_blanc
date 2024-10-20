// ** React Imports
import { forwardRef, useState } from 'react'

// ** MUI Imports
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import { Box, useTheme } from '@mui/system'
import { Card, CardContent, FormControl, Grid, InputAdornment, InputLabel, MenuItem, Select } from '@mui/material'
import DatePicker from 'react-datepicker'
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'
import { useRouter } from 'next/router'

const index = () => {
  const [date, setDate] = useState(new Date())

  const theme = useTheme()

  const { direction } = theme

  const router = useRouter()

  const popperPlacement = direction === 'ltr' ? 'bottom-start' : 'bottom-end'

  const PickersComponent = forwardRef(({ ...props }, ref) => {
    // ** Props
    const { label, readOnly } = props

    return (
      <TextField
        inputRef={ref}
        {...props}
        label={label || ''}
        {...(readOnly && { inputProps: { readOnly: true } })}
        sx={{
          width: '100%',
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
        InputProps={{
          endAdornment: (
            <InputAdornment position='end'>
              <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'>
                <path
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M16.2822 3C16.2822 2.58579 15.9464 2.25 15.5322 2.25C15.118 2.25 14.7822 2.58579 14.7822 3V4.25H8.28223V3C8.28223 2.58579 7.94644 2.25 7.53223 2.25C7.11801 2.25 6.78223 2.58579 6.78223 3V4.25H5.53223C4.01344 4.25 2.78223 5.48122 2.78223 7V11V19C2.78223 20.5188 4.01344 21.75 5.53223 21.75H17.5322C19.051 21.75 20.2822 20.5188 20.2822 19V11V7C20.2822 5.48122 19.051 4.25 17.5322 4.25H16.2822V3ZM18.7822 10.25V7C18.7822 6.30964 18.2226 5.75 17.5322 5.75H16.2822V7C16.2822 7.41421 15.9464 7.75 15.5322 7.75C15.118 7.75 14.7822 7.41421 14.7822 7V5.75H8.28223V7C8.28223 7.41421 7.94644 7.75 7.53223 7.75C7.11801 7.75 6.78223 7.41421 6.78223 7V5.75H5.53223C4.84187 5.75 4.28223 6.30964 4.28223 7V10.25H18.7822ZM4.28223 11.75H18.7822V19C18.7822 19.6904 18.2226 20.25 17.5322 20.25H5.53223C4.84187 20.25 4.28223 19.6904 4.28223 19V11.75Z'
                  fill='#0BAACA'
                />
              </svg>
            </InputAdornment>
          )
        }}
      />
    )
  })

  return (
    <Box
      sx={{
        maxWidth: {
          xs: '100%',
          md: '85%'
        },
        mx: 'auto'
      }}
    >
      <Card className='!rounded-none !shadow-none'>
        <CardContent className='md:!p-10'>
          <Box sx={{ display: 'grid', gap: 8 }}>
            <Box>
              <InputLabel
                id='name'
                htmlFor='name'
                sx={{
                  color: '#3E3E59',
                  mb: 2,
                  fontSize: '16px',
                  fontWeight: '500',
                  '&.Mui-focused': {
                    color: '#F2660D' // Label color on focus
                  },
                  '&.Mui-error': {
                    color: 'red' // Label color on error
                  }
                }}
                className='!font-poppins'
              >
                Nom de l’évènement
              </InputLabel>
              <TextField
                id='name'
                fullWidth
                type='text'
                label='Taper ici'
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
            </Box>

            <Box>
              <InputLabel
                id='name'
                htmlFor='name'
                sx={{
                  color: '#3E3E59',
                  mb: 2,
                  fontSize: '16px',
                  fontWeight: '500',
                  '&.Mui-focused': {
                    color: '#F2660D' // Label color on focus
                  },
                  '&.Mui-error': {
                    color: 'red' // Label color on error
                  }
                }}
                className='!font-poppins'
              >
                Type d’évènement
              </InputLabel>

              <FormControl sx={{ width: '100%', maxWidth: '100%' }}>
                <InputLabel
                  id='demo-simple-select-outlined-label'
                  sx={{
                    '&.Mui-focused': {
                      color: '#F2660D' // Label color on focus
                    },
                    '&.Mui-error': {
                      color: 'red' // Label color on error
                    }
                  }}
                >
                  Sélectionnez un type d’évènement
                </InputLabel>
                <Select
                  label='Sélectionnez un type d’évènement'
                  defaultValue=''
                  sx={{
                    width: '100%',
                    maxWidth: '100%',
                    '&:hover:not(.Mui-focused):not(.Mui-disabled):not(.Mui-error) .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#F2660D'
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#F2660D'
                    }
                  }}
                  id='demo-simple-select-outlined'
                  labelId='demo-simple-select-outlined-label'
                >
                  <MenuItem value=''>
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Box>

            <Box>
              <InputLabel
                id='name'
                htmlFor='name'
                sx={{
                  color: '#3E3E59',
                  mb: 2,
                  fontSize: '16px',
                  fontWeight: '500',
                  '&.Mui-focused': {
                    color: '#F2660D' // Label color on focus
                  },
                  '&.Mui-error': {
                    color: 'red' // Label color on error
                  }
                }}
                className='!font-poppins'
              >
                Catégorie
              </InputLabel>
              <TextField
                id='name'
                fullWidth
                type='text'
                label='Catégorie'
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
            </Box>

            <Box>
              <InputLabel
                id='name'
                htmlFor='name'
                sx={{
                  color: '#3E3E59',
                  mb: 2,
                  fontSize: '16px',
                  fontWeight: '500',
                  '&.Mui-focused': {
                    color: '#F2660D' // Label color on focus
                  },
                  '&.Mui-error': {
                    color: 'red' // Label color on error
                  }
                }}
                className='!font-poppins'
              >
                Ajouter une image
              </InputLabel>
              <TextField
                id='name'
                fullWidth
                type='text'
                label='Ajouter une image'
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
            </Box>

            <Box>
              <InputLabel
                id='name'
                htmlFor='name'
                sx={{
                  color: '#3E3E59',
                  mb: 2,
                  fontSize: '16px',
                  fontWeight: '500',
                  '&.Mui-focused': {
                    color: '#F2660D' // Label color on focus
                  },
                  '&.Mui-error': {
                    color: 'red' // Label color on error
                  }
                }}
                className='!font-poppins'
              >
                Accès
              </InputLabel>

              <FormControl sx={{ width: '100%', maxWidth: '100%' }}>
                <InputLabel
                  id='demo-simple-select-outlined-label'
                  sx={{
                    '&.Mui-focused': {
                      color: '#F2660D' // Label color on focus
                    },
                    '&.Mui-error': {
                      color: 'red' // Label color on error
                    }
                  }}
                >
                  Sélectionnez un type d’accès
                </InputLabel>
                <Select
                  label='Sélectionnez un type d’accès'
                  defaultValue=''
                  sx={{
                    width: '100%',
                    maxWidth: '100%',
                    '&:hover:not(.Mui-focused):not(.Mui-disabled):not(.Mui-error) .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#F2660D'
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#F2660D'
                    }
                  }}
                  id='demo-simple-select-outlined'
                  labelId='demo-simple-select-outlined-label'
                >
                  <MenuItem value=''>
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Box>

            <Grid container spacing={5}>
              <Grid item xs={12} md={6}>
                <Box>
                  <InputLabel
                    id='name'
                    htmlFor='name'
                    sx={{
                      color: '#3E3E59',
                      mb: 2,
                      fontSize: '16px',
                      fontWeight: '500',
                      '&.Mui-focused': {
                        color: '#F2660D' // Label color on focus
                      },
                      '&.Mui-error': {
                        color: 'red' // Label color on error
                      }
                    }}
                    className='!font-poppins'
                  >
                    Date de début
                  </InputLabel>
                  <DatePickerWrapper>
                    <DatePicker
                      selected={date}
                      id='basic-input'
                      popperPlacement={popperPlacement}
                      onChange={date => setDate(date)}
                      placeholderText='Sélectionnez une date'
                      customInput={<PickersComponent label='Sélectionnez une date' />}
                    />
                  </DatePickerWrapper>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box>
                  <InputLabel
                    id='name'
                    htmlFor='name'
                    sx={{
                      color: '#3E3E59',
                      mb: 2,
                      fontSize: '16px',
                      fontWeight: '500',
                      '&.Mui-focused': {
                        color: '#F2660D' // Label color on focus
                      },
                      '&.Mui-error': {
                        color: 'red' // Label color on error
                      }
                    }}
                    className='!font-poppins'
                  >
                    Date de fin
                  </InputLabel>
                  <DatePickerWrapper>
                    <DatePicker
                      selected={date}
                      id='basic-input'
                      popperPlacement={popperPlacement}
                      onChange={date => setDate(date)}
                      placeholderText='Sélectionnez une date'
                      customInput={<PickersComponent label='Sélectionnez une date' />}
                    />
                  </DatePickerWrapper>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box>
                  <InputLabel
                    id='name'
                    htmlFor='name'
                    sx={{
                      color: '#3E3E59',
                      mb: 2,
                      fontSize: '16px',
                      fontWeight: '500',
                      '&.Mui-focused': {
                        color: '#F2660D' // Label color on focus
                      },
                      '&.Mui-error': {
                        color: 'red' // Label color on error
                      }
                    }}
                    className='!font-poppins'
                  >
                    Heure de début
                  </InputLabel>
                  <DatePickerWrapper>
                    <DatePicker
                      showTimeSelect
                      showTimeSelectOnly
                      dateFormat='h:mm aa'
                      timeIntervals={15}
                      selected={date}
                      id='basic-input'
                      popperPlacement={popperPlacement}
                      onChange={date => setDate(date)}
                      placeholderText='Sélectionnez une date'
                      customInput={<PickersComponent label='Sélectionnez une date' />}
                    />
                  </DatePickerWrapper>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box>
                  <InputLabel
                    id='name'
                    htmlFor='name'
                    sx={{
                      color: '#3E3E59',
                      mb: 2,
                      fontSize: '16px',
                      fontWeight: '500',
                      '&.Mui-focused': {
                        color: '#F2660D' // Label color on focus
                      },
                      '&.Mui-error': {
                        color: 'red' // Label color on error
                      }
                    }}
                    className='!font-poppins'
                  >
                    Heure de fin
                  </InputLabel>
                  <DatePickerWrapper>
                    <DatePicker
                      showTimeSelect
                      showTimeSelectOnly
                      dateFormat='h:mm aa'
                      timeIntervals={15}
                      selected={date}
                      id='basic-input'
                      popperPlacement={popperPlacement}
                      onChange={date => setDate(date)}
                      placeholderText='Sélectionnez une date'
                      customInput={<PickersComponent label='Sélectionnez une date' />}
                    />
                  </DatePickerWrapper>
                </Box>
              </Grid>
            </Grid>

            <Box>
              <InputLabel
                id='name'
                htmlFor='name'
                sx={{
                  color: '#3E3E59',
                  mb: 2,
                  fontSize: '16px',
                  fontWeight: '500',
                  '&.Mui-focused': {
                    color: '#F2660D' // Label color on focus
                  },
                  '&.Mui-error': {
                    color: 'red' // Label color on error
                  }
                }}
                className='!font-poppins'
              >
                Description
              </InputLabel>
              <TextField
                id='name'
                fullWidth
                type='text'
                rows={4}
                multiline
                label='Ajouter une image'
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
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'start',
              alignItems: 'center',
              gap: 3,
              mt: 8
            }}
          >
            <Button
              variant='contained'
              sx={{ mr: 3 }}
              onClick={() => router.back()}
              className='!bg-secondColor hover:!bg-secondColor'
            >
              enregistrer
            </Button>
            <Button type='reset' variant='outlined' color='secondary' onClick={() => router.back()}>
              annuler
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  )
}

export default index
