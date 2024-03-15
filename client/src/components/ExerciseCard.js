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

export default function ExerciseCard({ name }) {
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="../../public/assets/example.jpg"
        />
        <CardContent>
          <Typography>{name}</Typography>
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
