import { FC, useState, useMemo } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import { ThemeProvider } from './contexts/ThemeContext'
import RandomUser from './logic/randomUser'
import {
  DashboardsContext,
  dashboardsDefaultValue,
  IDashboardsContext
} from './contexts/DashboardsContext'
import RoutesDashboards from './routes/RoutesDashboards'
import LoginPage from './pages/LoginPage/LoginPage'

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
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/*" element={<Navbar loggedUser={randomUser} boardTitle="Dashboard" />} />
          </Routes>
          <RoutesDashboards />
        </BrowserRouter>
      </DashboardsContext.Provider>
    </ThemeProvider>
  )
}
