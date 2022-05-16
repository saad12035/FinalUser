import {Col, Image, Row} from 'antd';
import './homepage.css';
import React from "react";
import {Footer} from "antd/es/layout/layout";

function Home() {
  return (
    <>
      <df-messenger
        intent="WELCOME"
        chat-title="Counsellor"
        agent-id="d0af3a0b-678f-4e15-8c92-ceb1b0b30f8e"
        language-code="en"
      />
      <div className="hero-banner">
        <Row>
          <Col xs={{span: 20, offset: 2}} md={{span: 15, offset: 4}} lg={{span: 8, offset: 3}}>
            <h1>
              Finding the <span style={{color: '#C0843D'}}>right career</span><br/>is much more easier now !
            </h1>
            <h2>Learn More</h2>
          </Col>
          <Col xs={{span: 26, offset: 0}} md={{span: 16, offset: 4}} lg={{span: 8, offset: 2}}>
            <Image
              className='hero-image'
              preview={false}
              src={require("../../images/ezgif.com-gif-maker.png")}
            />
          </Col>
        </Row>
      </div>
      <div className='promotion'>
        <Row>
          <Col xs={{span: 22, offset: 2}} md={{span: 22, offset: 1}} lg={{span: 12, offset: 6}}>
            <h1>
              Discover your true passion today
            </h1>
          </Col>
          <Col xs={{span: 20, offset: 2}} md={{span: 16, offset: 9}} lg={{span: 10, offset: 10}}>
            <h2>Learn More</h2>
          </Col>

        </Row>
      </div>
      <div className='text-sections'>
        <Row>
          <Col xs={{span: 12, offset: 8}} md={{span: 12, offset: 8}} lg={{span: 0, offset: 0}}>
            <Image
              className='ellipse-image1'
              preview={false}
              src={require("../../images/2.png")}
            />
            <Image
              className='ellipse-image2'
              preview={false}
              src={require("../../images/Ellipse 2.png")}
            />
          </Col>
          <Col xs={{span: 20, offset: 2}} md={{span: 22, offset: 1}} lg={{span: 8, offset: 4}}>
            <h1>
              Career Counselling Bot
            </h1>
            <h2>
              AI based bot which assess your personality and recommend suitable careers and study choices.
            </h2>
          </Col>
          <Col xs={{span: 0, offset: 0}} md={{span: 0, offset: 0}} lg={{span: 8, offset: 4}}>
            <Image
              className='ellipse-image1'
              preview={false}
              src={require("../../images/web-site-tem2.png")}
            />
            <Image
              className='ellipse-image2'
              preview={false}
              src={require("../../images/Ellipse 2.png")}
            />
          </Col>
        </Row>
        <div style={{marginBottom: '10%'}}/>
        <Row>
          <Col xs={{span: 12, offset: 8}} md={{span: 12, offset: 8}} lg={{span: 8, offset: 4}}>
            <Image
              className='ellipse-image1'
              preview={false}
              src={require("../../images/web-site-tem5.jpg")}
            />
            <Image
              className='ellipse-image2'
              preview={false}
              src={require("../../images/Ellipse 2.png")}
            />
          </Col>
          <Col xs={{span: 20, offset: 2}} lg={{span: 8, offset: 1}}>
            <h3>
              Live Session with Counsellors
            </h3>
            <h2>
              Schedule a one-on-one session with specialist career counsellors to discuss your issues and get guidance
            </h2>
          </Col>
        </Row>
        <div style={{marginBottom: '10%'}}/>
        <Row>
          <Col xs={{span: 12, offset: 8}} md={{span: 12, offset: 8}} lg={{span: 0, offset: 0}}>
            <Image
              className='ellipse-image1'
              preview={false}
              src={require("../../images/web-site-tem5.jpg")}
            />
            <Image
              className='ellipse-image2'
              preview={false}
              src={require("../../images/Ellipse 2.png")}
            />
          </Col>
          <Col xs={{span: 20, offset: 2}} md={{span: 22, offset: 1}} lg={{span: 8, offset: 4}}>
            <h1>
              University Recommender
            </h1>
            <h2>
              Get recommendations related to universities based on your career choice, interests, and other factors.
            </h2>
          </Col>
          <Col xs={{span: 0, offset: 0}} md={{span: 0, offset: 0}} lg={{span: 8, offset: 4}}>
            <Image
              className='ellipse-image1'
              preview={false}
              src={require("../../images/web-site-tem2.png")}
            />
            <Image
              className='ellipse-image2'
              preview={false}
              src={require("../../images/Ellipse 2.png")}
            />
          </Col>
        </Row>

      </div>
      <div className='counsellors'>
        <Row>
          <Col xs={{span: 20, offset: 2}} lg={{span: 8, offset: 9}}>
            <h1>
              Meet Our Counsellors
            </h1>
          </Col>
        </Row>
        <Row>
          <Col xs={{span: 20, offset: 2}} md={{span: 0, offset: 0}} lg={{span: 0, offset: 0}}>
            <div className='image-design'>
              <Image
                className='counsellor-image1'
                preview={false}
                src={require("../../images/WhatsApp Image 2021-04-26 at 2.28.30 PM.jpeg")}
              />
            </div>

          </Col>
          <Col xs={{span: 0, offset: 0}} md={{span: 12, offset: 6}} lg={{span: 6, offset: 3}}>
            <div className='image-design'>
              <Image
                className='counsellor-image1'
                preview={false}
                src={require("../../images/15-M.jpg")}
              />
              <Image
                className='counsellor-ellipse'
                preview={false}
                src={require("../../images/Ellipse 11.png")}
              />
            </div>

          </Col>
          <Col xs={{span: 20, offset: 2}} md={{span: 12, offset: 6}} lg={{span: 0, offset: 0}}>
            <div className='counsellor-name'>
              <h1>
                Jahanzaib Khan
              </h1>
              <h2>
                America
              </h2>
            </div>
          </Col>
          <Col xs={{span: 20, offset: 2}} md={{span: 0, offset: 0}} lg={{span: 0, offset: 0}}>
            <div className='image-design'>
              <Image
                className='counsellor-image1'
                preview={false}
                src={require("../../images/WhatsApp Image 2021-04-26 at 2.28.30 PM.jpeg")}
              />
            </div>

          </Col>
          <Col xs={{span: 0, offset: 0}} md={{span: 12, offset: 6}} lg={{span: 6, offset: 1}}>
            <div className='image-design'>
              <Image
                className='counsellor-image1'
                preview={false}
                src={require("../../images/photo-1535713875002-d1d0cf377fde.jpg")}
              />
              <Image
                className='counsellor-ellipse'
                preview={false}
                src={require("../../images/Ellipse 11.png")}
              />
            </div>

          </Col>
          <Col xs={{span: 20, offset: 2}} md={{span: 12, offset: 6}} lg={{span: 0, offset: 0}}>
            <div className='counsellor-name'>
              <h1>
                Jahanzaib Khan
              </h1>
              <h2>
                America
              </h2>
            </div>
          </Col>
          <Col xs={{span: 20, offset: 2}} md={{span: 0, offset: 0}} lg={{span: 0, offset: 0}}>
            <div className='image-design'>
              <Image
                className='counsellor-image1'
                preview={false}
                src={require("../../images/WhatsApp Image 2021-04-26 at 2.28.30 PM.jpeg")}
              />
            </div>

          </Col>
          <Col xs={{span: 0, offset: 0}} md={{span: 12, offset: 6}} lg={{span: 6, offset: 1}}>
            <div className='image-design'>
              <Image
                className='counsellor-image1'
                preview={false}
                src={require("../../images/WhatsApp Image 2021-04-26 at 2.28.30 PM.jpeg")}
              />
              <Image
                className='counsellor-ellipse'
                preview={false}
                src={require("../../images/Ellipse 11.png")}
              />
            </div>

          </Col>
          <Col xs={{span: 20, offset: 2}} md={{span: 12, offset: 6}} lg={{span: 0, offset: 0}}>
            <div className='counsellor-name'>
              <h1>
                Shameer Shahzad
              </h1>
              <h2>
                America
              </h2>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={{span: 0, offset: 0}} md={{span: 0, offset: 0}} lg={{span: 6, offset: 3}}>
            <div className='counsellor-name'>
              <h1>
                Jahanzaib Khan
              </h1>
            </div>
          </Col>
          <Col xs={{span: 0, offset: 0}} md={{span: 0, offset: 0}} lg={{span: 6, offset: 1}}>
            <div className='counsellor-name'>
              <h1>
                Hamza Ahmed
              </h1>
            </div>
          </Col>
          <Col xs={{span: 0, offset: 0}} md={{span: 0, offset: 0}} lg={{span: 6, offset: 1}}>
            <div className='counsellor-name'>
              <h1>
                Saad Ali Ahsan
              </h1>
            </div>
          </Col>
        </Row>
      </div>
      <div className='testimonials'>
        <Row>
          <Col xs={{span: 0, offset: 0}} md={{span: 22, offset: 1}} lg={{span: 16, offset: 5}}>
            <h4>
              What people have say about us ?
            </h4>
          </Col>
        </Row>
        <Row>
          <Col xs={{span: 0, offset: 0}} md={{span: 0, offset: 0}} lg={{span: 6, offset: 2}}>
            <Image
              className='ellipse-testimonials-image'
              preview={false}
              src={require("../../images/Rectangle 7.png")}
            />
            <Image
              className='testimonials-image1'
              preview={false}
              src={require("../../images/15-M.jpg")}
            />

            <h2>Trucareer helped me identify my personality and choose a career accordingly. Highly recommend <br/>this platform.</h2>
            <h1>Hammad Azhar</h1>


          </Col>
          <Col xs={{span: 0, offset: 0}} md={{span: 0, offset: 0}} lg={{span: 6, offset: 2}}>
            <Image
              className='ellipse-testimonials-image'
              preview={false}
              src={require("../../images/Rectangle 7.png")}
            />
            <Image
              className='testimonials-image1'
              preview={false}
              src={require("../../images/photo-1535713875002-d1d0cf377fde.jpg")}
            />

            <h2>I was confused about which <br/> university to choose but got all <br/>the answers from this website.<br/> It is very helpful for us students.</h2>
            <h1>Memona Saleem</h1>



          </Col>
          <Col xs={{span: 0, offset: 0}} md={{span: 0, offset: 0}} lg={{span: 6, offset: 2}}>
            <Image
              className='ellipse-testimonials-image'
              preview={false}
              src={require("../../images/Rectangle 7.png")}
            />
            <Image
              className='testimonials-image1'
              preview={false}
              src={require("../../images/WhatsApp Image 2021-04-26 at 2.28.30 PM.jpeg")}
            />

            <h2>Trucareer provided me with a<br/> platform to access industry <br/>leading counsellors easily at a <br/> very affordable fee. </h2>
            <h1>Naik Zakir</h1>



          </Col>
          <div style={{backgroundColor: "#C0843D", marginBottom: "7%"}}>
            <Col xs={{span: 20, offset: 2}} md={{span: 12, offset: 8}} lg={{span: 0, offset: 0}}>
              <Image
                className='testimonials-image1'
                preview={false}
                src={require("../../images/WhatsApp Image 2021-04-26 at 2.28.30 PM.jpeg")}
              />

              <h2>lorum ipsum lorum ipsum<br/> lorum ipsum lorum ipsum</h2>
              <h1>Saad Ali Ahsan</h1>
              <h3>Student -24</h3>


            </Col>
          </div>
          <div style={{backgroundColor: "#C0843D", marginBottom: "7%"}}>
            <Col xs={{span: 20, offset: 2}} md={{span: 12, offset: 8}} lg={{span: 0, offset: 0}}>

              <Image
                className='testimonials-image1'
                preview={false}
                src={require("../../images/WhatsApp Image 2021-04-26 at 2.28.30 PM.jpeg")}
              />

              <h2>lorum ipsum lorum ipsum<br/> lorum ipsum lorum ipsum</h2>
              <h1>Saad Ali Ahsan</h1>
              <h3>Student -24</h3>


            </Col>
          </div>
          <div style={{backgroundColor: "#C0843D", marginBottom: "7%"}}>
            <Col xs={{span: 20, offset: 2}} md={{span: 12, offset: 8}} lg={{span: 0, offset: 0}}>

              <Image
                className='testimonials-image1'
                preview={false}
                src={require("../../images/WhatsApp Image 2021-04-26 at 2.28.30 PM.jpeg")}
              />

              <h2>lorum ipsum lorum ipsum<br/> lorum ipsum lorum ipsum</h2>
              <h1>Saad Ali Ahsan</h1>
              <h3>Student -24</h3>


            </Col>
          </div>
        </Row>
      </div>
      <div className='statistics'>
        <Row>
          <Col xs={{span: 20, offset: 2}} lg={{span: 16, offset: 5}}>
            <h1>
              Trucareer <span style={{color: '#3F0858'}}>in numbers !</span>
            </h1>
          </Col>
        </Row>
        <div className='statistics-2'>
          <Row>
            <Col xs={{span: 20, offset: 2}} lg={{span: 3, offset: 3}}>
              <h2>
                1,430
              </h2>
              <h3>
                Registered <br/>Students
              </h3>
            </Col>
            <Col xs={{span: 20, offset: 2}} lg={{span: 3, offset: 2}}>
              <h2>
                1,430
              </h2>
              <h3>
                Registered <br/>Students
              </h3>
            </Col>
            <Col xs={{span: 20, offset: 2}} lg={{span: 3, offset: 2}}>
              <h2>
                1,430
              </h2>
              <h3>
                Registered <br/>Students
              </h3>
            </Col>
            <Col xs={{span: 20, offset: 2}} lg={{span: 3, offset: 2}}>
              <h2>
                1,430
              </h2>
              <h3>
                Registered <br/>Students
              </h3>
            </Col>
          </Row>
        </div>


      </div>
      <div className='promotion-2'>
        <Row>
          <Col xs={{span: 20, offset: 2}} md={{span: 22, offset: 1}} lg={{span: 14, offset: 6}}>
            <h1>Your perfect career awaits you</h1>
          </Col>
        </Row>
        <Row>
          <Col xs={{span: 12, offset: 7}} md={{span: 15, offset: 9}} lg={{span: 14, offset: 10}}>
            <h2>Try Now</h2>
          </Col>
        </Row>

      </div>
      <Footer style={{backgroundColor: '#3F0858'}}>
        <div className='footer-site'>
          <Row>
            <Col xs={{span: 20, offset: 2}} lg={{span: 7, offset: 2}}>
              <h1>Trucareer</h1>
              <h2>Providing you the best solution at a single place</h2>
            </Col>
          </Row>
        </div>


      </Footer>
    </>
  );
}

export default Home;
