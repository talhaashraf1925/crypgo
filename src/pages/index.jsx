import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";   
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import AOS from "aos";
import "aos/dist/aos.css"; 


export default function Home() {
  const cardData = [
    {
      title: "Litecoin LTD/USD",
      price: "$89.71",
      amount: "987$.234",
      icon: "/images/Slider/icon-litecoin.svg",
    },
    {
      title: "Ethereum ETH/USD",
      price: "$1847.23",
      amount: "12,300$.00",
      icon: "/images/Slider/icon-ethereum.svg",
    },
    {
      title: "Ripple XRP/USD",
      price: "$0.63",
      amount: "123,400$.00",
      icon: "/images/Slider/icon-ethereum.svg",
    },
    {
      title: "Cardano ADA/USD",
      price: "$0.29",
      amount: "45,000$.00",
      icon: "/images/Slider/icon-ethereum.svg",
    },
    {
      title: "Solana SOL/USD",
      price: "$24.19",
      amount: "56,700$.00",
      icon: "/images/Slider/icon-ethereum.svg",
    },
  ];
  // Aos Animation
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    });
  }, []);
  return (
    <div>
      {/* Main Layout of website */}
      <main>
        {/* Section 1 Hero Section  */}
        <section className="hero py-5">
          <Container>
            <Row className="gy-3 justify-items-center justify-center">
              <Col lg={6} md={12} sm={12} col={12}>
                <div className="hero-detail" data-aos="fade-right">
                  <div className="d-flex gap-4">
                    <div>
                      <img
                        src="/images/Hero/icon-bag.svg"
                        alt=""
                        className="img-fluid mt-1"
                      />
                    </div>
                    <div>
                      <h3 className="text-white w-100">
                        Crypto On The <span>Go</span>
                      </h3>
                    </div>
                  </div>
                  {/* Title */}
                  <h1 className="text-white">
                    Buy and Sell<br></br> <span>Crypto</span> of<br></br> your{" "}
                    <span>choice</span>!
                  </h1>
                  {/* Buttons */}
                  <div className="gap-4 d-flex">
                    <button className="btn px-5 py-3">Buy Crypto</button>
                    <button className="btn2 px-5 rounded-3">Sell Crypto</button>
                  </div>
                  {/* Socials */}
                  <div className="d-flex gap-4 mt-5">
                    <div>
                      <img
                        src="/images/Hero/playstore.png"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                    <div>
                      <img
                        src="/images/Hero/applestore.png"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={6} md={12} sm={12} col={12}>
                <div class="overflow-hidden mt-2" data-aos="fade-left">
                  <img
                    src="/images/Hero/banner-image.png"
                    alt=""
                    className="d-block img-fluid"
                    style={{ width: "120%", maxWidth: "none" }}
                  />
                </div>{" "}
              </Col>
            </Row>
          </Container>
        </section>
        {/* Sectio 2  Slider Section */}
        <section className="slide py-3">
          <Container>
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={30}
              slidesPerView={4}
              autoplay={{ delay: 3000 }}
              loop
              breakpoints={{
                0: { slidesPerView: 1 },
                576: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                992: { slidesPerView: 4 },
              }}
            >
              {cardData.map((card, index) => (
                <SwiperSlide key={index}>
                  <div
                    className="card p-3 rounded-4"
                    style={{ background: "#191D25" }}
                  >
                    <div className="card-body">
                      <div className="d-flex gap-3">
                        <img src={card.icon} alt="" />
                        <h5 className="text-white mt-2">{card.title}</h5>
                      </div>
                      <div className="d-flex text-white pt-5">
                        <div>
                          <h6>{card.price}</h6>
                        </div>
                        <div className="ms-auto">
                          <span className="text-danger">{card.amount}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </Container>
        </section>
        {/* Sectin 3 Work Section */}
        <section className="work py-5" id="work">
          <Container>
            <Row>
              <Col lg={6} md={12} ms={12} col={6}>
                <div className="work-detail" data-aos="fade-up">
                  <h1>
                    Work with <span>us</span>
                    <br></br>
                    Successfully launch your blockchain project.
                  </h1>
                  <div className="row gy-5 mt-5">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                      <div className="d-flex gap-3">
                        <img
                          src="/images/Work/icon-consulting.svg"
                          alt=""
                          className="bg-dark p-4 rounded-circle"
                        />
                        <h3 className="mt-2">
                          Blockchain<br></br> Consulting
                        </h3>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                      <div className="d-flex gap-3 ms-auto">
                        <img
                          src="/images/Work/icon-blockchain.svg"
                          alt=""
                          className="bg-dark p-4 rounded-circle"
                        />
                        <h3 className="mt-2">
                          Blockchain<br></br> Solution
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex gap-3 mt-5">
                    <img
                      src="/images/Work/icon-Services.svg"
                      alt=""
                      className="bg-dark p-4 rounded-circle"
                    />
                    <h3 className="mt-2">
                      Custom<br></br> Development
                    </h3>
                  </div>
                </div>
              </Col>
              <Col lg={6} md={12} ms={12} col={6}>
                <div
                  className="ms-4 mt-4"
                  style={{ paddingTop: "180px" }}
                  data-aos="fade-down"
                >
                  <img
                    src="/images/Work/img-work-with-us.png"
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        {/* Section 4 Development TimeLine */}
        <section className="Development py-5" id="Development">
          <Container>
            <div
              className="text-center mt-5"
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <h4>
                Development <span>timeline</span>
              </h4>
              <h1>
                We can enter at any point or help you all the<br></br> way
                through the development cycle.
              </h1>
            </div>
            <Row className="text-center mt-4">
              <Col lg={12} md={12}>
                <div className="mt-5" data-aos="zoom-in">
                  <img
                    src="/images/Development/img-timeline.png"
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        {/* Section 5 Platform Section */}
        <section className="Platform py-5">
          <Container>
            <Row>
              <Col lg={12} md={12} sm={12} col={12}>
                <div
                  className="card p-5 rounded-4"
                  style={{ background: "#131923", border: "3px solid #2D373C" }}
                >
                  <div className="card-body text-white d-flex flex-wrap">
                    <div>
                      <h1>
                        Powered by the Cryp
                        <span style={{ color: "#8DCE96" }}>go</span> Platform
                      </h1>
                      <p style={{ fontSize: "20px", color: "#7A8185" }}>
                        Our Product empower people to have safer and more
                        <br></br>trustworthy experience
                      </p>
                    </div>
                    <div className="ms-auto mt-5 me-5">
                      <button
                        className="btn border  text-dark fw-bold"
                        style={{
                          background: "#8DCE96",
                          padding: "15px",
                          paddingLeft: "37px",
                          paddingRight: "37px",
                        }}
                      >
                        Get Started
                      </button>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        {/* Section 6 Portfolio section */}
        <section className="Portfolio py-5" id="Portfolio">
          <Container>
            <Row>
              <Col lg={6} md={12} ms={12} col={6}>
                <div
                  className="mt-3"
                  style={{ paddingTop: "180px" }}
                  data-aos="fade-down"
                >
                  <img
                    src="/images/Portfolio/img-portfolio.png"
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </Col>
               <Col lg={6} md={12} ms={12} col={6}>
                <div className="portfolio-detail" data-aos="fade-up">
                  <h1>
                   Create your crypto portfolio today with Cryp<span>Go</span>!
                  </h1>
                  <p>Coinbase has a variety of features that make it the best<br></br>
                  place to start trading.</p>
                  <div className="row gy-4">
                    <div className="col-lg-12 col-md-6 col-sm-12 col-12">
                      <div className="d-flex gap-3">
                        <img
                          src="/images/Work/icon-consulting.svg"
                          alt=""
                          className="bg-dark p-4 rounded-circle"
                        />
                        <h3 className="mt-4">
                          Manage your portfolio
                        </h3>
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-6 col-sm-12 col-12">
                      <div className="d-flex gap-3 ms-auto">
                        <img
                          src="/images/Work/icon-blockchain.svg"
                          alt=""
                          className="bg-dark p-4 rounded-circle"
                        />
                        <h3 className="mt-4">
                          Vault protection
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex gap-3 mt-4">
                    <img
                      src="/images/Work/icon-Services.svg"
                      alt=""
                      className="bg-dark p-4 rounded-circle"
                    />
                    <h3 className="mt-4">
                      Mobile apps
                    </h3>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        {/* Sectio 8 Upgrade Section */}
        <section className="Upgrade py-5" id="Upgrade">
           <Container>
              <Row className="gy-4">
                 <Col lg={6} md={12} sm={12} col={12}>
                   <div className="upgrade-detail" data-aos="fade-up">
                      <h5><span>Upgrade</span></h5>
                      <h1>Upgrade Your Storage Layer</h1>
                      <p>Get faster, safer, more affordable cloud object storage with no<br></br> centeral point of failure.</p>
                      {/* Features */}
                      <div className="row gy-3 mt-3">
                        <div className="col-lg-6">
                          <div className="d-flex gap-3">
                             <div>
                                <FontAwesomeIcon icon={faCheckCircle} className="text-white mt-2"></FontAwesomeIcon>
                             </div>
                             <div>
                                <h4>100% Secure</h4>
                             </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="d-flex gap-3">
                             <div>
                                <FontAwesomeIcon icon={faCheckCircle} className="text-white mt-2"></FontAwesomeIcon>
                             </div>
                             <div>
                                <h4>A Fraction of the Cost</h4>
                             </div>
                          </div>
                        </div>
                        <div className="col-lg-6 mt-4">
                          <div className="d-flex gap-3">
                             <div>
                                <FontAwesomeIcon icon={faCheckCircle} className="text-white mt-2"></FontAwesomeIcon>
                             </div>
                             <div>
                                <h4>More Durable</h4>
                             </div>
                          </div>
                        </div>
                        <div className="col-lg-6 mt-4">
                          <div className="d-flex gap-3">
                             <div>
                                <FontAwesomeIcon icon={faCheckCircle} className="text-white mt-2"></FontAwesomeIcon>
                             </div>
                             <div>
                                <h4>Easier to Use</h4>
                             </div>
                          </div>
                        </div>
                      </div>
                   </div>
                 </Col>
                 <Col lg={6} md={12} sm={12} col={12}>
                    <div data-aos="fade-down">
                      <img src="/images/Upgrade/img-upgrade.png" alt="" className="img-fluid"/>
                    </div>
                 </Col>
              </Row>
           </Container>
        </section>
        {/* Section 9 Side Crypgo Section */}
        <section className="side-crypgo py-5">
          <Container>
            <div className="text-center mt-5">
               <h3>Always By <span>your side</span></h3>
               <h1>Be the first to use our Cryo<span>go</span>!</h1>
            </div>
            <Row className="mt-5">
               <Col lg={12} md={12} sm={12} col={12}>
                <div
                  className="card p-5 rounded-4 mt-5"
                  style={{ background: "#131923", border: "3px solid #2D373C" }}
                >
                  <div className="card-body text-white">
                     <div className="row text-center">
                        <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                           <div>
                              <img src="/images/Side-crypgo/Capture-1-removebg-preview.png" alt="" />
                              <div className="mt-4">
                                <h4>24/7 Support</h4>
                                <p>Need help? Get your requests solved<br></br>quickly via support team</p>
                              </div>
                           </div>
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                           <div>
                              <img src="/images/Side-crypgo/Capture-2-removebg-preview.png" alt="" />
                              <div className="mt-4">
                                <h4>Community</h4>
                                <p>Join the conversations on our worldwide<br></br>OKEx communities</p>
                              </div>
                           </div>
                        </div>
                         <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                           <div>
                              <img src="/images/Side-crypgo/Capture-3-removebg-preview.png" alt="" />
                              <div className="mt-4">
                                <h4>Academy</h4>
                                <p>Learn blockchain and<br></br>crypto for free.</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </main>
    </div>
  );
}
