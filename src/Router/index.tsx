import React, { useContext, ReactElement } from 'react'
import AuthRoutes from './AuthRoutes'
import PublicRoutes from './PublicRoutes'
import AuthContext from '../contexts/auth'

const Router = (): ReactElement => {
  const { signed } = useContext(AuthContext)

  return signed ? <AuthRoutes /> : <PublicRoutes />
}

export default Router
