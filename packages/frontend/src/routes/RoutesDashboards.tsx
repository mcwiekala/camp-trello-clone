import { Route, Routes } from 'react-router-dom'
import DashboardPage from '../pages/DashboardPage/DashboardPage'
import DashboardGalleryPage from '../pages/DashboardGalleryPage/DashboardGalleryPage'
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
          <DashboardGalleryPage />
        </ProtectedRoute>
      }
    />
  </Routes>
)

export default RoutesDashboards
