import React, { useContext } from 'react'
import AuthRoutes from './AuthRoutes'
import PublicRoutes from './PublicRoutes'
import AuthContext from '../contexts/auth'

const Router: React.FC = () => {
  const { signed } = useContext(AuthContext)

  return signed ? <AuthRoutes /> : <PublicRoutes />
}

export default Router
