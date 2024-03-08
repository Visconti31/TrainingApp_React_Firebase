import React, { useState, useEffect } from 'react'
import ExerciseCard from '../components/ExerciseCard'

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
    <ExerciseCard />
    // <div>
    //   <h2>
    //     <ul>
    //       {exercise.map((item) => (
    //         <li key={item.id}>{item.name}</li>
    //       ))}
    //     </ul>
    //   </h2>
    // </div>
  )
}
