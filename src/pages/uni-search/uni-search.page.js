import {React, useState} from "react";
import TextField from "@mui/material/TextField";
import {Col, Row} from "antd";
import {useHistory} from "react-router-dom";
import Search from "../../components/search-bar/search";
import './uni-search.css';
import {Footer} from "antd/es/layout/layout";


const UniSearchPage = () => {
  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  return (
    <>
      <div style={{marginTop: "8%"}}/>
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

          <div style={{marginTop: "5%"}}/>
          <Search input={inputText}/>
        </Col>
      </Row>
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
};

export default UniSearchPage;
