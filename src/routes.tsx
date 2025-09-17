import Home from '@/pages/Home/Home'
import { Route, Routes } from 'react-router-dom'
import Restaurant from './pages/Restaurant'
const RoutesApp = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/restaurant" element={<Restaurant />} />
  </Routes>
)

export default RoutesApp
