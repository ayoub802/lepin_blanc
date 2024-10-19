// ** React Imports
import { useState, forwardRef } from 'react'

import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import Fade from '@mui/material/Fade'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import PaymentConfirm from '../../../../../public/assets/Confirmation.svg'
import { DialogContentText, DialogTitle } from '@mui/material'
import Image from 'next/image'

const Transition = forwardRef(function Transition(props, ref) {
  return <Fade ref={ref} {...props} />
})

const DialogConfirm = ({ show, setShow }) => {
  const handleClose = () => {
    setShow(false)
  }

  return (
    <Dialog
      fullWidth
      open={show}
      maxWidth='sm'
      scroll='body'
      onClose={handleClose}
      onBackdropClick={handleClose}
      TransitionComponent={Transition}
    >
      <DialogTitle
        id='user-view-billing-edit-card'
        sx={{
          textAlign: 'center',
          fontSize: '1.5rem !important',
          px: theme => [`${theme.spacing(5)} !important`, `${theme.spacing(15)} !important`],
          pt: theme => [`${theme.spacing(8)} !important`, `${theme.spacing(12.5)} !important`]
        }}
      >
        Votre paiement a bien été enregistré
      </DialogTitle>
      <DialogContent
        sx={{
          pb: theme => `${theme.spacing(5)} !important`,
          px: theme => [`${theme.spacing(5)} !important`, `${theme.spacing(15)} !important`]
        }}
      >
        <DialogContentText
          variant='body2'
          id='user-view-billing-edit-card-description'
          sx={{ textAlign: 'center', mb: 7 }}
        >
          Votre commande est bien enregistré. <br />
          vérifiez vos emails pour toutes informations <br />
          concernant vottre commande
        </DialogContentText>
        <form>
          <Grid container spacing={6}>
            <Grid item xs={12} sx={{ justifyContent: 'center', display: 'flex', alignItems: 'center', my: 7 }}>
              <Image
                src={PaymentConfirm}
                width={1000}
                height={1000}
                quality={100}
                className='w-[140px]'
                alt='Lepin Blanc payment confirm'
              />
            </Grid>
          </Grid>
        </form>
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
          sx={{ mr: 2, mt: 5, backgroundColor: '#F2660D', '&:hover': { backgroundColor: '#F2660D' } }}
          onClick={handleClose}
        >
          retour au tableau de bord
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default DialogConfirm
