// ** React Imports
import { useState, forwardRef } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Switch from '@mui/material/Switch'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Fade from '@mui/material/Fade'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import FormControlLabel from '@mui/material/FormControlLabel'

// ** Third Party Imports
import Payment from 'payment'
import Cards from 'react-credit-cards'

// ** Util Import
import { formatCVC, formatExpirationDate, formatCreditCardNumber } from 'src/@core/utils/format'

// ** Styled Component Imports
import CardWrapper from 'src/@core/styles/libs/react-credit-cards'

// ** Styles Import
import 'react-credit-cards/es/styles-compiled.css'

// ** Icon Imports
import Icon from 'src/@core/components/icon'
import DialogConfirm from './ConfirmationDialog'

const Transition = forwardRef(function Transition(props, ref) {
  return <Fade ref={ref} {...props} />
})

const DialogAddCard = ({ show, setShow }) => {
  // ** States
  const [name, setName] = useState('')
  const [showConfirm, setShowConfirm] = useState(false)
  const [cvc, setCvc] = useState('')
  const [cardNumber, setCardNumber] = useState('')
  const [focus, setFocus] = useState()
  const [expiry, setExpiry] = useState('')
  const handleBlur = () => setFocus(undefined)

  const handleInputChange = ({ target }) => {
    if (target.name === 'number') {
      target.value = formatCreditCardNumber(target.value, Payment)
      setCardNumber(target.value)
    } else if (target.name === 'expiry') {
      target.value = formatExpirationDate(target.value)
      setExpiry(target.value)
    } else if (target.name === 'cvc') {
      target.value = formatCVC(target.value, cardNumber, Payment)
      setCvc(target.value)
    }
  }

  const handleClose = () => {
    setShow(false)
    setCvc('')
    setName('')
    setExpiry('')
    setCardNumber('')
    setFocus(undefined)
  }

  const handleOpen = () => {
    setShow(false)
    setShowConfirm(true)
  }

  return (
    <>
      <Dialog
        fullWidth
        open={show}
        maxWidth='sm'
        scroll='body'
        onClose={handleClose}
        onBackdropClick={handleClose}
        TransitionComponent={Transition}
      >
        <DialogContent
          sx={{
            position: 'relative',
            pb: theme => `${theme.spacing(8)} !important`,
            px: theme => [`${theme.spacing(5)} !important`, `${theme.spacing(15)} !important`],
            pt: theme => [`${theme.spacing(8)} !important`, `${theme.spacing(12.5)} !important`]
          }}
        >
          <IconButton size='small' onClick={handleClose} sx={{ position: 'absolute', right: '1rem', top: '1rem' }}>
            <Icon icon='mdi:close' />
          </IconButton>
          <Box sx={{ mb: 4, textAlign: 'center' }}>
            <Typography variant='h5' sx={{ mb: 3, lineHeight: '2rem' }}>
              Ajouter une carte
            </Typography>
            <Typography variant='body2'>Entrez vos informations de paiement</Typography>
          </Box>
          <Grid container spacing={6}>
            <Grid item xs={12}>
              <CardWrapper sx={{ '& .rccs': { m: '0 auto', display: { xs: 'none', sm: 'block' } } }}>
                <Cards cvc={cvc} focused={focus} expiry={expiry} name={name} number={cardNumber} />
              </CardWrapper>
            </Grid>
            <Grid item xs={12} sx={{ pt: theme => `${theme.spacing(5)} !important` }}>
              <Grid container spacing={6}>
                <Grid item xs={12} sx={{ mt: 7 }}>
                  <TextField
                    fullWidth
                    name='number'
                    value={cardNumber}
                    autoComplete='off'
                    label='Numéro'
                    onBlur={handleBlur}
                    onChange={handleInputChange}
                    placeholder='0000 0000 0000 0000'
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
                    onFocus={e => setFocus(e.target.name)}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    name='name'
                    value={name}
                    autoComplete='off'
                    onBlur={handleBlur}
                    label='Nom sur la carte'
                    placeholder='John Doe'
                    onChange={e => setName(e.target.value)}
                    onFocus={e => setFocus(e.target.name)}
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
                <Grid item xs={12} sm={3}>
                  <TextField
                    fullWidth
                    name='expiry'
                    label='Expire le'
                    value={expiry}
                    onBlur={handleBlur}
                    placeholder='MM/YY'
                    onChange={handleInputChange}
                    inputProps={{ maxLength: '5' }}
                    onFocus={e => setFocus(e.target.name)}
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
                <Grid item xs={12} sm={3}>
                  <TextField
                    fullWidth
                    name='cvc'
                    label='CVC'
                    value={cvc}
                    autoComplete='off'
                    onBlur={handleBlur}
                    onChange={handleInputChange}
                    onFocus={e => setFocus(e.target.name)}
                    placeholder={Payment.fns.cardType(cardNumber) === 'amex' ? '1234' : '123'}
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
              </Grid>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions
          sx={{
            justifyContent: 'center',
            px: theme => [`${theme.spacing(5)} !important`, `${theme.spacing(15)} !important`],
            pb: theme => [`${theme.spacing(8)} !important`, `${theme.spacing(12.5)} !important`]
          }}
        >
          <Button
            variant='contained'
            onClick={handleOpen}
            sx={{ backgroundColor: '#F2660D', mr: 2 }}
            className=' hover:!bg-secondColor'
          >
            payer
          </Button>
          <Button variant='outlined' color='secondary' onClick={handleClose}>
            annuler
          </Button>
        </DialogActions>
      </Dialog>
      {showConfirm && <DialogConfirm show={showConfirm} setShow={setShowConfirm} />}
    </>
  )
}

export default DialogAddCard
