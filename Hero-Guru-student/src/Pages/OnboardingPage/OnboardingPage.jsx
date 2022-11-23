import React from 'react'
import { Col, Row } from 'react-bootstrap'
import bg from '../../Assets/Img/unsplash_X8H8vPcelPk.png'
import logo from '../../Assets/Img/image 34.png'
import './OnboardingPage.css'

export const OnboardingPage = () => {
    return (
        <div className='container-fluid m-0 p-0'>
            <Row className='m-0'>
                <Col md={6} className='bg_onboarding p-0 m-0'>
                    <img alt='' src={bg} className="bg_onboarding" />
                </Col>

                <Col md={6}>
                    <div className='container_content_onboarding'>
                        <div className='container_group1_onboarding'>
                            <div className='container_img_onboarding'>
                                <img alt='' src={logo} />
                            </div>
                            <div className='text1_onboarding'>
                                Belajar Mudah dengan Hero Guru!
                            </div>
                            <div className='text2_onboarding'>
                                Bergabunglah sebagai Pengajar, Pelajar atau Orang Tua
                            </div>
                        </div>

                        <div className='container_group2_onboarding'>
                            <button className='btn_onboarding'>Saya Seorang Pengajar</button>
                            <button className='btn_onboarding'>Saya Seorang Pelajar</button>
                            <button className='btn_onboarding'>Saya Seorang Orangtua</button>
                        </div>

                        <div className='container_group3_onboarding'>
                            <button className='button_create_account_onboarding'>Buat Akun</button>
                            <div className='mt-3 text3_onboarding'>
                                Sudah Punya Akun? <a href=''>Masuk!</a>
                            </div>
                        </div>

                    </div>
                </Col>
            </Row>
        </div>
    )
}
