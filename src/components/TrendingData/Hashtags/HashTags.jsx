import * as React from 'react';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import './HashTags.css'

const HashTagsData = () => {
    const handleClick = () => {
        console.info('You clicked the Chip.');
    };
    return (
            <Card>
                <CardContent>

                    <Typography component="div" color="text.secondary">
                        Best hashtags
                        <Button className='view-btn' href="#tag-list">View all</Button>
                    </Typography>  
                    <Typography component="div">
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                            {/* <Stack direction="row" spacing={1}> */}
                                {hashData.map((item) => (
                                    <Chip className='hashchip' label={item.hash} onClick={handleClick} />
                                ))}
                            {/* </Stack> */}
                            </Grid>
                        </Grid>
                    </Typography>      
                </CardContent>
                
            </Card>
                
    );
}

export default HashTagsData;

const hashData = [
  {
    id: 1,
    hash: '#love',
  },
  {
    id: 2,
    hash: '#instagood',
  },
  {
    id: 3,
    hash: '#fashion',
  },
  {
    id: 4,
    hash: '#photooftheday',
  },
  {
    id: 5,
    hash: '#beautiful',
  },
  {
    id: 6,
    hash: '#art',
  },
  {
    id: 7,
    hash: '#photography',
  },
  {
    id: 8,
    hash: '#happy',
  },
  {
    id: 9,
    hash: '#picoftheday',
  },
  {
    id: 10,
    hash: '#cute',
  },
  {
    id: 11,
    hash: '#follow',
  },
  {
    id: 12,
    hash: '#tbt',
  },
  {
    id: 13,
    hash: '#followme',
  },
  {
    id: 14,
    hash: '#nature',
  },
  {
    id: 15,
    hash: '#instagram',
  },
  {
    id: 16,
    hash: '#style',
  },
  {
    id: 17,
    hash: '#repost',
  },
  {
    id: 18,
    hash: '#summer',
  },
  {
    id: 19,
    hash: '#instadaily',
  },
  {
    id: 20,
    hash: '#selfie',
  },
];
