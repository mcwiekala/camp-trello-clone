import { FC } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from './contexts/ThemeContext'
import { Dummy } from './components/dummy'

export const App: FC = () => (
  <ThemeProvider>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Dummy />} />
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
)
