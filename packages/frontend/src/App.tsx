import { FC, useState, useMemo } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from './contexts/ThemeContext'
import {
  DashboardsContext,
  dashboardsDefaultValue,
  IDashboardsContext
} from './contexts/DashboardsContext'
import RoutesDashboards from './routes/RoutesDashboards'
import Auth from './routes/auth'

export const App: FC = () => {
  const [dashboards, setDashboards] = useState(dashboardsDefaultValue)
  const memoizedDashboardsContext = useMemo(
    () => [dashboards, setDashboards],
    [dashboards]
  ) as IDashboardsContext

  return (
    <ThemeProvider>
      <DashboardsContext.Provider value={memoizedDashboardsContext}>
        <BrowserRouter>
          <Auth />
          <RoutesDashboards />
        </BrowserRouter>
      </DashboardsContext.Provider>
    </ThemeProvider>
  )
}
