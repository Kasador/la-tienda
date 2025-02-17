import './App.scss'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/header/Header'
import Nav from './components/navigation/Nav'
import Dashboard from './pages/dashboard/Dashboard'
import Sales from './pages/sales/Sales'
import Products from './pages/products/Products'
import Reports from './pages/reports/Reports'
import Users from './pages/users/Users'
import Settings from './pages/settings/Settings'
import Footer from './components/footer/Footer'
import NavBot from './components/navigation/NavBot'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <Router>
      <div>
        <Header />
        <Nav />
        <NavBot />
        <Footer />
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
