import React, { useState, useEffect } from 'react'
import ExerciseCard from '../components/ExerciseCard'
import { Grid } from '@mui/material'

export default function Exercise() {
  const [exercise, setExercise] = useState([])

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:5000/api')
      const jsonData = await response.json()

      setExercise(jsonData)
    } catch (error) {
      console.log('Error fetching data:', error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      <Grid
        padding={6}
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        justifyContent="space-around"
        alignItems="center"
      >
        {exercise.map((item) => (
          <Grid item xs={2} sm={4} key={item.id}>
            <ExerciseCard name={item.name} />
          </Grid>
        ))}
      </Grid>
    </div>
    // <div>
    //   {exercise.map((item) => (
    //     <ExerciseCard key={item.id} name={item.name} />
    //   ))}
    // </div>
  )
}
