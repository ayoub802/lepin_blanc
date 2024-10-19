// ** MUI Import
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Avatar from '@mui/material/Avatar'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import AvatarGroup from '@mui/material/AvatarGroup'
import CardContent from '@mui/material/CardContent'
import Icon from 'src/@core/components/icon'
import { CardHeader, Divider, IconButton, Input } from '@mui/material'
import styled from '@emotion/styled'
import { BiCommentDetail, BiLike, BiSolidLike } from 'react-icons/bi'
import { useState } from 'react'
import { HiOutlineArrowUturnRight } from 'react-icons/hi2'
import { MdBookmark, MdBookmarkBorder } from 'react-icons/md'

const CreatePost = ({ isWithImage = true, mb = 0 }) => {
  return (
    <Card className='!rounded-none ' sx={{ mb: mb }}>
      <CardContent className='md:!p-6'>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
          <Avatar alt='Victor Anderson' sx={{ width: 70, height: 70 }} src='/images/avatars/1.png' />
          <Box
            sx={{
              width: '100%'
            }}
          >
            <Input
              id='input-with-icon-adornment'
              sx={{
                backgroundColor: '#fff',
                borderRadius: 1,
                width: '100%',
                '& .MuiInputBase-input': {
                  padding: '10px'
                },
                '&:hover:before': {
                  borderBottom: 'none !important'
                },
                '&:hover .MuiInputBase-input': {
                  borderBottom: 'none'
                },
                '&:before': {
                  // Remove underline before focusing
                  borderBottom: 'none'
                },
                '&:after': {
                  // Remove underline after focusing
                  borderBottom: 'none'
                },
                '&.Mui-focused:before': {
                  // Remove underline when focused
                  borderBottom: 'none'
                },
                '&.Mui-focused:after': {
                  // Remove underline when focused
                  borderBottom: 'none'
                },
                '&:hover.Mui-focused:before': {
                  // Remove underline when focused
                  borderBottom: 'none'
                },
                '&:hover.Mui-focused:after': {
                  // Remove underline when focused
                  borderBottom: 'none'
                }
              }}
              placeholder='Partagez vos denières publications'
            />
          </Box>
        </Box>

        <Divider sx={{ mt: 8, mb: 2 }} />

        <Box
          sx={{
            display: 'flex',
            flexWrap: { xs: 'wrap', md: 'nowrap' }, // Flex-wrap on mobile, no wrap on larger screens
            alignItems: 'center',
            justifyContent: { xs: 'flex-start', md: 'space-between' }, // Align items to start on mobile, space between on larger screens
            mt: 2
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              cursor: 'pointer',
              flexBasis: { xs: '50%', sm: '30%', md: 'auto' } // Take half width on mobile
            }}
          >
            <IconButton>
              <svg xmlns='http://www.w3.org/2000/svg' width='22' height='22' viewBox='0 0 22 22' fill='none'>
                <path
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M2.41675 5.16699C2.41675 3.64821 3.64796 2.41699 5.16675 2.41699H16.8334C18.3522 2.41699 19.5834 3.64821 19.5834 5.16699V12.6897L18.5304 11.6367L18.5201 11.6266C17.8783 11.009 17.0964 10.6355 16.2501 10.6355C15.4038 10.6355 14.6219 11.009 13.9801 11.6266L13.9698 11.6367L13.3334 12.273L10.3637 9.30334L10.3534 9.29324C9.71164 8.67567 8.92969 8.30216 8.08342 8.30216C7.23714 8.30216 6.45519 8.67567 5.81338 9.29324L5.80308 9.30334L2.41675 12.6897V5.16699ZM14.3941 13.3337L15.025 12.7027C15.4457 12.2998 15.8691 12.1355 16.2501 12.1355C16.6311 12.1355 17.0544 12.2998 17.4751 12.7027L19.5834 14.811V16.8337C19.5834 18.3524 18.3522 19.5837 16.8334 19.5837H5.16675C3.64796 19.5837 2.41675 18.3524 2.41675 16.8337V14.811L6.85836 10.3694C7.27907 9.96644 7.70242 9.80216 8.08342 9.80216C8.46442 9.80216 8.88777 9.96644 9.30848 10.3694L12.8031 13.864L15.1364 16.1973C15.4293 16.4902 15.9042 16.4902 16.1971 16.1973C16.49 15.9044 16.49 15.4296 16.1971 15.1367L14.3941 13.3337ZM21.0834 14.5003V5.16699C21.0834 2.81978 19.1806 0.916992 16.8334 0.916992H5.16675C2.81954 0.916992 0.916748 2.81978 0.916748 5.16699V14.5003V16.8337C0.916748 19.1809 2.81954 21.0837 5.16675 21.0837H16.8334C19.1806 21.0837 21.0834 19.1809 21.0834 16.8337V14.5003ZM14.5001 5.58366C14.0859 5.58366 13.7501 5.91945 13.7501 6.33366C13.7501 6.74787 14.0859 7.08366 14.5001 7.08366H14.5117C14.926 7.08366 15.2617 6.74787 15.2617 6.33366C15.2617 5.91945 14.926 5.58366 14.5117 5.58366H14.5001Z'
                  fill='#F2660D'
                />
              </svg>
            </IconButton>
            <Typography className='!text-[#605F5F] !text-[14px] !font-medium !font-poppins'>Photo</Typography>
          </Box>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              cursor: 'pointer',
              flexBasis: { xs: '50%', sm: '30%', md: 'auto' } // Take half width on mobile
            }}
          >
            <IconButton>
              <svg xmlns='http://www.w3.org/2000/svg' width='29' height='28' viewBox='0 0 29 28' fill='none'>
                <path
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M5.02246 10.3786C5.02246 8.21547 6.77601 6.46191 8.93913 6.46191H20.6058C22.7689 6.46191 24.5225 8.21547 24.5225 10.3786V17.3786C24.5225 19.5417 22.7689 21.2952 20.6058 21.2952H8.93913C6.77601 21.2952 5.02246 19.5417 5.02246 17.3786V10.3786ZM8.93913 4.96191C5.94759 4.96191 3.52246 7.38704 3.52246 10.3786V17.3786C3.52246 20.3701 5.94759 22.7952 8.93913 22.7952H20.6058C23.5973 22.7952 26.0225 20.3701 26.0225 17.3786V10.3786C26.0225 7.38704 23.5973 4.96191 20.6058 4.96191H8.93913ZM12.825 9.73546C12.5933 9.59644 12.3047 9.5928 12.0696 9.72593C11.8345 9.85906 11.6891 10.1084 11.6891 10.3786V17.3786C11.6891 17.6488 11.8345 17.8981 12.0696 18.0312C12.3047 18.1644 12.5933 18.1607 12.825 18.0217L18.6583 14.5217C18.8842 14.3862 19.0225 14.142 19.0225 13.8786C19.0225 13.6151 18.8842 13.371 18.6583 13.2355L12.825 9.73546ZM16.8147 13.8786L13.1891 16.0539V11.7032L16.8147 13.8786Z'
                  fill='#F2660D'
                />
              </svg>
            </IconButton>
            <Typography className='!text-[#605F5F] !text-[14px] !font-medium !font-poppins'>Video</Typography>
          </Box>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              cursor: 'pointer',
              flexBasis: { xs: '50%', sm: '30%', md: 'auto' } // Take half width on mobile
            }}
          >
            <IconButton>
              <svg xmlns='http://www.w3.org/2000/svg' width='29' height='28' viewBox='0 0 29 28' fill='none'>
                <path
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M19.5376 3.5C19.5376 3.08579 19.2018 2.75 18.7876 2.75C18.3734 2.75 18.0376 3.08579 18.0376 3.5V5.08333H10.2043V3.5C10.2043 3.08579 9.86848 2.75 9.45427 2.75C9.04005 2.75 8.70427 3.08579 8.70427 3.5V5.08333H7.12093C5.41805 5.08333 4.0376 6.46379 4.0376 8.16667V12.8333V22.1667C4.0376 23.8695 5.41805 25.25 7.12093 25.25H21.1209C22.8238 25.25 24.2043 23.8695 24.2043 22.1667V12.8333V8.16667C24.2043 6.46379 22.8238 5.08333 21.1209 5.08333H19.5376V3.5ZM22.7043 12.0833V8.16667C22.7043 7.29222 21.9954 6.58333 21.1209 6.58333H19.5376V8.16667C19.5376 8.58088 19.2018 8.91667 18.7876 8.91667C18.3734 8.91667 18.0376 8.58088 18.0376 8.16667V6.58333H10.2043V8.16667C10.2043 8.58088 9.86848 8.91667 9.45427 8.91667C9.04005 8.91667 8.70427 8.58088 8.70427 8.16667V6.58333H7.12093C6.24648 6.58333 5.5376 7.29222 5.5376 8.16667V12.0833H22.7043ZM5.5376 13.5833H22.7043V22.1667C22.7043 23.0411 21.9954 23.75 21.1209 23.75H7.12093C6.24648 23.75 5.5376 23.0411 5.5376 22.1667V13.5833Z'
                  fill='#F2660D'
                />
              </svg>
            </IconButton>
            <Typography className='!text-[#605F5F] !text-[14px] !font-medium !font-poppins'>Evènement </Typography>
          </Box>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              cursor: 'pointer',
              flexBasis: { xs: '50%', sm: '30%', md: 'auto' } // Take half width on mobile
            }}
          >
            <IconButton>
              <svg xmlns='http://www.w3.org/2000/svg' width='28' height='28' viewBox='0 0 28 28' fill='none'>
                <path
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M19.25 4.7002C18.1759 4.7002 17.1458 5.12687 16.3863 5.88636L15.2196 7.05303L4.1363 18.1364C3.99564 18.277 3.91663 18.4678 3.91663 18.6667V23.3334C3.91663 23.7476 4.25241 24.0834 4.66663 24.0834H9.33329C9.5322 24.0834 9.72297 24.0043 9.86362 23.8637L20.9454 12.7819C20.9459 12.7814 20.9465 12.7809 20.947 12.7804C20.9475 12.7799 20.948 12.7793 20.9485 12.7788L22.1136 11.6137C22.8731 10.8542 23.2998 9.82411 23.2998 8.75003C23.2998 7.67595 22.8731 6.64586 22.1136 5.88636C21.3541 5.12687 20.324 4.7002 19.25 4.7002ZM20.4166 11.1894L21.053 10.553C21.5311 10.0748 21.7998 9.42629 21.7998 8.75003C21.7998 8.07377 21.5311 7.42521 21.053 6.94702C20.5748 6.46884 19.9262 6.2002 19.25 6.2002C18.5737 6.2002 17.9251 6.46884 17.447 6.94702L16.8106 7.58336L20.4166 11.1894ZM15.75 8.64402L5.41663 18.9774V22.5834H9.02263L19.356 12.25L15.75 8.64402Z'
                  fill='#F2660D'
                />
              </svg>
            </IconButton>
            <Typography className='!text-[#605F5F] !text-[14px] !font-medium !font-poppins'>
              Ecrire un article
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  )
}

export default CreatePost
