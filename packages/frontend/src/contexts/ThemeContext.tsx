import { FC } from 'react'
import { MantineProvider } from '@mantine/styles'

export const ThemeProvider: FC = ({ children }) => (
  <MantineProvider
    withNormalizeCSS
    withGlobalStyles
    theme={{
      fontFamily: 'Open Sans',
      colors: {
        customGray: [
          '#F2F2F2',
          '#E0E0E0',
          '#BDBDBD',
          '#B8B8B8',
          '#B1B1B1',
          '#A9A9A9',
          '#A0A0A0',
          '#979797',
          '#8D8D8D',
          '#828282'
        ]
      }
    }}
  >
    {children}
  </MantineProvider>
)
