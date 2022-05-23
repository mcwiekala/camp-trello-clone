import { FC, useState, useMemo, useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { DashboardDTO } from 'shared'
import { ThemeProvider } from './contexts/ThemeContext'
import { DashboardsContext, IDashboardsContext } from './contexts/DashboardsContext'
import RoutesDashboards from './routes/RoutesDashboards'
import Auth from './routes/auth'
import { AppContext, AppState, IAppContext } from './contexts/AppStateContext'
import httpService from './infrastructure/HttpService/HttpService'

export const App: FC = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [dashboards, setDashboards] = useState<DashboardDTO[]>()
  const [appState, setAppState] = useState({ token: '' })

  const getData = () => {
    httpService.getAllDashboards().then((result: DashboardDTO[]) => {
      setDashboards(result)
      setIsLoading(false)
    })
  }

  useEffect(() => {
    getData()
  }, [])

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
