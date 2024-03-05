import './App.css'
import Html from './components/HTML'

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
