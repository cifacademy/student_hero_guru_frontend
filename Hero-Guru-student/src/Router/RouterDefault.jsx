import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { LoginPage } from '../Pages/LoginPage/LoginPage'
import { OnboardingPage } from '../Pages/OnboardingPage/OnboardingPage'
import { RegisterPage } from '../Pages/RegisterPage/RegisterPage'

export const RouterDefault = () => {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='signUp' element={<RegisterPage/>}/>
                <Route path='signIn' element={<LoginPage/>}/>
                <Route path='onboarding' element={<OnboardingPage/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  )
}
