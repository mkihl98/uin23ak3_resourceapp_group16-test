import {Route, Routes} from 'react-router-dom'
import './App.css'
import Html from './components/Html'

function App() {

  return (
    <Layout>
      <Routes>
        <Route index element={<Html />}/>
        <Route element={<CSS />}/>
        <Route element={<JavaScript />}/>
        <Route element={<React />}/>
        <Route element={<Sanity />}/>
      </Routes>
    </Layout>
  )
}

export default App
