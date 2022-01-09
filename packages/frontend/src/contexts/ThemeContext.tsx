import { FC } from 'react'
import { MantineProvider } from '@mantine/styles'

export const ThemeProvider: FC = ({ children }) => (
  <MantineProvider withNormalizeCSS withGlobalStyles theme={{ fontFamily: 'Open Sans' }}>
    {children}
  </MantineProvider>
)
