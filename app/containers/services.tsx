'use client';
import React from 'react';
import Image from 'next/image';
import { ImageList, ImageListItem, Stack, Typography, Box, Card } from '@mui/material';
import { useTheme, useMediaQuery } from '@mui/material';

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Acquisition Lands',
    description: 'Explore premium acquisition lands ideal for future developments and investments.',
    cols: 2,
    rows: 2
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Residential Plots',
    description: 'Find the perfect residential plots in well-planned communities for your dream home.',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Farming Land',
    description: 'Ideal farming land with fertile soil for a variety of crops and sustainable agriculture.',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Industrial Plots',
    description: 'Strategically located industrial plots for manufacturing and warehousing facilities.',
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Semi-Commercial Plots',
    description: 'Semi-commercial plots ideal for businesses and small enterprises with residential options.',
  }
];

function srcset(image: string, size: number, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
  };
}

const Services = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <div className="px-[25px] md:px-[75px] py-[30px] md:py-[70px]">
      <h4
        className="text-[16px] lg:text-[20px] text-[#4361EE] font-medium"
        style={{ letterSpacing: '2px' }}
      >
        WHAT WE DEAL IN
      </h4>

      <h1 className="mb-7 text-[30px] md:text-[40px] lg:text-[48px] leading-[1.1] md:leading-[1.25] font-extrabold text-black">
        Our Services
      </h1>

      <Stack
        direction={isMobile ? 'column' : 'row'}
        sx={{
          alignItems: 'center',
          // border: '1px solid green'
        }}
        justifyContent='space-between'
        gap={isMobile ? 4 : ''}
      >

        <Stack
          direction='column'
          sx={{
          }}
          spacing={isMobile ? 2 : 4}
        >

          {itemData.map((item, index) => (

            <Stack
              direction='column'
              key={index}
              sx={{
                // border: '2px solid red'
              }}

            >
              <Typography variant="h6" fontWeight="bold">
                {item.title}
              </Typography>
              <Typography variant="body1" color="textSecondary">
                {item.description}
              </Typography>
            </Stack>
          ))}

        </Stack>

        <Stack
          direction='row'
          sx={{
            // justifyContent: isMobile ? 'center' : 'flex-start',
            alignItems: 'center'
          }}
        >
          <ImageList
            sx={{ width: isMobile ? '100%' : '100%', height: '100%' }}
            variant="quilted"
            cols={4}
            rowHeight={160}
          >
            {itemData.map((item) => (
              <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                <img
                  {...srcset(item.img, 121, 1, 1)}
                  alt={item.title}
                  loading="lazy"
                  style={{
                    objectFit: 'cover',
                    width: '100%',
                    height: '100%',
                    borderRadius: '8px'
                  }}
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Stack>
      </Stack>
    </div>
  );
};

export default Services;
