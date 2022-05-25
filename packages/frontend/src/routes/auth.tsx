import { Route, Routes } from 'react-router-dom'
import AuthPage from '../pages/AuthPage/AuthPage'
import Navbar from '../components/Navbar/Navbar'
import RandomUser from '../logic/randomUser'

const randomUser = new RandomUser().userData

export const routes = {
  login: 'login/',
  auth: 'auth/:token'
}

const Auth = () => (
  <Routes>
    <Route path={routes.auth} element={<AuthPage />} />
    <Route path="/*" element={<Navbar username={randomUser} boardTitle="Dashboard" />} />
  </Routes>
)

export default Auth
