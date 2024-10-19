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
import { Card, CardContent } from '@mui/material'
import AccountSettings from 'src/views/pages/Compte/compte'
import ChangePasswordCard from 'src/views/pages/Compte/securite'
import InfoTab from 'src/views/pages/Compte/Info'
import NotificationTab from 'src/views/pages/Compte/notification'
import { MdLockOpen, MdOutlineSearch } from 'react-icons/md'

const Compte = () => {
  const [value, setValue] = useState('1')

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

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
                  label='Compte'
                  className='!min-h-[55px]'
                  icon={<MdOutlineSearch size={25} className='!mb-0' />}
                />
                <Tab
                  value='2'
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
                  label='Sécurité'
                  className='!min-h-[55px]'
                  icon={<MdLockOpen size={22} className='!mb-0' />}
                />
                <Tab
                  value='3'
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
                  label='Info'
                  className='!min-h-[55px]'
                  icon={<GoInfo size={22} className='!mb-0' />}
                />
                <Tab
                  value='4'
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
                  label='facturation'
                  className='!min-h-[55px]'
                  icon={<FaRegBookmark size={18} className='!mb-0' />}
                />
                <Tab
                  value='5'
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
                  label='Notifications'
                  className='!min-h-[55px]'
                  icon={<FaRegBell size={18} className='!mb-0' />}
                />
              </TabList>
              <TabPanel value='1'>
                <AccountSettings />
              </TabPanel>
              <TabPanel value='2'>
                <ChangePasswordCard />
              </TabPanel>
              <TabPanel value='3'>
                <InfoTab />
              </TabPanel>
              <TabPanel value='5'>
                <NotificationTab />
              </TabPanel>
            </TabContext>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Compte
