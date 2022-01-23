import { FC } from 'react'
import { MantineProvider } from '@mantine/styles'

export const ThemeProvider: FC = ({ children }) => (
  <MantineProvider
    withNormalizeCSS
    withGlobalStyles
    theme={{
      fontFamily: 'Open Sans',
      colors: {
        gray: [
          '#F2F2F2',
          '#E0E0E0',
          '#BDBDBD',
          '#AFAFAF',
          '#A0A0A0',
          '#919191',
          '#828282',
          '#696969',
          '#4F4F4F',
          '#333333'
        ]
      },
      headings: {
        fontFamily: 'Poppins'
      },
      other: {
        secondaryFont: 'Poppins'
      }
    }}
  >
    {children}
  </MantineProvider>
)
