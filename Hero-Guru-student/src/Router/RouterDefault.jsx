import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from '../Pages/LandingPage/LandingPage'
import { LoginPage } from '../Pages/LoginPage/LoginPage'
import { OnboardingPage } from '../Pages/OnboardingPage/OnboardingPage'
import { RegisterPage } from '../Pages/RegisterPage/RegisterPage'
import { SetNewPassword, FormEmail, VerifyEmail } from '../Pages/ForgotPassword/ForgotPassword'

export const RouterDefault = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='signUp' element={<RegisterPage />} />
          <Route path='signIn' element={<LoginPage />} />
          <Route path='onboarding' element={<OnboardingPage />} />
          <Route path='setNewPassword' element={<SetNewPassword />} />
          <Route path='FormEmail' element={<FormEmail />} />
          <Route path='VerifyEmail' element={<VerifyEmail />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
