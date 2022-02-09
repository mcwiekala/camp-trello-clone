import { FC, useState, useMemo } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import { ThemeProvider } from './contexts/ThemeContext'
import RandomUser from './logic/randomUser'
import {
  DashboardsContext,
  dashboardsDefaultValue,
  IDashboardsContext
} from './contexts/DashboardsContext'
import RoutesDashboards from './routes/RoutesDashboards'

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
          <Navbar loggedUser={new RandomUser().userData} boardTitle="test" />
          <Routes>
            <Route path="*" element={<div>Some routes</div>} />
          </Routes>
          <RoutesDashboards />
        </BrowserRouter>
      </DashboardsContext.Provider>
    </ThemeProvider>
  )
}
