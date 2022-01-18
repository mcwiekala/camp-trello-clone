import { FC } from 'react'
import { MantineProvider } from '@mantine/styles'

export const ThemeProvider: FC = ({ children }) => (
  <MantineProvider
    withNormalizeCSS
    withGlobalStyles
    theme={{
      fontFamily: 'Open Sans',
      colors: {
        lightgrey: ['#BDBDBD', '#E0E0E0'],
        darkgrey: ['#333333', '#4F4F4F']
      }
    }}
  >
    {children}
  </MantineProvider>
)
