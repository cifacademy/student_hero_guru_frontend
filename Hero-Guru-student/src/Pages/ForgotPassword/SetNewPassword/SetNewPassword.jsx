import React from 'react'
import { Container } from 'react-bootstrap'
import { InputDefault } from '../../../Assets/Components/InputDefault/InputDefault'

export const SetNewPassword = () => {
    return (
        <Container fluid className='container_forgotpassword'>
            <div className='container_content_forgotpassword'>
                <div className='container_img_form_email'>
                    <img alt='' src='/Assets/Img/keycdn (1).png' className='img_forgot_password' />
                </div>
                <h5 className='title_forgot_password'>Periksa Email Anda</h5>

                <div className='container_text_forgot_password'>
                    <p className='text_set_new_password'>
                        Kami telah mengirimkan instruksi pengaturan ulang kata sandi iqbalsquarepants@mail.com
                    </p>
                </div>

                <button className='btn_form_Email'>Buka Aplikasi Email</button>
                <p className='text2_set_new_password'>
                    Tidak menerima email? Periksa filter spam Anda atau  <span />
                    <a href='gmail.com'>
                        kirim ulang intruksi
                    </a>
                </p>
            </div>
        </Container>
    )
}
