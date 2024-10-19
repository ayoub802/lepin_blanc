// ** MUI Import
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Avatar from '@mui/material/Avatar'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import AvatarGroup from '@mui/material/AvatarGroup'
import CardContent from '@mui/material/CardContent'
import Icon from 'src/@core/components/icon'
import { CardHeader, IconButton } from '@mui/material'
import styled from '@emotion/styled'
import { BiCommentDetail, BiLike, BiSolidLike } from 'react-icons/bi'
import { useState } from 'react'
import { HiOutlineArrowUturnRight } from 'react-icons/hi2'
import { MdBookmark, MdBookmarkBorder } from 'react-icons/md'

const PostFill = ({ isWithImage = true, mb = 0 }) => {
  const [liked, setLiked] = useState(false) // State to toggle heart icon
  const [save, setSave] = useState(false) // State to toggle heart icon

  const handleLike = () => {
    setLiked(!liked) // Toggle between true and false
  }

  const handleSave = () => {
    setSave(!save) // Toggle between true and false
  }

  return (
    <Card className='!rounded-none !shadow-none !border-[#EAEAEA] border' sx={{ mb: mb }}>
      <CardContent className='md:!p-6'>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
          <Avatar alt='Victor Anderson' sx={{ width: 70, height: 70 }} src='/images/avatars/1.png' />
          <Box>
            <Typography className='!text-[#121212] !font-poppins !text-[16px] !font-medium'>Lucie Bardon</Typography>
            <Typography className='!text-[#807E7E] !font-poppins !text-[14px] !font-normal'>
              L’écriture est ma passion
            </Typography>
            <Typography className='!text-[#807E7E] !font-poppins !text-[12px] !font-normal'>
              30 Juillet à 12:24
            </Typography>
          </Box>
        </Box>
        <Box sx={{ my: 5 }}>
          <Typography variant='body1' className='!text-[#3E3E59] !font-poppins !text-[16px] !font-normal'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s.
          </Typography>
        </Box>
        {isWithImage && <CardMedia sx={{ height: 300 }} image='/assets/theme_mois.svg' />}
        <Box sx={{ mt: 5, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 7 }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <IconButton onClick={handleLike}>
                {liked ? <BiSolidLike size={25} color='#f2660d' /> : <BiLike color='#f2660d' size={25} />}
              </IconButton>
              <Typography className='!text-[#605F5F] !text-[12px] !font-normal !font-poppins'>15</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <IconButton>
                <BiCommentDetail size={25} color='#f2660d' />
              </IconButton>
              <Typography className='!text-[#605F5F] !text-[12px] !font-normal !font-poppins'>15</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <IconButton>
                <HiOutlineArrowUturnRight size={25} color='#f2660d' />
              </IconButton>
              <Typography className='!text-[#605F5F] !text-[12px] !font-normal !font-poppins'>23</Typography>
            </Box>
          </Box>
          <Box>
            <IconButton onClick={handleSave}>
              {save ? <MdBookmark size={25} color='#f2660d' /> : <MdBookmarkBorder size={25} color='#f2660d' />}
            </IconButton>
          </Box>
        </Box>
      </CardContent>
    </Card>
  )
}

export default PostFill
