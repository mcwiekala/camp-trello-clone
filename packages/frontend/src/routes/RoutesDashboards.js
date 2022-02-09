import { Route, Routes } from 'react-router-dom'
import DashboardPage from '../pages/DashboardPage/DashboardPage'

const RoutesDashboards = () => (
  <Routes>
    <Route path="dashboards" element={<div>dashboards</div>} />
    <Route path="dashboard/:id" element={<DashboardPage />} />
  </Routes>
)
export default RoutesDashboards
