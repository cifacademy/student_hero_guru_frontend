import React from 'react'
import { Container } from 'react-bootstrap'
import { InputDefault } from '../../../Assets/Components/InputDefault/InputDefault'
import '../ForgotPassword.css'


export const FormEmail = () => {
    return (
        <Container fluid className='container_forgotpassword'>
            <div className='container_content_forgotpassword'>
                <div className='container_img_form_email'>
                    <img alt='' src='/Assets/Img/keycdn.png' className='img_forgot_password' />
                </div>
                <h5 className='title_forgot_password'>Lupa Kata Sandi?</h5>

                <div className='container_text_forgot_password'>
                    <p className='text_form_email'>
                        Jangan khawatir, kami akan mengirim email dengan instruksi untuk mengatur ulang kata sandi Anda.
                    </p>

                    <p className='text_form_email'>
                        Masukkan email yang terkait dengan akun Anda
                    </p>
                </div>

                <InputDefault placeholder={'Email'}/>

                <button className='btn_form_Email'>Berikutnya</button>
            </div>
        </Container>
    )
}
