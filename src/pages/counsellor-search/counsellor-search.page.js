import { React, useState } from "react";
import TextField from "@mui/material/TextField";
import {Button, Col, Drawer, Row} from "antd";
import {BarsOutlined} from "@ant-design/icons";
import Layout, {Content, Footer, Header} from "antd/es/layout/layout";
import {useHistory} from "react-router-dom";
import Search1 from "../../components/search-bar-counsellors/search";
import './counsellor-search.css';


const CounsellorSearchPage = () => {
  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  return (
      <div className="main">
        <Layout>
          <Content>
            <div style={{marginTop:"8%"}}/>
            <Row>
              <Col span={16} offset={4}>
                <div className="search">
                  <TextField
                      id="outlined-basic"
                      onChange={inputHandler}
                      variant="outlined"
                      fullWidth
                      label="Search"
                  />
                </div>

                <div style={{marginTop:"5%"}}/>
                <Search1  input={inputText} />
              </Col>
            </Row>
          </Content>
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
        </Layout>

      </div>
  );
};

export default CounsellorSearchPage;