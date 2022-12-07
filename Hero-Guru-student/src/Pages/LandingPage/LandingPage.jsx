import { Component } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { NavbarDefault } from '../../Assets/Components/NavbarDefault/NavbarDefault'
import './LandingPage.css'
import image1 from '../../Assets/Img/Frame 13.png'
import image3 from '../../Assets/Img/interface-user-avatar-happy.png'
import image4 from '../../Assets/Img/interface-user-avatar-4.png'
import image5 from '../../Assets/Img/interface-user-circle-group.png'
import image6 from '../../Assets/Img/bx-check-square.png'
import image7 from '../../Assets/Img/Frame 1962 1.png'
import { CarouselPromo } from '../../Assets/Components/CarouselPromo/CarouselPromo'





class LandingPage extends Component {
    render() {
        return (
            <Container fluid className='p-0'>
                <NavbarDefault />

                <Row className='m-0 container_component_landingPage'>
                    <Col md={6} className=''>
                        <Container className="p-0 container_group1_landingPage">
                            <div className='content_group1_landingPage'>
                                <h2 className='text1_landingPage'>Bingung Belajar Dimana?
                                    Tenang, Ada Hero Guru Siap Membantu!</h2>
                                <h6 className='text2_landingPage'>Hero Guru hadir dengan nuansa belajar yang menyenangkan
                                    tentunya membantu proses belajar mengajar menjadi lebih mudah.</h6>

                                <div className='searchbtn_landingPage'>
                                    <i class="bi bi-search"></i>
                                    <input type={'text'} className="ms-1 inputsearch_landingPage" placeholder='Cari Guru Sesuai Mata Pelajaran...' />
                                </div>

                                <div className='containerCard_landingPage'>
                                    <Card className='card1_landingPage'>
                                        <div className='text3_landingPage'>
                                            30000
                                        </div>


                                        <div className='text4_landingPage'>
                                            User Bergabung
                                        </div>
                                    </Card>
                                    <Card className='card1_landingPage'>
                                        <div className='text3_landingPage'>
                                            20000
                                        </div>


                                        <div className='text4_landingPage'>
                                            Guru Profesional
                                        </div>
                                    </Card>
                                    <Card className='card1_landingPage'>
                                        <div className='text3_landingPage'>
                                            10000
                                        </div>


                                        <div className='text4_landingPage'>
                                            Pertanyaan Terjawab
                                        </div>
                                    </Card>
                                </div>
                            </div>
                        </Container>
                    </Col>
                    <Col md={6} className=''>
                        <Container className='container_group2_landingPage'>
                            <div className='contentImage_landingPage'>
                                <img alt='' src={image1} />
                            </div>
                        </Container>
                    </Col>
                </Row>




                <Container fluid className='containercard_whyus_landingpage'>
                    <div className='text5_landingPage'>
                        Kenapa Memilih Kami ?
                    </div>

                    <Container className='contentcard_whyus_landingpage'>
                        <Card className='cardwhyus_landingpage'>
                            <div className='containerimg_card_landingpage'>
                                <img alt='' src={image3} />
                            </div>
                            <div className='containertextwhyus_landingPage'>
                                <div className='titletextwhyus_landingPage'>
                                    Guru
                                </div>

                                <div>
                                    <ul className='textlistswhyus_landingpage'>
                                        <li>
                                            Mendapatkan engagement yang lebih baik.
                                        </li>
                                        <li>
                                            Mendapat feedback untuk meningkatkan performa mengajar
                                        </li>
                                        <li>
                                            Branding diri sebaik mungkin
                                        </li>
                                        <li>
                                            Transaksi yang transparan
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Card>

                        <Card className='cardwhyus_landingpage'>
                            <div className='containerimg_card_landingpage'>
                                <img alt='' src={image4} />
                            </div>
                            <div className='containertextwhyus_landingPage'>
                                <div className='titletextwhyus_landingPage'>
                                    Pelajar
                                </div>

                                <div>
                                    <ul className='textlistswhyus_landingpage'>
                                        <li>
                                            Kesempatan belajar tatap muka 1 on 1
                                        </li>
                                        <li>
                                            Dibimbing dan diarahkan secara langsung
                                        </li>
                                        <li>
                                            Mendapatkan treatment yang baik.
                                        </li>
                                        <li>
                                            Flexible study time
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Card>

                        <Card className='cardwhyus_landingpage'>
                            <div className='containerimg_card_landingpage'>
                                <img alt='' src={image5} />
                            </div>
                            <div className='containertextwhyus_landingPage'>
                                <div className='titletextwhyus_landingPage'>
                                    Orang Tua
                                </div>

                                <div>
                                    <ul className='textlistswhyus_landingpage'>
                                        <li>
                                            Review pengajar
                                        </li>
                                        <li>
                                            Rating pengajar
                                        </li>
                                        <li>
                                            Memonitor anak belajar
                                        </li>
                                        <li>
                                            Tansparansi transaksi
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Card>
                    </Container>
                </Container>

                <CarouselPromo />

                <Container fluid>
                    <Row>
                        <Col md={6} className='col_section4_landingpage'>
                            <div className='containercontent_section4_landingpage'>
                                <h3 className='title_section4_landingpage'>
                                    Sudah Siap Diajar Dengan Guru Professional Dibidangnya?
                                </h3>

                                <div className='text6_section4_landingpage'>
                                    Hero Guru Memiliki Guru Professional Dibidangnya yang Dapat Membantu Kamu Mendapat Nilai Tertinggi Di Kelas.
                                </div>

                                <div className='checkbox_section4_landingpage'>
                                    <div className='checkboxcontent_section4_landingpage'>
                                        <img alt='' src={image6} />
                                        <div>
                                            Terpercaya
                                        </div>
                                    </div>
                                    <div className='checkboxcontent_section4_landingpage'>
                                        <img alt='' src={image6} />
                                        <div>
                                            Professional
                                        </div>
                                    </div>
                                    <div className='checkboxcontent_section4_landingpage'>
                                        <img alt='' src={image6} />
                                        <div>
                                            Transparan
                                        </div>
                                    </div>
                                </div>

                                <div className='container_btn_Section4_landingpage'>
                                    <button className='btn_section5_landingpage'>Jelajahi Sekarang</button>
                                </div>
                            </div>
                        </Col>

                        <Col md={6}>
                            <div className='containerimg_section4_landingpage'>

                                <img alt='' src={image7} className='image7_section4_landingpage' />
                            </div>

                        </Col>
                    </Row>
                </Container>

                <Container fluid className='container_section5_ladingpage'>
                    <Container className='containercontent_section5_landingpage'>
                        <h5 className='title_section5_landingpage'>
                            Kata Mereka Setelah Menggunakan Hero Guru
                        </h5>


                    </Container>
                </Container>

            </Container>
        )
    }
}

export default LandingPage