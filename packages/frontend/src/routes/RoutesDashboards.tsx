import { Route, Routes } from 'react-router-dom'
import DashboardPage from '../pages/DashboardPage/DashboardPage'
import DashboardsPage from '../pages/DashboardsPage/DashboardsPage'

export const routes = {
  dashboards: 'dashboards',
  dashboard: 'dashboards/:id'
}

const RoutesDashboards = () => (
  <Routes>
    <Route path={routes.dashboards} element={<DashboardsPage />} />
    <Route path={routes.dashboard} element={<DashboardPage />} />
  </Routes>
)

export default RoutesDashboards
