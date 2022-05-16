import React from "react";
import {Col, Row} from "antd";
import {Footer} from "antd/es/layout/layout";

function Meeting() {

  return (
    <>
      <div style={{height: 700}}>
        <body>
        <div id="jaas-container"/>
        </body>
      </div>
      <Footer style={{backgroundColor: '#3F0858'}}>
        <div className='footer-site'>
          <Row>
            <Col xs={{span: 20, offset: 2}} lg={{span: 7, offset: 2}}>
              <h1>Trucareer</h1>
              <h2>lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum</h2>
            </Col>
          </Row>
        </div>


      </Footer>
    </>
  );
}

export default Meeting;
