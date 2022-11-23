import React from 'react'
import { Col, Row } from 'react-bootstrap'
import bg from '../../Assets/Img/unsplash_X8H8vPcelPk.png'
import logo from '../../Assets/Img/image 34.png'
import "./LoginPage.css"
import GoogleButton from 'react-google-button'

export const LoginPage = () => {
  return (
    <div className='container-fluid m-0 p-0'>
      <Row className='m-0'>
        <Col md={6} className='bg_login p-0 m-0'>
          <img alt='' src={bg} className="bg_login" />
        </Col>

        <Col md={6}>
          <div className='container_content_login'>
            <div className='container_group1_login'>
              <div className='container_img_login'>
                <img alt='' src={logo} />
              </div>
              <div className='text1_login'>
                Selamat Datang Kembali
              </div>
              <div className='text2_login'>
                Masuk ke akun anda
              </div>
            </div>

            <div className='container_group2_login'>
              <input type={'text'} placeholder="Email" className='input_field_login'/>
              <input type={'text'} placeholder="Kata Sandi" className='input_field_login' />
              <div className='remember_me_login'>
                <input type={'checkbox'} className='checkbox_login' />
                <a href='' className='forgot_password_login'>Lupa Kata Sandi?</a>
              </div>
            </div>

            <div className='container_group3_login'>
              <button className='button_create_account_login'>Buat Akun</button>
              <div className='other_method'><span className='divider_login'>Or</span></div>
              <GoogleButton label='Masuk Dengan Google' className='google_button_login' />

              <div className='mt-3 text3_login'>
                Tidak punya akun? <a href=''>Buat Akun!</a>
              </div>
            </div>

          </div>
        </Col>
      </Row>
    </div>
  )
}
