import {Button, Col, Image, Rate, Row, Timeline} from 'antd';
import './counsellors.css';
import {Footer} from "antd/es/layout/layout";
import React from "react";


function CounsellorProfile() {
  return (
    <>
      <div style={{backgroundColor:"white"}}>
        <div className="hero-banner-counsellor">
          <Row>
            <Col span={8} offset={2}>
              <Image
                  className='hero-image-counsellor'
                  preview={false}
                  src={require("../../images/WhatsApp Image 2021-04-26 at 2.28.30 PM.jpeg")}
              />
            </Col>
            <Col span={10} offset={3}>
              <div className="hero-text-counsellor">
                <h1>Saad Ali Ahsan</h1>
                <Rate style={{color: "#ffbb00"}} allowHalf disabled defaultValue={3.5}/>
                <Timeline>
                  <Timeline.Item style={{marginLeft: "0%", marginTop: "5%", color: "white"}}>Create a services site
                    2015-09-01</Timeline.Item>
                  <Timeline.Item style={{marginLeft: "0%", marginTop: "5%", color: "white"}}>Solve initial network
                    problems 2015-09-01</Timeline.Item>
                  <Timeline.Item style={{marginLeft: "0%", marginTop: "5%", color: "white"}}>Technical testing
                    2015-09-01</Timeline.Item>
                  <Timeline.Item style={{marginLeft: "0%", marginTop: "5%", color: "white"}}>Network problems being solved
                    2015-09-01</Timeline.Item>
                </Timeline>
                <Row>
                  <Col span={12}>
                    <Button className="buttons" style={{
                      backgroundColor: "red",
                      color: "wheat",
                      fontSize: "1.3rem",
                      height: "60%",
                      borderColor: "black"
                    }}>Book Appointment</Button>
                  </Col>
                  <Col span={12}>
                    <Button style={{
                      backgroundColor: "red",
                      color: "wheat",
                      fontSize: "1.3rem",
                      height: "60%",
                      borderColor: "black"
                    }}>Share Profile</Button>
                  </Col>
                </Row>

              </div>
              <div style={{marginBottom: "30%"}}/>
            </Col>

          </Row>
        </div>
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

export default CounsellorProfile;
