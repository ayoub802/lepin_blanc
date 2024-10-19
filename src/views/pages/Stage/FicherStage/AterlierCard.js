import React, { useState, forwardRef } from 'react'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import CardHeader from '@mui/material/CardHeader'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'
import { Typography } from '@mui/material'
import { Icon } from '@iconify/react'

// ** React Imports
import DialogAddCard from './DialogCard'

const AterlierCard = () => {
  const [value, setValue] = useState('checked')
  const [show, setShow] = useState(false)

  const handleChange = event => {
    setValue(event.target.value)
  }

  return (
    <Card>
      <CardHeader
        avatar={<Icon icon='mdi:clipboard-outline' color='#F2660D' fontSize={35} />}
        title={'Atelier : écriture Les figures de styles'}
        sx={{
          backgroundColor: '#4C4E6405'
        }}
      />

      <CardContent>
        <RadioGroup
          row
          value={value}
          name='simple-radio'
          onChange={handleChange}
          aria-label='simple-radio'
          className='!flex !flex-col'
        >
          <FormControlLabel
            value='time'
            control={
              <Radio
                sx={{
                  '&.Mui-checked': {
                    color: '#F2660D' // Custom color when checked
                  }
                }}
              />
            }
            label='Le 17/07/2027 de 14h00 à 17h00'
          />
          <FormControlLabel
            value='Intervenant'
            control={
              <Radio
                sx={{
                  '&.Mui-checked': {
                    color: '#F2660D' // Custom color when checked
                  }
                }}
              />
            }
            label='Intervenant : Louisette '
          />
          <FormControlLabel
            value='nombre'
            control={
              <Radio
                sx={{
                  '&.Mui-checked': {
                    color: '#F2660D' // Custom color when checked
                  }
                }}
              />
            }
            label='Nombre de places disponible : 10/10'
          />
        </RadioGroup>

        <Typography className='!text-secondColor !mt-3 text-center !text-[24px] !font-medium'>45 €</Typography>
      </CardContent>
      <CardActions className='card-action-dense mx-auto max-w-max mb-5'>
        <Button
          variant='contained'
          onClick={() => setShow(true)}
          sx={{ backgroundColor: '#F2660D' }}
          className='!py-3 !px-8 hover:!bg-secondColor'
        >
          PARTICIPER
        </Button>
      </CardActions>

      <DialogAddCard show={show} setShow={setShow} />
    </Card>
  )
}

export default AterlierCard
