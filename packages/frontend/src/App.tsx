import { FC, useState, useMemo, useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from './contexts/ThemeContext'
import {
  DashboardsContext,
  dashboardsDefaultValue,
  IDashboardsContext
} from './contexts/DashboardsContext'
import RoutesDashboards from './routes/RoutesDashboards'
import Auth from './routes/auth'
import { AppContext, AppState, IAppContext } from './contexts/AppStateContext'

export const App: FC = () => {
  const [dashboards, setDashboards] = useState(dashboardsDefaultValue)
  const [appState, setAppState] = useState({ token: '' })

  const memoizedDashboardsContext = useMemo(
    () => [dashboards, setDashboards],
    [dashboards]
  ) as IDashboardsContext

  const updateAppState = (newState: Partial<AppState>) => setAppState({ ...appState, ...newState })

  const memoizedAppContext = useMemo(() => [appState, updateAppState], [appState]) as IAppContext

  return (
    <ThemeProvider>
      <AppContext.Provider value={memoizedAppContext}>
        <DashboardsContext.Provider value={memoizedDashboardsContext}>
          <BrowserRouter>
            <Auth />
            <RoutesDashboards />
          </BrowserRouter>
        </DashboardsContext.Provider>
      </AppContext.Provider>
    </ThemeProvider>
  )
}
