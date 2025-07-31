import Home from '@pages/Home'
import { Route, Routes } from 'react-router-dom'
const RoutesApp = () => (
  <Routes>
    <Route path="/" element={<Home />} />
  </Routes>
)

export default RoutesApp
