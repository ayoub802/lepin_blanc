import { Box, Chip } from '@mui/material'
import React from 'react'
import Accordion from '@mui/material/Accordion'
import Typography from '@mui/material/Typography'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

const BadgeHeader = ({ title, description, icon }) => {
  return (
    <Box sx={{ mb: 6, display: 'flex', alignItems: 'center', gap: 4 }}>
      <Chip
        icon={<Icon icon={icon} fontSize={28} sx={{ color: '#F2660D', marginLeft: 0 }} />}
        label={''}
        className='!rounded-[10px]' // Set label to an empty string
        sx={{
          height: 50,
          width: 50,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(242, 102, 13, 0.2)', // Set background with opacity
          color: '#F2660D',
          '& .MuiChip-icon': {
            color: '#F2660D',
            ml: -1 // Ensure icon color is set
          },
          '& .MuiChip-label': {
            display: 'none' // Hide the label
          }
        }}
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Typography className='!text-secondColor md:!text-[20px] !text-[16px] !font-medium '>{title}</Typography>
        <Typography className='!text-secondColor md:!text-[14px] !text-[12px] !font-normal '>{description}</Typography>
      </Box>
    </Box>
  )
}

const AccorditionWidget = () => {
  return (
    <Box>
      <Box sx={{ mb: 7 }}>
        <BadgeHeader
          description={'Questions les plus posées'}
          title={'Questions communues'}
          icon={'mdi:cellphone-charging'}
        />
        <Accordion>
          <AccordionSummary id='panel-header-1' aria-controls='panel-content-1' expandIcon={<Icon icon='mdi:star' />}>
            <Typography>Paramètres généreaux</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Wafer sesame snaps chocolate bar candy canes halvah. Cupcake sesame snaps sweet tart dessert biscuit.
              Topping soufflé tart sweet croissant.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary id='panel-header-2' aria-controls='panel-content-2' expandIcon={<Icon icon='mdi:star' />}>
            <Typography>Compte utilisateur</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Sugar plum sesame snaps caramels. Cake pie tart fruitcake sesame snaps donut cupcake macaroon. Gingerbread
              pudding cheesecake pie ice cream.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary id='panel-header-3' aria-controls='panel-content-3' expandIcon={<Icon icon='mdi:star' />}>
            <Typography>Données personnelles</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Gingerbread lemon drops bear claw gummi bears bonbon wafer jujubes tiramisu. Jelly pie cake. Sweet roll
              dessert sweet pastry powder.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>

      <Box sx={{ my: 15 }}>
        <BadgeHeader description={'Paiement'} title={'Méthode de paiement'} icon={'mdi:euro'} />

        <Accordion>
          <AccordionSummary id='panel-header-1' aria-controls='panel-content-1' expandIcon={<Icon icon='mdi:star' />}>
            <Typography>Mon abonnement se renouvelle t’il automatiquement ?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Wafer sesame snaps chocolate bar candy canes halvah. Cupcake sesame snaps sweet tart dessert biscuit.
              Topping soufflé tart sweet croissant.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary id='panel-header-2' aria-controls='panel-content-2' expandIcon={<Icon icon='mdi:star' />}>
            <Typography>Est-ce que les contenus que je dépose sur la plateforme sont sauvegardés</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Sugar plum sesame snaps caramels. Cake pie tart fruitcake sesame snaps donut cupcake macaroon. Gingerbread
              pudding cheesecake pie ice cream.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary id='panel-header-3' aria-controls='panel-content-3' expandIcon={<Icon icon='mdi:star' />}>
            <Typography>Mes données sont elles partagées</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Gingerbread lemon drops bear claw gummi bears bonbon wafer jujubes tiramisu. Jelly pie cake. Sweet roll
              dessert sweet pastry powder.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary id='panel-header-3' aria-controls='panel-content-3' expandIcon={<Icon icon='mdi:star' />}>
            <Typography>Est-ce que je garde la propriété intellectuelle de mes données ?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Gingerbread lemon drops bear claw gummi bears bonbon wafer jujubes tiramisu. Jelly pie cake. Sweet roll
              dessert sweet pastry powder.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
      <Box>
        <BadgeHeader description={'Communauté'} title={'Questions liées à la communauté'} icon={'mdi:user-multiple'} />

        <Accordion>
          <AccordionSummary id='panel-header-1' aria-controls='panel-content-1' expandIcon={<Icon icon='mdi:star' />}>
            <Typography>Paramètres généreaux</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Wafer sesame snaps chocolate bar candy canes halvah. Cupcake sesame snaps sweet tart dessert biscuit.
              Topping soufflé tart sweet croissant.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary id='panel-header-2' aria-controls='panel-content-2' expandIcon={<Icon icon='mdi:star' />}>
            <Typography>Compte utilisateur</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Sugar plum sesame snaps caramels. Cake pie tart fruitcake sesame snaps donut cupcake macaroon. Gingerbread
              pudding cheesecake pie ice cream.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary id='panel-header-3' aria-controls='panel-content-3' expandIcon={<Icon icon='mdi:star' />}>
            <Typography>Données personnelles</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Gingerbread lemon drops bear claw gummi bears bonbon wafer jujubes tiramisu. Jelly pie cake. Sweet roll
              dessert sweet pastry powder.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  )
}

export default AccorditionWidget
