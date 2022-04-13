import { FC, useState, useMemo } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import { ThemeProvider } from './contexts/ThemeContext'
import RandomUser from './logic/randomUser'
import {
  DashboardsContext,
  dashboardsDefaultValue,
  IDashboardsContext
} from './contexts/DashboardsContext'
import RoutesDashboards from './routes/RoutesDashboards'
import HttpService from './infrastructure/HttpService/HttpService'

const randomUser = new RandomUser().userData

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
          <Navbar loggedUser={randomUser} boardTitle="test" />
          <RoutesDashboards />
        </BrowserRouter>
      </DashboardsContext.Provider>
    </ThemeProvider>
  )
}
