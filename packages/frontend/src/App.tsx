/* eslint-disable react/jsx-wrap-multilines */
import { FC } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from './contexts/ThemeContext'
import MemberCard from './components/MemberCard/MemberCard'

export const App: FC = () => (
  <ThemeProvider>
    <BrowserRouter>
      <Routes>
        <Route
          path="*"
          element={
            <MemberCard
              membersList={[
                { username: 'Morris Croft', id: '1' },
                { username: 'Kuna Hough', id: '2' },
                { username: 'Sierran Salinas', id: '3' },
                {
                  username: 'Hangul Sierra',
                  id: '4',
                  imgUrl:
                    'https://media.istockphoto.com/photos/orange-picture-id185284489?k=20&m=185284489&s=170667a&w=0&h=e8ZoHukToTFk2s0EqVBiZxdCs1EIKNGzT865MKU45Es='
                },
                { username: 'Karagana Still', id: '5' },
                { username: 'Markus Pearson', id: '6' }
              ]}
              // eslint-disable-next-line no-console
              addUserHandler={(e) => console.log(e)}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
)
