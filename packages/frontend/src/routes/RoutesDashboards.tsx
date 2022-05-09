import { Route, Routes } from 'react-router-dom'
import DashboardPage from '../pages/DashboardPage/DashboardPage'
import DashboardsPage from '../pages/DashboardsPage/DashboardsPage'
import ProtectedRoute from './ProtectedRoute/ProtectedRoute'
import http from '../infrastructure/HttpService/HttpService'

export const routes = {
  dashboards: 'dashboards/',
  dashboard: 'dashboards/:id'
}

const RoutesDashboards = () => {
  const { token } = http.http
  return (
    <Routes>
      <Route
        path={routes.dashboard}
        element={
          <ProtectedRoute token={token}>
            <DashboardPage />
          </ProtectedRoute>
        }
      />
      <Route
        path={routes.dashboards}
        element={
          <ProtectedRoute token={token}>
            <DashboardsPage />
          </ProtectedRoute>
        }
      />
    </Routes>
  )
}

export default RoutesDashboards
