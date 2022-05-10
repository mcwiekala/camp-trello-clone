import { type ReactElement, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export type ProtectedRouteProps = {
  token: string
  children: ReactElement
}

const ProtectedRoute = ({ token, children }: ProtectedRouteProps) => {
  const navigate = useNavigate()
  useEffect(() => {
    if (!token) {
      navigate('../login', { replace: true })
    }
  }, [token, navigate])

  return children
}

export default ProtectedRoute
