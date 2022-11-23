import React from 'react'
import { Col, Row } from 'react-bootstrap'
import bg from '../../Assets/Img/unsplash_X8H8vPcelPk.png'
import logo from '../../Assets/Img/image 34.png'
import "./RegisterPage.css"
import GoogleButton from 'react-google-button'



export const RegisterPage = () => {
    return (
        <div className='container-fluid m-0 p-0'>
            <Row className='m-0'>
                <Col md={6} className='bg_register p-0 m-0'>
                    <img alt='' src={bg} className="bg_register" />
                </Col>

                <Col md={6}>
                    <div className='container_content_register'>
                        <div className='container_group1'>
                            <div className='container_img'>
                                <img alt='' src={logo} />
                            </div>
                            <div className='text1'>
                                Mari Kita Mulai!
                            </div>
                            <div className='text2'>
                                Buat Akun Baru Anda
                            </div>
                        </div>

                        <div className='container_group2'>
                            <input type={'text'} placeholder="Nama Lengkap" className='input_field' />
                            <input type={'text'} placeholder="Nama Pengguna" className='input_field' />
                            <input type={'text'} placeholder="Email" className='input_field' />
                            <input type={'text'} placeholder="Kata Sandi" className='input_field' />
                            <div className='terms_and_agreement'>By creating an account or Continue with Google, you agree to our Terms<br/>and Conditions and Privacy Policy.</div>
                        </div>

                        <div className='container_group3'>
                            <button className='button_create_account'>Buat Akun</button>
                            <div className='other_method'><span className='divider'>Or</span></div>
                        </div>

                        <GoogleButton label='Masuk Dengan Google' className='google_button'/>

                        <div className='mt-3 text3'>
                            Sudah Punya Akun? <a href=''>Masuk</a>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}
