import { useEffect, useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProfilePage from './pages/ProfilePage'
function App() {
  const [profiles, setProfiles] = useState([])

  useEffect(() => {
    let fetchData = async () => {
      let response = await fetch("https://jsonplaceholder.typicode.com/users");
      let json = await response.json();
      setProfiles(json);
    }

    fetchData();
  }, [] )
  return (
    <>
      <h1>React Router - with Params</h1>
      <Routes>
        <Route path="/" element={<HomePage profiles={profiles}/>}></Route>
        <Route path="/profile/:id" element={<ProfilePage/>}></Route>
      </Routes>
    </>
  )
}

export default App
