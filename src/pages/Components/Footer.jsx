import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaFacebook,FaInstagram, FaTwitter } from "react-icons/fa";
import React from 'react';
import { Container,Row,Col } from 'react-bootstrap'

export default function Footer() {
  return (
    <div>
        {/* Footer Detail */}
        <footer className='py-5'>
            <Container>
                <Row className='gy-4 mt-5'>
                    <Col lg={4} md={6} sm={12} col={12}>
                       <div className='ftr-detail text-white mt-5'>
                          <img src="/images/logo.svg" alt="" />
                          <div className='mt-4 d-flex gap-4 ms-2'>
                             <FaFacebook size={30} color="" />
                             <FaInstagram size={30} color="" />
                             <FaTwitter size={30} color="" />
                          </div>
                          <div className='mt-5'>
                            <h2>2025 Copyright | Crygo</h2>
                          </div>
                          <div className='mt-5'>
                             <h4>Made by <span style={{color:"#99e39e"}}>Talha Ashraf</span></h4>
                          </div>
                       </div>
                    </Col>
                    <Col lg={2} md={6} sm={12} col={12}>
                      <div className='mt-5'>
                         <h2>Links</h2>
                         <div style={{lineHeight:"35px"}}>
                            <span>Buy & Sell</span><br></br>
                            <span>Development</span><br></br>
                            <span>Work</span><br></br>
                            <span>Portfolio</span><br></br>
                            <span>Upgrade</span><br></br>
                            <span>Docs</span><br></br>
                         </div>
                      </div>
                    </Col>
                     <Col lg={2} md={6} sm={12} col={12}>
                      <div className='mt-5'>
                         <h2>Information</h2>
                         <div style={{lineHeight:"35px"}}>
                            <span>Terms</span><br></br>
                            <span>Disclosures</span><br></br>
                            <span>Disclosures</span><br></br>
                            <span>Latest News</span><br></br>
                         </div>
                      </div>
                    </Col>
                     <Col lg={4} md={6} sm={12} col={12}>
                      <div className='mt-5'>
                         <h2>Subscribe</h2>
                         <div className='mt-4'>
                           <h5>Subscribe to get the latest <br></br>
                            news form us</h5>
                            <div className='mt-3'>
                                <input type="text" placeholder='Enter a Email' className='form-control w-75 py-3' />
                            </div>
                         </div>
                      </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    </div>
  )
}
