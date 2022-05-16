import {Col, Row} from 'antd';
import './universities.css';
import {Card, CardContent} from "@mui/material";
import CountUp from 'react-countup';
import HorizontalList from "../../components/list/list";
import {Footer} from "antd/es/layout/layout";
import React from "react";


function University() {
   return (
    <>

      <div className="hero-banner-university"/>
      <div className="mini-cards">
        <Row>
          <Col span={4} offset={1}>
            <Card sx={{minWidth: 275}} style={{backgroundColor: "#C0843D"}}>
              <CardContent>
                <h1>Sports Ground</h1>
                <CountUp className="count-up" separator=" " end={100} duration={3}/>
              </CardContent>
            </Card>
          </Col>
          <Col span={4} offset={2}>
            <Card sx={{minWidth: 275}} style={{backgroundColor: "#C0843D"}}>
              <CardContent>
                <h1>Size</h1>
                <CountUp className="count-up" separator=" " end={100} duration={3}/>
              </CardContent>
            </Card>
          </Col>
          <Col span={4} offset={2}>
            <Card sx={{minWidth: 275}} style={{backgroundColor: "#C0843D"}}>
              <CardContent>
                <h1>Students</h1>
                <CountUp className="count-up" separator=" " end={100} duration={3}/>
              </CardContent>
            </Card>
          </Col>
          <Col span={4} offset={2}>
            <Card sx={{minWidth: 275}} style={{backgroundColor: "#C0843D"}}>
              <CardContent>
                <h1>Faculty</h1>
                <CountUp className="count-up" separator=" " end={100} duration={3}/>
              </CardContent>
            </Card>
          </Col>
        </Row>
      </div>
      <div className="information">
        <Row>
          <Col span={13} offset={2}>
            <h1>Comsats University Islamabad</h1>
            <hr className="solid"/>
            <h2>
              lorum ipsumlorum ipsumlorum ipsumlorum ipsumlorum ipsumlorum ipsumlorum ipsumlorum ipsum
              lorum ipsumlorum ipsumlorum ipsumlorum ipsumlorum ipsumlorum ipsumlorum ipsumlorum ipsum
              lorum ipsumlorum ipsumlorum ipsumlorum ipsumlorum ipsumlorum ipsumlorum ipsumlorum ipsum
            </h2>
          </Col>
          <Col span={6} offset={2}>
            <div style={{marginTop: "20%"}}>
              <HorizontalList/>
            </div>
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

export default University;
