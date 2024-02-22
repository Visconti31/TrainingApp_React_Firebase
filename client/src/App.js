import axios from 'axios'

const apiCall = () => {
  axios
    .get('http://localhost:5000/api/')
    .then((data) => {
      console.log(data)
    })
    .catch((error) => console.log(error))
}

function App() {
  return (
    <div className="App">
      <h1>React App</h1>

      <button onClick={apiCall}>Api Call</button>
    </div>
  )
}

export default App
