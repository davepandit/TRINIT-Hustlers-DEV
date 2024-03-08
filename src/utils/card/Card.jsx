import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { cyan } from '@mui/material/colors';

export default function MediaCard() {
  return (
    <Card elevation={3} sx={{ maxWidth: 305 }}>
      <CardMedia
        sx={{ height: 170 }}
        image="https://images.pexels.com/photos/16381759/pexels-photo-16381759/free-photo-of-close-up-of-newspapers.png?auto=compress&cs=tinysrgb&w=600"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Jee 2024 Question Paper
        </Typography>
        <Typography variant="body2" color="text.secondary">
          This is a mock paper for you to undestand the level of the paper
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" sx={{backgroundColor: "lightblue" , color:"black"}}>Share</Button>
        <Button size="small" sx={{backgroundColor: "lightblue" , color:"black"}}>Attempt</Button>
      </CardActions>
    </Card>
  );
}