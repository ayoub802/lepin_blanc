// ** React Imports
import { useState, useEffect, forwardRef, useCallback, Fragment } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import Select from '@mui/material/Select'
import Switch from '@mui/material/Switch'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import InputLabel from '@mui/material/InputLabel'
import Typography from '@mui/material/Typography'
import FormControl from '@mui/material/FormControl'
import FormHelperText from '@mui/material/FormHelperText'
import FormControlLabel from '@mui/material/FormControlLabel'

// ** Third Party Imports
import DatePicker from 'react-datepicker'
import { useForm, Controller } from 'react-hook-form'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Styled Components
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'

const capitalize = string => string && string[0].toUpperCase() + string.slice(1)

const defaultState = {
  url: '',
  title: '',
  guests: [],
  allDay: true,
  description: '',
  endDate: new Date(),
  calendar: 'Business',
  startDate: new Date()
}

const AddEventSidebar = props => {
  // ** Props
  const {
    store,
    dispatch,
    addEvent,
    updateEvent,
    drawerWidth,
    calendarApi,
    deleteEvent,
    handleSelectEvent,
    addEventSidebarOpen,
    handleAddEventSidebarToggle
  } = props

  // ** States
  const [values, setValues] = useState(defaultState)

  const {
    control,
    setValue,
    clearErrors,
    handleSubmit,
    formState: { errors }
  } = useForm({ defaultValues: { title: '' } })

  const handleSidebarClose = async () => {
    setValues(defaultState)
    clearErrors()
    dispatch(handleSelectEvent(null))
    handleAddEventSidebarToggle()
  }

  const onSubmit = data => {
    const modifiedEvent = {
      url: values.url,
      display: 'block',
      title: data.title,
      end: values.endDate,
      allDay: values.allDay,
      start: values.startDate,
      extendedProps: {
        calendar: capitalize(values.calendar),
        guests: values.guests && values.guests.length ? values.guests : undefined,
        description: values.description.length ? values.description : undefined
      }
    }
    console.log('The Data => ', modifiedEvent)
    if (store.selectedEvent === null || (store.selectedEvent !== null && !store.selectedEvent.title.length)) {
      dispatch(addEvent(modifiedEvent))
    } else {
      dispatch(updateEvent({ id: store.selectedEvent.id, ...modifiedEvent }))
    }
    calendarApi.refetchEvents()
    handleSidebarClose()
  }

  const handleDeleteEvent = () => {
    if (store.selectedEvent) {
      dispatch(deleteEvent(store.selectedEvent.id))
    }

    // calendarApi.getEventById(store.selectedEvent.id).remove()
    handleSidebarClose()
  }

  const handleStartDate = date => {
    if (date > values.endDate) {
      setValues({ ...values, startDate: new Date(date), endDate: new Date(date) })
    }
  }

  const resetToStoredValues = useCallback(() => {
    if (store.selectedEvent !== null) {
      const event = store.selectedEvent
      setValue('title', event.title || '')
      setValues({
        url: event.url || '',
        title: event.title || '',
        allDay: event.allDay,
        guests: event.extendedProps.guests || [],
        description: event.extendedProps.description || '',
        calendar: event.extendedProps.calendar || 'Business',
        endDate: event.end !== null ? event.end : event.start,
        startDate: event.start !== null ? event.start : new Date()
      })
    }
  }, [setValue, store.selectedEvent])

  const resetToEmptyValues = useCallback(() => {
    setValue('title', '')
    setValues(defaultState)
  }, [setValue])
  useEffect(() => {
    if (store.selectedEvent !== null) {
      resetToStoredValues()
    } else {
      resetToEmptyValues()
    }
  }, [addEventSidebarOpen, resetToStoredValues, resetToEmptyValues, store.selectedEvent])

  const PickersComponent = forwardRef(({ ...props }, ref) => {
    return (
      <TextField
        inputRef={ref}
        fullWidth
        {...props}
        label={props.label || ''}
        error={props.error}
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
      />
    )
  })

  const RenderSidebarFooter = () => {
    if (store.selectedEvent === null || (store.selectedEvent !== null && !store.selectedEvent.title.length)) {
      return (
        <Fragment>
          <Button
            size='large'
            type='submit'
            variant='contained'
            sx={{ mr: 4 }}
            className='!bg-secondColor hover:!bg-secondColor'
          >
            Add
          </Button>
          <Button size='large' variant='outlined' color='secondary' onClick={resetToEmptyValues}>
            Annuler
          </Button>
        </Fragment>
      )
    } else {
      return (
        <Fragment>
          <Button size='large' type='submit' variant='contained' sx={{ mr: 4 }}>
            Update
          </Button>
          <Button size='large' variant='outlined' color='secondary' onClick={resetToStoredValues}>
            Reset
          </Button>
        </Fragment>
      )
    }
  }

  return (
    <Drawer
      anchor='right'
      open={addEventSidebarOpen}
      onClose={handleSidebarClose}
      ModalProps={{ keepMounted: true }}
      sx={{ '& .MuiDrawer-paper': { width: ['100%', drawerWidth] } }}
    >
      <Box
        className='sidebar-header'
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          backgroundColor: 'background.default',
          p: theme => theme.spacing(3, 3.255, 3, 5.255)
        }}
      >
        <Typography variant='h6'>
          {store.selectedEvent !== null && store.selectedEvent.title.length ? 'Update Event' : 'Add Event'}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {store.selectedEvent !== null && store.selectedEvent.title.length ? (
            <IconButton
              size='small'
              onClick={handleDeleteEvent}
              sx={{ color: 'text.primary', mr: store.selectedEvent !== null ? 1 : 0 }}
            >
              <Icon icon='mdi:delete-outline' fontSize={20} />
            </IconButton>
          ) : null}
          <IconButton size='small' onClick={handleSidebarClose} sx={{ color: 'text.primary' }}>
            <Icon icon='mdi:close' fontSize={20} />
          </IconButton>
        </Box>
      </Box>
      <Box className='sidebar-body' sx={{ p: theme => theme.spacing(5, 6) }}>
        <DatePickerWrapper>
          <form onSubmit={handleSubmit(onSubmit)} autoComplete='off'>
            <FormControl fullWidth sx={{ mb: 6 }}>
              <Controller
                name='title'
                control={control}
                rules={{ required: true }}
                render={({ field: { value, onChange } }) => (
                  <TextField
                    label='Title'
                    value={value}
                    onChange={onChange}
                    error={Boolean(errors.title)}
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
              {errors.title && (
                <FormHelperText sx={{ color: 'error.main' }} id='event-title-error'>
                  This field is required
                </FormHelperText>
              )}
            </FormControl>
            <FormControl fullWidth sx={{ mb: 6 }}>
              <InputLabel
                id='event-calendar'
                sx={{
                  color: 'grey', // Default label color
                  '&.Mui-focused': {
                    color: '#F2660D' // Label color on focus
                  },
                  '&.Mui-error': {
                    color: 'red' // Label color on error
                  }
                }}
              >
                Calendar
              </InputLabel>
              <Select
                label='Calendar'
                value={values.calendar}
                labelId='event-calendar'
                sx={{
                  '&:hover:not(.Mui-focused):not(.Mui-disabled):not(.Mui-error) .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#F2660D'
                  },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#F2660D'
                  }
                }}
                onChange={e => setValues({ ...values, calendar: e.target.value })}
              >
                <MenuItem value='Personal'>Personal</MenuItem>
                <MenuItem value='Business'>Business</MenuItem>
                <MenuItem value='Family'>Family</MenuItem>
                <MenuItem value='Holiday'>Holiday</MenuItem>
                <MenuItem value='ETC'>ETC</MenuItem>
              </Select>
            </FormControl>
            <Box sx={{ mb: 6 }}>
              <DatePicker
                selectsStart
                id='event-start-date'
                endDate={values.endDate}
                selected={values.startDate}
                startDate={values.startDate}
                showTimeSelect={!values.allDay}
                dateFormat={!values.allDay ? 'yyyy-MM-dd hh:mm' : 'yyyy-MM-dd'}
                customInput={<PickersComponent label='Start Date' registername='startDate' />}
                onChange={date => setValues({ ...values, startDate: new Date(date) })}
                onSelect={handleStartDate}
              />
            </Box>
            <Box sx={{ mb: 6 }}>
              <DatePicker
                selectsEnd
                id='event-end-date'
                endDate={values.endDate}
                selected={values.endDate}
                minDate={values.startDate}
                startDate={values.startDate}
                showTimeSelect={!values.allDay}
                dateFormat={!values.allDay ? 'yyyy-MM-dd hh:mm' : 'yyyy-MM-dd'}
                customInput={<PickersComponent label='End Date' registername='endDate' />}
                onChange={date => setValues({ ...values, endDate: new Date(date) })}
              />
            </Box>
            <FormControl sx={{ mb: 6 }}>
              <FormControlLabel
                label='All Day'
                control={
                  <Switch
                    checked={values.allDay}
                    onChange={e => setValues({ ...values, allDay: e.target.checked })}
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
              />
            </FormControl>
            <TextField
              fullWidth
              type='url'
              id='event-url'
              label='Event URL'
              value={values.url}
              onChange={e => setValues({ ...values, url: e.target.value })}
              sx={{
                mb: 6,
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
            <FormControl fullWidth sx={{ mb: 6 }}>
              <InputLabel
                id='event-guests'
                sx={{
                  color: 'grey', // Default label color
                  '&.Mui-focused': {
                    color: '#F2660D' // Label color on focus
                  },
                  '&.Mui-error': {
                    color: 'red' // Label color on error
                  }
                }}
              >
                Guests
              </InputLabel>
              <Select
                multiple
                label='Guests'
                value={values.guests}
                labelId='event-guests'
                id='event-guests-select'
                sx={{
                  '&:hover:not(.Mui-focused):not(.Mui-disabled):not(.Mui-error) .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#F2660D'
                  },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#F2660D'
                  }
                }}
                onChange={e => setValues({ ...values, guests: e.target.value })}
              >
                <MenuItem value='bruce'>Bruce</MenuItem>
                <MenuItem value='clark'>Clark</MenuItem>
                <MenuItem value='diana'>Diana</MenuItem>
                <MenuItem value='john'>John</MenuItem>
                <MenuItem value='barry'>Barry</MenuItem>
              </Select>
            </FormControl>
            <TextField
              rows={4}
              multiline
              fullWidth
              label='Description'
              id='event-description'
              value={values.description}
              onChange={e => setValues({ ...values, description: e.target.value })}
              sx={{
                mb: 6,
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
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <RenderSidebarFooter />
            </Box>
          </form>
        </DatePickerWrapper>
      </Box>
    </Drawer>
  )
}

export default AddEventSidebar
