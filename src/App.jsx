import { Route, Routes} from 'react-router-dom'
import './App.css'
import Html from './components/HTML'

function App() {

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
