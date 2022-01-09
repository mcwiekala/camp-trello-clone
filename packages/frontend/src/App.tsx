import { FC } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from './contexts/ThemeContext'

export const App: FC = () => (
  <ThemeProvider>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<div>some route</div>} />
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
)
