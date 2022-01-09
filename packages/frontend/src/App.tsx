import { FC } from 'react'
import { ThemeProvider } from './contexts/ThemeContext'

export const App: FC = () => (
  <ThemeProvider>
    <div>hello world</div>
  </ThemeProvider>
)
