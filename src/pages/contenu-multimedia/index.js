// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** MUI Imports
import Tab from '@mui/material/Tab'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'
import { GoInfo } from 'react-icons/go'
import { FaRegBell, FaRegBookmark } from 'react-icons/fa'
import Icon from 'src/@core/components/icon'
import { useState } from 'react'
import {
  Alert,
  AlertTitle,
  Button,
  Card,
  CardContent,
  FormControl,
  FormControlLabel,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  Switch,
  TextField,
  Typography
} from '@mui/material'
import { PiTextAaFill } from 'react-icons/pi'
import { Box, styled } from '@mui/system'
import { Controller, useForm } from 'react-hook-form'

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

const Contenu = () => {
  const [value, setValue] = useState('1')

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({})

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <CardContent className='!p-0'>
            <TabContext value={value}>
              <TabList
                onChange={handleChange}
                aria-label='icon tabs example'
                sx={{
                  borderBottomWidth: 1,
                  borderColor: '#4c4e641f',
                  '& .MuiTabs-indicator': {
                    backgroundColor: '#F2660D'
                  }
                }}
              >
                <Tab
                  value='1'
                  sx={{
                    flexDirection: 'row',
                    gap: 2,
                    alignItems: 'center',
                    py: 0,
                    '&.Mui-selected': {
                      color: '#F2660D',
                      borderColor: '#F2660D'
                    }
                  }}
                  label='Mes textes'
                  className='!min-h-[55px]'
                  icon={<PiTextAaFill size={25} className='!mb-0' />}
                />
              </TabList>
              <TabPanel value='1'>
                <Box sx={{ mt: 7 }}>
                  <Box sx={{ mx: 5, display: 'flex', alignItems: 'center' }}>
                    <div>
                      <ButtonStyled
                        component='label'
                        variant='contained'
                        htmlFor='account-settings-upload-image'
                        className='!bg-secondColor hover:!bg-secondColor'
                      >
                        Ajouter un texte
                      </ButtonStyled>
                      <ResetButtonStyled
                        color='secondary'
                        variant='outlined'
                        className='!border-[#FF4D49] !text-[#FF4D49]'
                      >
                        supprimer
                      </ResetButtonStyled>
                      <Typography sx={{ mt: 4, color: 'text.disabled' }}>
                        Fichié autorisé : DOC, PDF, JPG ou PNG{' '}
                      </Typography>
                    </div>
                  </Box>
                  <Box
                    className='md:!mx-8 !mx-2'
                    sx={{ my: 8, overflow: 'hidden', flexDirection: 'column', gap: 5, display: 'flex' }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <Typography sx={{ color: '#F2660D' }}>Titre du texte</Typography>
                      <Typography sx={{ color: '#F2660D' }}>Publié</Typography>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <Box>
                        <Typography className='!text-[#4c4e64c9] !text-[16px] !font-semibold'>Titre texte 1</Typography>
                        <Typography className='!text-[#4C4E6468] !text-[14px]'>Description</Typography>
                      </Box>

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
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <Box>
                        <Typography className='!text-[#4c4e64c9] !text-[16px] !font-semibold'>Titre texte 2</Typography>
                        <Typography className='!text-[#4C4E6468] !text-[14px]'>Description</Typography>
                      </Box>

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
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <Box>
                        <Typography className='!text-[#4c4e64c9] !text-[16px] !font-semibold'>Titre texte 3</Typography>
                        <Typography className='!text-[#4C4E6468] !text-[14px]'>Description</Typography>
                      </Box>

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
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <Box>
                        <Typography className='!text-[#4c4e64c9] !text-[16px] !font-semibold'>Titre texte 4</Typography>
                        <Typography className='!text-[#4C4E6468] !text-[14px]'>Description</Typography>
                      </Box>

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
                    </Box>
                  </Box>

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
                                label='Description'
                                onChange={onChange}
                                placeholder='Description'
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
                            Status
                          </InputLabel>
                          <Controller
                            name='select'
                            control={control}
                            rules={{ required: true }}
                            render={({ field: { value, onChange } }) => (
                              <Select
                                value={value}
                                label='Status'
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

                      <Grid item xs={12}>
                        <FormControl fullWidth>
                          <Controller
                            name='textarea'
                            control={control}
                            rules={{ required: true }}
                            render={({ field }) => (
                              <TextField
                                rows={18}
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

                      <Grid item xs={12}>
                        <FormControl fullWidth>
                          <Controller
                            name='lastName'
                            control={control}
                            rules={{ required: true }}
                            render={({ field: { value, onChange } }) => (
                              <TextField
                                value={value}
                                label='Ajouter une image'
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
                          <AlertTitle className='!font-normal'>
                            Afin de préserver l’éthique de votre plateforme, tous les textes sont soumis à modération
                          </AlertTitle>
                        </Alert>
                      </Grid>

                      <Grid item xs={12}>
                        <Button
                          variant='contained'
                          sx={{ mr: 3 }}
                          className='!bg-secondColor hover:!bg-secondColor !mb-3 md:!mb-0'
                        >
                          soumettRe au moderateur
                        </Button>
                        <Button
                          type='reset'
                          variant='outlined'
                          color='secondary'
                          onClick={() => setFormData(initialData)}
                        >
                          annuler
                        </Button>
                      </Grid>
                    </Grid>
                  </Box>
                </Box>
              </TabPanel>
            </TabContext>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Contenu
