import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import './NavbarDefault.css'
import logo from '../../Img/image 46.png'

export const NavbarDefault = () => {
    return (
        <Navbar className='navbardefault'>
            <Container className='mt-3 container_navbarDefault'>
                <div className='componentgroup1_navbardefault'>
                    <img alt='' src={logo} className='me-5' />
                    <Nav className="">
                        <Nav.Link href="#home" className='p-0 me-4 navlink_navbarDefault'>Guru Profesional</Nav.Link>
                        <Nav.Link href="#features" className='p-0 me-4 navlink_navbarDefault'>Berita</Nav.Link>
                        <Nav.Link href="#pricing" className='p-0 me-4 navlink_navbarDefault'>Tentang Kami</Nav.Link>
                        <Nav.Link href="#pricing" className='p-0 me-4 navlink_navbarDefault'>Promo</Nav.Link>
                    </Nav>
                </div>

                <div className='componentgroup2_navbardefault'>
                    <button className='btn_navbarDefault1'>Masuk</button>
                    <button className='btn_navbarDefault2'>Daftar</button>
                </div>
            </Container>
        </Navbar>
    )
}
