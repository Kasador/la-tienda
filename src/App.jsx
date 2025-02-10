import './App.scss'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/header/Header'
import Nav from './components/navigation/Nav'
import Dashboard from './pages/Dashboard'
import Sales from './pages/Sales'
import Products from './pages/Products'
import Reports from './pages/Reports'
import Users from './pages/Users'
import Settings from './pages/Settings'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <Router>
      <div>
        <Header />
        <Nav />
        <main className='Pages'>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/ventas" element={<Sales />} />
            <Route path="/productos" element={<Products />} />
            <Route path="/reportes" element={<Reports />} />
            <Route path="/usuarios" element={<Users />} />
            <Route path="/configuracion" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
