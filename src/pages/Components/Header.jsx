import React, { useState, useEffect } from "react";
import { Container, Navbar, Nav,Offcanvas } from "react-bootstrap";
import Link from "next/link";
import LoginModal from "./LoginModal";
import SignupModal from "./SignupModal";
export default function Header() {
   const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [])
  // Modals
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  return (
    <div>
      <Navbar expand="lg"  className={`navbar pt-5 ${
        scrolled ? "fixed-top bg-black" : ""
      }`}>
        <Container>
          {/* Brand Logo */}
          <Navbar.Brand>
            <Link href="/" className="text-white text-decoration-none">
              <img src="/images/logo.svg" alt="logo" className="img-fluid" />
            </Link>
          </Navbar.Brand>

          {/* Toggle button */}
          <Navbar.Toggle
            aria-controls="offcanvasNavbar"
            className="navbar-toggler-white"
          />
          {/* Offcanvas instead of Collapse */}
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
            className="bg-dark text-white"
          >
            <Offcanvas.Header closeButton closeVariant="white">
              <Offcanvas.Title id="offcanvasNavbarLabel"></Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="mx-auto gap-4">
                <Link href="/" className="nav-link fw-bold">
                  Buy & Sell
                </Link>
                <Link href="#Development" className="nav-link fw-bold">
                  Development
                </Link>
                <Link href="#Work" className="nav-link fw-bold">
                  Work
                </Link>
                <Link href="#Portfolio" className="nav-link fw-bold">
                  Portfolio
                </Link>
                <Link href="#Upgrade" className="nav-link fw-bold">
                  Upgrade
                </Link>
                <Link href="/Docs" className="nav-link fw-bold">
                  Docs
                </Link>
              </Nav>

              {/* Buttons */}
              <div className="registration gap-3 d-flex ms-lg-3 mt-3 mt-lg-0">
                <button className="btn px-4 rounded-3" onClick={() => setShowLogin(true)}>Sign In</button>
                <button className="btn2 px-4 rounded-3 fw-bold" onClick={() => setShowSignup(true)}>Sign Up</button>
              </div>
              <LoginModal show={showLogin} onHide={() => setShowLogin(false)} />
              <SignupModal show={showSignup} onHide={() => setShowSignup(false)} />
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
}
