import {Route, Routes} from 'react-router-dom'
import './App.css'
import Html from './components/Html'
import Layout from './components/Layout'
import { useEffect, useState } from 'react'

function App() {
  const [content, setContent] = useState([])

  const getData = async()=>{
    try{
      const response = await fetch(content)
      const data = await response.json()
      setContent(data)
    }catch{
      console.error("Det har skjedd en feil")
    }
  }

  useEffect(()=>{
    getData()
  },[])

  return (
    <Layout>
      <Routes>
        <Route index element={<Html content={content}/>}/>
        <Route element={<CSS />}/>
        <Route element={<JavaScript />}/>
        <Route element={<React />}/>
        <Route element={<Sanity />}/>
      </Routes>
    </Layout>
  )
}

export default App
