// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Custom Components
import CustomChip from 'src/@core/components/mui/chip'
import OptionsMenu from 'src/@core/components/option-menu'

const data = [
  {
    chipText: 'Voir l’évènement',
    chipColor: 'primary',
    title: 'Atelier d’écriture',
    src: '/images/avatars/4.png',
    subtitle: '21 Jul | 08:20-10:30'
  },
  {
    chipText: 'Voir l’évènement',
    chipColor: 'primary',
    title: 'Live Lou',
    src: '/images/avatars/5.png',
    subtitle: '21 Jul | 08:20-10:30'
  },
  {
    chipText: 'Voir l’évènement',
    chipColor: 'primary',
    title: 'Séance de coaching',
    src: '/images/avatars/3.png',
    subtitle: '21 Jul | 08:20-10:30'
  },
  {
    chipText: 'Voir l’évènement',
    chipColor: 'primary',
    title: 'Atelier d’écriture',
    src: '/images/avatars/2.png',
    subtitle: '21 Jul | 08:20-10:30'
  },
  {
    chipColor: 'primary',
    chipText: 'Voir l’évènement',
    title: 'Atelier technique',
    src: '/images/avatars/8.png',
    subtitle: '21 Jul | 08:20-10:30'
  },
  {
    chipText: 'Voir l’évènement',
    chipColor: 'primary',
    title: 'Séance de coaching',
    src: '/images/avatars/7.png',
    subtitle: '21 Jul | 08:20-10:30'
  }
]

const Evenement = () => {
  return (
    <Card className='min-h-[40rem] max-h-[40rem] 2xl:min-h-[33rem] 2xl:max-h-[33rem]'>
      <CardHeader
        title='Mes évènements'
        action={
          <OptionsMenu
            options={['Refresh', 'Edit', 'Share']}
            iconButtonProps={{ size: 'small', className: 'card-more-options' }}
          />
        }
      />
      <CardContent>
        {data.map((item, index) => {
          return (
            <Box
              key={item.title}
              sx={{
                display: 'flex',
                alignItems: 'center',
                mb: index !== data.length - 1 ? 6.5 : undefined
              }}
            >
              <Avatar src={item.src} variant='rounded' sx={{ mr: 3, width: 38, height: 38 }} />
              <Box
                sx={{
                  width: '100%',
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <Box sx={{ mr: 2, display: 'flex', mb: 0.4, flexDirection: 'column' }}>
                  <Typography variant='body2' sx={{ mb: 0.5, fontWeight: 600, color: 'text.primary' }}>
                    {item.title}
                  </Typography>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      '& svg': {
                        mr: 1.5,
                        color: 'text.secondary',
                        verticalAlign: 'middle'
                      }
                    }}
                  >
                    <Icon icon='mdi:calendar-blank-outline' fontSize='1rem' />
                    <Typography variant='caption'>{item.subtitle}</Typography>
                  </Box>
                </Box>
                <CustomChip
                  skin='light'
                  size='small'
                  label={item.chipText}
                  color={item.chipColor}
                  sx={{ height: 20, fontSize: '0.75rem', fontWeight: 500 }}
                />
              </Box>
            </Box>
          )
        })}
      </CardContent>
    </Card>
  )
}

export default Evenement
