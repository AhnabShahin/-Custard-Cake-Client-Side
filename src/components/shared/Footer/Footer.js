import React from 'react';
import './Footer.css';
import { Container, Row, Col } from 'react-bootstrap';
import { HiLocationMarker } from 'react-icons/hi';
import { MdEmail } from 'react-icons/md';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { GiCupcake } from 'react-icons/gi';
import { AiFillClockCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footerSection">
            <Container>
                <hr/>
                <Row className="g-4">
                    <Col md={6} lg={3} className="footerCenter">
                        <h2>Assault Rifles</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae</p>
                        <div className="d-flex align-items-center point text-center">
                            <HiLocationMarker style={{ color: "white", marginRight: "1rem" }} />
                            <span>Jl. Sunset Road No.815, Kuta</span>
                        </div>
                        <div className="d-flex align-items-center point">
                            <MdEmail style={{ color: "white", marginRight: "1rem" }} />
                            <span>support@domain.com</span>
                        </div>
                        <div className="d-flex align-items-center point">
                            <BsFillTelephoneFill style={{ color: "white", marginRight: "1rem" }} />
                            <span>(+62)81 5874 6545</span>
                        </div>
                    </Col>
                    <Col md={6} lg={3} className="footerCenter" >
                        <h4>Quick Links</h4>
                        <div className="d-flex align-items-center point">
                            <GiCupcake style={{ color: "white", marginRight: "1rem" }} />
                            <Link to="/#">About Us</Link>
                        </div>
                        <div className="d-flex align-items-center point">
                            <GiCupcake style={{ color: "white", marginRight: "1rem" }} />
                            <Link to="/#">Services</Link>
                        </div>
                        <div className="d-flex align-items-center point">
                            <GiCupcake style={{ color: "white", marginRight: "1rem" }} />
                            <Link to="/#">Blogs</Link>
                        </div>
                        <div className="d-flex align-items-center point">
                            <GiCupcake style={{ color: "white", marginRight: "1rem" }} />
                            <Link to="/#">Contact US</Link>
                        </div>
                        <div className="d-flex align-items-center point">
                            <GiCupcake style={{ color: "white", marginRight: "1rem" }} />
                            <Link to="/#">Membership</Link>
                        </div>
                    </Col>
                    <Col md={6} lg={3} className="footerCenter" >
                        <h4>Useful Links</h4>
                        <div className="d-flex align-items-center point">
                            <GiCupcake style={{ color: "white", marginRight: "1rem" }} />
                            <Link to="/#">Privaxy Policy</Link>
                        </div>
                        <div className="d-flex align-items-center point">
                            <GiCupcake style={{ color: "white", marginRight: "1rem" }} />
                            <Link to="/#">Terms and Conditions</Link>
                        </div>
                        <div className="d-flex align-items-center point">
                            <GiCupcake style={{ color: "white", marginRight: "1rem" }} />
                            <Link to="/#">Disclaimer</Link>
                        </div>
                        <div className="d-flex align-items-center point">
                            <GiCupcake style={{ color: "white", marginRight: "1rem" }} />
                            <Link to='/#'>Support</Link>
                        </div>
                        <div className="d-flex align-items-center point">
                            <GiCupcake style={{ color: "white", marginRight: "1rem" }} />
                            <Link href>FAQ</Link>
                        </div>
                    </Col>
                    <Col md={6} lg={3} className="footerCenter" >
                        <h2>Working Hours</h2>
                        <div className="d-flex align-items-center point">
                            <AiFillClockCircle style={{ color: "white", marginRight: "1rem" }} />
                            <span>9AM - 5PM, Monday - Saturday</span>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae</p>
                        <button className="main-button">Join With Us</button>
                    </Col>
                </Row>
                <hr/>
                <div className="d-flex justify-content-between">
                    <p>Shooting Range & Gun Club Template Kit</p>
                    <p>Copyright © 2021. All rights reserved.</p>
                </div>
            </Container>
        </div>
    );
};

export default Footer;