import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import InfoIcon from '@mui/icons-material/Info';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';

const ReportedPostData = () => {
  return (
    <>
      <h4>Total Reported Posts ({itemData.length})</h4>
      <ImageList sx={{height: 450 }} className='re-img-list'>
          <ImageListItem key="Subheader" cols={4}>
              <ListSubheader component="div"></ListSubheader>
          </ImageListItem>
        {itemData.map((item) => (
          <ImageListItem key={item.img} className='clickable re-img-item'>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              title={item.likes}
              subtitle={<span>by: {item.author}</span>}
              
              actionIcon={
                    <ReportGmailerrorredIcon className='likeIcon' />
              }
              actionPosition="left"
            />
            {/* <InfoIcon /> */}
          </ImageListItem>
        ))}
      </ImageList>
    </>
    
  );
}

export default ReportedPostData;

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
    author: '@bkristastucchio',
    likes: 500
  },  
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
    author: '@rollelflex_graphy726',
    likes: 470
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
    author: '@helloimnik',
    likes: 423
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
    author: '@nolanissac',
    likes: 411
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
    author: '@hjrc33',
    likes: 812
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
    author: '@arwinneil',
    featured: true,
    likes: 401
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
    author: '@tjdragotta',
    likes: 389
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
    author: '@katie_wasserman',
    likes: 380
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
    author: '@silverdalex',
    likes: 350
  },
];

