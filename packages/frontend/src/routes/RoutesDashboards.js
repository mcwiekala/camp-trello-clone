import { Route, Routes } from 'react-router-dom'
import DashboardPage from '../pages/DashboardPage/DashboardPage'

export const routes = {
  dashboards: 'dashboards',
  dashboard: 'dashboard/:id'
}

const RoutesDashboards = () => (
  <Routes>
    <Route path={routes.dashboards} element={<div>dashboards</div>} />
    <Route path={routes.dashboard} element={<DashboardPage />} />
  </Routes>
)
export default RoutesDashboards
