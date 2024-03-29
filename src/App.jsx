import {Route, Routes} from 'react-router-dom'
import './App.css'
import Html from './components/Home'
import Layout from './components/Layout'
import { useState } from 'react'

function App() {
  const [content, setContent] = useState("hei")

  /*const getData = async()=>{
    try{
      const response = await fetch(content)
      const data = await response.json()
      setContent(data)
    }catch{
      console.error("Det har skjedd en feil")
    }
  }*/

 

  return (
    <Layout category={category}>
      <Routes>
        <Route path=':slug' element={<Home />}/>
        {/*<Route element={<CSS />}/>
        <Route element={<JavaScript />}/>
        <Route element={<React />}/>
        <Route element={<Sanity />}/>*/}
      </Routes>
    </Layout>
  )
}

export default App
