import React from 'react'
import { Container } from 'react-bootstrap'
import { InputDefault } from '../../../Assets/Components/InputDefault/InputDefault'

export const VerifyEmail = () => {
  return (
    <Container fluid className='container_forgotpassword'>
      <div className='container_content_forgotpassword'>
        <div className='container_img_form_email'>
          <img alt='' src='/Assets/Img/keycdn (2).png' className='img_forgot_password' />
        </div>
        <h5 className='title_forgot_password'>Atur Kata Sandi Baru</h5>

        <div className='container_text_forgot_password'>
          <p className='text_set_new_password'>
            Kata sandi baru Anda harus berbeda dari kata sandi yang digunakan sebelumnya          </p>
        </div>

        <div className='container_form_verify_email'>
          <p className='mb-0'>Kata Sandi</p>
          <InputDefault />
          <p className='text2_verify_email'>Minimal 8 karakter</p>

          <p className='mb-0 mt-4'>Konfirmasi Kata Sandi</p>
          <InputDefault />
        </div>

        <button className='btn_form_Email'>Atur Ulang Kata Sandi</button>
      </div>
    </Container>
  )
}
