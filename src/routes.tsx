import Home from '@/pages/Home/Home'
import { Route, Routes } from 'react-router-dom'
import Restaurant from './pages/Restaurant'
const RoutesApp = () => (
  <Routes>
    <Route path="/" element={<Restaurant />} />
    <Route path="/restaurant" element={<Home />} />
  </Routes>
)

export default RoutesApp
