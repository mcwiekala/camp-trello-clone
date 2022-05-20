import { Route, Routes } from 'react-router-dom'
import DashboardPage from '../pages/DashboardPage/DashboardPage'
import DashboardsPage from '../pages/DashboardsPage/DashboardsPage'
import ProtectedRoute from './ProtectedRoute/ProtectedRoute'

export const routes = {
  dashboards: 'dashboards/',
  dashboard: 'dashboards/:id'
}

const RoutesDashboards = () => (
  <Routes>
    <Route
      path={routes.dashboard}
      element={
        <ProtectedRoute>
          <DashboardPage />
        </ProtectedRoute>
      }
    />
    <Route
      path={routes.dashboards}
      element={
        <ProtectedRoute>
          <DashboardsPage />
        </ProtectedRoute>
      }
    />
  </Routes>
)

export default RoutesDashboards
