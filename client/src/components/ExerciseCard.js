import React from 'react'

import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  CardActionArea,
  CardActions,
} from '@mui/material'

export default function ExerciseCard() {
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://images.app.goo.gl/9joW4V1L8aHnFU9a7"
        />
        <CardContent>
          <Typography>Card with image</Typography>
          <Typography>This is the content of the card</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Actions
        </Button>
      </CardActions>
    </Card>
  )
}
