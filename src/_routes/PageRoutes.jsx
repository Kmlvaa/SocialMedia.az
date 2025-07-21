import { Navigate, Route, Routes } from 'react-router-dom'
import MainLayout from '../_pages/Layout/MainLayout'
import Home from '../_pages/Home'
import AccountLayout from '../_pages/Account/AccountLayout'
import Login from '../_pages/Account/Login'
import Register from '../_pages/Account/Register'
import VerifyCode from '../_pages/Account/VerifyCode'
import UserInfoForm from '../_pages/Account/UserInfoForm'
import { useSelector } from 'react-redux'
import NotFound from '../_pages/NotFound'
import PrivateRoutes from './PrivateRoutes'

export default function PageRoutes() {

  const user = useSelector(state => state.user);

  return (
    <Routes>
      <Route element={<PrivateRoutes />}>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Route>
      <Route path='/account' element={<AccountLayout />}>
        <Route path='/account/login' element={<Login />} />
        <Route path='/account/register' element={<Register />} />
        <Route path='/account/verifyCode' element={!user?.isAuthenticated ? <Navigate to="/account/register" replace />
          : user?.isEmailVerified
            ? <Navigate to="/home" replace />
            : <VerifyCode />} />
        <Route
          path='/account/complete-profile'
          element={
            !user?.isAuthenticated
              ? <Navigate to="/account/login" replace />
              : user?.profileCompleted
                ? <Navigate to="/home" replace />
                : <UserInfoForm />
          }
        />
      </Route>
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}
