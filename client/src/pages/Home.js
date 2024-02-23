import React, { useState, useEffect } from 'react'

export default function Home() {
  const [exercise, setExercise] = useState([])

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:5000/api')
      const jsonData = await response.json()

      // console.log(jsonData[0].name)

      setExercise(jsonData)
    } catch (error) {
      console.log('Error fetching data: ', error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      <h2>
        <ul>
          {exercise.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </h2>
    </div>
  )
}
