import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'
import AdbIcon from '@mui/icons-material/Adb'
import Image from 'next/image'
import Logo from '../../../../public/assets/logo.svg'
import { Badge } from '@mui/material'
import NotificationsIcon from '@mui/icons-material/Notifications'
import { Search } from '@mui/icons-material'
import SwipeableDrawer from '@mui/material/SwipeableDrawer'
import { useRouter } from 'next/router'
import UserDropdown from 'src/@core/layouts/components/shared-components/UserDropdown'

const pages = [
  { label: 'Fil d’actualité', path: '/fil-actualite' },
  { label: 'Mon tableau de bord', path: '/home' }
]
const settings = ['Profile', 'Account', 'Dashboard', 'Logout']

function HeaderNav() {
  const [anchorElUser, setAnchorElUser] = React.useState(null)
  const [activePage, setActivePage] = React.useState('Fil d’actualité') // Set default active page
  const [drawerOpen, setDrawerOpen] = React.useState(false)
  const router = useRouter()

  const toggleDrawer = open => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return
    }
    setDrawerOpen(open)
  }

  const handleCloseNavMenu = page => {
    setActivePage(page)
    router.push(page.path) // Navigate to the selected page
    setDrawerOpen(false) // Close the drawer when a page is selected
  }

  const drawerContent = (
    <Box
      sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', my: 5 }}
      role='presentation'
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      {pages.map(page => (
        <Button
          key={page.label}
          onClick={() => handleCloseNavMenu(page)}
          sx={{
            width: '100%',
            textAlign: 'left',
            color: activePage === page.label ? '#F2660D' : 'black'
          }}
        >
          {page.label}
        </Button>
      ))}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, justifyContent: 'center' }}>
        <IconButton size='large' aria-label='show 17 new notifications' color='inherit'>
          <Badge>
            <Search />
          </Badge>
        </IconButton>
        <IconButton size='large' aria-label='show 17 new notifications' color='inherit'>
          <Badge badgeContent={17} color='error'>
            <NotificationsIcon />
          </Badge>
        </IconButton>
      </Box>
    </Box>
  )

  return (
    <AppBar position='static' className='!bg-mainColor'>
      <Container maxWidth='xl'>
        <Toolbar disableGutters className='!min-h-[100px] !max-h-[100px] justify-between'>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            onClick={toggleDrawer(true)}
            aria-label='open drawer'
            sx={{ mr: 2, display: { xs: 'flex', md: 'none', justifyContent: 'center' } }}
          >
            <MenuIcon />
          </IconButton>
          <Image src={Logo} quality={100} width={50} height={50} className='w-[60px] h-[60px]' alt='Lepin Blanc Logo' />
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: 'center' } }}>
            {pages.map(page => (
              <Button
                key={page.label}
                onClick={() => handleCloseNavMenu(page)}
                sx={{
                  my: 2,
                  color: activePage === page.label ? '#F2660D' : 'white',
                  display: 'block',
                  position: 'relative',
                  '&:hover': {
                    backgroundColor: 'transparent !important' // Ensure background stays transparent
                  },
                  '&:after': {
                    content: activePage === page.label ? '""' : 'none',
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    bottom: -5,
                    height: '2px',
                    backgroundColor: '#F2660D'
                  }
                }}
              >
                {page.label}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <IconButton
              size='large'
              aria-label='show 17 new notifications'
              color='inherit'
              sx={{ display: { xs: 'none', sm: 'inline-flex', justifyContent: 'center' } }}
            >
              <Badge>
                <Search />
              </Badge>
            </IconButton>
            <IconButton
              size='large'
              aria-label='show 17 new notifications'
              color='inherit'
              sx={{ mr: 5, display: { xs: 'none', sm: 'inline-flex', justifyContent: 'center' } }}
            >
              <Badge badgeContent={17} color='error'>
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <UserDropdown settings={settings} />
          </Box>
        </Toolbar>
      </Container>

      <SwipeableDrawer
        anchor='bottom'
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        sx={{
          '& .MuiDrawer-paper': {
            borderTopLeftRadius: '12px',
            borderTopRightRadius: '12px',
            overflow: 'hidden' // Ensure the border radius applies correctly
          }
        }}
      >
        {drawerContent}
      </SwipeableDrawer>
    </AppBar>
  )
}

export default HeaderNav
