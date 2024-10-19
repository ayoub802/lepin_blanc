import React, { useState } from 'react'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import CardContent from '@mui/material/CardContent'
import ImageFich from '../../../../../public/assets/Image_fiche.svg'
import { Box, Typography } from '@mui/material'
import { Icon } from '@iconify/react'
import Image from 'next/image'

const UtiliseCard = () => {
  //

  return (
    <Card>
      <CardContent>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 2
          }}
        >
          <Icon icon='mdi:cellphone-charging' fontSize={25} color='#4C4E64DE' />
          <Typography className='!text-[#4C4E64DE] !text-[20px] !font-medium'>
            Utiliser les figures de styles
          </Typography>
        </Box>

        <Box
          sx={{
            my: 5
          }}
        >
          <Typography className='!text-[#4C4E64AD] !text-[15.5px] !font-normal'>
            Dernière mis à jour le 15/07/2024
          </Typography>
        </Box>

        <Typography className='!text-[#4C4E64AD] !text-[15.5px] !font-normal !leading-6'>
          At nunc si ad aliquem bene nummatum tumentemque ideo honestus advena salutatum introieris, primitus tamquam
          exoptatus suscipieris et interrogatus multa coactusque mentiri, miraberis numquam antea visus summatem virum
          tenuem te sic enixius observantem, ut paeniteat ob haec bona tamquam praecipua non vidisse ante decennium
          Romam.
        </Typography>

        <Box
          sx={{
            my: 5,
            overflow: 'hidden'
          }}
        >
          <Image src={ImageFich} quality={100} className='w-full h-full object-cover' alt='Lepin Blanc Fiche' />
        </Box>

        <Typography className='!text-[#4C4E64AD] !text-[15.5px] !font-normal !leading-6 !my-4'>
          At nunc si ad aliquem bene nummatum tumentemque ideo honestus advena salutatum introieris, primitus tamquam
          exoptatus suscipieris et interrogatus multa coactusque mentiri, miraberis numquam antea visus summatem virum
          tenuem te sic enixius observantem, ut paeniteat ob haec bona tamquam praecipua non vidisse ante decennium
          Romam.
        </Typography>
        <Typography className='!text-[#4C4E64AD] !text-[15.5px] !font-normal !leading-6 !my-4'>
          At nunc si ad aliquem bene nummatum tumentemque ideo honestus advena salutatum introieris, primitus tamquam
          exoptatus suscipieris et interrogatus multa coactusque mentiri, miraberis numquam antea visus summatem virum
          tenuem te sic enixius observantem, ut paeniteat ob haec bona tamquam praecipua non vidisse ante decennium
          Romam.
        </Typography>
      </CardContent>
    </Card>
  )
}

export default UtiliseCard
